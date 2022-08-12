import React, { FC, useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import dayjs from 'dayjs';

import { useActions } from '../../../../hooks/useActions';
import { CalendarActionCreators } from '../../../../store/reducers/calendar/action-creators';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import headerMonthTitle from '../../../../helpers/headerMonthTitle';

const CalendarHeader: FC = () => {
  const { monthIndex } = useTypedSelector((state) => state.calendar);
  const { setCurentMonth } = useActions(CalendarActionCreators);

  const handleDecMonthIndex = () => {
    setCurentMonth(monthIndex - 1)
  };

  const handleIncMonthIndex = () => {
    setCurentMonth(monthIndex + 1)
  };

  const handleTodayIndex = () => {
    setCurentMonth(dayjs().month())
  };

  return (
    <Grid container>
      <Grid item>
        <Button
          variant='contained'
          size='medium'
          style={{ marginRight: '5px' }}
          onClick={handleTodayIndex}
        >
          Today
        </Button>
        <Button
          size='small'
          onClick={handleDecMonthIndex}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          size='small'
          onClick={handleIncMonthIndex}
          style={{ marginRight: '5px' }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Grid>
      <Typography
        variant='h6'
        style={{ color: 'grey', fontWeight: 'bold' }}
      >
        {headerMonthTitle(monthIndex)}
      </Typography>
    </Grid>
  )
}

export default CalendarHeader;