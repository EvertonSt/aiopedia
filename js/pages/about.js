/* AIOPEDIA — about page renderer */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  function render() {
    var main = document.getElementById("main");
    if (!main) return;

    var n = A.allEntries().length;
    var html = "";
    html += '<section class="page-hero"><div class="container">';
    html += '<div class="breadcrumbs"><a href="index.html">Home</a> / About</div>';
    html += "<h1>About AIOPEDIA</h1>";
    html += '<p class="sub">A local, self-contained encyclopedia of the artificial intelligence world \u2014 written to be read, searched and explored entirely offline.</p>';
    html += "</div></section>";

    html += '<section><div class="container entry-layout">';
    html += '<article class="entry-article">';

    html += "<h2>What this is</h2>";
    html += "<p>AIOPEDIA is a curated reference covering the whole arc of artificial intelligence: the <strong>" + n + " entries</strong> that matter (concepts, models, companies, people, applications, ethics, tools), the timeline of milestones, the landmark papers, the benchmarks the field measures itself by, and an A\u2013Z glossary of its vocabulary. It is built like an encyclopedia should be: structured, cross-referenced, and honest about the difference between established fact, contested interpretation and open question.</p>";

    html += "<h2>How to read it</h2>";
    html += "<ul>";
    html += "<li><strong>Start anywhere.</strong> Every entry links outward to related entries \u2014 the Related panel in each article is your navigation map.</li>";
    html += "<li><strong>Search everything.</strong> Press <kbd>Ctrl</kbd>+<kbd>K</kbd> (or <kbd>Cmd</kbd>+<kbd>K</kbd>) anywhere to open the global search across all entries.</li>";
    html += "<li><strong>Follow the eras.</strong> The timeline groups milestones into eight chapters \u2014 foundations, booms, winters, and the deep-learning, transformer and generative eras \u2014 and now runs to 2026.</li>";
    html += "<li><strong>Check the sources.</strong> Each entry ends with the papers and books its claims rest on.</li>";
    html += "</ul>";

    html += "<h2>Scope and stance</h2>";
    html += "<p>The field's biggest disagreements are presented as disagreements, not settled fact: whether AGI is near or far, whether alignment is solvable, whether open weights are net positive, whether scaling is hitting limits. Where the community has reached a consensus \u2014 that backpropagation works, that the transformer underlies modern LLMs, that biased training data produces biased systems \u2014 this encyclopedia says so plainly.</p>";
    html += "<div class=\"callout callout-info\"><span class=\"ico\">&#9432;</span><div><strong>A note on dates.</strong> This edition was compiled in August 2026. AI moves quickly; entries about the frontier (models, companies, benchmarks) should be read as snapshots, not verdicts.</div></div>";

    html += "<h2>Privacy and engineering</h2>";
    html += "<p>AIOPEDIA is a static site with zero external dependencies: no CDNs, no fonts, no analytics, no network calls, no accounts. Every byte \u2014 design system, data, and renderer \u2014 lives in this folder and works from <code>file://</code> or any static server. If it ever needs the internet, that is a bug.</p>";

    html += "<h2>Coverage</h2>";
    html += '<div class="stats-bar">';
    ["concepts", "models", "companies", "people", "applications", "ethics", "tools"].forEach(function (cat) {
      html += '<div class="stat"><div class="num">' + A[cat].length + '</div><div class="lbl">' + A.categoryInfo[cat].label + "</div></div>";
    });
    html += '<div class="stat"><div class="num">' + A.timeline.length + '</div><div class="lbl">Timeline</div></div>';
    html += '<div class="stat"><div class="num">' + A.papers.length + '</div><div class="lbl">Papers</div></div>';
    html += '<div class="stat"><div class="num">' + A.benchmarks.length + '</div><div class="lbl">Benchmarks</div></div>';
    html += '<div class="stat"><div class="num">' + A.glossary.length + '</div><div class="lbl">Glossary</div></div>';
    html += "</div>";
    html += "</article>";

    html += '<aside class="entry-side">';
    html += '<div class="side-box"><h4>Quick links</h4><ul>';
    html += '<li><a href="concepts.html">Concepts</a></li>';
    html += '<li><a href="models.html">Models</a></li>';
    html += '<li><a href="timeline.html">Timeline</a></li>';
    html += '<li><a href="glossary.html">Glossary</a></li>';
    html += "</ul></div>";
    html += '<div class="side-box"><h4>Philosophy</h4><p style="font-size:0.85rem;color:var(--text-dim)">\u201cAn encyclopedia is a map. This one maps a field that is redrawing its own borders every year \u2014 so the map is honest about its blank spaces.\u201d</p></div>';
    html += "</aside>";
    html += "</div></section>";

    main.innerHTML = html;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
