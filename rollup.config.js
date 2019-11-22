import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'index.js',
    plugins: [terser()],
    output: {
        file: 'umd/andatelib.js',
        format: 'umd',
        name: 'andatelib',
        esModule: false
    }
  },
  {
    input: 'index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm'
    }
  }
];