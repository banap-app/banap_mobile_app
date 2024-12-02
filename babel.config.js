module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            '@assets': './assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@services': './src/services',
            '@theme': './src/theme',
            '@utils': './src/utils',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
