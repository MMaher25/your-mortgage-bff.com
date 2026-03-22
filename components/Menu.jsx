import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = props => {
  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          <li>
            <Link href="/" onClick={props.onToggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="/calc" onClick={props.onToggleMenu}>Mortgage Calculator</Link>
          </li>
          <li>
            <Link href="/landing" onClick={props.onToggleMenu}>Testimonials</Link>
          </li>
          <li>
            <Link href="/generic" onClick={props.onToggleMenu}>A Blog</Link>
          </li>
          <li>
            <Link href="/elements" onClick={props.onToggleMenu}>Blogs</Link>
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
}

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
