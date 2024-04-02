import { GOOGLE_MAP_API_KEY } from '@env';

export default {
  expo: {
    name: 'Doctor Map',
    slug: 'exe201-fe',
    version: '2.0.3',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    plugins: [
      '@react-native-google-signin/google-signin',
      [
        'expo-build-properties',
        {
          android: {
            usesCleartextTraffic: true
          }
        }
      ],
      'expo-updates'
    ],
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.exe201.DrMap',
      googleServicesFile: process.env.IOS_PLIST,
      config: {
        googleMaps: {
          apiKey: process.env.GG_MAP_API_NONE_SERVICE
        }
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.exe201.DrMap',
      googleServicesFile: process.env.ANDROID_JSON,
      config: {
        googleMaps: {
          apiKey: process.env.GG_MAP_API_NONE_SERVICE
        }
      }
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      eas: {
        projectId: '20dd1b55-6ff5-46de-847d-1809ce9d2625'
      }
    }
  }
};
