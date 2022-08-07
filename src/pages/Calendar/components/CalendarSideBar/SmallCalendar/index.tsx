import React, { FC, useEffect, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useActions } from '../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { CalendarActionCreators } from '../../../../../store/reducers/calendar/action-creators';
import getMonth from '../../../../../helpers/getMonth';

const useStyles = makeStyles(theme => ({
  smallCalendarRoot: {
    justifyContent: 'center',
  },
  smallCalendarHeader: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
  },
  smallCalendarTitle: {
    color: 'grey',
  }
}));

const SmallCalendar: FC = () => {
  const { monthIndex, currentMonth } = useTypedSelector((state) => state.calendar);
  const [localMonth, setLocalMonth] = useState<Dayjs[][]>(currentMonth);
  const [localMonthIndex, setLocalMonthIndex] = useState<number>(monthIndex);
  const { setCurentMonth } = useActions(CalendarActionCreators);
  const classes = useStyles();

  console.log(localMonth);

  useEffect(() => {
    setLocalMonth(currentMonth);
    setLocalMonthIndex(monthIndex)
  }, [monthIndex]);

  const headerMonthTitle = () => dayjs(new Date(dayjs().year(), localMonthIndex)).format('MMMM YYYY');

  const handleDecMonthIndex = () => {
    setLocalMonthIndex(prevState => prevState - 1)
    setLocalMonth(getMonth(localMonthIndex))
  };

  const handleIncMonthIndex = () => {
    setLocalMonthIndex(prevState => prevState + 1)
    setLocalMonth(getMonth(localMonthIndex))
  };

  return (
    <Grid container className={classes.smallCalendarRoot}>
      <Button
        variant='contained'
        color='primary'
        style={{ margin: '0 auto' }}
      >
        Create
      </Button>
      <Grid item className={classes.smallCalendarHeader}>
        <Button
          size='small'
          onClick={handleDecMonthIndex}
        >
          <ArrowLeftIcon />
        </Button>
        <Typography
          variant='subtitle1'
          className={classes.smallCalendarTitle}
        >
          {headerMonthTitle()}
        </Typography>
        <Button
          size='small'
          onClick={handleIncMonthIndex}
        >
          <ArrowRightIcon />
        </Button>

      </Grid>
    </Grid >
  )
}

export default SmallCalendar;