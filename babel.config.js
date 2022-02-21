module.exports = function babelConfig(api) {
  return {
    presets: [
      '@babel/preset-env',
      {
        ...(api.env('test') && {
          targets: {
            node: 'current',
          },
        }),
      },
    ],
    /* eslint-disable indent */
    plugins: [
      ...(!api.env('test')
        ? [
            [
              '@babel/plugin-transform-runtime',
              {
                corejs: {
                  version: 3,
                  proposals: true,
                },
              },
            ],
          ]
        : []),
    ],
    /* eslint-enable indent */
  };
};
