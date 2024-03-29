const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@/components'] = path.resolve(
      __dirname,
      '..',
      'components'
    );
    return config;
  },
  stories: [
    '../stories/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public'],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
