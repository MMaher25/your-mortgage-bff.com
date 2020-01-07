import React from 'react'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client, linkResolver, hrefResolver } from '../prismic-configuration'

const Blog = (props) => {
  return (
    <div>
      <ul>
      {props.posts.results.map(post => (
        <li key={post.uid}>{
          <>
          <Link href={hrefResolver(post)} as={linkResolver(post)} passHref prefetch>
            <a>{RichText.render(post.data.title)}</a>
          </Link>
          <span>{Date(post.data.date).toLocaleString('en-US', {dateStyle: 'full'})}</span>
          </>
        }</li>
      ))}
    </ul>
    </div>
  )
}

Blog.getInitialProps = async context => {
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
    { orderings: '[my.post.date desc]' }
  )

  return { posts }
}

export default Blog
