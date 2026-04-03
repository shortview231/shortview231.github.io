const ACTIVE_SYSTEMS = [
  {
    title: "Luna",
    status: "Primary System",
    statusClass: "status-chip-active",
    summary:
      "The operating layer behind public reporting, publication workflow, and outward-safe portfolio updates.",
    lastUpdated: "April 3, 2026",
    repo: "https://github.com/shortview231"
  },
  {
    title: "Wallet Engine",
    status: "Active Build",
    statusClass: "status-chip-active",
    summary:
      "A money workflow system focused on tracking, reporting, and turning financial activity into cleaner operational visibility.",
    lastUpdated: "April 2026",
    repo: "https://github.com/shortview231"
  },
  {
    title: "Retail Simulator",
    status: "Simulation Track",
    statusClass: "status-chip-warning",
    summary:
      "A system-oriented simulator for testing retail operations, loops, and decision flow in a more structured environment.",
    lastUpdated: "April 2026",
    repo: "https://github.com/shortview231"
  },
  {
    title: "Career Engine",
    status: "Visibility Layer",
    summary:
      "A career-facing system for packaging work, progress, and proof into recruiter-readable public artifacts.",
    lastUpdated: "April 2026",
    repo: "https://github.com/shortview231"
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
    era: "Foundation Systems",
    title: "Finance tracker roots",
    summary:
      "Early reporting builds established the habit of turning raw inputs into visible, repeatable systems instead of isolated analyses."
  },
  {
    era: "Early Experiments",
    title: "Game and interface loops",
    summary:
      "Projects like Five Card Draw forced complete user flow thinking: state, progression, and shipping a coherent loop rather than fragments."
  },
  {
    era: "Learning Systems",
    title: "Analysis and reporting passes",
    summary:
      "Analytical projects became training grounds for clearer structure, artifact quality, and stronger public proof."
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
    const card = el("article", index === 0 ? "card card-wide system-card system-card-primary" : "card system-card");

    const top = el("div", "system-card-top");

    const status = el("span", `status-chip ${system.statusClass || ""}`.trim());
    status.textContent = system.status;
    top.appendChild(status);

    const updated = el("div", "system-updated");
    updated.textContent = `Last updated ${system.lastUpdated}`;
    top.appendChild(updated);
    card.appendChild(top);

    const title = el("h3", "card-title");
    title.textContent = system.title;
    card.appendChild(title);

    const copy = el("p", "card-copy");
    copy.textContent = system.summary;
    card.appendChild(copy);

    const actions = el("div", "cta-row");
    const repo = el("a", "button button-muted");
    repo.href = system.repo;
    repo.textContent = "View Repo";
    repo.target = "_blank";
    repo.rel = "noopener";
    actions.appendChild(repo);

    if (system.title === "Luna") {
      const buildLog = el("a", "button button-primary");
      buildLog.href = "#build-log";
      buildLog.textContent = "See Build Log";
      actions.appendChild(buildLog);
    }

    card.appendChild(actions);
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
    const card = el("article", "timeline-step legacy-card");
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
  if (!postsGrid) {
    return;
  }
  postsGrid.innerHTML = "";

  const card = el("article", "card card-wide post-card post-card-featured");
  const cardTitle = el("h3", "card-title");
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  const cardCopy = el("p", "card-copy");
  cardCopy.textContent = message;
  card.appendChild(cardCopy);

  postsGrid.appendChild(card);
}

function formatPublishedDate(value) {
  const parsed = new Date(`${value}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(parsed);
}

function getSortedPosts(posts, limit) {
  return [...posts]
    .sort((a, b) => {
      const dateDiff = new Date(b.published_at) - new Date(a.published_at);
      if (dateDiff !== 0) {
        return dateDiff;
      }
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    })
    .slice(0, limit);
}

function buildPostCard(post, index, options = {}) {
  const isLead = options.featuredFirst && index === 0;
  const card = el("article", isLead ? "card card-wide post-card post-card-featured" : "card post-card");

  const meta = el("div", isLead ? "meta-row post-meta-row post-meta-row-featured" : "meta-row post-meta-row");

  const dateChip = el("span", isLead ? "chip chip-date chip-date-featured" : "chip chip-date");
  dateChip.textContent = formatPublishedDate(post.published_at);
  meta.appendChild(dateChip);

  if (post.kind) {
    const kindChip = el("span", "chip");
    kindChip.textContent = post.kind;
    meta.appendChild(kindChip);
  }

  if (post.featured || isLead) {
    const featuredChip = el("span", "status-chip status-chip-active");
    featuredChip.textContent = isLead ? "Latest Build" : "Featured";
    meta.appendChild(featuredChip);
  }

  card.appendChild(meta);

  const title = el("h3", "card-title");
  title.textContent = post.title;
  card.appendChild(title);

  const copy = el("p", "card-copy");
  copy.textContent = post.summary;
  card.appendChild(copy);

  if (post.systems && post.systems.length) {
    const systemsLabel = el("div", "fine-label");
    systemsLabel.textContent = "Systems touched";
    card.appendChild(systemsLabel);
  }

  const chips = el("div", "chip-row post-chip-row");
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
    const impact = el("p", "list-copy post-impact");
    impact.textContent = post.impact;
    card.appendChild(impact);
  }

  renderLinks(card, [{ label: isLead ? "Read Post" : "Read Post", href: post.path }]);
  return card;
}

function renderPosts(posts) {
  const postsGrid = byId("posts-grid");
  if (!postsGrid) {
    return;
  }

  if (!Array.isArray(posts) || posts.length === 0) {
    renderPostState(
      "No recent updates yet",
      "The build log is active, but there are no outward-safe updates to show yet."
    );
    return;
  }

  const latestPosts = getSortedPosts(posts, 3);

  postsGrid.innerHTML = "";
  latestPosts.forEach((post, index) => {
    postsGrid.appendChild(buildPostCard(post, index, { featuredFirst: true }));
  });
}

function renderArchivePosts(posts) {
  const archiveGrid = byId("archive-posts-grid");
  if (!archiveGrid) {
    return;
  }

  archiveGrid.innerHTML = "";

  if (!Array.isArray(posts) || posts.length === 0) {
    const empty = el("article", "card card-wide post-card");
    const title = el("h3", "card-title");
    title.textContent = "No recent updates yet";
    empty.appendChild(title);

    const copy = el("p", "card-copy");
    copy.textContent = "New outward-safe build updates will appear here automatically.";
    empty.appendChild(copy);
    archiveGrid.appendChild(empty);
    return;
  }

  getSortedPosts(posts, posts.length).forEach((post, index) => {
    archiveGrid.appendChild(buildPostCard(post, index, { featuredFirst: false }));
  });
}

function getPostsJsonPath() {
  const path = window.location.pathname;
  if (path.endsWith("/posts/") || path.endsWith("/posts/index.html")) {
    return "posts.json";
  }
  return "posts/posts.json";
}

function fetchPostsJson() {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 5000);

  return fetch(getPostsJsonPath(), { signal: controller.signal, cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Posts source returned ${response.status}`);
      }
      return response.json();
    })
    .finally(() => {
      window.clearTimeout(timeoutId);
    });
}

function loadPosts() {
  fetchPostsJson()
    .then(renderPosts)
    .catch(() => {
      renderPostState(
        "No recent updates yet",
        "The build log is available, but the latest exported updates could not be loaded right now."
      );
    });
}

function loadArchivePosts() {
  fetchPostsJson()
    .then(renderArchivePosts)
    .catch(() => {
      renderArchivePosts([]);
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
  loadArchivePosts();
  setCurrentYear();
});
