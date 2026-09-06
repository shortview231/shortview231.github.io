function installPortfolioPolish() {
  if (document.querySelector('link[data-portfolio-polish]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/assets/css/mobile-polish.css?v=20260905-1';
  link.dataset.portfolioPolish = 'true';
  document.head.appendChild(link);
}

installPortfolioPolish();

function byId(id) {
  return document.getElementById(id);
}

function el(tag, className) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function normalizeSiteHref(href) {
  if (!href || /^([a-z]+:)?\/\//i.test(href) || href.startsWith("#") || href.startsWith("/")) {
    return href;
  }
  if (href.startsWith("posts/") || href.startsWith("projects/") || href.startsWith("assets/")) {
    return `/${href}`;
  }
  return href;
}

function formatPublishedDate(value) {
  const parsed = new Date(`${value}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(parsed);
}

function renderLinks(container, links) {
  if (!links || links.length === 0) return;
  const row = el("div", "cta-row");
  links.forEach((link) => {
    const anchor = el("a", "button button-muted");
    anchor.href = normalizeSiteHref(link.href);
    anchor.textContent = link.label;
    if (/^https?:\/\//.test(link.href) || /\.pdf$/.test(link.href)) {
      anchor.target = "_blank";
      anchor.rel = "noopener";
    }
    row.appendChild(anchor);
  });
  container.appendChild(row);
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
    featuredChip.textContent = isLead ? "Latest Note" : "Featured";
    meta.appendChild(featuredChip);
  }
  card.appendChild(meta);

  const title = el("h3", "card-title");
  title.textContent = post.title;
  card.appendChild(title);

  const copy = el("p", "card-copy");
  copy.textContent = post.summary;
  card.appendChild(copy);

  const chips = el("div", "chip-row post-chip-row");
  [...(post.topics || []), ...(post.stack || [])].slice(0, 4).forEach((item) => {
    const chip = el("span", "chip");
    chip.textContent = item;
    chips.appendChild(chip);
  });
  if (chips.children.length) card.appendChild(chips);

  if (post.impact) {
    const impact = el("p", "list-copy post-impact");
    impact.textContent = post.impact;
    card.appendChild(impact);
  }

  renderLinks(card, [{ label: "Read Note", href: post.path }]);
  return card;
}

function sortedPosts(posts, limit) {
  return [...posts]
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    .slice(0, limit);
}

function renderPostState(container, title, message) {
  container.innerHTML = "";
  const card = el("article", "card card-wide post-card");
  const heading = el("h3", "card-title");
  heading.textContent = title;
  const copy = el("p", "card-copy");
  copy.textContent = message;
  card.appendChild(heading);
  card.appendChild(copy);
  container.appendChild(card);
}

function renderPosts(posts) {
  const grid = byId("posts-grid");
  if (!grid) return;
  if (!Array.isArray(posts) || posts.length === 0) {
    renderPostState(grid, "No notes yet", "Technical notes will appear here as public project work is documented.");
    return;
  }
  grid.innerHTML = "";
  sortedPosts(posts, 2).forEach((post, index) => grid.appendChild(buildPostCard(post, index, { featuredFirst: true })));
}

function renderArchivePosts(posts) {
  const grid = byId("archive-posts-grid");
  if (!grid) return;
  if (!Array.isArray(posts) || posts.length === 0) {
    renderPostState(grid, "No notes yet", "Technical notes will appear here as public project work is documented.");
    return;
  }
  grid.innerHTML = "";
  sortedPosts(posts, posts.length).forEach((post, index) => grid.appendChild(buildPostCard(post, index)));
}

async function loadPosts() {
  try {
    const response = await fetch("/posts/posts.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const posts = await response.json();
    renderPosts(posts);
    renderArchivePosts(posts);
  } catch (error) {
    const homeGrid = byId("posts-grid");
    const archiveGrid = byId("archive-posts-grid");
    if (homeGrid) renderPostState(homeGrid, "Journal temporarily unavailable", "The portfolio projects and resume remain available from the navigation above.");
    if (archiveGrid) renderPostState(archiveGrid, "Journal temporarily unavailable", "Please return to the portfolio for project and resume links.");
  }
}

loadPosts();
