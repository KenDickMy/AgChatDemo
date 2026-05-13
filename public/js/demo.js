/* public/js/demo.js — Demo runner logic */

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────────────
  var scenario = null;
  var currentStep = 0;
  var completedSteps = [];

  // ── DOM refs ───────────────────────────────────────────────────────────────
  var $ = function (id) { return document.getElementById(id); };

  // ── URL param helper ───────────────────────────────────────────────────────
  function getScenarioId() {
    var params = new URLSearchParams(window.location.search);
    return params.get('scenario');
  }

  // ── Escape HTML ────────────────────────────────────────────────────────────
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ── Toast ──────────────────────────────────────────────────────────────────
  var toastTimer = null;
  function showToast(msg) {
    var el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2500);
  }

  // ── Load scenario ──────────────────────────────────────────────────────────
  async function init() {
    var id = getScenarioId();
    if (!id) {
      showError('No scenario specified. Please select a scenario from the home page.');
      return;
    }

    try {
      var res = await fetch('/api/scenarios/' + encodeURIComponent(id));
      if (res.status === 404) {
        showError('Scenario "' + esc(id) + '" was not found.');
        return;
      }
      if (!res.ok) throw new Error('HTTP ' + res.status);
      var body = await res.json();
      scenario = body.data;
      render();
    } catch (err) {
      showError('Could not load the scenario. Make sure the server is running.');
    }
  }

  function showError(msg) {
    $('loading-screen').style.display = 'none';
    $('error-screen').style.display = 'flex';
    $('error-message').textContent = msg;
  }

  // ── Render everything ──────────────────────────────────────────────────────
  function render() {
    $('loading-screen').style.display = 'none';
    $('demo-app').style.display = 'block';

    // Header
    $('scenario-title-header').textContent = scenario.title;
    document.title = scenario.title + ' — AgChatDemo';

    // Top bar
    $('demo-scenario-name').textContent = scenario.title;
    $('demo-scenario-meta').textContent =
      '👥 ' + scenario.audience + '   ⏱ ' + scenario.duration;

    // Opening hook button
    $('hook-modal-content').textContent = scenario.openingHook;

    renderStepNav();
    renderArtifacts();
    renderStep(currentStep);
  }

  // ── Sidebar: Step navigation ──────────────────────────────────────────────
  function renderStepNav() {
    var list = $('step-nav-list');
    list.innerHTML = '';
    scenario.steps.forEach(function (step, idx) {
      var li = document.createElement('li');
      li.className = 'step-nav-item' +
        (idx === currentStep ? ' active' : '') +
        (completedSteps.indexOf(idx) !== -1 ? ' done' : '');
      li.setAttribute('role', 'listitem');
      li.setAttribute('tabindex', '0');
      li.setAttribute('aria-label', 'Step ' + step.stepNumber + ': ' + step.title);
      li.innerHTML =
        '<span class="step-num">' + step.stepNumber + '</span>' +
        '<span>' + esc(step.title) + '</span>';
      li.addEventListener('click', function () { goToStep(idx); });
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToStep(idx); }
      });
      list.appendChild(li);
    });

    // Closing step
    var liClose = document.createElement('li');
    liClose.className = 'step-nav-item' +
      (currentStep === scenario.steps.length ? ' active' : '');
    liClose.setAttribute('role', 'listitem');
    liClose.setAttribute('tabindex', '0');
    liClose.innerHTML =
      '<span class="step-num">🏁</span>' +
      '<span>Closing &amp; Outcomes</span>';
    liClose.addEventListener('click', function () { goToStep(scenario.steps.length); });
    liClose.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToStep(scenario.steps.length); }
    });
    list.appendChild(liClose);
  }

  // ── Sidebar: Artifacts ────────────────────────────────────────────────────
  var TYPE_ICON = {
    email: '📧',
    spreadsheet: '📊',
    note: '📝',
    report: '📋',
    'field-note': '🌾',
  };

  function renderArtifacts() {
    var container = $('artifact-list');
    container.innerHTML = '';
    scenario.artifacts.forEach(function (artifact) {
      var div = document.createElement('div');
      div.className = 'artifact-item';
      div.setAttribute('role', 'button');
      div.setAttribute('tabindex', '0');
      div.setAttribute('aria-label', 'View artifact: ' + artifact.title);
      var icon = TYPE_ICON[artifact.type] || '📄';
      div.innerHTML =
        '<span style="flex-shrink:0;font-size:1.1rem;">' + icon + '</span>' +
        '<div>' +
        '<div class="artifact-label">' + esc(artifact.title) + '</div>' +
        '<div class="artifact-type">' + esc(artifact.type) + '</div>' +
        '</div>';
      div.addEventListener('click', function () { openArtifact(artifact); });
      div.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openArtifact(artifact); }
      });
      container.appendChild(div);
    });
  }

  // ── Artifact modal ─────────────────────────────────────────────────────────
  function openArtifact(artifact) {
    $('artifact-modal-title').textContent = artifact.title;
    $('artifact-modal-content').textContent = artifact.content;
    $('artifact-modal').classList.add('open');
    $('artifact-modal-close').focus();
  }

  function closeArtifact() {
    $('artifact-modal').classList.remove('open');
  }

  $('artifact-modal-close').addEventListener('click', closeArtifact);
  $('artifact-modal').addEventListener('click', function (e) {
    if (e.target === this) closeArtifact();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeArtifact();
      closeHookModal();
    }
  });

  // ── Hook modal ─────────────────────────────────────────────────────────────
  function openHookModal() {
    $('hook-modal').classList.add('open');
    $('hook-modal-close').focus();
  }
  function closeHookModal() {
    $('hook-modal').classList.remove('open');
  }
  $('hook-btn').addEventListener('click', openHookModal);
  $('hook-modal-close').addEventListener('click', closeHookModal);
  $('hook-modal').addEventListener('click', function (e) {
    if (e.target === this) closeHookModal();
  });

  // ── Sidebar collapse toggles ──────────────────────────────────────────────
  function makeToggle(headerId, bodyId, iconId) {
    var header = $(headerId);
    var body = $(bodyId);
    var icon = $(iconId);
    var expanded = body.style.display !== 'none';

    function toggle() {
      expanded = !expanded;
      body.style.display = expanded ? '' : 'none';
      icon.textContent = expanded ? '▾' : '▸';
      header.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  }

  makeToggle('steps-header', 'steps-body', 'steps-toggle-icon');
  makeToggle('artifacts-header', 'artifacts-body', 'artifacts-toggle-icon');
  makeToggle('about-header', 'about-body', 'about-toggle-icon');

  // ── Render step ────────────────────────────────────────────────────────────
  function renderStep(idx) {
    var main = $('demo-main');

    // Closing screen
    if (idx === scenario.steps.length) {
      renderClosingScreen(main);
      return;
    }

    var step = scenario.steps[idx];
    var total = scenario.steps.length;

    var promptsHtml = step.suggestedPrompts.map(function (p, i) {
      return (
        '<div class="prompt-card">' +
        '<p class="prompt-text">' + esc(p) + '</p>' +
        '<div class="prompt-actions">' +
        '<button class="copy-btn" data-prompt="' + esc(p) + '" aria-label="Copy prompt ' + (i + 1) + ' to clipboard">' +
        '📋 Copy Prompt</button>' +
        '</div>' +
        '</div>'
      );
    }).join('');

    var followUpHtml = '';
    if (step.followUpPrompts && step.followUpPrompts.length) {
      followUpHtml =
        '<div class="followup-prompts">' +
        '<h4>💡 Follow-Up Prompts</h4>' +
        step.followUpPrompts.map(function (p) {
          return '<span class="followup-chip" role="button" tabindex="0" data-prompt="' +
            esc(p) + '">' + esc(p) + '</span>';
        }).join('') +
        '</div>';
    }

    main.innerHTML =
      '<div class="step-header">' +
      '<span class="step-badge">Step ' + step.stepNumber + ' of ' + total + '</span>' +
      '<h2 class="step-title">' + esc(step.title) + '</h2>' +
      '<p class="step-desc">' + esc(step.description) + '</p>' +
      '</div>' +

      '<div class="info-block">' +
      '<div class="info-block-title">🏪 Demo Context</div>' +
      '<p>' + esc(step.context) + '</p>' +
      '</div>' +

      '<div class="prompts-section">' +
      '<h3>💬 Suggested Copilot Chat Prompts</h3>' +
      promptsHtml +
      followUpHtml +
      '</div>' +

      '<div class="talk-track">' +
      '<div class="talk-track-title">🎤 Seller Talk Track</div>' +
      '<p>' + esc(step.talkTrack) + '</p>' +
      '</div>' +

      '<div class="outcome-grid">' +
      '<div class="outcome-block expected">' +
      '<div class="outcome-block-title">✅ Expected Outcome</div>' +
      '<p>' + esc(step.expectedOutcome) + '</p>' +
      '</div>' +
      '<div class="outcome-block value">' +
      '<div class="outcome-block-title">💼 Business Value</div>' +
      '<p>' + esc(step.businessValue) + '</p>' +
      '</div>' +
      '</div>' +

      '<div class="feature-highlight">' +
      '<div class="feature-highlight-icon">⭐</div>' +
      '<div>' +
      '<h4>Copilot Chat Feature Highlight</h4>' +
      '<p>' + esc(step.copilotFeatureHighlight) + '</p>' +
      '</div>' +
      '</div>' +

      '<nav class="step-navigation" aria-label="Step navigation">' +
      '<button class="btn btn-secondary" id="prev-btn" ' + (idx === 0 ? 'disabled' : '') + '>' +
      '← Previous</button>' +
      '<div class="step-progress" style="text-align:center;">' +
      '<div>Step ' + step.stepNumber + ' of ' + total + '</div>' +
      '<div class="progress-bar-wrap"><div class="progress-bar" style="width:' +
      Math.round((step.stepNumber / total) * 100) + '%"></div></div>' +
      '</div>' +
      '<button class="btn btn-primary" id="next-btn">' +
      (idx === total - 1 ? 'Closing →' : 'Next Step →') +
      '</button>' +
      '</nav>';

    // Wire up navigation
    var prevBtn = document.getElementById('prev-btn');
    var nextBtn = document.getElementById('next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goToStep(idx - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (completedSteps.indexOf(idx) === -1) completedSteps.push(idx);
        goToStep(idx + 1);
      });
    }

    // Wire up copy buttons
    main.querySelectorAll('.copy-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var text = btn.getAttribute('data-prompt');
        copyToClipboard(text, btn);
      });
    });

    // Wire up follow-up chips
    main.querySelectorAll('.followup-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var text = chip.getAttribute('data-prompt');
        copyToClipboard(text, null);
      });
      chip.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          copyToClipboard(chip.getAttribute('data-prompt'), null);
        }
      });
    });

    // Scroll to top of main
    main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // ── Closing screen ─────────────────────────────────────────────────────────
  function renderClosingScreen(main) {
    var outcomesHtml = scenario.keyBusinessOutcomes
      .map(function (o) { return '<li>' + esc(o) + '</li>'; })
      .join('');

    main.innerHTML =
      '<div class="closing-screen">' +
      '<div class="trophy">🏆</div>' +
      '<h2>Demo Complete</h2>' +
      '<p class="closing-message">' + esc(scenario.closingMessage) + '</p>' +
      '<ul class="outcomes-list" aria-label="Key business outcomes">' + outcomesHtml + '</ul>' +
      '<div class="closing-actions">' +
      '<button class="btn btn-primary btn-lg" id="export-close-btn">📄 Export Demo Guide</button>' +
      '<a href="/" class="btn btn-secondary btn-lg">← All Scenarios</a>' +
      '<button class="btn btn-ghost btn-lg" id="restart-btn">↺ Restart Demo</button>' +
      '</div>' +
      '</div>';

    document.getElementById('export-close-btn').addEventListener('click', exportGuide);
    document.getElementById('restart-btn').addEventListener('click', function () {
      currentStep = 0;
      completedSteps = [];
      goToStep(0);
    });

    main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // ── Navigate to step ───────────────────────────────────────────────────────
  function goToStep(idx) {
    if (idx < 0 || idx > scenario.steps.length) return;
    currentStep = idx;
    renderStepNav();
    renderStep(idx);
  }

  // ── Copy to clipboard ──────────────────────────────────────────────────────
  function copyToClipboard(text, btn) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () {
        showToast('✅ Prompt copied to clipboard!');
        if (btn) {
          btn.textContent = '✓ Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.innerHTML = '📋 Copy Prompt';
            btn.classList.remove('copied');
          }, 2000);
        }
      }).catch(function () {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast('✅ Prompt copied!');
    } catch (e) {
      showToast('⚠️ Copy failed — please copy manually');
    }
    document.body.removeChild(ta);
  }

  // ── Export guide ───────────────────────────────────────────────────────────
  function exportGuide() {
    var id = scenario.id;
    var url = '/api/export/' + encodeURIComponent(id);
    showToast('📄 Preparing export…');

    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('Export failed');
        return res.text();
      })
      .then(function (markdown) {
        var blob = new Blob([markdown], { type: 'text/markdown' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = id + '-demo-guide.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
        showToast('✅ Demo guide downloaded!');
      })
      .catch(function () {
        showToast('⚠️ Export failed. Please try again.');
      });
  }

  // ── Export button wiring ───────────────────────────────────────────────────
  $('export-btn').addEventListener('click', exportGuide);
  $('export-top-btn').addEventListener('click', exportGuide);

  // ── Init ───────────────────────────────────────────────────────────────────
  init();
})();
