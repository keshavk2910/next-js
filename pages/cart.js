import Layout from '../components/layout'
import {connect} from "react-redux";
import {Component} from "react";

class Cart extends Component {

  render(){
    console.log(10,this.props)
  return <Layout>
     <h1>This is Cart page have</h1>
     {
      this.props.currentProducts.map(id => 
       <h1 key={id.id}>{id.id}</h1>
          )
      }
      </Layout>
}
}


export default connect(state => state)(Cart);
