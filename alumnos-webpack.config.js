const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'alumnos',
      library: { type: 'var', name: 'alumnos' },
      filename: 'remoteEntry.js',
      exposes: {
        './AlumnoModule': 'projects/alumno/src/app/alumno.module.ts',
      },
    }),
  ],
};
