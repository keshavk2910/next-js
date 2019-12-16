import Header from './header'
import Footer from './footer'
import Meta from './meta';

export default function Layout(props) {
    return (
        <>
        <Meta />
        <div id="outer-wrap">
        <Header/>
        <div id="main-wrap">
        {props.children}
        <Footer/>
        </div>
        </div>
        </>
    )
  }