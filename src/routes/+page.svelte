<script lang="ts">
  import limg from '$lib/images/lenia-image.png';
</script>

<svelte:head>
  <title>CAMI - Home</title>
</svelte:head>

<div>
  <div class="container">
    <img src={limg} alt="lenia with colours." class="lenia-top" />
    <img src={limg} alt="lenia with colours." class="lenia-bottom" />
  </div>
</div>

<style>
  .lenia-top {
    z-index: 1;
    position: fixed;
    left: -4vw;
    top: 1vh;
    width: 393.585px;
    height: 305.576px;
    transform: rotate(87deg);
  }
  .lenia-bottom {
    z-index: 1;
    position: fixed;
    right: -10vw;
    overflow: hidden;
    bottom: -10vh;
    width: 393.585px;
    height: 305.576px;
    transform: rotate(47deg);
  }
</style>
