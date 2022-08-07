import dayjs from 'dayjs';
import React, { FC, useEffect } from 'react';

import CalendarHeader from './components/CalendarHeader';
import CalendarMonth from './components/CalendarMonth';
import CalendarSideBar from './components/CalendarSideBar';

import '../../index.css';
import { Grid } from '@material-ui/core';
import { useActions } from '../../hooks/useActions';
import { CalendarActionCreators } from '../../store/reducers/calendar/action-creators';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Calendar: FC = () => {
  const { currentMonth } = useTypedSelector((state) => state.calendar);
  const { setCurentMonth } = useActions(CalendarActionCreators);

  useEffect(() => {
    if (!currentMonth.length) {
      setCurentMonth()
    }
  }, []);

  return (
    <React.Fragment>
      <Grid container
        justifyContent='space-between'
        direction='column'
      >
        <Grid container>
          <Grid
            item
            xs={2}
          >
            <CalendarSideBar />
          </Grid>
          <Grid
            item
            xs={10}>
            <Grid
              item
              xs={12}
              style={{ marginBottom: '15px' }}
            >
              <CalendarHeader />
            </Grid>
            <CalendarMonth month={currentMonth} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Calendar;
