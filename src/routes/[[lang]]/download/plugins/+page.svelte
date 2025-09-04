<script lang="ts">
  import { languages, isOfLangType } from '$lib/constants/languages/download';
  import { error } from '@sveltejs/kit';
  import { page } from '$app/state';
  import type { Languages } from '$lib/constants/languages/download';
  import PluginDesc from '$lib/components/plugins/PluginDesc.svelte';

  if (!isOfLangType(page.params?.lang as Languages)) {
    throw error(400);
  }
</script>

<svelte:head>
  <title>CAMI</title>
</svelte:head>

<div class="container">
  <h1>{languages[page.params?.lang as Languages]?.title}</h1>
  <div class="grid">
    <PluginDesc name="Lenia" />
    <PluginDesc name="GameOfLife" />
  </div>
</div>

<style>
  .grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1vh 2vw;
  }

  h1 {
    color: theme('colors.primary.10');
    font-family: Inter;
    font-size: 45px;
    text-align: center;
    margin-bottom: 3vh;
    margin-top: 3vh;
  }
</style>
