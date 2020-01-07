import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

const Home = ({ home }) => {
  const { logo, title, home_body_text } = home.data
  return (
  <div>
    <Head>
      <title>{RichText.asText(title)}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ul>
      <Link href='/blog'><li><a>Blog</a></li></Link>
    </ul>
    <div className="hero">
      <h1 className="title">{RichText.asText(title)}</h1>
      <img src={logo.url} />
        {
          RichText.render(home_body_text)
        }
    </div>
  </div>
)}

Home.getInitialProps = async context => {
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  const home = await client.getSingle('home_page')
  return { home }
}

export default Home
