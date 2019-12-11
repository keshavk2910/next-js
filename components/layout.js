import Header from './header'
import Footer from './footer'

export default function Layout(props) {
    return (
        <React.Fragment>
        <Header/>
        {props.children}
        <Footer/>
        </React.Fragment>
    )
  }