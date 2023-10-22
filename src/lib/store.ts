import { writable } from "svelte/store";
import type Lang from "./lang/lang-types";
import { getLanguage } from "./lang/lang";

export const lang = writable<Lang>(getLanguage())
