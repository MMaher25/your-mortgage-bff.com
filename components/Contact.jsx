const Contact = props => (
  <section id="contact">
    <div className="inner">
      <div className="split">
        <div>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="mailto:jeff@yourmortgagebff.com">
              Jeff@YourMortgageBFF.com
            </a>
          </div>
        </div>
        <div>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Phone</h3>
            <span>(504) 453-0747</span>
          </div>
        </div>
        <div>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>CrossCountry Mortgage</h3>
            <span>
              2680 Highway 190
              <br />
              Mandeville, LA 70471
              <br />
              NMLS1125281
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
