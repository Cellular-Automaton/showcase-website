import { writable } from 'svelte/store';

// Initialize with 'light' or read from localStorage
const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
const initialTheme = storedTheme || 'light';

export const theme = writable(initialTheme);

// Update localStorage whenever the store changes
theme.subscribe((value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
  }
});

if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      theme.set(e.matches ? 'dark' : 'light');
    }
  });
}
