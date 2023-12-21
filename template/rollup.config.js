import dts from 'rollup-plugin-dts';

import plugins from './config/rollup.plugins';
import { DIR_PATH } from './config/rollup.path';

import packageJson from './package.json';

// eslint-disable-next-line no-undef

export default [
  {
    input: `${DIR_PATH}/src/index.ts`,
    output: [
      {
        file: packageJson.main,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins,
  },
  {
    input: `${DIR_PATH}/dist/cjs/types/src/index.d.ts`,
    output: [{ file: `${DIR_PATH}/dist/index.d.ts`, format: 'esm' }],
    plugins: [dts.default()],
    external: [/\.(scss|css|less|sass)$/],
  },
];
