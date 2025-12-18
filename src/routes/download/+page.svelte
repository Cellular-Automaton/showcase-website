<script lang="ts">
  import Heading from 'flowbite-svelte/Heading.svelte';
  import Alert from 'flowbite-svelte/Alert.svelte';
  import type { PageProps } from './$types';
  import { DownloadOutline, GithubSolid, InfoCircleOutline } from 'flowbite-svelte-icons';
  import { m } from '$lib/paraglide/messages.js';
  import DownloadVersions from '$lib/components/DownloadVersions.svelte';

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>CAMI</title>
</svelte:head>

<div class="mt-5 flex flex-col gap-5">
  <Heading tag="h1" class="text-primary-800 dark:text-primary-400">{m.header_down()}</Heading>
  <DownloadVersions {data} />
  <div class="mt-6">
    <Alert class="flex flex-row justify-stretch p-5 shadow-lg">
      {#snippet icon()}<InfoCircleOutline class="h-5 w-5" />{/snippet}
      <a href="/download/plugins" class="underline">{m.dow_more()}</a>
    </Alert>
  </div>
</div>
