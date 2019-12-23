import ProductCard from '../ProductCard/ProductCard'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Grow from '@material-ui/core/Grow';

const ProductCardList = ({posts, dispatch}) => {
    return (
      <Container maxWidth="xl">
      <Grid container spacing={3}>
        {
        posts.map(post => 
          <Grow key={ post.id } in={true}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <ProductCard post={post} dispatch={dispatch}/>
          </Grid>
          </Grow>
            )
        }
        </Grid>
        </Container>
        );
    }
export default ProductCardList;
