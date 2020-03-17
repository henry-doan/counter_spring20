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
    const { color, title } = this.props
    // const color = this.props.color
    // const title = this.props.title
    const { currentNum } = this.state
    return (
      <div style={{ backgroundColor: color }}>
        <p>{ title }</p>
        <p>{ currentNum }</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <hr />
      </div>
    )
  }
}

export default Counter;