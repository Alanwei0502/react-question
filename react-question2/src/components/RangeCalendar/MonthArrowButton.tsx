import classes from './RangeCalendar.module.css';

interface IMonthArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  last?: boolean;
}

const MonthArrowButton: React.FC<IMonthArrowButtonProps> = (props) => {
  const { last = false, ...restProps } = props;

  const className = last
    ? classes['calendar-month_select_button-last']
    : classes['calendar-month_select_button-next'];

  return (
    <button
      className={`${classes['calendar-month_select_button']} ${className}`}
      {...restProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-4 -4 32 32"
        width="16"
        height="16"
      >
        {last ? (
          <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
        ) : (
          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        )}
      </svg>
    </button>
  );
};

export default MonthArrowButton;
