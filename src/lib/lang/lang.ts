import { lang } from '$lib/store';

import en from '$lib/lang/en';
import ar from '$lib/lang/ar';
import { browser } from '$app/environment';

export function setLanguage(code: 'en' | 'ar') {
	if (code === 'ar') {
		lang.set(ar);
		document.body.dir = 'rtl';
	} else {
		lang.set(en);
		document.body.dir = 'ltr';
	}

	localStorage.setItem('lang', code);
}

export function getLanguage() {
	if (!browser) {
		return ar;
	}

	const code = localStorage.getItem('lang');
	if (code === 'en') {
		document.body.dir = 'ltr';
		return en;
	}

	document.body.dir = 'rtl';
	return ar;
}
