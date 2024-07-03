<script lang="ts">
  import Background from '$lib/Background.svelte';
  import { page } from '$app/stores';
  import { languages } from '$lib/constants/languages';
  import type { Languages } from '$lib/constants/languages';

  $: lang = $page.params?.lang;
  $: language = lang as Languages;
</script>

<svelte:head>
  <title>CAMI - Home</title>
</svelte:head>

<div>
  <div class="container">
    <Background />
    <div class="homepage">
      <h1>{languages[language]?.subtitle_1}</h1>
      <p>{languages[language]?.cami_pres}</p>
    </div>
  </div>
</div>

<style>
  h1 {
    color: var(--base-white, #fff);
    font-family: Inter;
    font-size: 55px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    color: #838282;
    font-size: 20px;
  }

  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80vw;
    text-align: center;
  }
</style>
