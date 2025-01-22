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
  <div class="container"></div>
</div>

<style>
</style>
