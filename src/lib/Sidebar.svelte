<script lang="ts">
  import { page } from '$app/state';
  import { languages, isOfLangType } from '$lib/constants/languages/documentation/sidebar';
  import type { Languages } from '$lib/constants/languages/home';
  import { error } from '@sveltejs/kit';
  import '../global.css';
  import TextDropdown from './components/TextDropdown.svelte';
  import UlRedirect from './components/UlRedirect.svelte';

  if (!isOfLangType(page.params?.lang as Languages)) {
    throw error(400);
  }
</script>

<div class="sidebar">
  <li class="elements">
    <UlRedirect ref={(('/' + page.params?.lang) as Languages) + '/documentation/overview'}
      >{languages[page.params?.lang as Languages].overview}</UlRedirect
    >
    <TextDropdown title={languages[page.params?.lang as Languages].get_started}>
      <UlRedirect ref={(('/' + page.params?.lang) as Languages) + '/documentation/installation'}
        >{languages[page.params?.lang as Languages].installation}</UlRedirect
      >
    </TextDropdown>
    <TextDropdown title={languages[page.params?.lang as Languages].api}>
      <UlRedirect ref={(('/' + page.params?.lang) as Languages) + '/documentation/api/'}
        >{languages[page.params?.lang as Languages].api}</UlRedirect
      >
    </TextDropdown>
  </li>
</div>

<style>
  .sidebar {
    background-color: var(--primary-900);
    opacity: 0.97;
    min-width: 10vw;
    max-width: 15vw;
    min-height: 100vh;
    top: 10vh;
    position: fixed;
    z-index: 2;
    box-shadow:
      var(--primary-900) 0px 30px 60px -12px inset,
      var(--primary-0) 0px 18px 36px -18px inset;
  }
  .elements {
    display: flex;
    flex-direction: column;
    color: var(--primary-400);
    margin: 4vh 1vw;
    gap: 1vh;
  }
</style>
