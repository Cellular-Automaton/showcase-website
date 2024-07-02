<script lang="ts">
  import limg from '$lib/images/lenia-image.png';
</script>

<svelte:head>
  <title>CAMI - Home</title>
</svelte:head>

<div>
  <div class="container">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={limg} alt="lenia image." class="lenia-high" />
  </div>
</div>

<style>
  .lenia-high {
    z-index: 1;
    position: absolute;
    left: -41px;
    top: 1vh;
    width: 393.585px;
    height: 305.576px;
    transform: rotate(87deg);
  }
</style>
