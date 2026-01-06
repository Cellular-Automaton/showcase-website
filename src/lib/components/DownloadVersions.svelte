<script lang="ts">
  import { Button, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs } from 'flowbite-svelte';
  import type { PageProps } from './$types';
  import { CloseOutline, DownloadOutline, GithubSolid } from 'flowbite-svelte-icons';

  let { data }: PageProps = $props();
</script>

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
          {#each data.releases.slice(0, 10) as release}
            <TableBodyRow>
              <TableBodyCell>{release.name}</TableBodyCell>
              <TableBodyCell>{release.tag}</TableBodyCell>
              <TableBodyCell>{release.released}</TableBodyCell>
              <TableBodyCell>
                {#each release.windows as asset}
                  <a href={asset.browser_download_url}><Button outline><DownloadOutline class="me-2" /> {asset.name}</Button></a>
                {/each}
                {#if release.windows == undefined || release.windows.length == 0}
                  <CloseOutline class="h-6 w-6 shrink-0" />
                {/if}
              </TableBodyCell>
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
          {#each data.releases.slice(0, 10) as release}
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
                {#if release.linux == undefined || release.linux.length == 0}
                  <CloseOutline class="h-6 w-6 shrink-0" />
                {/if}
              </TableBodyCell>
              <TableBodyCell>
                <a href={release.url}><Button pill size="sm"><GithubSolid class="me-2" /> {release.name}</Button></a>
              </TableBodyCell>
            </TableBodyRow>
          {/each}
        </TableBody>
      </Table>
    </TabItem>
    <TabItem title="MacOs">
      <Table striped={true} shadow>
        <TableHead>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Version</TableHeadCell>
          <TableHeadCell>Release date</TableHeadCell>
          <TableHeadCell>Download url</TableHeadCell>
          <TableHeadCell>Release url</TableHeadCell>
        </TableHead>
        <TableBody>
          {#each data.releases.slice(0, 10) as release}
            <TableBodyRow>
              <TableBodyCell>{release.name}</TableBodyCell>
              <TableBodyCell>{release.tag}</TableBodyCell>
              <TableBodyCell>{release.released}</TableBodyCell>
              <TableBodyCell>
                <div class="download">
                  {#each release.macos as asset}
                    <a href={asset.browser_download_url}><Button outline><DownloadOutline class="me-2" /> {asset.name}</Button></a>
                  {/each}
                </div>
                {#if release.macos == undefined || release.macos.length == 0}
                  <CloseOutline class="h-6 w-6 shrink-0" />
                {/if}
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
