import React, { Component } from 'react'
import Loading from '../assets/1494.gif'

export class Spinner extends Component {
  render() {
    return (
      <img src={Loading} alt="Loading" />
    )
  }
}

export default Spinner