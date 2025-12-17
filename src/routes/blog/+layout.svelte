<script>
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article>
  <h1 class="dark:text-primary-50">{title}</h1>
  <slot />
</article>
