/* AIOPEDIA — model comparison tool renderer */
(function () {
  "use strict";
  var A = window.AIOPEDIA;

  var FIELDS = [
    { key: "developer", label: "Developer" },
    { key: "released", label: "Released" },
    { key: "parameters", label: "Parameters" },
    { key: "context", label: "Context window" },
    { key: "modality", label: "Modality" },
    { key: "license", label: "License" },
    { key: "arch", label: "Architecture" },
    { key: "note", label: "In one line" }
  ];

  /* Models that have spec data, linked to their entries. */
  function specModels() {
    return (A.models || []).filter(function (m) { return A.specs && A.specs[m.id]; });
  }

  function render() {
    var main = document.getElementById("main");
    if (!main) return;

    var models = specModels();
    var state = { sel: [], q: "" };
    var MAX = 5;

    function chipOf(m) {
      var s = A.specs[m.id];
      var on = state.sel.indexOf(m.id) !== -1;
      var full = !on && state.sel.length >= MAX;
      return '<button class="compare-chip' + (on ? " on" : "") + (full ? " full" : "") + '" data-id="' + A.escapeHtml(m.id) + '"' + (full ? ' title="Max ' + MAX + ' models — remove one first"' : "") + ">" + A.escapeHtml(m.name) + "</button>";
    }

    function drawPicks() {
      var wrap = document.getElementById("comparePicks");
      var q = state.q.toLowerCase();
      var list = models.filter(function (m) { return !q || (m.name + " " + A.specs[m.id].developer).toLowerCase().indexOf(q) !== -1; });
      wrap.innerHTML = list.map(chipOf).join("");
      wrap.querySelectorAll(".compare-chip").forEach(function (c) {
        c.addEventListener("click", function () {
          var id = c.getAttribute("data-id");
          var i = state.sel.indexOf(id);
          if (i !== -1) state.sel.splice(i, 1);
          else if (state.sel.length < MAX) state.sel.push(id);
          drawPicks();
          drawTable();
        });
      });
    }

    function drawTable() {
      var count = document.getElementById("compareCount");
      var table = document.getElementById("compareTable");
      var selected = state.sel.map(function (id) {
        var m = models.filter(function (x) { return x.id === id; })[0];
        return m;
      }).filter(Boolean);
      count.textContent = state.sel.length + " of " + MAX + " selected" + (state.sel.length === MAX ? " — max reached" : "");

      if (!selected.length) {
        table.innerHTML = '<div class="compare-empty">Pick at least one model above to build a side-by-side comparison.</div>';
        return;
      }

      var html = '<div class="compare-table-wrap"><table class="compare-table"><thead><tr><th>Spec</th>';
      selected.forEach(function (m) { html += "<th>" + A.escapeHtml(m.name) + "</th>"; });
      html += "</tr></thead><tbody>";
      FIELDS.forEach(function (f) {
        html += "<tr><th>" + f.label + "</th>";
        selected.forEach(function (m) {
          var v = A.specs[m.id] && A.specs[m.id][f.key];
          html += "<td>" + A.escapeHtml(v == null ? "—" : String(v)) + "</td>";
        });
        html += "</tr>";
      });
      html += "<tr><th>Open weights</th>";
      selected.forEach(function (m) {
        var s = A.specs[m.id];
        html += "<td>" + (s && s.open ? '<span class="chip gn">open</span>' : '<span class="chip rd">closed</span>') + "</td>";
      });
      html += "</tr>";
      html += "</tbody></table></div>";
      html += '<p class="g-legend" style="margin-top:0.8rem">Dashes mean the lab does not publish the figure. Estimates marked “est.” are third-party reconstructions.</p>';
      table.innerHTML = html;
    }

    var html = "";
    html += '<section class="page-hero"><div class="container">';
    html += '<div class="breadcrumbs"><a href="index.html">Home</a> / Compare</div>';
    html += "<h1>Compare models</h1>";
    html += '<p class="sub">' + models.length + " models with published specifications — put the frontier side by side. Click up to " + MAX + " to build a comparison table.</p>";
    html += "</div></section>";

    html += '<section><div class="container">';
    html += '<div class="toolbar">';
    html += '<input type="search" id="compareSearch" placeholder="Filter models by name or developer \u2026" />';
    html += '<span class="count" id="compareCount"></span>';
    html += "</div>";
    html += '<div class="compare-pick" id="comparePicks"></div>';
    html += '<div id="compareTable"></div>';
    html += "</div></section>";

    main.innerHTML = html;

    document.getElementById("compareSearch").addEventListener("input", function (e) {
      state.q = e.target.value;
      drawPicks();
    });
    drawPicks();
    drawTable();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
