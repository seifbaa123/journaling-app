import { writable } from "svelte/store";
import type Lang from "./lang/lang-types";
import { getLanguage } from "./lang/lang";
import { getTheme } from "./theme";

export const lang = writable<Lang>(getLanguage())
export const darkMode = writable<boolean>(getTheme())
