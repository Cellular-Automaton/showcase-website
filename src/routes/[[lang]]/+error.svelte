<script>
  import { page } from '$app/stores';
  // import { redirect } from '@sveltejs/kit';

  // redirect($page.status, '/error');
</script>

<h1>{$page.status} - {$page.error?.message}</h1>

<style>
  h1 {
    color: violet;
    text-align: center;
  }
</style>
