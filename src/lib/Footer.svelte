<script>
  import { Footer, FooterCopyright, FooterIcon } from 'flowbite-svelte';
  import { DiscordSolid, GithubSolid } from 'flowbite-svelte-icons';
</script>

<div class="footer">
  <Footer class="flex flex-row space-x-6 pb-2 pt-5 sm:justify-center">
    <!-- <div class="sm:flex sm:items-center sm:justify-between"> -->
    <FooterCopyright href="/" by="CAMI" />
    <div class="flex flex-row space-x-3 sm:justify-center">
      <FooterIcon href="/">
        <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
    </div>
    <!-- </div> -->
  </Footer>
</div>

<style>
  .footer {
    position: static;
    height: 100% !important;
  }
</style>
