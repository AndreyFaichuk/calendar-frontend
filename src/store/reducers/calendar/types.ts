import { Dayjs } from 'dayjs';
import { CalendarActions } from './actions';

export interface CalendarState {
  currentMonth: Dayjs[][];
  monthIndex: number;
  smallMonthIndex: number;
};

export interface SetCalendarCurrentMonth {
  type: CalendarActions.SET_CALENDAR_MONTH;
  payload: Dayjs[][];
};

export interface SetCalendarCurrentMonthIndex {
  type: CalendarActions.SET_CALENDAR_MONTH_INDEX;
  payload: number;
};

export interface SetCalendarSmallMonthIndex {
  type: CalendarActions.SET_SMALL_CALENDAR_MONTH_INDEX;
  payload: number;
};

export type CalendarAction = SetCalendarCurrentMonth | SetCalendarCurrentMonthIndex | SetCalendarSmallMonthIndex;
