<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';

  let props = $props();
  let url = $state(page.url.pathname);
  let compare = props.ref;

  afterNavigate(() => {
    url = page.url.pathname;
  });
</script>

{#if props.header}
  <div class={'redirect-inactive'} id={props.size}>
    <a href={props.ref}>{@render props.children()}</a>
  </div>
{:else}
  <div class={url === compare ? 'redirect-active' : 'redirect-inactive'} id={props.size}>
    <a href={props.ref}>{@render props.children()}</a>
  </div>
{/if}

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

  #x-large {
    font-size: x-large;
  }

  #larger {
    font-size: larger;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  div:hover {
    color: var(--primary-100);
  }
</style>
