import { Dayjs } from 'dayjs';
import React, { FC } from 'react'
import CalendarDay from '../CalendarDay';

interface Props {
  month: Dayjs[][];
};

const CalendarMonth: FC<Props> = ({ month }) => {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
      {month.map((row, i) =>
        <React.Fragment key={i}>
          {row.map((day, index) =>
            <CalendarDay day={day} key={index} rowIds={i} />
          )}
        </React.Fragment>
      )}
    </div>
  )
}

export default CalendarMonth;