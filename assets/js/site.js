const ACTIVE_SYSTEMS = [
  {
    title: "Luna Export Workflow",
    status: "Primary system",
    summary:
      "Turns internal work into public-safe portfolio updates with staged review, approval, and publication-ready output.",
    chips: ["Luna", "Export pipeline", "Static publishing"],
    links: [
      { label: "Latest Luna posts", href: "#build-log" },
      { label: "View repo", href: "https://github.com/shortview231" }
    ]
  },
  {
    title: "Finance Tracker Reporting Stack",
    status: "Operational proof",
    summary:
      "Personal finance pipeline connecting source data, Python cleaning, BigQuery storage, and recruiter-visible reporting assets.",
    chips: ["Python", "BigQuery", "Looker Studio"],
    links: [
      { label: "Proof pack", href: "assets/img/finance-tracker/finance_tracker_proof_pack.pdf" },
      {
        label: "Dashboard",
        href: "https://lookerstudio.google.com/reporting/46d94a06-c659-4b94-893c-0161a8a5b752"
      }
    ]
  },
  {
    title: "AI in Education Analysis",
    status: "Research system",
    summary:
      "A reproducible analysis pass combining scraped datasets, reports, and visuals to test claims about AI and learning outcomes.",
    chips: ["Pandas", "EDA", "Reporting"],
    links: [
      { label: "Project repo", href: "https://github.com/shortview231/AI_in_Education" },
      { label: "Analysis PDF", href: "assets/img/ai-edu/final_analysis_report.docx.pdf" }
    ]
  },
  {
    title: "Five Card Draw",
    status: "Foundation build",
    summary:
      "An earlier Python OOP project that shows state flow, interface logic, and the discipline to carry a system through to a usable experience.",
    chips: ["Python", "OOP", "Tkinter"],
    links: [{ label: "Source repo", href: "https://github.com/shortview231/five-card-draw-py" }]
  }
];

const PROOF_ITEMS = [
  {
    title: "Walkthrough video",
    summary: "Short screencast showing how the current public-facing systems are presented.",
    href: "#proof"
  },
  {
    title: "Finance proof pack",
    summary: "PDF evidence showing the reporting stack, dashboards, and pipeline outputs.",
    href: "assets/img/finance-tracker/finance_tracker_proof_pack.pdf"
  },
  {
    title: "Certificate",
    summary: "Google Data Analytics credential kept easy to open and verify.",
    href: "assets/img/profile/Google_Data_Analytics_Certificate.pdf"
  }
];

const LEGACY_ITEMS = [
  {
    era: "Origins",
    title: "Early analytics projects",
    summary:
      "The first projects established the habit of turning raw information into something legible, repeatable, and worth sharing."
  },
  {
    era: "Foundation",
    title: "Finance tracker",
    summary:
      "This is where recurring ingestion, cleaning, and reporting started to behave like an operating system instead of a one-off project."
  },
  {
    era: "Build discipline",
    title: "Five Card Draw",
    summary:
      "A smaller but important system build: state handling, user flow, and shipping a complete loop instead of fragments."
  },
  {
    era: "Lineage",
    title: "Toward Luna",
    summary:
      "Those earlier experiments led directly into workflow tooling, export automation, reporting structure, and public build visibility."
  }
];

function byId(id) {
  return document.getElementById(id);
}

function el(tag, className) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  return node;
}

function renderLinks(container, links) {
  if (!links || links.length === 0) {
    return;
  }

  const row = el("div", "cta-row");
  links.forEach((link) => {
    const anchor = el("a", "button button-muted");
    anchor.href = link.href;
    anchor.textContent = link.label;
    if (/^https?:\/\//.test(link.href) || /\.pdf$/.test(link.href)) {
      anchor.target = "_blank";
      anchor.rel = "noopener";
    }
    row.appendChild(anchor);
  });
  container.appendChild(row);
}

function renderSystems() {
  const grid = byId("systems-grid");
  ACTIVE_SYSTEMS.forEach((system, index) => {
    const card = el("article", index === 0 ? "card card-wide" : "card");
    const meta = el("div", "card-meta");
    meta.textContent = system.status;
    card.appendChild(meta);

    const title = el("h3", "card-title");
    title.textContent = system.title;
    card.appendChild(title);

    const copy = el("p", "card-copy");
    copy.textContent = system.summary;
    card.appendChild(copy);

    const chips = el("div", "chip-row");
    system.chips.forEach((label) => {
      const chip = el("span", "chip");
      chip.textContent = label;
      chips.appendChild(chip);
    });
    card.appendChild(chips);

    renderLinks(card, system.links);
    grid.appendChild(card);
  });
}

