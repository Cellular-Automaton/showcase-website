<script lang="ts">
  import { onMount } from 'svelte';
  import Hr from 'flowbite-svelte/Hr.svelte';
  import { theme } from '$lib/store/theme.js';

  let { data } = $props();
  let content: any = $state(null);

  onMount(async () => {
    const postFiles = import.meta.glob('/src/posts/blog/*.md');
    const postPath = `/src/posts/blog/${data.slug}.md`;
    const post = await postFiles[postPath]();
    content = post?.default;
  });
</script>

<article class={$theme + ' mt-10'}>
  <h1>{data.title}</h1>
  <p class="mb-5">Published: {data.date}</p>
  <Hr />
  {#if content}
    {@render content()}
  {/if}
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
  article :global(p) {
    color: var(--color-slate-500);
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
</style>
