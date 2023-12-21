import dotenv from 'dotenv';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import sass from 'rollup-plugin-sass';
import del from 'rollup-plugin-delete';

import { DIR_PATH } from './rollup.path';

dotenv.config();

// eslint-disable-next-line no-undef
const isBundle = process.env.BUNDLE_SCSS === 'true';

const sassCompile = () =>
  sass({
    // eslint-disable-next-line no-undef
    include: `${DIR_PATH}/${process.env.PATH_TO_SRC_SCSS}`,
    // eslint-disable-next-line no-undef
    output: `${DIR_PATH}/${process.env.PATH_TO_BUILD_SCSS}`,
    options: {
      outputStyle: 'compressed',
    },
  });

const plugins = [
  del({
    // eslint-disable-next-line no-undef
    targets: `${DIR_PATH}/${process.env.DIST_PATH}/*`,
  }),
  typescript({
    tsconfig: `${DIR_PATH}/tsconfig.json`,
    exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'],
  }),
  postcss({
    extract: false,
    modules: true,
  }),
  isBundle && sassCompile(),
  peerDepsExternal(),
  resolve(),
  commonjs(),
  terser(),
];

export default plugins;
