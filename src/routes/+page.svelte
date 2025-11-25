<script lang="ts">
  import { Heading, P, Span, Hr } from 'flowbite-svelte';
  import { m } from '$lib/paraglide/messages.js';
</script>

<div class="top-0 mt-4 flex flex-col">
  <div class="flex flex-row justify-start gap-10">
    <div class="flex flex-col gap-4 text-left lg:mt-5 lg:gap-6">
      <Heading tag="h1" class="text-primary-700 dark:text-secondary-700"><Span color="purple">CAMI</Span></Heading>
      <P class="text-lg leading-normal text-purple-800 lg:text-xl dark:text-indigo-300">{m.home_desc1()}</P>
    </div>
    <img src="/images/lenia-image.png" alt="lenia gif" />
  </div>
  <Hr />
</div>
