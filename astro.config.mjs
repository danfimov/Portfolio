import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    // Example: Switch to use prism for syntax highlighting in Markdown
    syntaxHighlight:'shiki',
  },
  output: 'static',
  site: 'https://danfimov.github.io',
  base: '/Portfolio',
  server: { port: import.meta.env?.PORT | 3000 }
});
