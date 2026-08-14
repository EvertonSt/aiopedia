/* AIOPEDIA — category index renderer (works for all 7 catalogs, driven by the page name) */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  function render() {
    var main = document.getElementById("main");
    if (!main) return;

    var page = (location.pathname.split("/").pop() || "concepts.html").replace(".html", "");
    var cat = page;
    var entries = (A[cat] || []).slice();
    var info = A.categoryInfo[cat];
    if (!info) return;

    /* sort: concepts/models/applications/ethics/tools by year, people by year too (birth), companies by year */
    entries.sort(function (a, b) { return (a.year || 0) - (b.year || 0); });

    var state = { q: "", status: "all", sort: "year" };

    function matches(e) {
      if (state.status !== "all" && e.status !== state.status) return false;
      if (state.q) {
        var hay = (e.name + " " + (e.summary || "") + " " + (e.tagline || "") + " " + (e.tags || []).join(" ")).toLowerCase();
        if (hay.indexOf(state.q) === -1) return false;
      }
      return true;
    }

    function sorted(list) {
      var out = list.slice();
      if (state.sort === "year") out.sort(function (a, b) { return (a.year || 0) - (b.year || 0); });
      else if (state.sort === "az") out.sort(function (a, b) { return a.name.localeCompare(b.name); });
      return out;
    }

    function cardFor(e) {
      return (
        '<a class="card entry-card reveal" href="entry.html?id=' + encodeURIComponent(e.id) + '">' +
          '<span class="tag">' + A.escapeHtml(String(e.year || "")) + "</span>" +
          "<h3>" + A.escapeHtml(e.name) + "</h3>" +
          "<p>" + A.escapeHtml(e.summary || "") + "</p>" +
          '<div class="entry-meta"><span>' + (e.status ? A.escapeHtml(e.status) : "") + "</span><span class=\"mono\">&#8594;</span></div>" +
        "</a>"
      );
    }

    function renderList() {
      var grid = document.getElementById("catGrid");
      var count = document.getElementById("catCount");
      var filtered = sorted(entries.filter(matches));
      grid.innerHTML = filtered.map(cardFor).join("");
      if (count) count.textContent = filtered.length + " of " + entries.length + " entries";
      if (A.initRevealAfterRender) A.initRevealAfterRender();
    }

    var hasStatus = entries.some(function (e) { return !!e.status; });
    var statuses = ["core", "historical", "emerging"].filter(function (s) {
      return entries.some(function (e) { return e.status === s; });
    });

    var html = "";
    html += "<section class=\"page-hero\"><div class=\"container\">";
    html += '<div class="breadcrumbs"><a href="index.html">Home</a> / ' + info.label + "</div>";
    html += "<h1>" + info.label + "</h1>";
    html += "<p class=\"sub\">" + info.blurb + "</p>";
    html += "</div></section>";

    html += "<section><div class=\"container\">";
    html += '<div class="toolbar">';
    html += '<input type="search" id="catSearch" placeholder="Filter ' + info.label.toLowerCase() + ' \u2026" />';
    if (hasStatus) {
      html += '<button class="filter-chip on" data-status="all">All</button>';
      statuses.forEach(function (s) {
        html += '<button class="filter-chip" data-status="' + s + '">' + (s.charAt(0).toUpperCase() + s.slice(1)) + "</button>";
      });
    }
    html += '<span class="count" id="catCount"></span>';
    html += "</div>";
    html += '<div class="grid grid-3" id="catGrid"></div>';
    html += "</div></section>";

    main.innerHTML = html;

    var search = document.getElementById("catSearch");
    if (search) search.addEventListener("input", function () { state.q = search.value.trim().toLowerCase(); renderList(); });

    document.querySelectorAll(".filter-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        document.querySelectorAll(".filter-chip").forEach(function (c) { c.classList.remove("on"); });
        chip.classList.add("on");
        state.status = chip.getAttribute("data-status");
        renderList();
      });
    });

    renderList();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
