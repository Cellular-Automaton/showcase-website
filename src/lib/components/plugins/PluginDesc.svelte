<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { page } from '$app/state';
  import Cards from '../Cards.svelte';

  let props = $props();
  let language: string = $state(page.params?.lang ?? 'en');
</script>

<div class="plugin">
  <!-- header -->

  <Cards size="sm" align="center" title={props.name}>
    <div class="contents">
      <Button href={`https://github.com/Cellular-Automaton/${props.name}/releases/latest`} outline><p>Go to the latest release</p></Button>
      <Button href={'/' + language + `/download/${props.name}`} outline><p>See all versions</p></Button>
    </div>
  </Cards>
</div>

<style>
  .plugin {
    display: flex;
    height: 100;
    width: max-content;
    flex-direction: column;
    margin-top: 3vh;
  }

  .contents {
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    text-align: start;
    align-content: start;
    width: max-content;
    gap: 1vh;
  }

  p {
    color: var(--primary-10);
  }
</style>
