import ActiveLink from './ActiveLink/ActiveLink'
import Link from 'next/link';


export default function Header() {
    return (
      <React.Fragment>
    <header className="Header">
    <Link href="/">
        <div className="logo-container">THIS IS LOGO</div>
        </Link>
    <nav>
    <ul className="menu-ul">
      <li>
      <ActiveLink activeClassName="nav-active" href="/">
        <a>Home</a>
      </ActiveLink></li>
      <li><ActiveLink activeClassName="nav-active" href="/products">
        <a>Products</a>
      </ActiveLink></li>
      <li><ActiveLink activeClassName="nav-active" href="/about">
        <a>About</a>
      </ActiveLink></li>
      <li><ActiveLink activeClassName="nav-active" href="/contact">
        <a>Contact</a>
      </ActiveLink></li>
      </ul>
    </nav>
    </header>
    
  </React.Fragment>
    );
}