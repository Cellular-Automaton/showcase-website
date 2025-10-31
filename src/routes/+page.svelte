<script lang="ts">
  import ShowcaseLayout from './layouts/ShowcaseLayout.svelte';
  import SidebarLayout from './layouts/SidebarLayout.svelte';

  let { data } = $props();
</script>

<ShowcaseLayout>
  <main class="min-w-0 flex-auto divide-y lg:static lg:max-h-full lg:overflow-visible dark:divide-gray-700">
    <SidebarLayout {data}>
      <p>oui</p>
    </SidebarLayout>
  </main>
</ShowcaseLayout>
