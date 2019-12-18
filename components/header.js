import ActiveLink from './ActiveLink/ActiveLink';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'

export default function Header() {
    return (
      <>
    <header className="Header">
    <Link href="/">
        <div className="logo-container">
        <img src="https://ik.imagekit.io/zkvrzayer06/tr:w-88/wp-content/uploads/2018/09/1.png"/>
        </div>
        </Link>
        <div className="mobile-show">
    <Menu right pageWrapId={ "main-wrap" } outerContainerId={ "outer-wrap" } width={ '50%' } >
      <ActiveLink activeClassName="nav-active" href="/">
        <a className="menu-item"><span>Home</span></a>
      </ActiveLink><ActiveLink activeClassName="nav-active" href="/products">
        <a className="menu-item"><span>Products</span></a>
      </ActiveLink><ActiveLink activeClassName="nav-active" href="/about">
        <a className="menu-item"><span>About</span></a>
      </ActiveLink><ActiveLink activeClassName="nav-active" href="/contact">
        <a className="menu-item"><span>Contact</span></a>
      </ActiveLink>
      </Menu>
      </div>

      <ul className="menu-ul desktop-show">

      <ActiveLink activeClassName="nav-active" href="/"><a><li>
      <span>Home</span>
      </li></a></ActiveLink>

      <ActiveLink activeClassName="nav-active" href="/products"><a><li>
      <span>Products</span>
      </li></a></ActiveLink>

      <ActiveLink activeClassName="nav-active" href="/about"><a><li>
      <span>About</span>
      </li></a></ActiveLink>

      <ActiveLink activeClassName="nav-active" href="/contact"><a><li>
      <span>Contact</span>
      </li></a></ActiveLink>

      </ul>
    </header>
    <style jsx global>{`
      .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 30px;
        right: 36px;
        top: 36px;
      }
      .bm-burger-bars {
        background: #000;
    }
    .bm-menu {
      background: #fff;
      padding: 2.5em 10px 0;
      font-size: 1.15em;
    }
    .bm-menu a {
      width: 100%;
      display: block;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration:none;
      font-family:"Neue Einstellung Bold" !important;
      color: #000;
    }
    .bm-menu a:hover,
    .bm-menu a:focus {
      color: #f1592a;
    }
    .bm-item-list a {
      padding: 0.8em;
    }
    .bm-item:focus {
      outline: none;
    }
    .bm-cross {
      background: #f1592a;
    width: 4px!important;
    height: 17px!important;
    }
    .mobile-show {
      display:none;
    }
    @media (max-width: 768px) {
      a.nav-active span{
        background: -webkit-linear-gradient(344deg, rgba(255,86,0,1) 2%, rgba(255,60,0,1) 47%, rgba(0,80,255,1) 74%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-bottom:2px solid #000;
      }
      .mobile-show {
        display:block;
      }
      .desktop-show {
        display:none;
      }
    }
    .bm-cross-button button {
      padding: 15px!important;
      left: -4px!important;
      top: -1px!important;
    }
    #main-wrap {
      min-height:100vh;
    }
    .bm-burger-button {
      position:absolute!important;
    }
    span.formtext {
      color:#fff!important;
    }
    `}
</style>
<style jsx>{`
    .logo-container {
      padding:10px;
      float:left;
    }
    header {
      border-bottom: 3px solid #F1592A;
    }
      header::after {
        content:'';
        clear: both;
        display: table;
      }
    ul.desktop-show {
      list-style:none;
      float:right;
      height: 90px;
      line-height: 73px;
    }
    ul.desktop-show li {
      display:inline-block;
      padding: 10px 20px;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      font-family:"Neue Einstellung Bold" !important;
      color: #000;
      transition: all 0.2s;
    }
    ul.desktop-show a:hover li {
      color: #f1592a;
    }
    ul.desktop-show a.nav-active li span{
      background: -webkit-linear-gradient(344deg, rgba(255,86,0,1) 2%, rgba(255,60,0,1) 47%, rgba(0,80,255,1) 74%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      border-bottom:2px solid #000;
    }
`}</style>
  </>
    );
}