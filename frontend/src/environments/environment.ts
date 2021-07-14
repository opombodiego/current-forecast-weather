declare var require: any;

export const environment = {
  production: false,
  apiUrl: require('@root/.env.json').apiUrl,
  apiKey: '177d1a6b'
};
