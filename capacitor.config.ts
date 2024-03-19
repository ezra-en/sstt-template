import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.ezraen.sticky',
  appName: 'sticky note',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
