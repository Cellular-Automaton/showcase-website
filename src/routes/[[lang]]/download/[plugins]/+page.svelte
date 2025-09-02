<script lang="ts">
  import { languages, isOfLangType } from '$lib/constants/languages/download';
  import { Alert, Button, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs } from 'flowbite-svelte';
  import { error } from '@sveltejs/kit';
  import type { PageProps } from './$types';
  import { page } from '$app/state';
  import type { Languages } from '$lib/constants/languages/download';
  import { DownloadOutline, EyeSolid, GithubSolid, InfoCircleSolid } from 'flowbite-svelte-icons';

  let { data }: PageProps = $props();

  if (!isOfLangType(page.params?.lang as Languages)) {
    throw error(400);
  }
</script>

<svelte:head>
  <title>CAMI</title>
</svelte:head>

<div class="container">
  <h1>{languages[page.params?.lang as Languages]?.title} - {page.params.plugins}</h1>
  {#if data.releases.length > 0}
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
                <TableBodyRow class="dark bg-gray-700">
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
                <TableBodyRow class="dark bg-gray-700">
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
  {:else}
    <div class="error">
      <Alert color="blue" border>
        <div class="flex items-center gap-3">
          <InfoCircleSolid class="h-5 w-5" />
          <span>{languages[page.params?.lang as Languages]?.alert_title}</span>
        </div>
        <div class="mt-6 flex gap-2">
          <Button size="xs" outline>{languages[page.params?.lang as Languages]?.alert_button}</Button>
        </div>
      </Alert>
    </div>
  {/if}
</div>

<style>
  h1 {
    color: theme('colors.primary.10');
    font-family: Inter;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  a {
    color: theme('colors.primary.100');
    text-decoration: underline;
  }

  .download {
    display: flex;
    flex-direction: column;
    gap: 1vh;
  }

  .error {
    margin-top: 3vh;
    color: blue;
  }
</style>
