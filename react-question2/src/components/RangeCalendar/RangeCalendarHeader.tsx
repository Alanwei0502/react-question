import classes from './RangeCalendar.module.css'
import MonthArrowButton from './MonthArrowButton';
import MonthSelection from './MonthSelection';
import { appDayjs } from '../../utils/dayjs.utils';

type RangeCalendarHeaderProps = {
  value: appDayjs.Dayjs;
  setSelectedMonth: React.Dispatch<React.SetStateAction<appDayjs.Dayjs>>;
  sx?: React.CSSProperties;
}

const RangeCalendarHeader: React.FC<RangeCalendarHeaderProps> = (props) => {
  const { sx = {}, value, setSelectedMonth } = props;


  const handleClickPrevMonth = () => {
    setSelectedMonth(appDayjs(value).subtract(1, 'month'));
  }

  const handleClickNextMonth = () => {
    setSelectedMonth(appDayjs(value).add(1, 'month'));
  }

  return (
    <div className={classes['calendar-header']} style={sx}>
      <MonthArrowButton last onClick={handleClickPrevMonth} />
      <MonthSelection value={value} />
      <MonthArrowButton onClick={handleClickNextMonth} />
    </div>
  )
}

export default RangeCalendarHeader