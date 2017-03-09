module.exports = neutrino => {
  neutrino.config.module.rule('compile').test(/\.jsx?$/).loader('babel', ({
    options
  }) => {
    options.plugins = [
      require.resolve('babel-plugin-transform-class-properties'),
      ...options.plugins
    ];
    return { options };
  });
};
