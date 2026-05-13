import request from 'supertest';
import app from '../src/server';

describe('GET /api/scenarios', () => {
  it('returns a list of scenarios with required fields', async () => {
    const res = await request(app).get('/api/scenarios');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThanOrEqual(2);

    const first = res.body.data[0];
    expect(first).toHaveProperty('id');
    expect(first).toHaveProperty('title');
    expect(first).toHaveProperty('subtitle');
    expect(first).toHaveProperty('description');
    expect(first).toHaveProperty('audience');
    expect(first).toHaveProperty('duration');
    expect(first).toHaveProperty('tags');
  });
});

describe('GET /api/scenarios/:id', () => {
  it('returns a full scenario for a valid id', async () => {
    const res = await request(app).get('/api/scenarios/spring-supply-readiness');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    const scenario = res.body.data;
    expect(scenario.id).toBe('spring-supply-readiness');
    expect(scenario).toHaveProperty('steps');
    expect(scenario).toHaveProperty('artifacts');
    expect(scenario).toHaveProperty('businessContext');
    expect(scenario).toHaveProperty('openingHook');
    expect(scenario).toHaveProperty('closingMessage');
    expect(scenario).toHaveProperty('keyBusinessOutcomes');
    expect(Array.isArray(scenario.steps)).toBe(true);
    expect(scenario.steps.length).toBeGreaterThanOrEqual(4);
    expect(Array.isArray(scenario.artifacts)).toBe(true);
    expect(scenario.artifacts.length).toBeGreaterThanOrEqual(1);
  });

  it('returns a full scenario for the grower-account-recovery scenario', async () => {
    const res = await request(app).get('/api/scenarios/grower-account-recovery');
    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe('grower-account-recovery');
    expect(res.body.data.steps.length).toBeGreaterThanOrEqual(4);
  });

  it('returns 404 for an unknown scenario id', async () => {
    const res = await request(app).get('/api/scenarios/does-not-exist');
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
    expect(res.body).toHaveProperty('error');
  });
});

describe('GET /api/export/:id', () => {
  it('returns markdown content for a valid scenario', async () => {
    const res = await request(app).get('/api/export/spring-supply-readiness');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/markdown/);
    expect(res.text).toContain('# Harvest Partners Ag');
    expect(res.text).toContain('Spring Planting Season Supply Readiness');
    expect(res.text).toContain('## Demo Steps');
    expect(res.text).toContain('## Key Business Outcomes');
  });

  it('includes artifacts by default', async () => {
    const res = await request(app).get('/api/export/spring-supply-readiness');
    expect(res.text).toContain('## Sample Demo Artifacts');
  });

  it('excludes artifacts when includeArtifacts=false', async () => {
    const res = await request(app).get(
      '/api/export/spring-supply-readiness?includeArtifacts=false',
    );
    expect(res.status).toBe(200);
    expect(res.text).not.toContain('## Sample Demo Artifacts');
  });

  it('excludes prompts when includePrompts=false', async () => {
    const res = await request(app).get(
      '/api/export/spring-supply-readiness?includePrompts=false',
    );
    expect(res.status).toBe(200);
    expect(res.text).not.toContain('💬 Suggested Prompts');
  });

  it('excludes talk tracks when includeTalkTracks=false', async () => {
    const res = await request(app).get(
      '/api/export/spring-supply-readiness?includeTalkTracks=false',
    );
    expect(res.status).toBe(200);
    expect(res.text).not.toContain('🎤 Seller Talk Track');
  });

  it('returns 404 for an unknown scenario id', async () => {
    const res = await request(app).get('/api/export/does-not-exist');
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });

  it('returns markdown for the grower-account-recovery scenario', async () => {
    const res = await request(app).get('/api/export/grower-account-recovery');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Key Grower At-Risk');
    expect(res.text).toContain('## Demo Steps');
  });
});

describe('Step data integrity', () => {
  it('all steps in spring-supply-readiness have required fields', async () => {
    const res = await request(app).get('/api/scenarios/spring-supply-readiness');
    const steps = res.body.data.steps;
    for (const step of steps) {
      expect(step).toHaveProperty('id');
      expect(step).toHaveProperty('stepNumber');
      expect(step).toHaveProperty('title');
      expect(step).toHaveProperty('suggestedPrompts');
      expect(step).toHaveProperty('talkTrack');
      expect(step).toHaveProperty('expectedOutcome');
      expect(step).toHaveProperty('businessValue');
      expect(step).toHaveProperty('copilotFeatureHighlight');
      expect(Array.isArray(step.suggestedPrompts)).toBe(true);
      expect(step.suggestedPrompts.length).toBeGreaterThan(0);
    }
  });

  it('all artifacts have required fields', async () => {
    const res = await request(app).get('/api/scenarios/spring-supply-readiness');
    const artifacts = res.body.data.artifacts;
    for (const artifact of artifacts) {
      expect(artifact).toHaveProperty('id');
      expect(artifact).toHaveProperty('type');
      expect(artifact).toHaveProperty('title');
      expect(artifact).toHaveProperty('content');
      expect(artifact.content.length).toBeGreaterThan(50);
    }
  });
});
