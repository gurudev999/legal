export interface NotificationProviderConfig {
  email?: {
    enabled: boolean;
    provider: 'resend';
    apiKey?: string;
  };
  sms?: {
    enabled: boolean;
    provider: 'twilio';
    accountSid?: string;
    authToken?: string;
    dltEntityId?: string;
  };
  push?: {
    enabled: boolean;
    provider: 'fcm';
    serverKey?: string;
  };
}

export const defaultNotificationConfig: NotificationProviderConfig = {
  email: {
    enabled: false,
    provider: 'resend',
  },
  sms: {
    enabled: false,
    provider: 'twilio',
  },
  push: {
    enabled: false,
    provider: 'fcm',
  },
};

export function getNotificationConfig(env: NodeJS.ProcessEnv): NotificationProviderConfig {
  return {
    email: {
      enabled: !!env.RESEND_API_KEY,
      provider: 'resend',
      apiKey: env.RESEND_API_KEY,
    },
    sms: {
      enabled: !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN),
      provider: 'twilio',
      accountSid: env.TWILIO_ACCOUNT_SID,
      authToken: env.TWILIO_AUTH_TOKEN,
      dltEntityId: env.TWILIO_DLT_ENTITY_ID,
    },
    push: {
      enabled: !!env.FCM_SERVER_KEY,
      provider: 'fcm',
      serverKey: env.FCM_SERVER_KEY,
    },
  };
}
