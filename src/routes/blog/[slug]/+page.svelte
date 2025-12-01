<script lang="ts">
  import { onMount } from 'svelte';

  let { data } = $props();
  let content: any = $state(null);

  onMount(async () => {
    const postFiles = import.meta.glob('/src/routes/blog/*.md');
    const postPath = `/src/routes/blog/${data.slug}.md`;
    const post = await postFiles[postPath]();
    content = post.default;
  });
</script>

<article>
  <h1>{data.title}</h1>
  <p>Published: {data.date}</p>
  {#if content}
    {@render content()}
  {/if}
</article>
