import Link from 'next/link'
import { useRouter } from 'next/router'

const NextNavItem = ({ route, title }) => {
  const router = useRouter()
  if (!route) {
    route = `/${title.toLowerCase()}`
  }
  const active = route === router.route ? 'active' : ''
  return (
    <div className="port-navbar-item">
      <Link href={route}>
        <a className={`nav-link port-navbar-link ${active}`}>{title}</a>
      </Link>
    </div>
  )
}

const Nav = ({className}) => {
  return (
    <div className="port-navbar port-nav-base">
      <nav className={className}>
        <NextNavItem route="/" title="Home" />
        <NextNavItem title="Blog" />
      </nav>
    </div>
  )
}

export default Nav