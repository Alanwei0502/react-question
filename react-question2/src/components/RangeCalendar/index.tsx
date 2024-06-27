import { useState } from 'react'
import RangeCalendarHeader from './RangeCalendarHeader'
import RangeCalendarBody from './RangeCalendarBody'
import classes from './RangeCalendar.module.css'
import { appDayjs } from '../../utils/dayjs.utils';

export type RangeProps = {
  value: [appDayjs.Dayjs, appDayjs.Dayjs] | null;
  onChange: (dates: [appDayjs.Dayjs, appDayjs.Dayjs] | null) => void;
}

type RangeCalendarProps = {
  sx?: React.CSSProperties;
  headerSx?: React.CSSProperties;
  bodySx?: React.CSSProperties;
  itemSx?: React.CSSProperties;
} & RangeProps

const RangeCalendar: React.FC<RangeCalendarProps> = (props) => {
  const { value, onChange, sx = {}, headerSx = {}, bodySx = {}, itemSx = {} } = props;

  const [selectedMonth, setSelectedMonth] = useState(appDayjs());

  return (
    <div className={classes['calendar']} style={sx}>
      <RangeCalendarHeader sx={headerSx} value={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <RangeCalendarBody value={value} sx={bodySx} selectedMonth={selectedMonth} itemSx={itemSx} onChange={onChange} />
    </div>
  )
}

export default RangeCalendar