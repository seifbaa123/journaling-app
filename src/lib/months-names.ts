import { get } from "svelte/store";
import { lang } from "./store";
import type Lang from "./lang/lang-types";

export let monthsNamesList = getMonthsNamesList()
lang.subscribe((l) => monthsNamesList = getMonthsNamesList(l))

function getMonthsNamesList(l?: Lang) {
    if (l == null) l = get(lang)

    return [
        l.words.January,
        l.words.February,
        l.words.March,
        l.words.April,
        l.words.May,
        l.words.June,
        l.words.July,
        l.words.August,
        l.words.September,
        l.words.October,
        l.words.November,
        l.words.December
    ];
}
