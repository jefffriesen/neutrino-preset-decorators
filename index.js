module.exports = neutrino => {
  neutrino.config.module.rule('compile').test(/\.jsx?$/).loader('babel', ({
    options
  }) => {
    options.plugins = [
      require.resolve('babel-plugin-transform-decorators-legacy'),
      ...options.plugins
    ];
    return { options };
  });
};
