/* AIOPEDIA — timeline renderer */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  function render() {
    var main = document.getElementById("main");
    if (!main) return;

    var html = "";
    html += '<section class="page-hero"><div class="container">';
    html += '<div class="breadcrumbs"><a href="index.html">Home</a> / Timeline</div>';
    html += "<h1>Timeline</h1>";
    html += '<p class="sub">Seventy-five years of artificial intelligence in ' + A.timeline.length + " milestones \u2014 from Turing's question to the agentic frontier of 2026. Each era is a chapter in a cycle of hype, winter and breakthrough.</p>";
    html += "</div></section>";

    html += '<section><div class="container">';
    html += '<ol class="timeline">';
    A.timeline.slice().sort(function (a, b) { return a.year - b.year; }).forEach(function (t) {
      html += '<li class="tl-item reveal">';
      html += '<div class="tl-year">' + t.year + "</div>";
      html += '<div class="tl-dot"></div>';
      html += '<div class="tl-body">';
      html += "<h3>" + A.escapeHtml(t.title) + "</h3>";
      html += "<p>" + A.escapeHtml(t.text) + "</p>";
      html += '<div class="entry-meta" style="margin-top:8px"><span class="tag">' + A.escapeHtml(t.era) + "</span></div>";
      html += "</div></li>";
    });
    html += "</ol>";
    html += "</div></section>";

    html += '<section><div class="container"><div class="cta-band reveal">';
    html += "<h2>Keep exploring</h2>";
    html += '<p>Dive into the systems, ideas and people that made these milestones happen.</p>';
    html += '<a class="btn btn-primary" href="models.html">Browse models</a> <a class="btn btn-ghost" href="people.html">Meet the people</a>';
    html += "</div></div></section>";

    main.innerHTML = html;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
