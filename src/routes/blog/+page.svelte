<script lang="ts">
  const { data } = $props();
</script>

<h1>Blog</h1>
<ul>
  {#each data.posts as post}
    <li>
      <a href={`/blog/${post.slug}`}>{post.title}</a>
    </li>
  {/each}
</ul>
