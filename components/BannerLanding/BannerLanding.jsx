import Subtitle from './Subtitle'

const BannerLanding = ({ title, subtitle }) => (
  <section id="banner" className="style2">
    <div className="inner">
      <header className="major">
        <h1>{title || 'Landing'}</h1>
      </header>
      <div className="content">
        <Subtitle
          subtitle={
            subtitle ||
            `Lorem ipsum dolor sit amet nullam consequat sed veroeros. tempus adipiscing nulla.`
          }
        />
      </div>
    </div>
  </section>
)

export default BannerLanding
