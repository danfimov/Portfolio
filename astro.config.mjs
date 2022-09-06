import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
// import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    // Example: Switch to use prism for syntax highlighting in Markdown
    syntaxHighlight:'shiki',
  },
  "cleanUrls": true,
	// output: 'server',
	// adapter: vercel(),
});