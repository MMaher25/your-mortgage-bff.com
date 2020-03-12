import React from 'react'

export default class IconInput extends React.Component {
  render() {
    const { icon } = this.props
    return (
      <div className="calc-input">
        <span className={`icon fa fa-${icon}`}></span>
        <input {...this.props} />
      </div>
    )
  }
}
