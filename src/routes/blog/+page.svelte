<script lang="ts">
  const { data } = $props();
  import Heading from 'flowbite-svelte/Heading.svelte';
</script>

<div class="top-0 mt-4 flex flex-col gap-4">
  <Heading tag="h1" class="text-primary-700 dark:text-secondary-700">Blog</Heading>
  <ul>
    {#each data.posts as post}
      <li>
        <a href={`/blog/${post.slug}`} class="dark:text-primary-50 hover:underline">{post.title}</a>
      </li>
    {/each}
  </ul>
</div>
