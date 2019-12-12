import fetch from 'isomorphic-unfetch'
import {Component} from 'react'
import GridLoader from 'react-spinners/GridLoader'
import Pagination from "react-js-pagination";
import Router from 'next/router'

//Components
import ProductCardList from '../../components/ProductsList/ProductCard-List'
import Layout from '../../components/layout'

let cache = {};
class Products extends Component {
  static getInitialProps = async function(context) {
    const { id } = context.query;
    let data;
    let pages;
    if (cache[125642587954] && cache[1256425879545]) {
      data = cache[125642587954]
      pages = cache[1256425879545]
    } else {
        const res = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_ec5799741c1cc89b7c4e027001591117c0a42142&consumer_secret=cs_eebb7c4994c4676d6ffa536e47bc3245f9dc9815&_embeded&per_page=12&page=${id}`);
      data = await res.json()
      pages = await res.headers.get('X-WP-TotalPages');
    }
      return { props: data, loading:false, pages }
}

    constructor(props) {
        super(props);
        this.state = {
        posts:[],
        page:'1',
        totalPages:1,
        loading:true
        };
    }

    componentDidMount() {
        this.setState({
            posts: this.props.props,
            totalPages: Number(this.props.pages),
            loading:this.props.loading
          })
        }

        handlePageClick = pageNumber => {
            this.setState({ page: pageNumber, loading:true}, () => {
              Router.push(`/products/${pageNumber}`);
            });
          };


          render() {
            if (process.browser) {
              cache[125642587954] = this.props.props;
              cache[1256425879545] = this.props.pages;
            }
      return <Layout>
      <Pagination
              activePage={this.state.page}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
              onChange={this.handlePageClick}
              getPageUrl={(i) => `/products/${i}`}
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
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
              onChange={this.handlePageClick}
              getPageUrl={(i) => `/products/${i}`}
            /> 
          </Layout>
    }
    }

export default Products
    