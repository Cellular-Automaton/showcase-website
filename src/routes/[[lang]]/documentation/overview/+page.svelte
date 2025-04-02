<script lang="ts">
  import { page } from '$app/state';
  import { languages, isOfLangType } from '$lib/constants/languages/home';
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
  <div></div>
</div>
