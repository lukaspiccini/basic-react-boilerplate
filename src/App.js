import React, { Component } from 'react'
import { connect } from 'react-redux'

import { example } from './actions/example'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  increment(value) {
    this.props.example(value + 1)
  }

  render() {
    const { value } = this.props

    return (
      <div className="App">
        <div>{value}</div>
        <button onClick={() => this.increment(value)}>Incrementar</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  value: state.example.value
})

const mapDispatchToProps = dispatch => ({
  example: data => dispatch(example(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
