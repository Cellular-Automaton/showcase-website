<script lang="ts">
  import { page } from '$app/stores';
  import { languages, isOfLangType } from '$lib/constants/languages/team';
  import type { Languages } from '$lib/constants/languages/team';
  import { error } from '@sveltejs/kit';

  $: lang = $page.params?.lang ?? 'en';
  $: language = lang as Languages;

  $: if (!isOfLangType(language)) {
    throw error(400);
  }
</script>

<svelte:head>
  <title>CAMI</title>
</svelte:head>

<div>
  <div class="container">
    <div class="homepage">
      <h1>{languages[language].title1}</h1>
    </div>
  </div>
</div>

<style>
  h1 {
    color: theme('colors.primary.10');
    font-family: Inter;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 80vw;
    text-align: start;
  }
</style>
