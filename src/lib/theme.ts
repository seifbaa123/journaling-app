import { browser } from '$app/environment';

export function getTheme(): boolean {
	if (!browser) return true;
	const darkTheme = localStorage.getItem('theme') === 'dark';
	setTheme(darkTheme);
	return darkTheme;
}

export function setTheme(isDarkMode: boolean) {
	if (isDarkMode) {
		document.body.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	} else {
		document.body.classList.remove('dark');
		localStorage.setItem('theme', 'light');
	}
}
