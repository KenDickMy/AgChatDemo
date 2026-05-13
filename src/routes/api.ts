import { Router, Request, Response } from 'express';
import { getScenarioById, listScenarios } from '../data/scenarios';
import { DemoScenario, ExportOptions } from '../types';

const router = Router();

/**
 * GET /api/scenarios
 * Returns a lightweight list of all available demo scenarios.
 */
router.get('/scenarios', (_req: Request, res: Response) => {
  const list = listScenarios();
  res.json({ success: true, data: list });
});

/**
 * GET /api/scenarios/:id
 * Returns the full scenario including steps and artifacts.
 */
router.get('/scenarios/:id', (req: Request, res: Response) => {
  const scenario = getScenarioById(req.params.id);
  if (!scenario) {
    res.status(404).json({ success: false, error: 'Scenario not found' });
    return;
  }
  res.json({ success: true, data: scenario });
});

/**
 * GET /api/export/:id
 * Generates and returns a Markdown export of the full demo guide for a scenario.
 * Query params:
 *   includeArtifacts=true|false  (default: true)
 *   includePrompts=true|false    (default: true)
 *   includeTalkTracks=true|false (default: true)
 */
router.get('/export/:id', (req: Request, res: Response) => {
  const scenario = getScenarioById(req.params.id);
  if (!scenario) {
    res.status(404).json({ success: false, error: 'Scenario not found' });
    return;
  }

  const options: ExportOptions = {
    includeArtifacts: req.query.includeArtifacts !== 'false',
    includePrompts: req.query.includePrompts !== 'false',
    includeTalkTracks: req.query.includeTalkTracks !== 'false',
  };

  const markdown = buildMarkdownExport(scenario, options);
  const filename = `${scenario.id}-demo-guide.md`;

  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.send(markdown);
});

// ─────────────────────────────────────────────────────────────────────────────
// Markdown generation
// ─────────────────────────────────────────────────────────────────────────────

function buildMarkdownExport(scenario: DemoScenario, options: ExportOptions): string {
  const lines: string[] = [];
  const { includeArtifacts, includePrompts, includeTalkTracks } = options;

  // ── Header ──────────────────────────────────────────────────────────────────
  lines.push('# Harvest Partners Ag — Microsoft Copilot Chat Demo Guide');
  lines.push('');
  lines.push(`> **Scenario:** ${scenario.title}`);
  lines.push(`> *${scenario.subtitle}*`);
  lines.push('');
  lines.push('---');
  lines.push('');

  // ── Metadata ────────────────────────────────────────────────────────────────
  lines.push('## Demo Overview');
  lines.push('');
  lines.push(`| Field | Value |`);
  lines.push(`|-------|-------|`);
  lines.push(`| **Audience** | ${scenario.audience} |`);
  lines.push(`| **Suggested Duration** | ${scenario.duration} |`);
  lines.push(`| **Tags** | ${scenario.tags.join(', ')} |`);
  lines.push('');
  lines.push('### Business Context');
  lines.push('');
  lines.push(scenario.businessContext);
  lines.push('');
  lines.push('### Opening Hook');
  lines.push('');
  lines.push(`> ${scenario.openingHook}`);
  lines.push('');
  lines.push('---');
  lines.push('');

  // ── Demo Steps ──────────────────────────────────────────────────────────────
  lines.push('## Demo Steps');
  lines.push('');

  for (const step of scenario.steps) {
    lines.push(`### Step ${step.stepNumber}: ${step.title}`);
    lines.push('');
    lines.push(`**Description:** ${step.description}`);
    lines.push('');
    lines.push(`**Context:** ${step.context}`);
    lines.push('');

    if (includePrompts && step.suggestedPrompts.length > 0) {
      lines.push('#### 💬 Suggested Prompts');
      lines.push('');
      lines.push('Copy and paste these prompts directly into Copilot Chat:');
      lines.push('');
      for (const prompt of step.suggestedPrompts) {
        lines.push(`> ${prompt}`);
        lines.push('');
      }
      if (step.followUpPrompts && step.followUpPrompts.length > 0) {
        lines.push('**Follow-up Prompts:**');
        lines.push('');
        for (const fp of step.followUpPrompts) {
          lines.push(`> ${fp}`);
          lines.push('');
        }
      }
    }

    if (includeTalkTracks) {
      lines.push('#### 🎤 Seller Talk Track');
      lines.push('');
      lines.push(step.talkTrack);
      lines.push('');
    }

    lines.push('#### ✅ Expected Outcome');
    lines.push('');
    lines.push(step.expectedOutcome);
    lines.push('');

    lines.push('#### 💼 Business Value');
    lines.push('');
    lines.push(step.businessValue);
    lines.push('');

    lines.push('#### ⭐ Copilot Chat Feature Highlight');
    lines.push('');
    lines.push(`*${step.copilotFeatureHighlight}*`);
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  // ── Closing ─────────────────────────────────────────────────────────────────
  lines.push('## Closing Message');
  lines.push('');
  lines.push(`> ${scenario.closingMessage}`);
  lines.push('');

  // ── Key Business Outcomes ───────────────────────────────────────────────────
  lines.push('## Key Business Outcomes to Reinforce');
  lines.push('');
  for (const outcome of scenario.keyBusinessOutcomes) {
    lines.push(`- ${outcome}`);
  }
  lines.push('');
  lines.push('---');
  lines.push('');

  // ── Sample Artifacts ────────────────────────────────────────────────────────
  if (includeArtifacts && scenario.artifacts.length > 0) {
    lines.push('## Sample Demo Artifacts');
    lines.push('');
    lines.push(
      'These realistic ag-retail artifacts provide grounding context for the demo. ' +
      'Use them as reference material when setting up the scenario.',
    );
    lines.push('');

    for (const artifact of scenario.artifacts) {
      const icon = artifactIcon(artifact.type);
      lines.push(`### ${icon} ${artifact.title}`);
      lines.push('');
      lines.push('```');
      lines.push(artifact.content);
      lines.push('```');
      lines.push('');
    }
  }

  // ── Footer ──────────────────────────────────────────────────────────────────
  lines.push('---');
  lines.push('');
  lines.push(
    '*This demo guide was generated by the AgChatDemo application. ' +
    'Content is illustrative and intended for demonstration purposes only. ' +
    'Copilot Chat capabilities described reflect general product guidance; ' +
    'actual features may vary by license tier, tenant configuration, and product version.*',
  );
  lines.push('');
  lines.push(`*Generated: ${new Date().toISOString()}*`);

  return lines.join('\n');
}

function artifactIcon(type: string): string {
  const icons: Record<string, string> = {
    email: '📧',
    spreadsheet: '📊',
    note: '📝',
    report: '📋',
    'field-note': '🌾',
  };
  return icons[type] ?? '📄';
}

export default router;
