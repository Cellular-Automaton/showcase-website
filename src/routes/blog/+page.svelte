<script lang="ts">
  const { data } = $props();
  import BlogCard from '$lib/components/BlogCard.svelte';
  import Timeline from 'flowbite-svelte/Timeline.svelte';
  import Heading from 'flowbite-svelte/Heading.svelte';
  import Alert from 'flowbite-svelte/Alert.svelte';
  import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
  import { m } from '$lib/paraglide/messages.js';
</script>

<div class="top-0 mt-5 flex flex-col gap-4">
  <Heading tag="h1" class="text-primary-700 dark:text-secondary-700">Blog</Heading>
  <Alert class="mt-2 mb-3 flex flex-row justify-stretch p-5 shadow-lg">
    {#snippet icon()}<ExclamationCircleOutline class="h-5 w-5" />{/snippet}
    <p>{m.blog_lang_warning()}</p>
  </Alert>
  <Timeline order="vertical">
    {#each data.posts as post}
      <BlogCard {post} />
    {/each}
  </Timeline>
</div>
