import type { DaysArray, WeekArray } from "./calendar-types"

const WEEK_DAYS = 7
const MONTH_WEEKS = 7
const FIX_WEEK_DAYS_ORDER_PREFIX = 6

export default function getDaysArray(month: number, year: number): DaysArray {
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

function getWeekDay(date: Date) {
    return (date.getDay() + FIX_WEEK_DAYS_ORDER_PREFIX) % WEEK_DAYS
}

function getMonthWeek(date: Date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return Math.ceil((date.getDate() + (firstDay - 1)) / 7);
}

function getMonthDays(month: number, year: number): number {
    month++
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31
        case 4: case 6: case 9: case 11:
            return 30
        case 2:
            return year % 4 === 0 ? 29 : 28
        default:
            throw new Error(`DateError: Invalid month number ${month}`)
    }
}

function isEmptyWeek(week: WeekArray) {
    for (const w of week) {
        if (w != 0) return false
    }

    return true
}
