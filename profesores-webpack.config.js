const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'profesores',
      library: { type: 'var', name: 'profesores' },
      filename: 'remoteEntry.js',
      exposes: {
        './ProfesoresModule': 'projects/profesores/src/app/profesores.module.ts',
      },
    }),
  ],
};
