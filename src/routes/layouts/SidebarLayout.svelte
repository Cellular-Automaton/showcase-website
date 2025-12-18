<script lang="ts">
  import { page } from '$app/state';
  import { Sidebar, SidebarGroup, SidebarButton, SidebarDropdownWrapper, SidebarItem, uiHelpers } from 'flowbite-svelte';
  import { getContext, type Snippet } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { PageTitleEntry } from '../utils/index.js';

  interface Props {
    data: any;
    children: Snippet;
  }

  let { data, children }: Props = $props();
  const pages: Record<string, PageTitleEntry> = data.pages ?? {};
  let isOpen = $state(true);
  const sidebar = uiHelpers();
  let isSidebarOpen = $state(true);
  const drawerHidden: Writable<boolean> = getContext('drawer');
  let activeUrl = $derived(page.url.pathname);
  const closeSidebar = sidebar.close;

  $effect(() => {
    isSidebarOpen = sidebar.isOpen;
    activeUrl = page.url.pathname;
  });
</script>

<SidebarButton breakpoint="lg" onclick={sidebar.toggle} class="fixed top-2 z-40 mb-2 md:top-4" />
<Sidebar
  breakpoint="lg"
  backdrop={false}
  {isOpen}
  {closeSidebar}
  {activeUrl}
  params={{ x: -50, duration: 50 }}
  classes={{ nonactive: 'p-2', active: 'p-2' }}
  class="h-full overflow-y-auto px-4 pt-20"
>
  <SidebarGroup>
    {#each Object.entries(pages) as [key, value] (key)}
      <SidebarDropdownWrapper label={value?.name ?? ''}>
        {#each value.items as item}
          <SidebarItem label={item.name} href={item.path} />
        {/each}
      </SidebarDropdownWrapper>
    {/each}
  </SidebarGroup>
  <!-- TODO: add warning that project is in dev -->
  <!-- <SidebarCta label="Beta"></SidebarCta> -->
</Sidebar>
<div
  hidden={$drawerHidden}
  class="static inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60"
  onclick={closeSidebar}
  onkeydown={closeSidebar}
  role="presentation"
></div>

<main class="overflow-y-auto px-4 pt-10">
  {@render children()}
</main>
