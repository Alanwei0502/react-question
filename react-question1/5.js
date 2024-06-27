/** Can you explain the problem with the following code, and how to fix it. **/
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    // 這裡不會按照預期 +3，因為 setState 是非同步的，為了提高性能和合併多個狀態更新，React 會將多個 setState 調用合併成一次。在這種情況下，每次調用時，this.state.count 的值可能還沒有更新，所以三次調用中的 this.state.count 都是初始值。
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });

    // 解法一: 使用 callback
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));

    // 解法二: 使用一次 setState
    this.setState((prevState) => ({ count: prevState.count + 3 }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById('root'));
