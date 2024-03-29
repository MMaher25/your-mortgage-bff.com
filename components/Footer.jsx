const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="#" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        {/* <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li> */}
        <li>
          <a href="#" className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; YourMortgageBFF.com {new Date().getFullYear()}</li>
        <li>
          Website By: <a href="https://mjmaher.dev">MJMaher</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
