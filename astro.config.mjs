import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

if (import.meta.env?.PORT === undefined) {
  const env_port = 8080
}
else {
  const env_port = Number(import.meta.env?.PORT)
}

export default defineConfig(
  {
    integrations: [react()],
    markdown: {
      // Example: Switch to use prism for syntax highlighting in Markdown
      syntaxHighlight:'shiki',
    },
    output: 'static',
    server: { port: import.meta.env?.PORT | 3000 }
  }
);