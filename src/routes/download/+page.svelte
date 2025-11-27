<script lang="ts">
  import { Button, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Heading, Alert } from 'flowbite-svelte';
  import type { PageProps } from './$types';
  import { DownloadOutline, GithubSolid, InfoCircleOutline } from 'flowbite-svelte-icons';
  import { m } from '$lib/paraglide/messages.js';

  let { data }: PageProps = $props();
  console.log(data);
</script>

<svelte:head>
  <title>CAMI</title>
</svelte:head>

<div class="mt-5 flex flex-col gap-5">
  <Heading tag="h1" class="text-primary-800 dark:text-primary-400">{m.header_down()}</Heading>
  <div>
    <Tabs tabStyle="underline">
      <TabItem open title="Windows">
        <Table striped={true} shadow>
          <TableHead>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Version</TableHeadCell>
            <TableHeadCell>Release date</TableHeadCell>
            <TableHeadCell>Download url</TableHeadCell>
            <TableHeadCell>Release url</TableHeadCell>
          </TableHead>
          <TableBody>
            {#each data.releases as release}
              <TableBodyRow>
                <TableBodyCell>{release.name}</TableBodyCell>
                <TableBodyCell>{release.tag}</TableBodyCell>
                <TableBodyCell>{release.released}</TableBodyCell>
                {#each release.windows as asset}
                  <TableBodyCell>
                    <a href={asset.browser_download_url}><Button outline><DownloadOutline class="me-2" /> {asset.name}</Button></a>
                  </TableBodyCell>
                {/each}
                <TableBodyCell>
                  <a href={release.url}><Button pill size="sm"><GithubSolid class="me-2" /> {release.name}</Button></a>
                </TableBodyCell>
              </TableBodyRow>
            {/each}
          </TableBody>
        </Table>
      </TabItem>
      <TabItem title="Linux">
        <Table striped={true} shadow>
          <TableHead>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Version</TableHeadCell>
            <TableHeadCell>Release date</TableHeadCell>
            <TableHeadCell>Download url</TableHeadCell>
            <TableHeadCell>Release url</TableHeadCell>
          </TableHead>
          <TableBody>
            {#each data.releases as release}
              <TableBodyRow>
                <TableBodyCell>{release.name}</TableBodyCell>
                <TableBodyCell>{release.tag}</TableBodyCell>
                <TableBodyCell>{release.released}</TableBodyCell>
                <TableBodyCell>
                  <div class="download">
                    {#each release.linux as asset}
                      <a href={asset.browser_download_url}><Button outline><DownloadOutline class="me-2" /> {asset.name}</Button></a>
                    {/each}
                  </div>
                </TableBodyCell>
                <TableBodyCell>
                  <a href={release.url}><Button pill size="sm"><GithubSolid class="me-2" /> {release.name}</Button></a>
                </TableBodyCell>
              </TableBodyRow>
            {/each}
          </TableBody>
        </Table>
      </TabItem>
    </Tabs>
  </div>
  <div class="mt-6">
    <Alert class="flex flex-row justify-stretch p-5 shadow-lg">
      {#snippet icon()}<InfoCircleOutline class="h-5 w-5" />{/snippet}
      <a href="/download/plugins" class="underline">{m.dow_more()}</a>
    </Alert>
  </div>
</div>
