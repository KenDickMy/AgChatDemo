/* public/js/app.js — Landing page logic */

(function () {
  'use strict';

  const TYPE_LABELS = {
    email: '📧 Email',
    spreadsheet: '📊 Spreadsheet',
    note: '📝 Notes',
    report: '📋 Report',
    'field-note': '🌾 Field Note',
  };

  async function loadScenarios() {
    const grid = document.getElementById('scenario-grid');
    try {
      const res = await fetch('/api/scenarios');
      if (!res.ok) throw new Error('Failed to load scenarios');
      const { data } = await res.json();
      renderScenarios(grid, data);
    } catch (err) {
      grid.innerHTML =
        '<div class="error-screen" style="grid-column:1/-1">' +
        '<p>⚠️ Could not load scenarios. Make sure the server is running.</p>' +
        '</div>';
    }
  }

  function renderScenarios(container, scenarios) {
    container.innerHTML = '';
    scenarios.forEach(function (scenario) {
      const card = document.createElement('article');
      card.className = 'card scenario-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', 'Demo scenario: ' + scenario.title);

      const tags = (scenario.tags || [])
        .map(function (t) {
          return '<span class="tag">' + escapeHtml(t) + '</span>';
        })
        .join('');

      card.innerHTML =
        '<div class="scenario-card-header">' +
        '<h3>' + escapeHtml(scenario.title) + '</h3>' +
        '<p>' + escapeHtml(scenario.subtitle) + '</p>' +
        '</div>' +
        '<div class="scenario-card-body">' +
        '<p>' + escapeHtml(scenario.description) + '</p>' +
        '<div class="scenario-meta">' +
        '<span>👥 ' + escapeHtml(scenario.audience) + '</span>' +
        '<span>⏱ ' + escapeHtml(scenario.duration) + '</span>' +
        '</div>' +
        '<div class="tag-list">' + tags + '</div>' +
        '<button class="btn btn-primary btn-sm" style="width:100%;">' +
        '▶ Start Demo</button>' +
        '</div>';

      card.addEventListener('click', function () {
        window.location.href = '/demo.html?scenario=' + encodeURIComponent(scenario.id);
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = '/demo.html?scenario=' + encodeURIComponent(scenario.id);
        }
      });

      container.appendChild(card);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Init
  loadScenarios();
})();
