import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'

const env = process.env.NODE_ENV

export default {
  input: 'index.js',
  output: {
    file: './dist/index.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
