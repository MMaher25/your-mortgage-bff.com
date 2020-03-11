import React from 'react'

const Subtitle = ({ subtitle }) => {
  const chunks = subtitle.match(/.{1,50}(\s|$)/g)
  return (
    <p>
      {chunks.map((chunk, index) => {
        if (index === chunks.length - 1) {
          return <span key={index}>{chunk}</span>
        }
        return (
          <>
            <span key={index}>{chunk}</span>
            <br />
          </>
        )
      })}
    </p>
  )
}

export default Subtitle
