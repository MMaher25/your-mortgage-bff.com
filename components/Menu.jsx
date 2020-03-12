import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link href="/">
            <a>
              <span onClick={props.onToggleMenu}>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/calc">
            <a>
              <span onClick={props.onToggleMenu}>Mortgage Calculator</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/landing">
            <a>
              <span onClick={props.onToggleMenu}>Testimonials</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/generic">
            <a>
              <span onClick={props.onToggleMenu}>A Blog</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/elements">
            <a>
              <span onClick={props.onToggleMenu}>Blogs</span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="#" className="button big next">
            Apply Now
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu}>
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
