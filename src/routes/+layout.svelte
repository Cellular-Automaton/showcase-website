<script>
  import Header from '$lib/Header.svelte';
</script>

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
    padding-top: 6vh;
  }
</style>
