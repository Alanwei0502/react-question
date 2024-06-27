import { RangeProps } from '.';
import { appDayjs } from '../../utils/dayjs.utils';
import classes from './RangeCalendar.module.css'
import DateItem from './DateItem';

type RrangeCalenderBodyProps = {
  sx?: React.CSSProperties;
  itemSx?: React.CSSProperties;
  selectedMonth: appDayjs.Dayjs
} & RangeProps;

const RangeCalendarBody: React.FC<RrangeCalenderBodyProps> = (props) => {
  const { value, onChange, sx = {}, itemSx = {}, selectedMonth } = props;

  const daysInThisMonth = selectedMonth.daysInMonth();
  const firstDayInThisMonth = selectedMonth.startOf('month').day();

  const lastMonthDate = Array.from({ length: firstDayInThisMonth }, (_, i) => selectedMonth.subtract(1, 'M').endOf('M').add(- firstDayInThisMonth + i + 1, 'd'),
  );

  const thisMonthDate = Array.from({ length: daysInThisMonth }, (_, i) => selectedMonth.startOf('M').add(i, 'd'));

  const nextMonthDate = Array.from({ length: 42 - lastMonthDate.length - thisMonthDate.length }, (_, i) => selectedMonth.add(1, 'M').startOf('M').add(i, 'd'));

  const dateItems = lastMonthDate.concat(thisMonthDate, nextMonthDate);

  return (
    <div className={classes['calendar-body']} style={sx}>
      {dateItems.map(date => (
        <DateItem key={date.toISOString()} item={date} sx={itemSx} value={value} selectedMonth={selectedMonth} onChange={onChange} />
      ))}
    </div>
  )
}

export default RangeCalendarBody