<script lang="ts">
  import '../app.css';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import ShowcaseLayout from './layouts/ShowcaseLayout.svelte';

  onMount(() => {
    // Configure MathJax to include the 'ams' package
    window.MathJax = {
      loader: {
        load: [
          'input/tex',
          '[tex]/textmacros',
          '[tex]/mathtools',
          '[tex]/color',
          '[tex]/cases',
          '[tex]/ams',
          '[tex]/amscd',
          '[tex]/physics',
          '[tex]/noerrors'
        ]
      },
      tex: {
        tags: 'ams',
        inlineMath: [
          ['$', '$'],
          ['\\(', '\\)']
        ],
        displayMath: [
          ['$$', '$$'],
          ['\\[', '\\]']
        ],
        packages: { '[+]': ['textmacros', 'color', 'cases', 'mathtools', 'ams', 'amscd', 'physics', 'noerrors'] }
      },
      svg: { fontCache: 'global' },
      startup: {
        // typeset: true,
        ready: () => {
          MathJax.startup.defaultReady();
          MathJax.typesetPromise();
        }
      }
    };

    // Load MathJax script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js';
    script.async = true;
    document.head.appendChild(script);
  });

  let { children } = $props();
</script>

<ShowcaseLayout>
  <main class="min-w-0 flex-auto divide-y lg:static lg:max-h-full lg:overflow-visible dark:divide-gray-700">
    {@render children()}
  </main>
</ShowcaseLayout>

<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>
