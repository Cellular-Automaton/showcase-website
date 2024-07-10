<script>
</script>

<div class="app">
  <main>
    <slot />
  </main>

  <!-- <footer>
        <a href="mailto:cami.epitech@gmail.com">Contact us!</a>
    </footer> -->
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--color-bg-1);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
