import React from 'react'
import Head from 'next/head'
import Nav from './Nav'
import { Container } from '@material-ui/core'
import ApplyButton from './ApplyButton'

const BaseLayout = ({ children, headerType = 'default' }) => {
  return (
    <>
      <Head>
        <title>Your Mortgage BFF - Jeffrey Maher</title>
      </Head>
      <Nav className={headerType} />
      <Container className="base-page">
        <div>
          <main>{children}</main>
        </div>
        <ApplyButton />
      </Container>
    </>
  )
}

export default BaseLayout
