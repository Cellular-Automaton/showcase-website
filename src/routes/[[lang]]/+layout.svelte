<script>
  import Background from '$lib/Background.svelte';
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import logo from '$lib/images/Logo.svg';
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={logo} />
</svelte:head>

<div class="app">
  <Header />
  <Background />
  <main><slot /></main>
  <Footer />
</div>

<style>
  .app {
    min-height: 100vh;
    background-color: theme('colors.primary.0');
    overflow-x: hidden;
    max-width: 100%;
  }
  main {
    z-index: 9;
    padding-top: 19vh;
  }
</style>
