/* AIOPEDIA — benchmarks renderer */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  function render() {
    var main = document.getElementById("main");
    if (!main) return;

    var html = "";
    html += '<section class="page-hero"><div class="container">';
    html += '<div class="breadcrumbs"><a href="index.html">Home</a> / Benchmarks</div>';
    html += "<h1>Benchmarks</h1>";
    html += '<p class="sub">' + A.benchmarks.length + " ways the field measures itself \u2014 and the scoreboard that drives the frontier race. Every benchmark eventually falls; the question is what replaces it.</p>";
    html += "</div></section>";

    html += '<section><div class="container">';
    html += '<div class="toolbar"><input type="search" id="benchSearch" placeholder="Filter benchmarks \u2026" /><span class="count" id="benchCount"></span></div>';
    html += '<div class="table-wrap"><table><thead><tr>';
    html += '<th>Benchmark</th><th>Domain</th><th>Year</th><th>What it measures</th>';
    html += "</tr></thead><tbody id=\"benchBody\"></tbody></table></div>";
    html += "</div></section>";

    main.innerHTML = html;
    var body = document.getElementById("benchBody");
    var count = document.getElementById("benchCount");

    function renderList(q) {
      q = (q || "").trim().toLowerCase();
      var list = A.benchmarks.filter(function (b) {
        return !q || (b.name + " " + b.domain + " " + b.description).toLowerCase().indexOf(q) !== -1;
      }).sort(function (a, b) { return a.year - b.year; });
      count.textContent = list.length + " of " + A.benchmarks.length + " benchmarks";
      body.innerHTML = list.map(function (b) {
        return "<tr>" +
          "<td><strong>" + A.escapeHtml(b.name) + "</strong></td>" +
          "<td>" + A.escapeHtml(b.domain) + "</td>" +
          "<td><span class=\"mono\">" + b.year + "</span></td>" +
          "<td>" + A.escapeHtml(b.description) + "</td>" +
          "</tr>";
      }).join("");
      if (!list.length) body.innerHTML = "<tr><td colspan=\"4\">No benchmarks match.</td></tr>";
    }

    document.getElementById("benchSearch").addEventListener("input", function (e) { renderList(e.target.value); });
    renderList("");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
