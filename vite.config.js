import path from 'path';
import * as url from 'url';
import { defineConfig } from 'vite';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: path.resolve(__dirname, 'src/decorate.js'),
      name: 'moment-extension',
      fileName: 'moment-extension',
      formats: ['es', 'umd'],
    },
  },
  test: {
    testFiles: '**/__tests__/**/*.test.js',
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['text', 'json-summary'],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
    },
  },
});
