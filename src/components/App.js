import React, {Component} from 'react';

// class App extends Component {
//   render() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am clicked!")}} />
//     </React.Fragment>
//   )
// }

const App = () => (<Counter></Counter>)

class Counter extends Component {
  // constructorは初期化処理が実行される
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  
  handlePlusButton = () => {
    // setStateは状態を変更するときの決まり文句
    this.setState({ count: this.state.count + 1})
  }
  handleMinusButton = () => {
    // setStateは状態を変更するときの決まり文句
    this.setState({ count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
      <div>count: { this.state.count }</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
