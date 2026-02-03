<script lang="ts">
  import { page } from '$app/state';
  import { SidebarGroup, SidebarButton, SidebarDropdownWrapper, uiHelpers } from 'flowbite-svelte';
  import Tooltip from "flowbite-svelte/Tooltip.svelte";
  import Sidebar from "flowbite-svelte/Sidebar.svelte";
  import SidebarItem from "flowbite-svelte/SidebarItem.svelte";
  import CloseButton from "flowbite-svelte/CloseButton.svelte"
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
    backdrop={false}
    {isOpen}
    closeSidebar={closeSidebar}
    {activeUrl}
    params={{ x: -50, duration: 50 }}
    classes={{ nonactive: "p-2", active: "p-2" }}
    class="z-50 h-full pt-22"
  >
    <CloseButton onclick={closeSidebar} color="gray" class="absolute top-16 right-2 p-2 md:hidden" />
    <SidebarGroup>
      {#each Object.entries(pages) as [key, value] (key)}
        <SidebarDropdownWrapper label={value?.name ?? ''}>
          {#each value.items as item}
            <SidebarItem label={item.name} href={item.path} />
            <Tooltip >{item.description}</Tooltip>
          {/each}
        </SidebarDropdownWrapper>
      {/each}
    </SidebarGroup>
  </Sidebar>
</div>

<div class="flex flex-row overflow-x-clip">
  <div class="placeholder"></div>
  {@render children()}
</div>

<style>
  .placeholder {
    width: 265px;
    min-width: 265px;
    @media (width <= 48rem /* 768px */) {
      width: 0px;
      min-width: 0px;
    }
  }
</style>
