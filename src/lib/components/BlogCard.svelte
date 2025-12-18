<script lang="ts">
  import TimelineItem from 'flowbite-svelte/TimelineItem.svelte';
  import Button from 'flowbite-svelte/Button.svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  let { post } = $props();
</script>

{#key post.slug}
  <TimelineItem title={post.title} date={post.date} dateFormat="day-month-year">
    <p class="mt-3 mb-3 text-purple-900 dark:text-purple-100">
      {post.description}
    </p>
    <Button color="alternative" href={`/blog/${post.slug}`}>See more<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </TimelineItem>
{/key}