function renderProof() {
  const list = byId("proof-list");
  PROOF_ITEMS.forEach((item) => {
    const block = el("article", "proof-item");
    const title = el("h3");
    title.textContent = item.title;
    block.appendChild(title);

    const copy = el("p");
    copy.textContent = item.summary;
    block.appendChild(copy);

    const actions = el("div", "proof-actions");
    const link = el("a", "button button-muted");
    link.href = item.href;
    link.textContent = "Open";
    if (/^https?:\/\//.test(item.href) || /\.pdf$/.test(item.href)) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    actions.appendChild(link);
    block.appendChild(actions);
    list.appendChild(block);
  });
}

function renderLegacy() {
  const timeline = byId("legacy-timeline");
  LEGACY_ITEMS.forEach((item) => {
    const card = el("article", "timeline-step");
    const era = el("span", "timeline-era");
    era.textContent = item.era;
    card.appendChild(era);

    const title = el("h3", "list-title");
    title.textContent = item.title;
    card.appendChild(title);

    const copy = el("p", "timeline-copy");
    copy.textContent = item.summary;
    card.appendChild(copy);

    timeline.appendChild(card);
  });
}

function renderPostState(title, message) {
  const postsGrid = byId("posts-grid");
  postsGrid.innerHTML = "";

  const card = el("article", "card card-wide");
  const cardTitle = el("h3", "card-title");
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  const cardCopy = el("p", "card-copy");
  cardCopy.textContent = message;
  card.appendChild(cardCopy);

  postsGrid.appendChild(card);
}

function renderPosts(posts) {
  const postsGrid = byId("posts-grid");

  if (!Array.isArray(posts) || posts.length === 0) {
    renderPostState(
      "No public build log entries yet",
      "When Luna exports the next outward-safe update, it will appear here automatically."
    );
    return;
  }

  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    .slice(0, 4);

  postsGrid.innerHTML = "";
  latestPosts.forEach((post, index) => {
    const card = el("article", index === 0 ? "card card-wide" : "card");

    const meta = el("div", "meta-row");

    const dateChip = el("span", "chip");
    dateChip.textContent = post.published_at;
    meta.appendChild(dateChip);

    if (post.kind) {
      const kindChip = el("span", "chip");
      kindChip.textContent = post.kind;
      meta.appendChild(kindChip);
    }

    if (post.featured) {
      const featuredChip = el("span", "status-chip status-chip-active");
      featuredChip.textContent = "Featured";
      meta.appendChild(featuredChip);
    }

    card.appendChild(meta);

    const title = el("h3", "card-title");
    title.textContent = post.title;
    card.appendChild(title);

    const copy = el("p", "card-copy");
    copy.textContent = post.summary;
    card.appendChild(copy);

    const chips = el("div", "chip-row");
    (post.systems || []).slice(0, 2).forEach((item) => {
      const chip = el("span", "chip");
      chip.textContent = item;
      chips.appendChild(chip);
    });
    (post.stack || []).slice(0, 2).forEach((item) => {
      const chip = el("span", "chip");
      chip.textContent = item;
      chips.appendChild(chip);
    });
    if (chips.children.length) {
      card.appendChild(chips);
    }

    if (post.impact) {
      const impact = el("p", "list-copy");
      impact.textContent = post.impact;
      card.appendChild(impact);
    }

    renderLinks(card, [{ label: "Read update", href: post.path }]);
    postsGrid.appendChild(card);
  });
}

function loadPosts() {
  fetch("posts/posts.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Posts source returned ${response.status}`);
      }
      return response.json();
    })
    .then(renderPosts)
    .catch(() => {
      renderPostState(
        "Build log temporarily unavailable",
        "The homepage is up, but the exported posts index could not be loaded."
      );
    });
}

function setCurrentYear() {
  const yearNode = byId("current-year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderSystems();
  renderProof();
  renderLegacy();
  loadPosts();
  setCurrentYear();
});
