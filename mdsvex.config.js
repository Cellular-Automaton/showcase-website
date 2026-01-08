import { escapeSvelte } from 'mdsvex';
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { bundledLanguages, getSingletonHighlighter } from 'shiki';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';
import { visit } from 'unist-util-visit';

export function remarkEscapeBraces() {
  return (tree) => {
    visit(tree, 'math', (node) => {
      node.value = node.value.replace(/\{/g, '\\u007B').replace(/\}/g, '\\u007D');
    });
  };
}

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    quotes: false,
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

  remarkPlugins: [remarkMath, remarkEscapeBraces],
  rehypePlugins: [rehypeMathJax, rehypeSlug, rehypeAutolinkHeadings]
});

export default config;
