<script lang="ts">
  import '../app.css';
  import { browser } from '$app/environment';
  import '$lib/i18n';
  import { init, locale, waitLocale } from 'svelte-i18n';
  import { Alert } from 'flowbite-svelte';

  async function load() {
    const localeFromStorage = localStorage.getItem('locale');

    if (browser) {
      locale.set(localeFromStorage ?? window.navigator.language);
    }
    await waitLocale();
    return await Promise.allSettled([]);
  }

  let { children } = $props();
  const isLoaded = load();
</script>

{#await isLoaded}
  <Alert>
    <span class="font-medium">Warning</span>
    i18n config was not properly loaded
  </Alert>
{:then}
  {@render children()}
{/await}
