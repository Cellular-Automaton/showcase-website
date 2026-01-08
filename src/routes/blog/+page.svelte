<script lang="ts">
  const { data } = $props();
  import BlogCard from '$lib/components/BlogCard.svelte';
  import Timeline from 'flowbite-svelte/Timeline.svelte';
  import Heading from 'flowbite-svelte/Heading.svelte';
</script>

<div class="top-0 mt-4 flex flex-col gap-4">
  <Heading tag="h1" class="text-primary-700 dark:text-secondary-700">Blog</Heading>
  <Timeline order="vertical">
    {#each data.posts as post}
      <BlogCard {post} />
    {/each}
  </Timeline>
</div>
