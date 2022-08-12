import React, { FC, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import getMonth from '../../../../../helpers/getMonth';
import headerMonthTitle from '../../../../../helpers/headerMonthTitle';
import { CalendarActionCreators } from '../../../../../store/reducers/calendar/action-creators';
import { useActions } from '../../../../../hooks/useActions';

const useStyles = makeStyles(theme => ({
  smallCalendarRoot: {
    justifyContent: 'center',
  },
  smallCalendarHeader: {
    display: 'flex',
    alignItems: 'center',
    margin: '15px 0 10px 0',
  },
  smallCalendarTitle: {
    color: 'grey',
    margin: '0 10px'
  },
  smallCalendarWeek: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
  },
  smallCalendarDay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: '#F5F5F5'
    },
  }
}));

const SmallCalendar: FC = () => {
  const { monthIndex, currentMonth, smallMonthIndex } = useTypedSelector((state) => state.calendar);
  const [localMonth, setLocalMonth] = useState<Dayjs[][]>(currentMonth);
  const [localMonthIndex, setLocalMonthIndex] = useState<number>(smallMonthIndex);
  const { SetSmallMonthIndex } = useActions(CalendarActionCreators);
  const classes = useStyles();

  useEffect(() => {
    setLocalMonth(getMonth(smallMonthIndex))
    setLocalMonthIndex(smallMonthIndex)
  }, [smallMonthIndex]);

  useEffect(() => {
    setLocalMonth(currentMonth)
    setLocalMonthIndex(monthIndex)
  }, [monthIndex]);

  const handleDecMonthIndex = () => {
    SetSmallMonthIndex(smallMonthIndex - 1)
    setLocalMonth(getMonth(localMonthIndex))
  };

  const handleIncMonthIndex = () => {
    SetSmallMonthIndex(smallMonthIndex + 1)
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
          {headerMonthTitle(localMonthIndex)}
        </Typography>
        <Button
          size='small'
          onClick={handleIncMonthIndex}
        >
          <ArrowRightIcon />
        </Button>
      </Grid>
      <Grid item xs={11}>
        <div className='grid grid-cols-7 grid-rows-6'>
          {localMonth[0]?.map((day, index) =>
            <div key={index} className={classes.smallCalendarWeek}>
              <Typography variant='overline'>
                {day.format('dd').charAt(0)}
              </Typography>
            </div>
          )}
          {localMonth.map((row, index) =>
            <React.Fragment key={index}>
              {row.map((day, i) =>
                <div key={i} className={classes.smallCalendarDay}>
                  <Typography variant='caption'>
                    {day.format('D')}
                  </Typography>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      </Grid>
    </Grid>
  )
}

export default SmallCalendar;