import { browser } from '$app/environment';
import { goto } from '$app/navigation';

if (browser) {
    goto('/welcome');
}
export const prerender = true;
