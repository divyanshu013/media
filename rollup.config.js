import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'lib',
      file: 'index.js',
      format: 'cjs',
    },
    {
      dir: 'lib',
      file: 'index.es.js',
      format: 'esm',
    },
  ],
  plugins: [
    babel({
      presets: [['env', { modules: false }]],
      plugins: ['transform-object-rest-spread'],
    }),
  ],
};
