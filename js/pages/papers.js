/* AIOPEDIA — landmark papers renderer */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  function render() {
    var main = document.getElementById("main");
    if (!main) return;

    var html = "";
    html += '<section class="page-hero"><div class="container">';
    html += '<div class="breadcrumbs"><a href="index.html">Home</a> / Landmark papers</div>';
    html += "<h1>Landmark papers</h1>";
    html += '<p class="sub">' + A.papers.length + " documents that built the field \u2014 the ideas, in their original form, that made everything else possible.</p>";
    html += "</div></section>";

    html += '<section><div class="container">';
    html += '<div class="toolbar"><input type="search" id="papersSearch" placeholder="Filter papers \u2026" /><span class="count" id="papersCount"></span></div>';
    html += '<div class="table-wrap"><table><thead><tr>';
    html += '<th>Year</th><th>Title</th><th>Authors</th><th>Venue</th><th>Why it matters</th>';
    html += "</tr></thead><tbody id=\"papersBody\"></tbody></table></div>";
    html += "</div></section>";

    main.innerHTML = html;
    var body = document.getElementById("papersBody");
    var count = document.getElementById("papersCount");

    function renderList(q) {
      q = (q || "").trim().toLowerCase();
      var list = A.papers.filter(function (p) {
        return !q || (p.title + " " + p.authors + " " + p.venue + " " + p.impact).toLowerCase().indexOf(q) !== -1;
      }).sort(function (a, b) { return a.year - b.year; });
      count.textContent = list.length + " of " + A.papers.length + " papers";
      body.innerHTML = list.map(function (p) {
        return "<tr>" +
          "<td><span class=\"mono\">" + p.year + "</span></td>" +
          "<td><strong>" + A.escapeHtml(p.title) + "</strong></td>" +
          "<td>" + A.escapeHtml(p.authors) + "</td>" +
          "<td>" + A.escapeHtml(p.venue) + "</td>" +
          "<td>" + A.escapeHtml(p.impact) + "</td>" +
          "</tr>";
      }).join("");
      if (!list.length) body.innerHTML = "<tr><td colspan=\"5\">No papers match.</td></tr>";
    }

    document.getElementById("papersSearch").addEventListener("input", function (e) { renderList(e.target.value); });
    renderList("");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
