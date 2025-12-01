import { escapeSvelte } from 'mdsvex';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { bundledLanguages, getSingletonHighlighter } from 'shiki';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path_to_layout = join(__dirname, './src/routes/blog/layout.svelte');

const config = defineConfig({
  layout: {
    componentLayout: path_to_layout
  },
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await getSingletonHighlighter({
        themes: ['one-dark-pro'],
        langs: Object.keys(bundledLanguages)
      });
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'one-dark-pro' }));
      return `{@html \`${html} \` }`;
    }
  },

  remarkPlugins: [],
  rehypePlugins: [
    rehypeSlug,
    rehypeAutolinkHeadings
  ]
});

export default config;
