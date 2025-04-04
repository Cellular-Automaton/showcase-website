<script lang="ts">
  import { AngleDownOutline, AngleRightOutline } from 'flowbite-svelte-icons';
  import UlRedirect from './UlRedirect.svelte';
  import { onNavigate } from '$app/navigation';

  let props = $props();
  let state = $state('close');

  const changeDisplay = () => {
    state = state === 'close' ? 'open' : 'close';
  };

  onNavigate(() => {
    state = 'close';
  });
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
    display: inline-block;
    flex-direction: column;
  }
  .dropdown .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: var(--primary-300);
    gap: 0.5vw;
    font: larger;
    width: inherit;
  }
  .dropdown .header:hover {
    color: var(--primary-10);
  }

  .dropdown .list-hidden {
    display: none;
    visibility: collapse;
  }
  .dropdown .list-shown {
    visibility: visible;
    display: flex;
    flex-direction: column;
    background-color: var(--primary-800);
    min-width: 200px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 100;
    padding: 0.5vh 0vw;
    border-radius: 5px;
    gap: 0.5vh;
    position: absolute;
  }
</style>
