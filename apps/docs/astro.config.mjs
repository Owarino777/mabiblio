import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'https://accessible-ui-kit.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  // Accessibility: ensure proper HTML output
  compressHTML: false,
  build: {
    // Eco-design: inline small assets
    inlineStylesheets: 'auto',
  },
});
