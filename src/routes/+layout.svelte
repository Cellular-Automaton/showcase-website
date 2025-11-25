<script lang="ts">
  import '../app.css';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import { page } from '$app/state';
  import ShowcaseLayout from './layouts/ShowcaseLayout.svelte';

  let { children } = $props();
</script>

<ShowcaseLayout>
  <main class="min-w-0 flex-auto divide-y lg:static lg:max-h-full lg:overflow-visible dark:divide-gray-700">
    {@render children()}
  </main>
</ShowcaseLayout>

<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>
