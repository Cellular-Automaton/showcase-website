<script lang="ts">
  import { Heading, P, Span, Hr, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { m } from '$lib/paraglide/messages.js';
</script>

<div class="top-0 mt-4 mb-4 flex flex-col gap-5">
  <div class="flex flex-row justify-start gap-10">
    <div class="flex flex-col gap-4 text-left lg:mt-5 lg:gap-6">
      <Heading tag="h1" class="text-primary-700 dark:text-secondary-700"><Span color="purple">CAMI</Span></Heading>
      <P class="text-lg leading-normal text-purple-800 lg:text-xl dark:text-indigo-300">{m.home_desc1()}</P>
    </div>
    <img src="/images/lenia-image.png" alt="lenia gif" />
  </div>
  <Hr />
  <div class="flex flex-col justify-center gap-5">
    <Heading tag="h2" class="text-primary-900 dark:text-secondary-200">{m.home_title1()}</Heading>
    <div class="mt-4 flex flex-col items-center">
      <img class="w-lg" src="https://life.calgui.io/images/spaceships/glider.gif" alt="conway's spaceship" />
      <span class="text-center text-gray-400">{m.home_img_desc_1()}</span>
    </div>
    <p class="text-primary-900 dark:text-primary-100">{m.home_desc2_1()}</p>
    <p class="text-primary-900 dark:text-primary-100">{m.home_desc2_2()}</p>
    <Heading tag="h3" class="text-primary-600 dark:text-secondary-500">{m.home_title_1_1()}</Heading>
    <p class="text-primary-900 dark:text-primary-100">{m.home_desc2_11()}</p>
    <p class="text-primary-900 dark:text-primary-100">{m.home_desc2_12()}</p>
  </div>
  <div class="mt-3 flex flex-col justify-center gap-5">
    <Heading tag="h2" class="text-primary-900 dark:text-secondary-200">{m.home_title2()}</Heading>
    <p class="text-primary-900 dark:text-primary-100">{m.home_desc3_1()}</p>
    <p class="text-primary-900 dark:text-primary-100">{@html m.home_desc3_2()}</p>
  </div>
  <Hr />
  <div class="flex flex-row justify-center">
    <Button href="/download" size="xl">{m.home_down()}<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</div>
