const fs = require("fs");

module.exports = {
  webpack: (config) => {
    // Perform customizations to webpack config
    config.resolve = config.resolve || {};
    config.resolve.modules = (
      config.resolve.modules || ["node_modules"]
    ).concat([fs.realpathSync(process.cwd())]);

    // Important: return the modified config
    return config;
  },
  exportPathMap: function(defaultPathMap) {
    return {
      "/": { page: "/" },
      "/cn": { page: "/cn" },
      "/de": { page: "/de" },
      "/fr": { page: "/fr" },
      "/en": { page: "/en" },
      "/es": { page: "/es" },
      "/jp": { page: "/jp" },
    };
  },
};
