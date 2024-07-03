<script>
  import Header from '$lib/Header.svelte';
  import logo from '$lib/images/Logo.svg';
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={logo} />
</svelte:head>

<div class="app">
  <Header />
  <main><slot /></main>
</div>

<style>
  .app {
    min-height: 100vh;
    background-color: #111112;
    overflow-x: hidden;
    max-width: 100%;
  }
  main {
    z-index: 9;
    padding-top: 12vh;
  }
</style>
