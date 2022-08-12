import dayjs from 'dayjs';

const headerMonthTitle = (index: number) => dayjs(new Date(dayjs().year(), index)).format('MMMM YYYY');

export default headerMonthTitle;