export function formatDate(date: { day: number, month: number, year: number }) {
    const formatNumber = (n: number) => {
        return (n >= 10) ? n.toString() : "0" + n.toString()
    }

    return `${formatNumber(date.year)}-${formatNumber(date.month)}-${formatNumber(date.day)}`
}
