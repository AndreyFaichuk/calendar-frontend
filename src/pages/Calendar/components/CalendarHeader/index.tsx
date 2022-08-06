import React, { FC } from 'react';
import { Button, Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CalendarHeader: FC = () => {
  return (
    <Grid container
      justifyContent='space-between'
    >
      <Grid item>
        <Button variant='contained' size='medium' style={{ marginRight: '5px' }}>
          Today
        </Button>
        <Button size='small'>
          <ArrowBackIosNewIcon />
        </Button>
        <Button size='small'>
          <ArrowForwardIosIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default CalendarHeader;