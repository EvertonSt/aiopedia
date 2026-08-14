/* AIOPEDIA — universal entry page renderer */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  /* Approximate reading time from body text. */
  function readingTime(e) {
    var words = 0;
    (e.body || []).forEach(function (p) { words += String(p).split(/\s+/).filter(Boolean).length; });
    return Math.max(1, Math.round(words / 200));
  }

  function bodyHtml(e) {
    var paras = (e.body || []).map(function (p) {
      return "<p>" + A.escapeHtml(p) + "</p>";
    }).join("");
    return paras || "<p>No body text yet.</p>";
  }

  function facts(e) {
    var sp = A.specs && A.specs[e.id];
    var cells = [];
    cells.push({ k: "Category", v: A.categoryInfo[e.category].label });
    if (e.year) {
      cells.push({ k: e.category === "people" ? "Born" : "Year", v: String(e.year) });
    }
    if (e.status) cells.push({ k: "Standing", v: e.status });
    if (sp && sp.arch) cells.push({ k: "Architecture", v: sp.arch });
    else if (e.architecture) cells.push({ k: "Architecture", v: e.architecture });
    if (sp && sp.parameters) cells.push({ k: "Parameters", v: sp.parameters });
    else if (e.parameters) cells.push({ k: "Parameters", v: e.parameters });
    if (sp && sp.developer) cells.push({ k: "Developer", v: sp.developer });
    else if (e.developer) cells.push({ k: "Developer", v: e.developer });
    if (sp && sp.released) cells.push({ k: "Released", v: String(sp.released) });
    else if (e.released) cells.push({ k: "Released", v: e.released });
    if (sp && sp.context) cells.push({ k: "Context window", v: sp.context });
    else if (e.context) cells.push({ k: "Context window", v: e.context });
    if (sp && sp.modality) cells.push({ k: "Modality", v: sp.modality });
    else if (e.modality) cells.push({ k: "Modality", v: e.modality });
    if (sp && sp.license) cells.push({ k: "License", v: sp.license });
    else if (e.license) cells.push({ k: "License", v: e.license });
    if (sp && sp.open != null) cells.push({ k: "Open weights", v: sp.open ? "Yes" : "No" });
    if (e.headquarters) cells.push({ k: "Headquarters", v: e.headquarters });
    if (e.founded) cells.push({ k: "Founded", v: e.founded });
    return cells.map(function (c) {
      return '<div class="fact"><div class="k">' + c.k + '</div><div class="v">' + A.escapeHtml(c.v) + "</div></div>";
    }).join("");
  }

  /* Entries (across catalogs) that point at this one — the backlinks. */
  function backlinksOf(e) {
    var out = [];
    A.allEntries().forEach(function (x) {
      if (x === e) return;
      if ((x.related || []).indexOf(e.id) !== -1) out.push(x);
    });
    return out;
  }

  /* Entries with the same id in a different catalog (e.g. ChatGPT: model + tool). */
  function duplicatesOf(e) {
    var out = [];
    A.allEntries().forEach(function (x) {
      if (x !== e && x.id === e.id) out.push(x);
    });
    return out;
  }

  /*
   * Connections knowledge graph — the current entry at the centre,
   * related + backlinked entries arranged radially, drawn as inline SVG.
   */
  function connectionsSvg(e) {
    var neighbors = [];
    var seen = {};
    (e.related || []).forEach(function (id) {
      var r = A.findEntry(id);
      if (r && r !== e && !seen[r.id]) { seen[r.id] = true; neighbors.push({ entry: r, back: false }); }
    });
    backlinksOf(e).forEach(function (b) {
      if (!seen[b.id]) { seen[b.id] = true; neighbors.push({ entry: b, back: true }); }
    });
    neighbors = neighbors.slice(0, 12);
    if (!neighbors.length) return "";

    var W = 300, H = 190, CX = 150, CY = 92, R = 70;
    var parts = ['<div class="graph-box">', '<svg class="graph-svg" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Connections web for ' + A.escapeHtml(e.name) + '">'];
    /* links */
    neighbors.forEach(function (n, i) {
      var a = (2 * Math.PI * i) / neighbors.length - Math.PI / 2;
      var x = CX + R * Math.cos(a), y = CY + R * Math.sin(a);
      parts.push('<line class="g-link" x1="' + CX + '" y1="' + CY + '" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" />');
    });
    /* neighbour nodes */
    neighbors.forEach(function (n, i) {
      var a = (2 * Math.PI * i) / neighbors.length - Math.PI / 2;
      var x = CX + R * Math.cos(a), y = CY + R * Math.sin(a);
      var cat = A.categoryInfo[n.entry.category].label;
      var fill = n.back ? "var(--cyan)" : "var(--gold)";
      var label = n.entry.name.length > 20 ? n.entry.name.slice(0, 19) + "\\u2026" : n.entry.name;
      parts.push(
        '<g class="g-node" data-id="' + A.escapeHtml(n.entry.id) + '">' +
        '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="6" fill="' + fill + '" stroke="var(--bg)" stroke-width="1.5" />' +
        '<text class="g-label" x="' + x.toFixed(1) + '" y="' + (y - 10).toFixed(1) + '" text-anchor="middle">' + A.escapeHtml(label) + "</text>" +
        '<title>' + A.escapeHtml(n.entry.name) + " \\u2014 " + A.escapeHtml(cat) + "</title>" +
        "</g>"
      );
    });
    /* centre node */
    parts.push(
      '<g class="g-node g-center" data-id="' + A.escapeHtml(e.id) + '">' +
      '<circle cx="' + CX + '" cy="' + CY + '" r="11" fill="var(--violet)" stroke="var(--gold)" stroke-width="2.5" />' +
      '<text class="g-label" x="' + CX + '" y="' + (CY + 26) + '" text-anchor="middle" font-weight="bold">' + A.escapeHtml(e.name.length > 22 ? e.name.slice(0, 21) + "\\u2026" : e.name) + "</text>" +
      "</g>"
    );
    parts.push("</svg>");
    parts.push('<div class="g-legend"><span><span class="dot" style="background:var(--gold)"></span>related entry</span><span><span class="dot" style="background:var(--cyan)"></span>points back here</span></div>');
    parts.push("</div>");
    return parts.join("");
  }

  function render() {
    var main = document.getElementById("main");
    if (!main) return;
    var id = new URLSearchParams(location.search).get("id") || "";
    var e = A.findEntry(id);

    if (!e) {
      document.title = "Not found — AIOPEDIA";
      main.innerHTML =
        '<section class="page-hero"><div class="container">' +
          '<div class="breadcrumbs"><a href="index.html">Home</a></div>' +
          '<h1>Entry not found</h1>' +
        "</div></section>" +
        '<section><div class="container not-found">' +
          '<p>No entry with id <code>' + A.escapeHtml(id) + "</code>. Try the global search (Ctrl+K) or return home.</p>" +
          '<a class="btn btn-primary" href="index.html">Back to home</a>' +
        "</div></section>";
      return;
    }

    document.title = e.name + " — AIOPEDIA";

    var same = A.allEntries();
    var idx = same.indexOf(e);
    var prev = same[(idx - 1 + same.length) % same.length];
    var next = same[(idx + 1) % same.length];
    var related = (e.related || []).map(function (r) {
      var re = A.findEntry(r);
      if (!re) return null;
      return "<li>" + A.linkTo(r) + "</li>";
    }).filter(Boolean).join("");
    var back = backlinksOf(e);
    var dup = duplicatesOf(e);

    var html = "";
    html += '<section class="page-hero"><div class="container">';
    html += '<div class="breadcrumbs"><a href="index.html">Home</a> / <a href="' + e.category + '.html">' + A.categoryInfo[e.category].label + "</a></div>";
    html += '<div class="entry-title">' + A.escapeHtml(e.name) + "</div>";
    html += '<div class="entry-tagline">' + A.escapeHtml(e.tagline || "") + "</div>";
    html += '<div class="entry-meta-line"><span>' + (e.status ? A.escapeHtml(e.status) : A.categoryInfo[e.category].label) + "</span><span>&#8764; " + readingTime(e) + " min read</span><span>" + (same.length) + " entries indexed</span></div>";
    html += "</div></section>";

    html += '<section><div class="container entry-layout">';
    html += '<article class="entry-article">';
    html += bodyHtml(e);

    html += "<h2>Facts</h2>";
    html += '<div class="entry-facts">' + facts(e) + "</div>";

    if (e.tags && e.tags.length) {
      html += "<h3>Tags</h3>";
      html += "<div>" + A.tagList(e.tags) + "</div>";
    }

    if (e.sources && e.sources.length) {
      html += "<h3>Sources &amp; further reading</h3>";
      html += "<ul>";
      e.sources.forEach(function (s) { html += "<li>" + A.escapeHtml(s) + "</li>"; });
      html += "</ul>";
    }
    html += "</article>";

    /* Sidebar */
    html += '<aside class="entry-side">';
    if (related) {
      html += '<div class="side-box"><h4>Related</h4><ul>' + related + "</ul></div>";
    }
    if (back.length) {
      html += '<div class="side-box"><h4>Referenced by</h4><ul>' +
        back.slice(0, 8).map(function (b) { return "<li>" + A.linkTo(b.id) + "</li>"; }).join("") +
        "</ul></div>";
    }
    html += '<div class="side-box"><h4>Browse</h4><ul>';
    html += '<li><a href="' + e.category + '.html">All ' + A.categoryInfo[e.category].label.toLowerCase() + "</a></li>";
    html += '<li><a href="glossary.html">Glossary</a></li>';
    html += '<li><a href="browse.html">A\u2013Z index</a></li>';
    html += '<li><a href="timeline.html">Timeline</a></li>';
    html += '<li><a href="compare.html">Compare models</a></li>';
    html += "</ul></div>";
    html += "</aside>";
    html += "</div></section>";

    /* Connections graph + cross-category note */
    var svg = connectionsSvg(e);
    html += '<section><div class="container">';
    html += '<div class="section-head reveal"><span class="num">WEB</span><h2>Connections</h2></div>';
    if (svg) {
      html += '<div class="grid grid-2">';
      html += "<div>" + svg + "</div>";
      html += "<div>";
      html += "<p class=\"lead\" style=\"margin:0 0 0.6rem\">Related and backlinked entries — the web this entry lives in. Click a node to jump.</p>";
      if (dup.length) {
        html += '<div class="callout callout-info"><span class="ico">&#9432;</span><div><strong>Also appears in:</strong> ';
        html += dup.map(function (d) { return A.linkTo(d.id, A.categoryInfo[d.category].label); }).join(", ");
        html += ".</div></div>";
      }
      html += "</div>";
      html += "</div>";
    } else {
      html += '<div class="callout callout-info"><span class="ico">&#9432;</span><div>This entry has no mapped connections yet — the Related panel in the sidebar still links to nearby entries.</div></div>';
      if (dup.length) {
        html += '<div class="callout callout-info"><span class="ico">&#9432;</span><div><strong>Also appears in:</strong> ';
        html += dup.map(function (d) { return A.linkTo(d.id, A.categoryInfo[d.category].label); }).join(", ");
        html += ".</div></div>";
      }
    }
    html += "</div></section>";

    /* Prev / next */
    html += '<section><div class="container">';
    html += '<div class="entry-nav">';
    html += '<a class="prev" href="entry.html?id=' + encodeURIComponent(prev.id) + '"><div class="dir">Previous</div><div class="name">' + A.escapeHtml(prev.name) + "</div></a>";
    html += '<a class="next" href="entry.html?id=' + encodeURIComponent(next.id) + '"><div class="dir">Next</div><div class="name">' + A.escapeHtml(next.name) + "</div></a>";
    html += "</div>";
    html += "</div></section>";

    main.innerHTML = html;

    /* Wire the graph nodes. */
    main.querySelectorAll(".g-node[data-id]").forEach(function (node) {
      node.addEventListener("click", function () {
        location.href = "entry.html?id=" + encodeURIComponent(node.getAttribute("data-id"));
      });
      node.addEventListener("mouseenter", function () {
        main.querySelectorAll(".g-link").forEach(function (l) { l.classList.add("hot"); });
      });
      node.addEventListener("mouseleave", function () {
        main.querySelectorAll(".g-link").forEach(function (l) { l.classList.remove("hot"); });
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
