import { z } from 'zod';

export enum FeatureFlagProvider {
  LOCAL = 'local',
  UNLEASH = 'unleash',
  CONFIGCAT = 'configcat',
}

export const localFlagSchema = z.object({
  key: z.string(),
  enabled: z.boolean(),
  description: z.string().optional(),
});

export type LocalFlag = z.infer<typeof localFlagSchema>;

export type FeatureFlagConfig =
  | {
      provider: FeatureFlagProvider.LOCAL;
      flags: LocalFlag[];
    }
  | {
      provider: FeatureFlagProvider.UNLEASH;
      url: string;
      apiKey: string;
    }
  | {
      provider: FeatureFlagProvider.CONFIGCAT;
      sdkKey: string;
    };

export const defaultFeatureFlagConfig: FeatureFlagConfig = {
  provider: FeatureFlagProvider.LOCAL,
  flags: [
    {
      key: 'enableBetaDashboard',
      enabled: false,
      description: 'Enable the new dashboard UI for pilot firms.',
    },
    {
      key: 'knowledgeBaseSynced',
      enabled: false,
      description: 'Enable knowledge base ingestion from Notion/Confluence.',
    },
  ],
};
