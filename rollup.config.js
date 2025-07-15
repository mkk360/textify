import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import css from 'rollup-plugin-css-only';
import filesize from 'rollup-plugin-filesize';

const isDev = process.env.NODE_ENV === 'development';

export default [
  // UMD build
  {
    input: 'src/textify.js',
    output: {
      file: 'dist/textify.min.js',
      format: 'umd',
      name: 'Textify',
      sourcemap: isDev,
      globals: {
        gsap: 'gsap'
      }
    },
    external: ['gsap'],
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'not ie <= 11']
            }
          }]
        ]
      }),
      !isDev && terser({             // ✅ FIXED: Use terser.default() in current plugin version
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        mangle: {
          reserved: ['Textify']
        }
      }),
      filesize()
    ].filter(Boolean)
  },

  // ES Module build
  {
    input: 'src/textify.js',
    output: {
      file: 'dist/textify.esm.js',
      format: 'es',
      sourcemap: isDev
    },
    external: ['gsap'],
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', {
            targets: {
              node: '14'
            },
            modules: false
          }]
        ]
      }),
      !isDev && terser({             // ✅ FIXED: Also here
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }),
      filesize()
    ].filter(Boolean)
  }
];
