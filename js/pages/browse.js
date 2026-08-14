/* AIOPEDIA — A–Z index renderer: every entry, alphabetical, with category tags and jump-to-letter nav */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  /* Category -> chip colour, so each tag is recognisable at a glance. */
  var CHIP = {
    concepts: "gd", models: "cy", companies: "vi", people: "gn",
    applications: "am", ethics: "rd", tools: "cy"
  };

  function letterOf(name) {
    var m = /^[a-zA-Z]/.exec(name);
    return m ? m[0].toUpperCase() : "#";
  }

  function render() {
    var main = document.getElementById("main");
    if (!main) return;

    var all = A.allEntries().slice().sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    var html = "";
    html += '<section class="page-hero"><div class="container">';
    html += '<div class="breadcrumbs"><a href="index.html">Home</a> / A\u2013Z Index</div>';
    html += "<h1>A\u2013Z Index</h1>";
    html += '<p class="sub">Every one of the ' + all.length + " entries, alphabetical \u2014 concepts, models, companies, people, applications, ethics and tools in a single scrollable index. Click any row to open its article.</p>";
    html += "</div></section>";

    html += '<section><div class="container">';
    html += '<div class="toolbar"><input type="search" id="idxSearch" placeholder="Filter all ' + all.length + " entries \u2026\" /><span class=\"count\" id=\"idxCount\"></span></div>";
    html += '<div class="gloss-nav" id="idxNav"></div>';
    html += '<div id="idxBody"></div>';
    html += "</div></section>";

    main.innerHTML = html;

    var nav = document.getElementById("idxNav");
    var body = document.getElementById("idxBody");
    var count = document.getElementById("idxCount");

    /* Jump-to-letter bar \u2014 dim letters with no entries. */
    var present = {};
    all.forEach(function (e) { present[letterOf(e.name)] = true; });
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("").forEach(function (l) {
      var a = document.createElement("a");
      a.href = "#idx-" + l;
      a.textContent = l;
      if (!present[l]) { a.style.opacity = "0.3"; a.style.pointerEvents = "none"; a.setAttribute("aria-disabled", "true"); }
      nav.appendChild(a);
    });

    function rowFor(e) {
      var row = document.createElement("a");
      row.className = "gloss-term idx-term reveal";
      row.href = "entry.html?id=" + encodeURIComponent(e.id);
      row.innerHTML =
        '<span class="idx-name"><h3>' + A.escapeHtml(e.name) + "</h3></span>" +
        '<span class="idx-meta">' +
          '<span class="chip ' + (CHIP[e.category] || "") + '">' + A.categoryInfo[e.category].label + "</span>" +
          (e.year ? '<span class="idx-year">' + A.escapeHtml(String(e.year)) + "</span>" : "") +
        "</span>";
      return row;
    }

    function renderIndex(q) {
      q = (q || "").trim().toLowerCase();
      var list = all.filter(function (e) {
        if (!q) return true;
        var hay = (e.name + " " + (e.tagline || "") + " " + (e.summary || "") + " " + (e.tags || []).join(" ") + " " + (e.year || "") + " " + A.categoryInfo[e.category].label).toLowerCase();
        return hay.indexOf(q) !== -1;
      });
      count.textContent = list.length + " of " + all.length + " entries";
      body.innerHTML = "";
      var last = "";
      list.forEach(function (e) {
        var l = letterOf(e.name);
        if (l !== last) {
          last = l;
          var h = document.createElement("div");
          h.className = "gloss-letter";
          h.id = "idx-" + l;
          h.textContent = l;
          body.appendChild(h);
        }
        body.appendChild(rowFor(e));
      });
      if (!list.length) body.innerHTML = '<div class="search-empty">No entries match \u2014 try a broader term.</div>';
    }

    document.getElementById("idxSearch").addEventListener("input", function (e) { renderIndex(e.target.value); });
    renderIndex("");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
