<script lang="ts">
  import Background from '$lib/Background.svelte';
  import { page } from '$app/stores';
  import { languages, isOfLangType } from '$lib/constants/languages';
  import type { Languages } from '$lib/constants/languages';
  import planer from '$lib/images/lenia-planer.png';
  import { error } from '@sveltejs/kit';

  $: lang = $page.params?.lang ?? 'en';
  $: language = lang as Languages;

  $: if (!isOfLangType(language)) {
    throw error(400);
  }
</script>

<svelte:head>
  <title>CAMI - Home</title>
</svelte:head>

<!--  eslint-disable svelte/no-at-html-tags -->
<div>
  <div class="container">
    <Background />
    <div class="homepage">
      <h1>{languages[language]?.subtitle_1}</h1>
      <p>{@html languages[language]?.cami_pres.join('<br/>')}</p>
      <h1>{languages[language]?.subtitle_2}</h1>
      <p>{@html languages[language]?.automaton}</p>
      <h1>{languages[language]?.subtitle_3}</h1>
      <div>
        <img src={planer} alt="lenia planer, element" class="left" />
        <p>{@html languages[language]?.lenia_pres}</p>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    color: var(--base-white, #fff);
    font-family: Inter;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    color: #838289;
    font-size: 20px;
  }

  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80vw;
    text-align: start;
  }
  img.left {
    float: left;
    max-width: 8vw;
  }
</style>
