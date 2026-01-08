<script lang="ts">
  import { onMount } from 'svelte';
  import Hr from 'flowbite-svelte/Hr.svelte';
  import { theme } from '$lib/store/theme.js';

  let { data } = $props();
  let content: any = $state(null);
  let date: Date = $state(new Date());

  onMount(async () => {
    const postFiles = import.meta.glob('/src/posts/blog/*.md');
    const postPath = `/src/posts/blog/${data.slug}.md`;
    const post = await postFiles[postPath]();
    // const contentTemplate = post?.default;
    try {
      content = post?.default;
      date = data.date;
      // content = contentTemplate();
    } catch (err) {
      console.log(err);
      content = '<div>An error happened with md processing</div>';
    }
  });
</script>

<article class={$theme + ' mt-10 mb-10'}>
  <h1>{data.title}</h1>
  <p class="mb-5">Published: {date.toDateString()}</p>
  <Hr />

  {#if content}
    {@render content()}
  {/if}
</article>

<style>
  :global(article) {
    color: var(--color-slate-500);
  }
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
    font-size: 3vh;
    color: var(--color-primary-600);
    margin: 1vh 0vw 0.5vh;
  }
  article :global(h4) {
    font-size: 2.5vh;
    color: var(--color-primary-600);
    margin: 1vh 0vw 0.5vh;
  }
  article :global(h5) {
    font-size: 2.5vh;
    color: var(--color-primary-500);
    margin: 1vh 0vw 0.5vh;
  }
  article :global(p) {
    color: var(--color-slate-500);
  }
  article :global(ul) {
    margin-left: 1vw;
  }
  article :global(li) {
    list-style-type: disc;
  }
  article :global(hr) {
    margin-top: 2vh;
    margin-bottom: 2vh;
    opacity: 0.3;
  }
</style>
