import { RichText } from 'prismic-reactjs'
import { client } from '../prismic-configuration'
import '../styles/main.scss'
import BaseLayout from '../components/shared/BaseLayout'
import { Grid, Card, CardContent } from '@material-ui/core'

const Home = ({ home }) => {
  const { logo, title, home_body_text } = home.data
  return (
    <BaseLayout>
      <div className="hero">
        <h1 className="page-header title">{RichText.asText(title)}</h1>
        <Grid container justify="center" className="banner-image">
          <img src={logo.url} />
        </Grid>
        <Card>
          <CardContent>{RichText.render(home_body_text)}</CardContent>
        </Card>
      </div>
    </BaseLayout>
  )
}

Home.getInitialProps = async context => {
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  const home = await client.getSingle('home_page')
  return { home }
}

export default Home
