import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

const BaseLayout = ({children, headerType='default'}) => {
  return (
    <>
      <Head>
        <title>Your Mortgage BFF - Jeffrey Maher</title>
      </Head>
      <div>
        <Nav className={headerType} />
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  )
}

export default BaseLayout
