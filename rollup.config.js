import { execSync } from 'child_process';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import tsPlugin from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import loaderUtils from 'loader-utils';
import inject from 'style-inject-package';

const regExpModule = process.platform === 'win32' ? /\\([^\\]+)\.(module)/ : /\/([^\/]+)\.(module)/;
const commitHash = execSync('git rev-parse HEAD').toString().trim().substring(0, 7);

export default () => {
 const packageJson = require(`${process.cwd()}/package.json`);

 return {
  input: './src/index.ts',
  output: {
   file: `./${packageJson.main}`,
   format: 'es',
  },
  external: [
   ...Object.keys(packageJson.dependencies || {}),
   'react',
   'react-dom',
   '@cib/platform',
   '@atomic/core',
   'classnames',
   'styled-components',
  ],
  plugins: [
   tsPlugin({
    tsconfig: './tsconfig.json',
    typescript: ttypescript,
   }),
   image({
    fileName: '[dirname][hash][extname]',
   }),
   postcss({
    inject: inject(packageJson.name || 'unknown'),
    modules: {
     generateScopedName: function (classname, filename) {
      if (
       !filename.match(/node_modules/) &&
       !classname.includes('keyframes') &&
       filename.match(regExpModule)
      ) {
       return loaderUtils.interpolateName(
        {
         resourcePath: filename,
         resourceQuery: classname,
        },
        `[1]_${classname}_${commitHash}`,
        {
         regExp: regExpModule,
         content: classname,
        },
       );
      }

      return classname;
     },
    },
   }),
   terser({
    mangle: {
     keep_classnames: true, // eslint-disable-line camelcase
     keep_fnames: true, // eslint-disable-line camelcase
     toplevel: false,
    },
   }),
   sizeSnapshot(),
  ],
 };
};