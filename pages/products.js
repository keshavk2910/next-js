import fetch from 'isomorphic-unfetch'
import {Component} from 'react'
import GridLoader from 'react-spinners/GridLoader'
import Pagination from "react-js-pagination";
import Router, {withRouter} from 'next/router'

//Components
import ProductCardList from '../components/ProductsList/ProductCard-List'
import Layout from '../components/layout'

class Products extends Component {
  static getInitialProps = async function(context) {
      const { page } = context.query;
      let res;
          if(page){
            res = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_ec5799741c1cc89b7c4e027001591117c0a42142&consumer_secret=cs_eebb7c4994c4676d6ffa536e47bc3245f9dc9815&_embeded&per_page=12&page=${page}`)
          } else {
            res = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_ec5799741c1cc89b7c4e027001591117c0a42142&consumer_secret=cs_eebb7c4994c4676d6ffa536e47bc3245f9dc9815&_embeded&per_page=12`)
          }
        const data = await res.json()
        const pages = await res.headers.get('X-WP-TotalPages');
        const items = await res.headers.get('X-WP-Total');
      
        return { props: data, loading:false, pages, items }
}
    constructor(props) {
        super(props);
        this.state = {
        posts:[],
          page:'1',
          totalPages:1,
          loading:true,
          items:1
        };
      }

      async getting(page) {
        try {
        const response = await 
        fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_ec5799741c1cc89b7c4e027001591117c0a42142&consumer_secret=cs_eebb7c4994c4676d6ffa536e47bc3245f9dc9815&_embeded&per_page=12&page=${page}`);
        const posts = await response.json();
        this.setState({ posts:posts, loading:false});
      } catch (error) {
        console.log(error);
      }
      }
      
      componentDidMount() {
        this.setState({
            posts: this.props.props,
            totalPages: Number(this.props.pages),
            items:Number(this.props.items),
            loading:this.props.loading
          })
        }

      handlePageClick = pageNumber => {
        this.setState({ page: pageNumber, loading:true}, () => {
         this.props.router.push(`/products?page=${pageNumber}`,`/products?page=${pageNumber}`,);
        });
      };

      componentDidUpdate(prevProps) {
        if(this.props.router.query.page){
          if(this.props.router.query.page !== prevProps.router.query.page){
            this.getting(this.props.router.query.page)
        }
       } else {
          this.getting(1)
        }
      }

      render() {
  return <Layout>
  <Pagination
          activePage={this.state.page}
          itemsCountPerPage={12}
          totalItemsCount={this.state.items}
          pageRangeDisplayed={5}
          onChange={this.handlePageClick}
        /> 
     { this.state.loading === false ?
      <ProductCardList posts={this.state.posts} /> 
        :
      <GridLoader
      sizeUnit={"px"}
      size={50}
      color={'#f1592a'}
      loading={this.state.loading}/>
      }
      <Pagination
          activePage={this.state.page}
          itemsCountPerPage={12}
          totalItemsCount={this.state.items}
          pageRangeDisplayed={5}
          onChange={this.handlePageClick}
        /> 
      </Layout>
}
}


export default withRouter(Products)
