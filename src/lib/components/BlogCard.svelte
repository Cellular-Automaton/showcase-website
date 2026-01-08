<script lang="ts">
  import TimelineItem from 'flowbite-svelte/TimelineItem.svelte';
  import Button from 'flowbite-svelte/Button.svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  let { post } = $props();
  function trimStr(str: string, length: number) {
    return str.length > length ? str.substring(0, length - 3) + '...' : str;
  }
</script>

{#key post.slug}
  <TimelineItem title={trimStr(post.title, 50)} date={post.date} dateFormat="day-month-year">
    <p class="mt-3 mb-3 ml-5 text-purple-900 dark:text-purple-100">
      {trimStr(post.description, 150)}
    </p>
    <Button color="alternative" href={`/blog/${post.slug}`}>See more<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </TimelineItem>
{/key}
