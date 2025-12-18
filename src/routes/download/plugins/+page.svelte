<script lang="ts">
  import Heading from 'flowbite-svelte/Heading.svelte';
  import type { PageProps } from './$types';
  import { m } from '$lib/paraglide/messages.js';
  import DownloadVersions from '$lib/components/DownloadVersions.svelte';

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>CAMI</title>
</svelte:head>

<div class="mt-10 flex flex-col gap-5">
  <Heading tag="h1" class="text-primary-800 dark:text-primary-400">{m.header_plugins()}</Heading>
  <div class="mt-5 flex flex-col gap-5">
    {#each data.releases as plugin}
      <Heading tag="h2" class="text-primary-700 dark:text-primary-500">{plugin.name}</Heading>
      <DownloadVersions data={plugin} />
    {/each}
  </div>
</div>
