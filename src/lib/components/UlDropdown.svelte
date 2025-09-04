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

<div class={'redirect'} id={props.size}>
  <a href={props.ref}>{@render props.children()}</a>
</div>

<style>
  .redirect {
    color: var(--primary-200);
    font-size: large;
    padding: 0.2vh 1vw;
  }

  .redirect:hover {
    color: var(--primary-200);
    background-color: rgba(255, 255, 255, 0.1);
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
