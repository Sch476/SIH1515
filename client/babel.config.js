// Babel configuration for the Expo/React Native project
module.exports = function(api) {
  // Cache the configuration for faster rebuilds
  api.cache(true);
  return {
    // Use the Expo preset which includes React Native and modern JS transforms
    presets: ['babel-preset-expo'],
  };
};
