import { useState } from 'react';
import RangeCalendar from './components/RangeCalendar';
import { appDayjs } from './utils/dayjs.utils';
import './App.css';

function App() {
  const [value, setValue] = useState<[appDayjs.Dayjs, appDayjs.Dayjs] | null>(
    null,
  );

  const handleDateChange = (dates: [appDayjs.Dayjs, appDayjs.Dayjs] | null) => {
    setValue(dates);
  };

  return (
    <div className="container">
      <RangeCalendar value={value} onChange={handleDateChange} />
    </div>
  );
}

export default App;
