import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://secondpass26.github.io',
  output: 'static',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});
