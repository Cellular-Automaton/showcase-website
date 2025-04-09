<script>
  import Background from '$lib/Background.svelte';
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import logo from '$lib/images/Logo.svg';
  import { page } from '$app/state';
  import '../app.css';
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={logo} />
</svelte:head>

<div class="app">
  <Background />
  <Header {page} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .app {
    min-height: 100vh;
    background-color: theme('colors.primary.0');
    /* overflow-x: hidden; */
    max-width: 100vw;
  }
  main {
    z-index: 10;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
</style>
