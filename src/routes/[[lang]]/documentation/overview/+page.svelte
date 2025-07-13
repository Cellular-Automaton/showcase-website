<script lang="ts">
  import { page } from '$app/state';
  import { languages, isOfLangType } from '$lib/constants/languages/documentation/overview';
  import type { Languages } from '$lib/constants/languages/home';
  import Sidebar from '$lib/Sidebar.svelte';
  import { error } from '@sveltejs/kit';

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
    <li>
      <ul><a href="api/">{languages[page.params?.lang as Languages]?.api}</a></ul>
    </li>
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
  li {
    color: theme('colors.primary.100');
    margin-left: 3vw;
    font-size: 2vh;
  }
</style>
