import React from 'react'
import { RichText, Date } from 'prismic-reactjs'
import { client } from '../prismic-configuration'
import Link from 'next/link'
import BaseLayout from '../components/shared/BaseLayout'

const Post = ({
  post: {
    data: { title, date, post_body },
  },
}) => (
  <BaseLayout>
    <div>
      {RichText.render(title)}
      <span>{Date(date).toString()}</span>
      {RichText.render(post_body)}
    </div>
    <div>
      <Link href="/blog">
        <a>back to blog list</a>
      </Link>
    </div>
  </BaseLayout>
)

Post.getInitialProps = async ({ res, query: { uid } }) => {
  if (res) {
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  const post = await client.getByUID('post', uid)
  return { post }
}

export default Post
