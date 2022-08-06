import React, { FC } from 'react';
import { Button, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import dayjs from 'dayjs';

import { useActions } from '../../../../hooks/useActions';
import { CalendarActionCreators } from '../../../../store/reducers/calendar/action-creators';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

const CalendarHeader: FC = () => {
  const { currentMonth, monthIndex } = useTypedSelector((state) => state.calendar);
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
    <Grid container
      justifyContent='space-between'
    >
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
        >
          <ArrowForwardIosIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default CalendarHeader;