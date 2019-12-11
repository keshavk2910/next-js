import fetch from 'isomorphic-unfetch'
import {Component} from 'react'
import ReactPaginate from 'react-paginate';
import GridLoader from 'react-spinners/GridLoader'

//Components
import ProductCardList from '../components/ProductsList/ProductCard-List'
import Layout from '../components/layout'


class Products extends Component {
    static async getInitialProps() {
        const res = await fetch('https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_ec5799741c1cc89b7c4e027001591117c0a42142&consumer_secret=cs_eebb7c4994c4676d6ffa536e47bc3245f9dc9815&_embeded&per_page=12')
        const json = await res.json()
        const pages = await res.headers.get('X-WP-TotalPages');
        return { props: json, loading:false, pages }
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

      async getting() {
        try {
        const response = await 
        fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_ec5799741c1cc89b7c4e027001591117c0a42142&consumer_secret=cs_eebb7c4994c4676d6ffa536e47bc3245f9dc9815&_embeded&per_page=12&page=${this.state.page}`);
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
            loading:this.props.loading
          })
          console.log(this.props)
      }
      handlePageClick = data => {
        let selected = data.selected;
        this.setState({ page: selected+1, loading:true}, () => {
          this.getting();
        }, ()=>console.log(this.state.page));        console.log('handle')

      };

      render() {
  return <Layout>
  <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          initialPage={0}
          disableInitialCallback
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          forcePage={this.state.page-1}
        />
     { this.state.loading === false ?
      <ProductCardList posts={this.state.posts} /> :
      <GridLoader
      sizeUnit={"px"}
      size={50}
      color={'#f1592a'}
      loading={this.state.loading}/>
      }
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          initialPage={0}
          disableInitialCallback
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          forcePage={this.state.page-1}
        />
      </Layout>
}
}


export default Products
