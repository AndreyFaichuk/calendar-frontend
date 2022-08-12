import { Dayjs } from 'dayjs';
import { CalendarActions } from './actions';
import { SetCalendarCurrentMonth, SetCalendarCurrentMonthIndex, SetCalendarSmallMonthIndex } from './types';

export const CalendarActionCreators = {
  setCurentMonth: (currentMonth: Dayjs[][]): SetCalendarCurrentMonth => ({
    type: CalendarActions.SET_CALENDAR_MONTH,
    payload: currentMonth
  }),
  SetMonthIndex: (index: number): SetCalendarCurrentMonthIndex => ({
    type: CalendarActions.SET_CALENDAR_MONTH_INDEX,
    payload: index
  }),
  SetSmallMonthIndex: (index: number): SetCalendarSmallMonthIndex => ({
    type: CalendarActions.SET_SMALL_CALENDAR_MONTH_INDEX,
    payload: index
  })
};
