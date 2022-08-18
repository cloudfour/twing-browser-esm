import * as esbuild from 'esbuild';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @returns {esbuild.Plugin} */
const shimsPlugin = () => ({
  name: 'shims',
  setup(build) {
    build.onResolve({ filter: /^util$/ }, () => ({
      path: require.resolve('./shims/util.mjs'),
    }));
    build.onResolve({ filter: /^path$/ }, () => ({
      path: require.resolve('./shims/path.mjs'),
    }));
    build.onResolve({ filter: /^object-hash$/ }, () => ({
      path: require.resolve('./shims/object-hash.cjs'),
    }));
  },
});

await esbuild.build({
  entryPoints: ['./index.mjs'],
  inject: ['./shims/buffer.mjs'],
  outfile: 'dist/index.mjs',
  bundle: true,
  write: true,
  format: 'esm',
  plugins: [shimsPlugin()],
  external: ['string_decoder'],
});
