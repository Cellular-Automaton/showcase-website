<script lang="ts">
  import { theme } from '$lib/store/theme.js';
  import Cli from '$lib/docs/cli.md';
</script>

<article class={$theme + ' mt-10 flex flex-col justify-center'}>
  <Cli />
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
  article :global(a) {
    color: var(--color-slate-400);
    text-decoration: underline;
    list-style-type: disc;
  }

  :global(pre) {
    padding: 1vh 1vw;
    border-radius: 5px;
  }
  :global(article) {
    color: var(--color-slate-500);
  }
  article :global(hr) {
    margin-top: 2vh;
    margin-bottom: 2vh;
    opacity: 0.3;
  }
</style>
