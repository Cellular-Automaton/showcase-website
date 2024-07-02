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
  }
  main {
    z-index: 9;
  }
</style>
