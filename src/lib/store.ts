import { writable } from "svelte/store";
import type Lang from "./lang/lang-types";

import en from "$lib/lang/en"
import ar from "$lib/lang/ar"

export const lang = writable<Lang>(ar)
