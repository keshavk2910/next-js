import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import {Component} from 'react'
import Pagination from "react-js-pagination";
import ProductCardList from '../../components/ProductsList/ProductCard-List'
import {withRouter} from 'next/router'


class ProductCategory extends Component {
      constructor(props) {
        super(props);
        this.state = {
          page:1,
        };
      }
      
      componentDidMount() {
          if(this.props.router.query.page !== undefined){
              this.setState({page:this.props.router.query.page})
          }
        }

      handlePageClick = pageNumber => {
        const catName = this.props.router.query.name;
        if(this.props.router.query.page == pageNumber){
        } else {
          this.setState({ page: pageNumber}, () => {
            this.props.router.push(`/product-category/[name]?page=${pageNumber}`,`/product-category/${catName}?page=${pageNumber}`);
           });
        }
      };

      render(){
    return (
        <Layout>
        {this.props.items !== 0 ?
          <div>
        <Pagination
          activePage={this.state.page}
          itemsCountPerPage={12}
          totalItemsCount={Number(this.props.items)}
          pageRangeDisplayed={5}
          onChange={this.handlePageClick}
        /> 

      <ProductCardList posts={this.props.post} dispatch={this.props.dispatch}/> 

      <Pagination
          activePage={this.state.page}
          itemsCountPerPage={12}
          totalItemsCount={Number(this.props.items)}
          pageRangeDisplayed={5}
          onChange={this.handlePageClick}
        /></div> 
        :<div>NO CATEGORY FOUND WITH THIS ID</div>}
        
        </Layout>
    );
      }
}

ProductCategory.getInitialProps = async function(context) {
    const { page, name } = context.query;

    const catID = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v3/products/categories?consumer_key=ck_f9ee88d5eb42a67ca37c755db128f76f0bff399e&consumer_secret=cs_e250fdf46dd1559b92c8018cc06891b8104281af&_embeded&slug=${name}`);
    const data1 = await catID.json();
    const id = data1[0].id;
    let res;
    let items;
    let data;
    if(id > 0 && page){
    res = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products?category=${id}&consumer_key=ck_f9ee88d5eb42a67ca37c755db128f76f0bff399e&consumer_secret=cs_e250fdf46dd1559b92c8018cc06891b8104281af&_embeded&per_page=12&status=publish&page=${page}`)
    items = await res.headers.get('X-WP-Total');  
    data = await res.json();
    } else if(id > 0) {
    res = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products?category=${id}&consumer_key=ck_f9ee88d5eb42a67ca37c755db128f76f0bff399e&consumer_secret=cs_e250fdf46dd1559b92c8018cc06891b8104281af&_embeded&per_page=12&status=publish`) 
    items = await res.headers.get('X-WP-Total');  
    data = await res.json();
    } else {
      items = 0
    }
    return { post:data, items}
  };

const mapStateToProps = ({products}) => ({
    currentProducts: products.currentProducts
});

export default (withRouter(connect(mapStateToProps)(ProductCategory)));