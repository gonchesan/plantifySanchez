const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
  };

  config.resolver = {
    ...resolver,
    assetExts: [...resolver.assetExts, "db"].filter((ext) => ext !== "svg"), // Add "db" to assetExts and ensure "svg" is excluded
    sourceExts: [...resolver.sourceExts, "svg"], // Add "svg" to sourceExts
  };

  return config;
})();
