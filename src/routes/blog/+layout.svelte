<script>
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article>
  <h1>{title}</h1>
  <slot />
</article>
