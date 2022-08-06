import { Dayjs } from 'dayjs';
import React, { FC, useState } from 'react';

import getMonth from '../../helpers/getMonth';
import CalendarHeader from './components/CalendarHeader';
import CalendarMonth from './components/CalendarMonth';
import CalendarSideBar from './components/CalendarSideBar';

import '../../index.css';
import { Box, Grid } from '@material-ui/core';

const Calendar: FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Dayjs[][]>(getMonth());

  return (
    <React.Fragment>
      <Grid container
        justifyContent='space-between'
        direction='column'
      >
        {/* <Grid item xs={1}>
          <CalendarSideBar />
        </Grid> */}
        <Grid item xs={12} style={{ marginBottom: '15px' }}>
          <CalendarHeader />
        </Grid>
        <Grid item xs={12}>
          <CalendarMonth month={currentMonth} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Calendar;
