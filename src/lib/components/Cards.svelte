<script lang="ts">
  let props = $props();
</script>

<div class={'cards ' + props.size}>
  <div class={'inside-padding ' + props.align}>
    <h1 class="title">{props.title}</h1>
    {#if props.children}
      {@render props.children()}
    {/if}
  </div>
</div>

<style>
  .cards {
    padding: 1vh 1vw;
    display: flex;
    flex-direction: column;
    border: medium white;
    border-radius: 2cap;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: var(--bs-gray-900) 7px 4px 8px;
    transition: ease-in-out 200ms;
  }
  .cards:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .lg {
    min-width: 70vw;
  }

  .md {
    min-width: 35vw;
  }

  .sm {
    min-width: 10vw;
  }

  .cards .inside-padding {
    margin: 1vh 1vw;
  }

  .cards .inside-padding .title {
    font-size: 30px;
    text-transform: capitalize;
    margin-bottom: 1vh;
    padding-bottom: 1vh;
    border-bottom: solid rgba(255, 255, 255, 0.2) 1px;
  }

  .cards .center {
    justify-items: center;
    align-items: center;
  }

  .cards .left {
    justify-items: start;
    align-items: center;
  }
</style>
