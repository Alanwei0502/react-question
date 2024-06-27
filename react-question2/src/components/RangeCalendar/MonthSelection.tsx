import { FC } from 'react'
import { appDayjs } from '../../utils/dayjs.utils';
import classes from './RangeCalendar.module.css'

interface IMonthSelectionProps {
  value: appDayjs.Dayjs;
  onToggleMonthOptions?: () => void;
  sx?: React.CSSProperties;
}

const MonthSelection: FC<IMonthSelectionProps> = (props) => {
  const { value, onToggleMonthOptions, sx = {} } = props;

  return (
    <div className={classes['calendar-month_selection']} onClick={onToggleMonthOptions} style={sx}>{appDayjs(value).format('YYYY年M月')}</div>
  )
}

export default MonthSelection