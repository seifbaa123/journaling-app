import { get } from "svelte/store";
import { lang } from "./store";
import type Lang from "./lang/lang-types";

export let monthsNamesList = getMonthsNamesList()
lang.subscribe((l) => monthsNamesList = getMonthsNamesList(l))

function getMonthsNamesList(l?: Lang) {
    if (l == null) l = get(lang)

    return [
        l.January,
        l.February,
        l.March,
        l.April,
        l.May,
        l.June,
        l.July,
        l.August,
        l.September,
        l.October,
        l.November,
        l.December
    ];
}
