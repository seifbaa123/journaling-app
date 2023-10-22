import { getMonthDays, getWeekDay } from "$lib/utils"

export type WeekArray = Array<number>
export type DaysArray = Array<WeekArray>

export type CalendarDate = { day: number; month: number; year: number }

export type Config = {
    journalsMap: Map<string, boolean>;
    daysArray: DaysArray;
    month: number;
    year: number;
    state: 'days' | 'months';
    onDateSelected: (date: CalendarDate) => void;
}

const WEEK_DAYS = 7
const MONTH_WEEKS = 7

export function getDaysArray(month: number, year: number): DaysArray {
    const days: DaysArray = []
    for (let i = 0; i < MONTH_WEEKS; i++) {
        const week = new Array(WEEK_DAYS).fill(0, 0, WEEK_DAYS)
        days.push(week)
    }

    const monthDays = getMonthDays(month, year)
    for (let day = 1; day <= monthDays; day++) {
        const date = new Date(`${year}-${month + 1}-${day}`)
        days[getMonthWeek(date)][getWeekDay(date)] = day
    }

    return days.filter(w => !isEmptyWeek(w))
}

function getMonthWeek(date: Date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return Math.ceil((date.getDate() + (firstDay - 1)) / 7);
}

function isEmptyWeek(week: WeekArray) {
    for (const w of week) {
        if (w != 0) return false
    }

    return true
}
