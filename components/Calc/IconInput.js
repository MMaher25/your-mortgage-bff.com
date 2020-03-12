import React from 'react'

export default class IconInput extends React.Component {
  render() {
    const { icon } = this.props
    return (
      <div>
        <div>{icon}</div>
        <input {...this.props} />
      </div>
    )
  }
}
