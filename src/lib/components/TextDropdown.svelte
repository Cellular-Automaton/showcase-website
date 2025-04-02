<script lang="ts">
  import { AngleDownOutline, AngleRightOutline } from 'flowbite-svelte-icons';
  import UlRedirect from './UlRedirect.svelte';

  let props = $props();
  let state = $state('close');

  const changeDisplay = () => {
    state = state === 'close' ? 'open' : 'close';
  };
</script>

<div class="dropdown">
  <button class="header" onclick={changeDisplay}>
    <UlRedirect>{props.title}</UlRedirect>
    {#if state === 'close'}
      <AngleRightOutline />
    {:else}
      <AngleDownOutline />
    {/if}
  </button>
  <div class={state === 'close' ? 'list-hidden' : 'list-shown'}>
    {@render props.children()}
  </div>
</div>

<style>
  .dropdown {
    display: flex;
    flex-direction: column;
  }
  .dropdown .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--primary-300);
    font: large bold;
    width: inherit;
  }

  .dropdown .list-hidden {
    visibility: collapse;
  }
  .dropdown .list-shown {
    visibility: visible;
    margin-left: 1vw;
  }
</style>
