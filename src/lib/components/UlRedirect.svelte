<script lang="ts">
  import { page } from '$app/state';

  let props = $props();
  let url = page.url.pathname;
  let compare = props.ref;
</script>

<div class={url === compare ? 'redirect-active' : 'redirect-inactive'}>
  <a href={props.ref}>{@render props.children()}</a>
</div>

<style>
  .redirect-active {
    color: var(--primary-200);
    font-size: larger;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 0.5vh 0.5vw;
    margin-left: -0.5vw;
  }

  .redirect-inactive {
    color: var(--primary-200);
    font-size: large;
  }

  div:hover {
    color: var(--primary-100);
  }
</style>
