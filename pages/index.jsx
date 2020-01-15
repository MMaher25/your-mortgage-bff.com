import { RichText } from 'prismic-reactjs'
import { client } from '../prismic-configuration'
import '../styles/main.scss'
import BaseLayout from '../components/shared/BaseLayout'

const Home = ({ home }) => {
  const { logo, title, home_body_text } = home.data
  return (
    <BaseLayout>
      <div className="hero">
        <h1 className="title">{RichText.asText(title)}</h1>
        <img src={logo.url} />
          {
            RichText.render(home_body_text)
          }
      </div>
    </BaseLayout>
)}

Home.getInitialProps = async context => {
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  const home = await client.getSingle('home_page')
  return { home }
}

export default Home
