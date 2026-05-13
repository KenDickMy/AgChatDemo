export type ArtifactType = 'email' | 'spreadsheet' | 'note' | 'report' | 'field-note';

export interface SampleArtifact {
  id: string;
  type: ArtifactType;
  title: string;
  content: string;
}

export interface DemoStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  context: string;
  suggestedPrompts: string[];
  talkTrack: string;
  expectedOutcome: string;
  businessValue: string;
  copilotFeatureHighlight: string;
  followUpPrompts?: string[];
  relatedArtifactIds?: string[];
}

export interface DemoScenario {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  audience: string;
  duration: string;
  businessContext: string;
  openingHook: string;
  steps: DemoStep[];
  artifacts: SampleArtifact[];
  closingMessage: string;
  keyBusinessOutcomes: string[];
  tags: string[];
}

export interface ExportOptions {
  includeArtifacts: boolean;
  includePrompts: boolean;
  includeTalkTracks: boolean;
}
