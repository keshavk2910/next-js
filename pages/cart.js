import Layout from '../components/layout'
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CartItem from '../components/CartItem/CartItem'

const Cart = ({currentProducts, dispatch}) => {
  return (
    <Layout>
     <Container maxWidth="xl">
     <Grid container spacing={3}>
     {
      currentProducts.map(product => 
       <Grid key={ product.id } item xs={12} sm={12} md={6} lg={4} xl={3}>
          <CartItem post={product} dispatch={dispatch}/>
        </Grid>
          )
      }
      </Grid>
      </Container>
      </Layout>
      );
}


const mapStateToProps = ({products}) => ({
  currentProducts: products.currentProducts
});

export default connect(mapStateToProps)(Cart);
