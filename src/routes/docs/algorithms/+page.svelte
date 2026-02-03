<script lang="ts">
  import Plugin from '$lib/docs/plugins.md';
</script>

<article class={'mt-10'}>
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

  :global(pre) {
    padding: 1vh 1vw;
    border-radius: 5px;
  }
</style>
