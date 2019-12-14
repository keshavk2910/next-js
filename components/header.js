import ActiveLink from './ActiveLink/ActiveLink';
import Link from 'next/link';
import Meta from './meta';
import { slide as Menu } from 'react-burger-menu'

export default function Header() {
    return (
      <React.Fragment>
      <Meta />
    <header className="Header">
    <Link href="/">
        <div className="logo-container">
        <img src="https://ik.imagekit.io/zkvrzayer06/tr:w-88/wp-content/uploads/2018/09/1.png"/>
        </div>
        </Link>
    <Menu pageWrapId={ "main-wrap" }>
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
      </Menu>
    </header>
    <style jsx>{`
    .logo-container {
      padding:10px;
      float:left;
    }
      Header::after {
        content:'';
        clear: both;
        display: table;
      }
      header {
        background-color:#eee
      }
    `}</style>
  </React.Fragment>
    );
}