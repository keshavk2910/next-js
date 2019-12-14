import Header from './header'
import Footer from './footer'

export default function Layout(props) {
    return (
        <React.Fragment>
        <Header/>
        <div id="main-wrap">
        {props.children}
        <Footer/>
        </div>
        </React.Fragment>
    )
  }