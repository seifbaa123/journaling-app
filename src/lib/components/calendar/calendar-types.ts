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
