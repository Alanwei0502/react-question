/** Please write the sample code to debounce handleOnChange (Do not use any 3th party libs other than react) **/

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const SearchBox = () => {
  handleOnChange = debounce(async (event) => {
    // make ajax call
    // await fetch('https://api.example.com', { method: 'POST', body: JSON.stringify({ query: event.target.value }) });
  }, 500);
  return <input type='search' name='p' onChange={handleOnChange} />;
};
