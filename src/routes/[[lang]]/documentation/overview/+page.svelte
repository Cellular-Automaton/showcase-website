<script lang="ts">
  import { page } from '$app/state';
  import { languages, isOfLangType } from '$lib/constants/languages/documentation/overview';
  import type { Languages } from '$lib/constants/languages/home';
  import Sidebar from '$lib/Sidebar.svelte';
  import { error } from '@sveltejs/kit';
  import { Alert, Button } from 'flowbite-svelte';
  import { HammerSolid } from 'flowbite-svelte-icons';

  if (!isOfLangType(page.params?.lang as Languages)) {
    throw error(400);
  }
</script>

<svelte:head>
  <title>CAMI - Documentation</title>
</svelte:head>

<Sidebar />
<div class="box">
  <div>
    <h1>{languages[page.params?.lang as Languages]?.title}</h1>
    <ul>
      <li><a href="#download">{languages[page.params?.lang as Languages]?.download}</a></li>
      <li><a href="api/">{languages[page.params?.lang as Languages]?.api}</a></li>
      <li><a href="#plugins">{languages[page.params?.lang as Languages]?.plugins}</a></li>
    </ul>
  </div>
  <div class="paragraph">
    <h2 id="download">{languages[page.params?.lang as Languages]?.download}</h2>
    <p>{@html languages[page.params?.lang as Languages]?.download_exp1}</p>
    <p>{@html languages[page.params?.lang as Languages]?.download_exp2}</p>
    <Alert class="mt-6" color="form">
      {#snippet icon()}<HammerSolid class="h-5 w-5" />{/snippet}
      <span>{languages[page.params?.lang as Languages]?.download_alert}</span>
    </Alert>
  </div>
  <div class="paragraph">
    <h2 id="plugins">{languages[page.params?.lang as Languages]?.plugins}</h2>
    <Button href="../download/plugins" size="xl" color="primary" outline>{languages[page.params?.lang as Languages]?.plugins_download}</Button>
  </div>
</div>

<style>
  .box {
    margin-left: 15vw;
    max-width: 80vw;
  }

  h1 {
    font-size: 7vh;
    color: theme('colors.primary.500');
    margin-bottom: 1vh;
  }

  h2 {
    color: theme('colors.primary.300');
    font-size: 35px;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    font-weight: 500;
  }

  ul {
    list-style-type: square;
  }

  li {
    color: theme('colors.primary.100');
    margin-left: 3vw;
    font-size: 2vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .paragraph {
    margin-top: 7vh;
  }
</style>
