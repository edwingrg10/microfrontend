const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'cursos',
      library: { type: 'var', name: 'cursos' },
      filename: 'remoteEntry.js',
      exposes: {
        './CursosModule': 'projects/cursos/src/app/cursos.module.ts',
      },
    }),
  ],
};
