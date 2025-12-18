<script lang="ts">
  import { theme } from '$lib/store/theme.js';
  import Plugin from '$lib/docs/plugins.md';
</script>

<article class={$theme + ' mt-10 flex flex-col justify-center'}>
  <Plugin />
</article>

<style>
  article :global(h1) {
    font-size: 5vh;
    color: var(--color-primary-700);
    margin: 1vh 0vw;
  }
  article :global(h2) {
    font-size: 3.5vh;
    color: var(--color-primary-600);
    margin: 1vh 0vw 0.5vh;
  }
  article :global(h3) {
    font-size: 2.5vh;
    color: var(--color-primary-700);
    margin: 1vh 0vw 0.5vh;
  }
  article :global(h4) {
    font-size: 2vh;
    color: var(--color-primary-800);
    margin: 1vh 0vw 0.5vh;
  }
  article :global(p) {
    color: var(--color-slate-500);
  }
  article :global(ul) {
    color: var(--color-slate-500);
  }
  article :global(li) {
    color: var(--color-slate-400);
    list-style-type: disc;
  }

  :global(code) {
    margin-bottom: 9vh;
    border-radius: 100px;
  }

  /* dark mode */
  article.dark :global(h1) {
    font-size: 5vh;
    color: var(--color-secondary-400);
  }
  article.dark :global(h2) {
    font-size: 3.5vh;
    color: var(--color-secondary-500);
    margin: 1vh 0vw 0.5vh;
  }
  article.dark :global(ul) {
    color: var(--color-slate-600);
  }
</style>
