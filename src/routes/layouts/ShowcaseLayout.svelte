<script lang="ts">
	import { page } from '$app/state';
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Button, DarkMode } from 'flowbite-svelte';
	import { _, locale } from 'svelte-i18n';
	import { getLocale, setLocale } from '../utils/localeStore.js';

	const languages = [
		{
			flag_path: '/images/frflag.svg',
			locale_name: 'fr'
		},
		{
			flag_path: '/images/ukflag.svg',
			locale_name: 'en'
		}
	];
	let activeIndex = $state($locale);

	console.log(_);
	let logo = '/images/cami_logo.svg';
	let { children } = $props();
	let activeUrl = $state(page.url.pathname);
	$effect(() => {
		activeIndex = $locale;
	});
</script>

<header
	class="sticky top-0 z-51 w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900"
>
	<Navbar>
		<NavBrand href="/">
			<img src={logo} alt="Cami logo" class="me-3 h-6 sm:h-9" />
			<span>CAMI</span>
		</NavBrand>
		<NavHamburger class="order-3 m-0 ml-3 lg:hidden" />
		<NavUl
			{activeUrl}
			class="order-1 ml-auto w-full lg:order-0 lg:block lg:w-auto"
			classes={{
				ul: 'flex flex-col lg:flex-row lg:my-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-4'
			}}
		>
			<NavLi class="lg:mb-0 lg:px-2" href="/docs/overview">Docs</NavLi>
			<NavLi class="lg:mb-0 lg:px-2" href="/plugins">Plugins</NavLi>
		</NavUl>

		<div class="order-1 ml-auto flex items-center lg:order-2">
			<DarkMode />
			{#each languages as language}
				<Button onclick={async () => await setLocale(language.locale_name)} pill outline>
					<img alt="Language flag" src={language.flag_path} />
				</Button>
			{/each}
		</div>
	</Navbar>
</header>

<div class="md:mx-auto lg:flex">
	{@render children()}
</div>
