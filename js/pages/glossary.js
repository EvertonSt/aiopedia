/* AIOPEDIA — glossary renderer (A-Z with live filter) */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  function letterOf(term) {
    var m = /^[a-zA-Z]/.exec(term);
    return m ? m[0].toUpperCase() : "#";
  }

  function render() {
    var main = document.getElementById("main");
    if (!main) return;

    var html = "";
    html += '<section class="page-hero"><div class="container">';
    html += '<div class="breadcrumbs"><a href="index.html">Home</a> / Glossary</div>';
    html += "<h1>Glossary</h1>";
    html += '<p class="sub">' + A.glossary.length + " terms, A\u2013Z \u2014 the vocabulary you need to read the field without a translator.</p>";
    html += "</div></section>";

    html += '<section><div class="container">';
    html += '<div class="toolbar"><input type="search" id="glossSearch" placeholder="Filter glossary terms \u2026" /><span class="count" id="glossCount"></span></div>';
    html += '<div class="gloss-nav" id="glossNav"></div>';
    html += '<div id="glossBody"></div>';
    html += "</div></section>";

    main.innerHTML = html;

    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var nav = document.getElementById("glossNav");
    var present = {};
    A.glossary.forEach(function (g) { present[letterOf(g.term)] = true; });
    letters.forEach(function (l) {
      var a = document.createElement("a");
      a.href = "#g-" + l;
      a.textContent = l;
      if (!present[l]) { a.style.opacity = "0.35"; a.style.pointerEvents = "none"; a.setAttribute("aria-disabled", "true"); }
      nav.appendChild(a);
    });

    var body = document.getElementById("glossBody");
    var count = document.getElementById("glossCount");

    function renderGloss(q) {
      q = (q || "").trim().toLowerCase();
      var list = A.glossary.filter(function (g) {
        return !q || (g.term + " " + g.def).toLowerCase().indexOf(q) !== -1;
      });
      count.textContent = list.length + " of " + A.glossary.length + " terms";
      body.innerHTML = "";
      var last = "";
      list.forEach(function (g) {
        var l = letterOf(g.term);
        if (l !== last) {
          last = l;
          var h = document.createElement("div");
          h.className = "gloss-letter";
          h.id = "g-" + l;
          h.textContent = l;
          body.appendChild(h);
        }
        var term = document.createElement("div");
        term.className = "gloss-term reveal";
        term.innerHTML = "<h3>" + A.escapeHtml(g.term) + "</h3><p>" + A.escapeHtml(g.def) + "</p>";
        body.appendChild(term);
      });
      if (!list.length) body.innerHTML = '<div class="search-empty">No terms match.</div>';
    }

    document.getElementById("glossSearch").addEventListener("input", function (e) { renderGloss(e.target.value); });
    renderGloss("");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
