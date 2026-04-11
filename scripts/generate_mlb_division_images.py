#!/usr/bin/env python3
from __future__ import annotations

import json
import os
from pathlib import Path
from urllib.request import Request, urlopen

os.environ.setdefault("MPLCONFIGDIR", "/tmp/matplotlib")

import matplotlib.pyplot as plt

YEAR = 2026
OUT_DIR = Path("assets/img/luna-mlb/divisions")

DIVISION_ORDER = [
    (201, "AL East", "al-east"),
    (202, "AL Central", "al-central"),
    (200, "AL West", "al-west"),
    (204, "NL East", "nl-east"),
    (205, "NL Central", "nl-central"),
    (203, "NL West", "nl-west"),
]


def fetch_json(url: str) -> dict:
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(req, timeout=20) as resp:
        return json.loads(resp.read().decode("utf-8"))


def initials_abbr(team_name: str) -> str:
    if not team_name:
        return "N/A"
    return "".join(w[0].upper() for w in team_name.replace(".", "").split() if w)


def render_table_image(rows: list[list[str]], title: str, out_path: Path) -> None:
    columns = ["rank", "abbr", "team", "W", "L", "PCT", "GB", "RS", "RA", "DIFF", "OPS", "ERA"]

    fig, ax = plt.subplots(figsize=(16, 2.75))
    fig.patch.set_facecolor("#050913")
    ax.set_facecolor("#050913")
    ax.axis("off")

    fig.text(0.02, 0.95, title, color="#e5e7eb", fontsize=15, fontweight="bold")

    table = ax.table(
        cellText=rows,
        colLabels=columns,
        cellLoc="left",
        colLoc="left",
        loc="center",
        bbox=[0.0, 0.02, 1.0, 0.88],
    )
    table.auto_set_font_size(False)
    table.set_fontsize(11)

    for (r, c), cell in table.get_celld().items():
        if r == 0:
            cell.set_facecolor("#1a1f2b")
            cell.set_text_props(color="#a7adba", weight="normal")
            cell.set_edgecolor("#2d3545")
            cell.set_linewidth(0.65)
        else:
            cell.set_facecolor("#070d19" if r % 2 == 1 else "#0a1221")
            cell.set_text_props(color="#e5e7eb")
            cell.set_edgecolor("#2a3141")
            cell.set_linewidth(0.55)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(out_path, dpi=160)
    plt.close(fig)


def main() -> None:
    standings = fetch_json(
        f"https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&standingsTypes=regularSeason&season={YEAR}"
    )
    hit = fetch_json(
        f"https://statsapi.mlb.com/api/v1/teams/stats?stats=season&group=hitting&season={YEAR}&sportIds=1"
    )
    pitch = fetch_json(
        f"https://statsapi.mlb.com/api/v1/teams/stats?stats=season&group=pitching&season={YEAR}&sportIds=1"
    )

    hit_map = {}
    for s in (hit.get("stats") or [{}])[0].get("splits", []):
        tid = s.get("team", {}).get("id")
        if tid:
            hit_map[tid] = s.get("stat", {})

    pitch_map = {}
    for s in (pitch.get("stats") or [{}])[0].get("splits", []):
        tid = s.get("team", {}).get("id")
        if tid:
            pitch_map[tid] = s.get("stat", {})

    records = standings.get("records", [])
    by_div_id = {r.get("division", {}).get("id"): r for r in records}

    for div_id, title, slug in DIVISION_ORDER:
        record = by_div_id.get(div_id)
        if not record:
            continue

        teams = sorted(record.get("teamRecords", []), key=lambda t: int(t.get("divisionRank", 99)))
        rows = []
        for t in teams:
            tid = t.get("team", {}).get("id")
            team_name = t.get("team", {}).get("name", "N/A")
            rs = int(t.get("runsScored", 0))
            ra = int(t.get("runsAllowed", 0))
            ops = (hit_map.get(tid, {}) or {}).get("ops", "0.000")
            era = (pitch_map.get(tid, {}) or {}).get("era", "0.00")
            pct = str(t.get("winningPercentage", "0.000")).replace("0.", "0.")
            rows.append(
                [
                    str(t.get("divisionRank", "")),
                    initials_abbr(team_name),
                    team_name,
                    str(t.get("wins", 0)),
                    str(t.get("losses", 0)),
                    str(pct),
                    str(t.get("divisionGamesBack", "-")),
                    str(rs),
                    str(ra),
                    str(rs - ra),
                    str(ops),
                    str(era),
                ]
            )

        render_table_image(rows, title, OUT_DIR / f"{slug}.png")
        print(f"wrote {OUT_DIR / f'{slug}.png'}")


if __name__ == "__main__":
    main()
