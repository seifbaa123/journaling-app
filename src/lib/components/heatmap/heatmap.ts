import { formatDate, getMonthDays } from "$lib/utils"

const MONTHS = 12
const WEEKS = 53
const WEEK_DAYS = 7

export enum HeatmapState {
    empty,
    true,
    false,
}

export type Heatmap = Array<Array<HeatmapState>>

export function getHeatmap() {
    const Heatmap: Heatmap = []
    for (let i = 0; i < WEEK_DAYS; i++) {
        const row = new Array(WEEKS).fill(HeatmapState.empty, 0, WEEKS)
        Heatmap.push(row)
    }

    return Heatmap
}

export function fillHeatmap(Heatmap: Heatmap, states: Map<string, boolean>) {
    const year = new Date().getFullYear()

    for (let month = 0; month < MONTHS; month++) {
        const days = getMonthDays(month, year)
        for (let day = 1; day <= days; day++) {
            const dateStr = formatDate({ day, month, year })

            if (states.has(dateStr)) {
                const date = new Date(dateStr)
                Heatmap[date.getDay()][getWeekNumber(date)] = states.get(dateStr) ? HeatmapState.true : HeatmapState.false
            }
        }
    }

    return Heatmap
}

function getWeekNumber(date: Date) {
    const startDate = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));

    return Math.ceil(days / 7);
}
