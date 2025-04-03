<script lang="ts">
  import { page } from '$app/state';
  import { languages, isOfLangType } from '$lib/constants/languages/header';
  import type { Languages } from '$lib/constants/languages/home';
  import { error } from '@sveltejs/kit';
  import logo from '$lib/images/Logo.svg';
  import frflag from '$lib/images/frflag.svg';
  import ukflag from '$lib/images/ukflag.svg';
  import '../global.css';
  import TextDropdown from './components/TextDropdown.svelte';
  import UlRedirect from './components/UlRedirect.svelte';
  import { goto } from '$app/navigation';

  if (!isOfLangType(page.params?.lang as Languages)) {
    throw error(400);
  }
</script>

<div class="header">
  <button
    class="logo"
    onclick={() => {
      console.log('oui');
      goto('/' + (page.params?.lang ?? 'en'));
    }}
  >
    <img src={logo} alt="Cami logo" id="cami-logo" />
    <span id="text">CAMI</span>
  </button>
  <div class="links-ul">
    <UlRedirect url={'/' + (page.params?.lang ?? 'en')}>{languages[(page.params?.lang ?? 'en') as Languages].home}</UlRedirect>
    <UlRedirect url={'/' + (page.params?.lang ?? 'en')}>{languages[(page.params?.lang ?? 'en') as Languages].team}</UlRedirect>
    <!-- NOTE: find a way to expand this outside of header ? -->
    <TextDropdown title="Documentation">
      <UlRedirect url={'/' + (page.params?.lang ?? 'en') + '/documentation/overview'}>Overview</UlRedirect></TextDropdown
    >
  </div>
  <div></div>
</div>

<style>
  .header {
    position: -webkit-sticky; /* safari */
    position: sticky;
    top: 0;
    background-color: var(--primary-900);
    min-height: 10vh;
    z-index: 20;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 3fr 3fr 2fr;
    margin-bottom: 3vh;
    align-items: center;
  }

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin: 1vh 0 0 4vw;
    gap: 1vw;
  }

  .logo #cami-logo {
    width: 4vw;
    min-width: 60px;
    margin-top: -0.5vh;
  }

  #text {
    color: var(--primary-200);
    font-size: x-large;
    font-weight: normal;
  }

  #text:hover {
    color: var(--primary-100);
  }

  .links-ul {
    display: flex;
    flex-direction: row;
    gap: 1vw;
    margin-left: 3vw;
  }
</style>
