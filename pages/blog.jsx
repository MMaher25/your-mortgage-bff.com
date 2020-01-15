import React from 'react'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client, linkResolver, hrefResolver } from '../prismic-configuration'
import BaseLayout from '../components/shared/BaseLayout'

const Blog = props => {
  return (
    <>
      <BaseLayout headerType={'landing'} className="blog-listing-page">
        <div
          className="masthead"
          style={{
            backgroundImage: `url('${props.blogPage.data.header_image.url}')`,
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Fresh Blogs</h1>
                  <span className="subheading">Programming, travelling...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {props.posts.results.map(post => (
              <div key={post.uid}>
                {
                  <>
                    <Link
                      href={hrefResolver(post)}
                      as={linkResolver(post)}
                      passHref
                    >
                      <a>{RichText.render(post.data.title)}</a>
                    </Link>
                    <span>
                      {Date(post.data.date).toLocaleString('en-US', {
                        dateStyle: 'full',
                      })}
                    </span>
                  </>
                }
              </div>
            ))}
          </div>
        </div>
      </BaseLayout>
    </>
  )
}

Blog.getInitialProps = async context => {
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  const blogPage = await client.getSingle('blog_listing_page')
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
    { orderings: '[my.post.date desc]' },
  )

  return { blogPage, posts }
}

export default Blog
