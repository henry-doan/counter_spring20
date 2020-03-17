import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  // old syntax
  // constructor(props) {
  //   super(props)
  //   this.state = { currentNum: 0 }
  //   this.inc = this.inc.bind(this)
  //   this.dec = this.dec.bind(this)
  // }
  // state = { currentNum: 0 }

  // inc() {
  //   this.setState({ currentNum: this.state.currentNum + 1 })
  // }

  // dec() {
  //   this.setState({ currentNum: this.state.currentNum - 1 })
  // }

  // inc = () => {
  //   this.setState({ currentNum: this.state.currentNum + 1 })

  //   // this.setState( (state) => {
  //   //   return { currentNum: state.currentNum + 1 }
  //   // })
  // }

  // dec = () => {
  //   this.setState({ currentNum: this.state.currentNum - 1 })
  // }


  render() {
    return(
      <div>
        <h1>My counter App</h1>
        {/* <p>{this.state.currentNum}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button> */}
        <Counter color='green' />
        <Counter color='orange' />
        <Counter color='red' />
        <Counter color='pink' />
      </div>
    )
  }
}

// React.getelement.createelement(<h1>My counter App</h1>)React.getelement.createelement(<p>we will put our counter here</p>)

// React.getelement.createelement(<div>
//   <h1>My counter App</h1>
//   <p>we will put our counter here</p>
// </div>)
export default App;