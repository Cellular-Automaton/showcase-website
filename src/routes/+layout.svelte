<script>
  import '../app.css';
  import { onMount } from 'svelte';

  onMount(() => {
    document.documentElement.classList.add('dark'); // Ensure class is applied
    document.documentElement.setAttribute('data-theme', 'dark'); // Some libraries use this
  });
</script>

<slot></slot>
