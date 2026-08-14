/* AIOPEDIA — shared app shell: nav, footer, global search (Ctrl+K / Cmd+K), helpers */
(function () {
  "use strict";

  var AIOPEDIA = window.AIOPEDIA = window.AIOPEDIA || {};

  /* ---------- theme management (dark / light, persisted) ---------- */

  AIOPEDIA.theme = {
    KEY: "aiopedia-theme",
    current: "dark",
    init: function () {
      var saved = null;
      try { saved = localStorage.getItem(AIOPEDIA.theme.KEY); } catch (e) {}
      var pref = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      AIOPEDIA.theme.current = saved === "light" || saved === "dark" ? saved : pref;
      AIOPEDIA.theme.apply(AIOPEDIA.theme.current);
    },
    apply: function (t) {
      AIOPEDIA.theme.current = t === "light" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", AIOPEDIA.theme.current);
      try { localStorage.setItem(AIOPEDIA.theme.KEY, AIOPEDIA.theme.current); } catch (e) {}
      var btn = document.getElementById("themeBtn");
      if (btn) btn.textContent = AIOPEDIA.theme.current === "dark" ? "\u2600" : "\u263E";
      btn && btn.setAttribute("aria-label", AIOPEDIA.theme.current === "dark" ? "Switch to light theme" : "Switch to dark theme");
    },
    toggle: function () {
      AIOPEDIA.theme.apply(AIOPEDIA.theme.current === "dark" ? "light" : "dark");
    }
  };

  /* Random entry — the 'surprise me' button. */
  AIOPEDIA.surprise = function () {
    var all = AIOPEDIA.allEntries();
    if (!all.length) return;
    var pick = all[Math.floor(Math.random() * all.length)];
    location.href = "entry.html?id=" + encodeURIComponent(pick.id);
  };

  /* ---------- data helpers ---------- */

  AIOPEDIA.allEntries = function () {
    var out = [];
    ["concepts", "models", "companies", "people", "applications", "ethics", "tools"].forEach(function (cat) {
      (AIOPEDIA[cat] || []).forEach(function (e) { out.push(e); });
    });
    return out;
  };

  /* Alias/redirect map: common references that resolve to existing entries. */
  var REDIRECTS = {
    "supervised-learning": "machine-learning", "unsupervised-learning": "machine-learning",
    "embedding": "embeddings", "word2vec": "embeddings", "word-embedding": "embeddings",
    "instructgpt": "gpt", "codex": "gpt",
    "lora": "fine-tuning", "model-context-protocol": "agents", "tool-use": "agents", "agent": "agents",
    "mixtral": "mistral", "llama-cpp": "llama", "inference": "large-language-model",
    "kv-cache": "context-window", "gradient-descent": "backpropagation",    "ai-winter": "expert-systems",
    "constitutional-ai": "ai-safety",
    "twitter-x": "xai",
    "gpu": "cuda", "training": "deep-learning", "hardware-ai": "cuda",
    "transformers-library": "hugging-face", "transformers": "transformer",
    "autonomous-vehicles": "autonomous-driving", "turing-test": "artificial-intelligence",
    "bayesian-network": "machine-learning", "mila": "yoshua-bengio", "simulation": "robotics",
    "deep-blue": "alphago", "monte-carlo-tree-search": "alphago",
    "ai-and-security": "prompt-injection", "ai-in-government": "ai-act",
    "keras": "tensorflow", "local-ai": "ollama", "data-science": "python",
    "scikit-learn": "python", "rlhf": "reinforcement-learning-from-human-feedback",
    "amazon": "amazon-ai", "apple-intelligence": "apple-ai", "gguf": "quantization",
    "siri": "speech-recognition", "tesla": "tesla-ai", "watson": "ibm",
    "adept": "ashish-vaswani"
  };

  AIOPEDIA.findEntry = function (id) {
    var target = REDIRECTS[id] || id;
    var found = null;
    AIOPEDIA.allEntries().some(function (e) {
      if (e.id === target) { found = e; return true; }
      return false;
    });
    return found;
  };

  AIOPEDIA.categoryInfo = {
    concepts:     { label: "Concepts",     blurb: "The core ideas and mechanisms of artificial intelligence — from neural networks to scaling laws." },
    models:       { label: "Models",       blurb: "Landmark systems and model families that defined the technology — from the perceptron to GPT-5." },
    companies:    { label: "Companies",    blurb: "The organizations building AI — their origins, strategies and outsize influence on the field." },
    people:       { label: "People",       blurb: "The researchers, engineers and visionaries who created artificial intelligence." },
    applications: { label: "Applications", blurb: "How AI touches the real world — from medicine and finance to games and the arts." },
    ethics:       { label: "Ethics",       blurb: "The moral and governance questions of AI — safety, bias, alignment, regulation and truth." },
    tools:        { label: "Tools",        blurb: "The frameworks, platforms and products that make AI work — PyTorch, ChatGPT, CUDA and more." }
  };

  AIOPEDIA.escapeHtml = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };

  /* Entry-link markup, resolving IDs across catalogs. */
  AIOPEDIA.linkTo = function (id, label) {
    var e = AIOPEDIA.findEntry(id);
    var text = label || (e ? e.name : id);
    return '<a href="entry.html?id=' + encodeURIComponent(id) + '">' + AIOPEDIA.escapeHtml(text) + "</a>";
  };

  AIOPEDIA.tagList = function (tags) {
    return (tags || []).map(function (t) {
      return '<span class="chip gd">' + AIOPEDIA.escapeHtml(t) + "</span>";
    }).join("");
  };

  AIOPEDIA.relatedList = function (related) {
    return (related || []).map(function (r) {
      return "<li>" + AIOPEDIA.linkTo(r) + "</li>";
    }).join("");
  };

  /* ---------- layout: nav + footer ---------- */

  var NAV_ITEMS = [
    { href: "index.html", label: "Home" },
    { href: "concepts.html", label: "Concepts" },
    { href: "models.html", label: "Models" },
    { href: "companies.html", label: "Companies" },
    { href: "people.html", label: "People" },
    { href: "applications.html", label: "Applications" },
    { href: "ethics.html", label: "Ethics" },
    { href: "tools.html", label: "Tools" },
    { href: "compare.html", label: "Compare" },
    { href: "timeline.html", label: "Timeline" },
    { href: "papers.html", label: "Papers" },
    { href: "benchmarks.html", label: "Benchmarks" },
    { href: "glossary.html", label: "Glossary" },
    { href: "browse.html", label: "A\u2013Z Index" },
    { href: "about.html", label: "About" }
  ];

  var current = location.pathname.split("/").pop() || "index.html";

  function buildNav() {
    var header = document.createElement("header");
    header.className = "nav";
    header.innerHTML =
      '<div class="container nav-inner">' +
        '<a class="brand" href="index.html">' +
          '<span class="logo-seal">&#9670;</span>' +
          "<span>AIOPEDIA<small>THE ENCYCLOPEDIA OF ARTIFICIAL INTELLIGENCE</small></span>" +
        "</a>" +
        '<ul class="nav-links" id="navLinks">' +
          NAV_ITEMS.map(function (i) {
            return '<li><a href="' + i.href + '"' + (current === i.href ? ' class="active"' : "") + ">" + i.label + "</a></li>";
          }).join("") +
        "</ul>" +
        '<button class="theme-btn" type="button" id="themeBtn" aria-label="Toggle theme"></button>' +
        '<button class="dice-btn" type="button" id="diceBtn" aria-label="Surprise me" title="Surprise me — a random entry">&#127922;</button>' +
        '<button class="nav-search-btn" type="button" id="navSearchBtn" aria-label="Search"><span>&#128269;</span><kbd>Ctrl K</kbd></button>' +
        '<button class="nav-burger" type="button" id="navBurger" aria-label="Menu">&#9776;</button>' +
      "</div>";
    document.body.insertBefore(header, document.body.firstChild);

    document.getElementById("navBurger").addEventListener("click", function () {
      document.getElementById("navLinks").classList.toggle("open");
    });
    document.getElementById("navSearchBtn").addEventListener("click", function () { AIOPEDIA.openSearch(); });
    /* The theme icon depends on the button existing — refresh it now that the nav is built. */
    AIOPEDIA.theme.apply(AIOPEDIA.theme.current);
    document.getElementById("themeBtn").addEventListener("click", function () { AIOPEDIA.theme.toggle(); });
    document.getElementById("diceBtn").addEventListener("click", function () { AIOPEDIA.surprise(); });
  }

  function buildFooter() {
    var footer = document.createElement("footer");
    var n = AIOPEDIA.allEntries().length;
    var explore = NAV_ITEMS.slice(1, 8).map(function (i) { return "<li><a href='" + i.href + "'>" + i.label + "</a></li>"; }).join("");
    var reference = NAV_ITEMS.slice(8).map(function (i) { return "<li><a href='" + i.href + "'>" + i.label + "</a></li>"; }).join("");
    footer.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          "<div>" +
            '<div class="footer-brand">&#9670; AIOPEDIA</div>' +
            '<p class="footer-note">A local, self-contained reference to the AI world — ' + n +
            ' entries across concepts, models, companies, people, applications, ethics and tools. No accounts, no trackers, no cloud.</p>' +
          "</div>" +
          '<div><h4>Explore</h4><ul>' + explore + "</ul></div>" +
          '<div><h4>Reference</h4><ul>' + reference + "</ul></div>" +
          '<div><h4>Field notes</h4><ul>' +
            '<li><a href="entry.html?id=artificial-intelligence">What is AI?</a></li>' +
            '<li><a href="entry.html?id=agi">Artificial General Intelligence</a></li>' +
            '<li><a href="entry.html?id=deep-learning">Deep learning</a></li>' +
            '<li><a href="entry.html?id=large-language-model">Large language models</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>&#169; 2026 AIOPEDIA — an offline encyclopedia</span>" +
          "<span>" + n + " entries &middot; zero dependencies &middot; built locally</span>" +
        "</div>" +
      "</div>";
    document.body.appendChild(footer);
  }

  /* ---------- global search overlay ---------- */

  function buildSearchOverlay() {
    var overlay = document.createElement("div");
    overlay.className = "search-overlay";
    overlay.innerHTML =
      '<div class="search-panel">' +
        '<input id="searchInput" type="text" placeholder="Search the AI world — ' + AIOPEDIA.allEntries().length +
        ' entries. Try \u201ctransformer\u201d, \u201cHinton\u201d, \u201calignment\u201d" autocomplete="off" spellcheck="false" />' +
        '<div class="search-results" id="searchResults"></div>' +
        '<div class="search-foot"><span>&uarr;&darr; navigate</span><span>&crarr; open</span><span>esc close</span></div>' +
      "</div>";

    var input = overlay.querySelector("#searchInput");
    var results = overlay.querySelector("#searchResults");

    function close() { overlay.classList.remove("open"); }
    function open() {
      overlay.classList.add("open");
      input.value = "";
      results.innerHTML = "";
      setTimeout(function () { input.focus(); }, 30);
    }

    var selected = -1;
    var current = [];

    function render(list) {
      current = list;
      selected = -1;
      if (!list.length) {
        results.innerHTML = '<div class="search-empty">No entries match — try a broader term.</div>';
        return;
      }
      results.innerHTML = "";
      var lastCat = "";
      list.forEach(function (hit, i) {
        if (hit.category !== lastCat) {
          lastCat = hit.category;
          var g = document.createElement("div");
          g.className = "search-group-title";
          g.textContent = AIOPEDIA.categoryInfo[hit.category].label;
          results.appendChild(g);
        }
        var row = document.createElement("div");
        row.className = "search-hit";
        row.setAttribute("data-i", String(i));
        row.innerHTML =
          '<span class="cat">' + AIOPEDIA.categoryInfo[hit.category].label + "</span>" +
          '<span class="name">' + highlight(hit.name, input.value) + "</span>" +
          '<span class="snip">' + AIOPEDIA.escapeHtml(hit.summary || "") + "</span>";
        row.addEventListener("mousemove", function () { select(i); });
        row.addEventListener("click", function () {
          location.href = "entry.html?id=" + encodeURIComponent(hit.id);
        });
        results.appendChild(row);
      });
      select(0);
    }

    function select(i) {
      selected = i;
      var rows = results.querySelectorAll(".search-hit");
      rows.forEach(function (r, j) { r.classList.toggle("sel", j === i); });
      var s = rows[selected];
      if (s && s.scrollIntoView) s.scrollIntoView({ block: "nearest" });
    }

    /* Escape only regex-special characters, char by char — robust against heredoc mangling. */
    var RE_META = ".*+?^${}()|[]\\";
    function escapeRegExp(t) {
      return String(t).split("").map(function (c) {
        return RE_META.indexOf(c) !== -1 ? "\\" + c : c;
      }).join("");
    }

    function highlight(text, q) {
      var esc = AIOPEDIA.escapeHtml(text);
      var t = (q || "").trim();
      if (!t) return esc;
      try {
        var re = new RegExp("(" + escapeRegExp(t) + ")", "ig");
        return esc.replace(re, "<mark>$1</mark>");
      } catch (e) { return esc; }
    }

    function doSearch() {
      var q = input.value.trim().toLowerCase();
      if (q.length < 2) { render([]); return; }
      var hits = AIOPEDIA.allEntries().filter(function (e) {
        var aliases = "";
        Object.keys(REDIRECTS).forEach(function (k) { if (REDIRECTS[k] === e.id) aliases += " " + k; });
        var hay = (e.name + " " + (e.tagline || "") + " " + (e.summary || "") + " " + (e.tags || []).join(" ") + " " + (e.id || "") + aliases).toLowerCase();
        return hay.indexOf(q) !== -1;
      });
      hits.sort(function (a, b) { return rank(a, q) - rank(b, q); });
      render(hits.slice(0, 15));
    }

    function rank(e, q) {
      var score = 0;
      if (e.name.toLowerCase().indexOf(q) === 0) score -= 4;
      else if (e.name.toLowerCase().indexOf(q) !== -1) score -= 2;
      if ((e.id || "").indexOf(q) !== -1) score -= 1;
      if ((e.tags || []).join(" ").toLowerCase().indexOf(q) !== -1) score += 1;
      return score;
    }

    input.addEventListener("input", doSearch);
    input.addEventListener("keydown", function (ev) {
      if (ev.key === "ArrowDown") { ev.preventDefault(); if (current.length) select(Math.min(selected + 1, current.length - 1)); }
      else if (ev.key === "ArrowUp") { ev.preventDefault(); if (current.length) select(Math.max(selected - 1, 0)); }
      else if (ev.key === "Enter") { ev.preventDefault(); if (current[selected]) location.href = "entry.html?id=" + encodeURIComponent(current[selected].id); }
      else if (ev.key === "Escape") { close(); }
    });

    overlay.addEventListener("click", function (ev) { if (ev.target === overlay) close(); });

    document.addEventListener("keydown", function (ev) {
      if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k") { ev.preventDefault(); open(); }
      else if (ev.key === "Escape" && overlay.classList.contains("open")) { close(); }
    });

    document.body.appendChild(overlay);
    AIOPEDIA.openSearch = open;
    AIOPEDIA.closeSearch = close;
  }

  /* ---------- scroll effects: progress bar, nav shadow, reveal, back-to-top ---------- */

  function initScrollFx() {
    var nav = document.querySelector(".nav");
    var bar = document.createElement("div");
    bar.className = "progress-bar";
    document.body.appendChild(bar);
    var topBtn = document.createElement("button");
    topBtn.className = "back-to-top";
    topBtn.setAttribute("aria-label", "Back to top");
    topBtn.innerHTML = "&uarr;";
    topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    document.body.appendChild(topBtn);

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        var h = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
        if (nav) nav.classList.toggle("scrolled", y > 10);
        if (topBtn) topBtn.classList.toggle("show", y > 500);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll(".reveal").forEach(function (n) { io.observe(n); });
  }

  function initCounters() {
    document.querySelectorAll("[data-count]").forEach(function (n) {
      var target = parseInt(n.getAttribute("data-count"), 10) || 0;
      var dur = 1000;
      var t0 = null;
      function step(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        n.textContent = Math.round(target * eased).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- boot ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    AIOPEDIA.theme.init();
    buildNav();
    buildFooter();
    buildSearchOverlay();
    initScrollFx();
    /* Renderers populate #main during DOMContentLoaded — init reveal/counters after them. */
    setTimeout(function () { initReveal(); initCounters(); }, 0);
  });

  /* Re-run reveal/counters after a page renderer replaces #main content. */
  AIOPEDIA.refreshFx = function () {
    initReveal();
    initCounters();
  };
  window.addEventListener("load", AIOPEDIA.refreshFx);
})();
