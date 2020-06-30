const path = require("path");

// module.exports = async ({ config, mode }) => {
//   // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//   // You can change the configuration based on that.
//   // 'PRODUCTION' is used when building the static version of storybook.
//
//   // Make whatever fine-grained changes you need
//   webpackFinal: async (config, { configType }) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: ["style-loader", "css-loader", "sass-loader"],
//       include: path.resolve(__dirname, "../")
//     });
//   };
//
//   // console.dir(config, { depth: null }) || config;
//
//   return config;
// };

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
