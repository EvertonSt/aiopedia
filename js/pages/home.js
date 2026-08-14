/* AIOPEDIA — home page renderer */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  function cardFor(e) {
    return (
      '<a class="card entry-card reveal" href="entry.html?id=' + encodeURIComponent(e.id) + '">' +
        '<span class="tag">' + A.categoryInfo[e.category].label + "</span>" +
        "<h3>" + A.escapeHtml(e.name) + "</h3>" +
        "<p>" + A.escapeHtml(e.summary || "") + "</p>" +
        '<div class="entry-meta"><span>' + (e.year ? A.escapeHtml(String(e.year)) : "") + "</span><span class=\"mono\">&#8594;</span></div>" +
      "</a>"
    );
  }

  function render() {
    var all = A.allEntries();
    var featured = ["transformer", "large-language-model", "chatgpt", "deep-learning", "alignment", "alphago", "openai", "alan-turing", "computer-vision", "stable-diffusion"].map(A.findEntry).filter(Boolean);
    var main = document.getElementById("main");
    if (!main) return;

    var html = "";

    /* Hero */
    html += "<section class=\"hero\">";
    html += "<div class=\"container\">";
    html += "<span class=\"eyebrow\">&#9670;&nbsp;The encyclopedia of artificial intelligence</span>";
    html += "<h1>The AI world, <span class=\"grad-text\">fully mapped</span></h1>";
    html += "<p class=\"sub\">From the perceptron to GPT-5 — <strong>" + all.length + " entries</strong> across concepts, models, companies, people, applications, ethics and tools, plus a timeline, landmark papers, benchmarks and an A\u2013Z glossary. Entirely local. Entirely yours.</p>";
    html += "<div class=\"search-bar\">";
    html += "<input type=\"text\" id=\"homeSearch\" placeholder=\"Search the AI world \u2014 e.g. \u201ctransformer\u201d, \u201cHinton\u201d, \u201calignment\u201d\" autocomplete=\"off\" spellcheck=\"false\" />";
    html += "<span class=\"search-ico\">&#128269;</span>";
    html += "</div>";
    html += "<div class=\"hero-actions\">";
    html += "<a class=\"btn btn-primary\" href=\"concepts.html\">Explore the concepts</a>";
    html += "<a class=\"btn btn-ghost\" href=\"timeline.html\">Walk the timeline</a>";
    html += "<a class=\"btn btn-ghost\" href=\"compare.html\">Compare models</a>";
    html += "<button class=\"btn btn-ghost\" id=\"homeDice\" type=\"button\">&#127922; Surprise me</button>";
    html += "</div>";
    html += "</div>";
    html += "</section>";

    /* Stats */
    html += "<section><div class=\"container\">";
    html += "<div class=\"stats-bar reveal\">";
    ["concepts", "models", "companies", "people", "applications", "ethics", "tools"].forEach(function (cat) {
      html += "<div class=\"stat\"><div class=\"num\" data-count=\"" + A[cat].length + "\">0</div><div class=\"lbl\">" + A.categoryInfo[cat].label + "</div></div>";
    });
    html += "</div>";
    html += "</div></section>";

    /* Featured */
    html += "<section><div class=\"container\">";
    html += "<div class=\"section-head reveal\"><span class=\"num\">01</span><h2>Featured entries</h2></div>";
    html += "<p class=\"lead reveal\">A starting point for your descent into the field \u2014 the systems, ideas and people the rest of the encyclopedia orbits.</p>";
    html += "<div class=\"grid grid-3\">";
    featured.forEach(function (e) { html += cardFor(e); });
    html += "</div>";
    html += "</div></section>";

    /* Category browse */
    html += "<section><div class=\"container\">";
    html += "<div class=\"section-head reveal\"><span class=\"num\">02</span><h2>Browse by domain</h2></div>";
    html += "<div class=\"grid grid-3\">";
    ["concepts", "models", "companies", "people", "applications", "ethics", "tools"].forEach(function (cat) {
      html += "<a class=\"card feature-card reveal\" href=\"" + cat + ".html\">";
      html += "<span class=\"tag\">" + A[cat].length + " entries</span>";
      html += "<h3>" + A.categoryInfo[cat].label + "</h3>";
      html += "<p>" + A.categoryInfo[cat].blurb + "</p>";
      html += "<span class=\"card-link\">Browse \u2192</span>";
      html += "</a>";
    });
    html += "</div>";
    html += "</div></section>";

    /* Reference sections */
    html += "<section><div class=\"container\">";
    html += "<div class=\"section-head reveal\"><span class=\"num\">03</span><h2>Reference wings</h2></div>";
    html += "<div class=\"grid grid-4\">";
    [
      { href: "timeline.html", t: "Timeline", d: A.timeline.length + " milestones across 7 decades" },
      { href: "papers.html", t: "Landmark papers", d: A.papers.length + " documents that built the field" },
      { href: "benchmarks.html", t: "Benchmarks", d: A.benchmarks.length + " ways AI is measured" },
      { href: "compare.html", t: "Compare", d: "Models side by side, spec for spec" },
      { href: "glossary.html", t: "Glossary", d: A.glossary.length + " terms, A\u2013Z" },
      { href: "browse.html", t: "A\u2013Z Index", d: all.length + " entries, alphabetical" },
      { href: "about.html", t: "About", d: "Method, scope and how this was made" }
    ].forEach(function (r) {
      html += "<a class=\"card reveal\" href=\"" + r.href + "\"><h3>" + r.t + "</h3><p>" + r.d + "</p><span class=\"card-link\">Open \u2192</span></a>";
    });
    html += "</div>";
    html += "</div></section>";

    html += "<section><div class=\"container\">";
    html += "<div class=\"quote reveal\">\u201cWe can only see a short distance ahead, but we can see plenty there that needs to be done.\u201d<span class=\"attr\">\u2014 ALAN TURING, 1950</span></div>";
    html += "</div></section>";

    main.innerHTML = html;

    /* Home hero search wires into the global overlay. */
    var hs = document.getElementById("homeSearch");
    if (hs && A.openSearch) {
      hs.addEventListener("focus", function () { A.openSearch(); });
    }
    var hd = document.getElementById("homeDice");
    if (hd && A.surprise) hd.addEventListener("click", A.surprise);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
