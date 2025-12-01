<script lang="ts">
  import { formatDate } from '$lib/utils.js';
  export let post;
</script>

{#key post.slug}
  <a class="card card-hover mx-4 mt-4 w-full max-w-4xl overflow-hidden" href={`/blog/${post.slug}`}>
    <header class="mb-4">
      {#if post.image}
        <img src={post.image} alt="blog banner" />
      {/if}
    </header>

    <div class="space-y-4 p-4">
      <h3 class="h3" data-toc-ignore>{post.title}</h3>
      <article>
        <p>
          {post.description}
        </p>
      </article>
    </div>
    <hr class="opacity-50" />
    <footer class="flex items-center justify-start space-x-4 p-4">
      <div class="flex flex-auto items-center justify-between">
        <small>On {formatDate(post.date)}</small>
      </div>
    </footer>
  </a>
{/key}
