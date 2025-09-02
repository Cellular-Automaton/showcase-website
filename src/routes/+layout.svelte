<script>
  import Background from '$lib/Background.svelte';
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import logo from '$lib/images/Logo.svg';
  import { page } from '$app/state';
  import '../app.css';
  import './[[lang]]/styles.css';
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
    max-width: 100%;
    /* display: flex; */
    /* flex-direction: column; */
  }
  main {
    z-index: 10;
    min-height: 75vh;
    overflow-y: visible;
  }
</style>
