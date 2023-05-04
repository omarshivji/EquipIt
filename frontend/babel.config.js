module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-modules-commonjs',
        {
          allowTopLevelThis: true,
          strictMode: false,
          loose: true,
          noInterop: false,
        },
      ],
    ],
  };
  