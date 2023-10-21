export function formatDate(date: { day: number, month: number, year: number }) {
    const formatNumber = (n: number) => {
        return (n >= 10) ? n.toString() : "0" + n.toString()
    }

    return `${formatNumber(date.year)}-${formatNumber(date.month)}-${formatNumber(date.day)}`
}

export function getMonthDays(month: number, year: number): number {
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

const WEEK_DAYS = 7
const FIX_WEEK_DAYS_ORDER_PREFIX = 6
export function getWeekDay(date: Date) {
    return (date.getDay() + FIX_WEEK_DAYS_ORDER_PREFIX) % WEEK_DAYS
}
