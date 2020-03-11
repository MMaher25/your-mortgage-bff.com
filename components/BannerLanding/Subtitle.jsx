import React from 'react'

const Subtitle = ({ subtitle }) => {
  const chunks = subtitle.match(/.{1,50}(\s|$)/g)
  return (
    <>
      {chunks.map((chunk, index) => {
        if (index === chunks.length - 1) {
          return <p key={index}>{chunk}</p>
        }
        return (
          <>
            <p key={index}>{chunk}</p>
            <br />
          </>
        )
      })}
    </>
  )
}

export default Subtitle
