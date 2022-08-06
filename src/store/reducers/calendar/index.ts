import { CalendarActions } from './actions';
import { CalendarAction, CalendarState } from './types';

const initialState: CalendarState = {
  currentMonth: [],
  monthIndex: 0
};

export default function calendar(state = initialState, action: CalendarAction): CalendarState {
  switch (action.type) {
    case CalendarActions.SET_CALENDAR_MONTH:
      return {...state, currentMonth: action.payload};

    case CalendarActions.SET_CALENDAR_MONTH_INDEX:
      return {...state, monthIndex: action.payload};

    default:
      return state;
  }
}
