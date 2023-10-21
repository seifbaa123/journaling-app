import { getWeekDay } from "$lib/utils"

const WEEKS = 53
const WEEK_DAYS = 7

export enum HeatmapState {
    empty,
    true,
    false,
}

export type Heatmap = Array<Array<HeatmapState>>

export function getHeatmap() {
    const heatmap: Heatmap = []
    for (let i = 0; i < WEEK_DAYS; i++) {
        const row = new Array(WEEKS).fill(HeatmapState.empty, 0, WEEKS)
        heatmap.push(row)
    }

    return heatmap
}

export function fillHeatmap(heatmap: Heatmap, states: Map<string, boolean>) {
    states.forEach((state, dateStr) => {
        const date = new Date(dateStr)
        heatmap[getWeekDay(date)][getWeekNumber(date)] = state ? HeatmapState.true : HeatmapState.false
    })

    return heatmap
}

function getWeekNumber(date: Date) {
    const startDate = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));

    return Math.ceil(days / 7);
}
