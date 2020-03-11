import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = props => (
  <header id="header" className="alt">
    <Link href="/">
      <a className="logo">
        <span>Your Mortgage</span> <strong>BFF</strong>
      </a>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu}>
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
