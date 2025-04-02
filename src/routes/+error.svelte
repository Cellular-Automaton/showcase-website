<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Background from '$lib/Background.svelte';
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import logo from '$lib/images/Logo.svg';

  const storageKey = 'color-theme';
  let preference: string | null = null;

  const updateTheme = () => {
    const app = document.querySelector('.app');
    if (app) {
      app.setAttribute('data-theme', preference || 'light');
    }
  };

  onMount(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Load preference from localStorage or fallback to system preference
    preference = localStorage.getItem(storageKey);
    if (!preference) {
      preference = darkModeQuery.matches ? 'dark' : 'light';
      localStorage.setItem(storageKey, preference);
    }

    updateTheme();

    // Listen for system-level theme changes
    darkModeQuery.addEventListener('change', (event) => {
      preference = event.matches ? 'dark' : 'light';
      localStorage.setItem(storageKey, preference);
      updateTheme();
    });

    // Listen for localStorage changes
    const onStorageChange = (event: StorageEvent) => {
      console.log(event);
      if (event.key === storageKey && event.newValue) {
        preference = event.newValue;
        updateTheme();
      }
    };
    window.addEventListener('storage', onStorageChange);

    return () => {
      // Cleanup listeners
      darkModeQuery.removeEventListener('change', () => {});
      window.removeEventListener('storage', onStorageChange);
    };
  });
  // Reactively update localStorage whenever preference changes
  $: if (preference) {
    localStorage.setItem(storageKey, preference);
    updateTheme();
  }
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={logo} />
</svelte:head>

<div class="app" data-theme={preference}>
  <!-- <Header /> -->
  <Background />
  <h1>{$page.status} - {$page.error?.message}</h1>
  <Footer />
</div>

<style>
  h1 {
    color: theme('colors.primary.500');
    text-align: center;
    padding-top: 19vh;
    font-size: 9vh;
  }
  .app {
    min-height: 100vh;
    background-color: var(--bg-color, var(--default-bg-color));
    overflow-x: hidden;
    max-width: 100%;
  }
  :global([data-theme='dark']) {
    --default-bg-color: theme('colors.primary.0');
  }
  :global([data-theme='light']) {
    --default-bg-color: theme('colors.primary.10');
  }
</style>
