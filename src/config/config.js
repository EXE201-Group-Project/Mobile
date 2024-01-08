import Constants from 'expo-constants';
/**
 * export env variables
 * to add new env variables, add in app.config.ts first
 */
const config = {
  env: Constants.expoConfig?.extra?.env || 'prod',
  BACKEND_ENDPOINT: 'https://reqres.in/api',

  // add more...
};
export { config };
