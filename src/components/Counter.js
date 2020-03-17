import React, { Component } from 'react';

class Counter extends Component {
  state = { currentNum: 0 }

  inc = () => {
    this.setState({ currentNum: this.state.currentNum + 1 })
  }

  dec = () => {
    this.setState({ currentNum: this.state.currentNum - 1 })
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.color }}>
        <p>{ this.props.color }</p>
        <p>{ this.state.currentNum }</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <hr />
      </div>
    )
  }
}

export default Counter;