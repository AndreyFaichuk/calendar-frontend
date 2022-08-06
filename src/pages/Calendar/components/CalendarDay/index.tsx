import { makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import dayjs, { Dayjs } from 'dayjs';
import React, { FC } from 'react';

interface Props {
  day: Dayjs;
  rowIds: number;
};

const useStyles = makeStyles<Theme>(theme => ({
  dayNumberToday: {
    background: '#3f51b5',
    color: 'white',
    borderRadius: '20px',
    width: 'auto',
    height: 'auto',
    padding: '2px 5px 2px 5px'
  },
  dayWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '145px',
    margin: '3px',
    padding: '3px'
  },
  dayHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center'
  },
}));

const CalendarDay: FC<Props> = ({ day, rowIds }) => {

  const getCurrentDay = day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? '#3f51b5' : '';

  const classes = useStyles();

  return (
    <Paper className={classes.dayWrapper} elevation={2} square>
      <header className={classes.dayHeader}>
        {rowIds === 0 &&
          <Typography variant='subtitle1'>
            {day.format('ddd').toLocaleUpperCase()}
          </Typography>
        }
        <Typography variant='subtitle2' className={getCurrentDay ? classes.dayNumberToday : ''}>
          {day.format('DD')}
        </Typography>
      </header>
    </Paper>
  )
}

export default CalendarDay;