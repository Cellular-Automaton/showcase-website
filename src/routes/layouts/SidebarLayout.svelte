<script lang="ts">
  import { page } from '$app/state';
  import { Sidebar, SidebarGroup, SidebarButton, SidebarDropdownWrapper, SidebarItem, uiHelpers } from 'flowbite-svelte';
  import { type Snippet } from 'svelte';
  import type { PageTitleEntry } from '../utils/index.js';

  interface Props {
    data: any;
    children: Snippet;
  }

  let { data, children }: Props = $props();
  const pages: Record<string, PageTitleEntry> = data.pages ?? {};
  let isOpen = $state(true);
  const sidebar = uiHelpers();
  let activeUrl = $derived(page.url.pathname);
  const closeSidebar = sidebar.close;

  $effect(() => {
    isOpen = sidebar.isOpen;
    activeUrl = page.url.pathname;
  });
</script>

<SidebarButton onclick={sidebar.toggle} class="mb-2" />
<div class="relative">
  <Sidebar
    breakpoint="lg"
    backdrop={false}
    {isOpen}
    alwaysOpen
    isSingle={false}
    {closeSidebar}
    {activeUrl}
    params={{ x: -50, duration: 50 }}
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
  </Sidebar>
</div>

{@render children()}
