import { appDayjs } from '../../utils/dayjs.utils';
import classes from './RangeCalendar.module.css';
import { RangeProps } from '.';

type DateItemProps = {
  item: appDayjs.Dayjs;
  selectedMonth: appDayjs.Dayjs;
  sx?: React.CSSProperties;
} & RangeProps;

const DateItem: React.FC<DateItemProps> = (props) => {
  const { item, sx = {}, selectedMonth, value, onChange } = props;

  const isToday = item.isSame(appDayjs(), 'date');
  const isNotCurrentMonth = !item.isSame(selectedMonth, 'month');

  const isActive = () => {
    if (!value) return false;
    const isSame =
      value[0].isSame(item, 'date') || value[1].isSame(item, 'date');

    if (isSame) return true;
    return value[0].isBefore(item, 'date') && value[1].isAfter(item, 'date');
  };

  const handleSelectDate = () => {
    if (isNotCurrentMonth) return;

    if (!value || item.isBefore(value[0], 'date')) {
      onChange([item, item]);
      return;
    }

    if (item.isAfter(value[0], 'date')) {
      onChange([value[0], item]);
      return;
    }

    onChange(null);
  };

  return (
    <div
      className={`${classes['calendar-body_date_item']} ${
        isNotCurrentMonth ? classes['non-current-month'] : ''
      } ${isToday ? classes.today : ''} ${isActive() ? classes.active : ''}`}
      style={sx}
      onClick={handleSelectDate}
    >
      {item.date()}
    </div>
  );
};

export default DateItem;
