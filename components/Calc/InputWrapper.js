import React from 'react'

export default class InputWrapper extends React.Component {
  render() {
    const { label, children, subtext } = this.props
    var i = 0
    const inputs = React.Children.toArray(children).map(child => (
      <div key={i++} className="butts">
        {child}
      </div>
    ))
    return (
      <div className="row uniform calc-row">
        <label>{label}</label>
        {inputs}
        {subtext}
      </div>
    )
  }
}
