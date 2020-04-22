import React from 'react'

export default class Switch extends React.Component {
  render() {
    const { active } = this.props
    var wrapperClass = 'switchWrapper'
    if (active) {
      wrapperClass += ' switchWrapperActive'
    }
    return (
      <div
        className={wrapperClass}
        onClick={() => this.props.onChange(!active)}
      >
        <div className={'switchBubble'}></div>
      </div>
    )
  }
}
