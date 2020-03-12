import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
  <Layout>
    <div>
      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <article style={{ backgroundImage: `url('/images/pic01.jpg')` }}>
            <header className="major">
              <h3>Mortgage Calculator</h3>
              <p>How much house can I afford?</p>
            </header>
            <Link href="/calc">
              <a className="link primary"></a>
            </Link>
          </article>
          <article style={{ backgroundImage: `url('/images/pic02.jpg')` }}>
            <header className="major">
              <h3>Credit College</h3>
              <p>How does credit work anyway?</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article style={{ backgroundImage: `url('/images/pic03.jpg')` }}>
            <header className="major">
              <h3>Refinance</h3>
              <p>Rate / Term? Cash out? What's right for me?</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article style={{ backgroundImage: `url('/images/pic04.jpg')` }}>
            <header className="major">
              <h3>Reverse Mortgage</h3>
              <p>Something about reverse mortgages here</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article style={{ backgroundImage: `url('/images/pic05.jpg')` }}>
            <header className="major">
              <h3>Who is Your Mortgage BFF?</h3>
              <p>
                Learn about Jeff and the staff that make your dreams a reality
              </p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article style={{ backgroundImage: `url('/images/pic06.jpg')` }}>
            <header className="major">
              <h3>New Construction</h3>
              <p>Building a new home? Close once!</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </p>
            <ul className="actions">
              <li>
                <Link href="/landing">
                  <a className="button next">Apply Now</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)
