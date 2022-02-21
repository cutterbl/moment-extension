import path from 'path';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import clear from 'rollup-plugin-clear';
import cleanup from 'rollup-plugin-cleanup';
import pkg from '../package.json';

const externalDependencies = Object.keys(pkg.dependencies).map((id) =>
  // must do this to  avoid compiling runtime's nested paths
  id.includes('@babel/runtime-corejs3') ? /@babel\/runtime-corejs3/ : id
);

export default [
  {
    input: path.join(__dirname, '../src/decorate.js'),
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        exports: 'named',
        interop: 'auto',
      },
    ],
    plugins: [
      clear({
        targets: [path.join(__dirname, '../dist')],
        watch: true,
      }),
      eslint({
        // second entry covers 'npm link' situations
        exclude: [/node_modules/],
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: [/node_modules/],
      }),
      cleanup(),
    ],
    external: externalDependencies,
  },
];
