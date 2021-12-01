const { src, dest, series } = require('gulp');
const del = require('del');
const shell = require('gulp-shell');

const { compilerOptions } = require('./tsconfig.json');

function cleanCompiled() {
    return del([compilerOptions.outDir, './esm', './cjs']);
}

exports.build = series(cleanCompiled);