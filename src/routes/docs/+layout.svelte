<script lang="ts">
  import SidebarLayout from '../layouts/SidebarLayout.svelte';

  let { data, children } = $props();
</script>

<SidebarLayout {data}>
    {@render children()}
</SidebarLayout>
