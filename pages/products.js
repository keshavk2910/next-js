import fetch from 'isomorphic-unfetch'
import {Component} from 'react'
import Pagination from "react-js-pagination";
import {withRouter} from 'next/router'
import {connect} from "react-redux";
import Head from 'next/head'

//Components
import ProductCardList from '../components/ProductsList/ProductCard-List'
import Layout from '../components/layout'

class Products extends Component {
  static getInitialProps = async function(context) {
      const { page } = context.query;
      let res;
          if(page){
            res = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_f9ee88d5eb42a67ca37c755db128f76f0bff399e&consumer_secret=cs_e250fdf46dd1559b92c8018cc06891b8104281af&_embeded&status=publish&per_page=12&page=${page}`)
          } else {
            res = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_f9ee88d5eb42a67ca37c755db128f76f0bff399e&consumer_secret=cs_e250fdf46dd1559b92c8018cc06891b8104281af&_embeded&per_page=12&status=publish`)
          }
        const data = await res.json()
        const items = await res.headers.get('X-WP-Total');
        return { props: data, items }
}
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
        if(this.props.router.query.page == pageNumber){
        } else {
          this.setState({ page: pageNumber}, () => {
            this.props.router.push(`/products?page=${pageNumber}`,`/products?page=${pageNumber}`);
           });
        }
      };

      render() {
  return (
  <Layout>
  <Head>
  <title>ALL Products</title>
  <meta name="description" content="This is test site for React js" />
  </Head>
  <Pagination
          activePage={this.state.page}
          itemsCountPerPage={12}
          totalItemsCount={Number(this.props.items)}
          pageRangeDisplayed={5}
          onChange={this.handlePageClick}
        /> 
      <ProductCardList posts={this.props.props} dispatch={this.props.dispatch}/> 
        
      <Pagination
          activePage={this.state.page}
          itemsCountPerPage={12}
          totalItemsCount={Number(this.props.items)}
          pageRangeDisplayed={5}
          onChange={this.handlePageClick}
        /> 
      </Layout>
  );
}
}


export default (withRouter(connect(null) (Products)))
