import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';
import {HashLoader} from 'react-spinners';
import {Component} from 'react';
import ProgressiveImage from '../../components/ProgressiveImage';

class Product extends Component {
  static getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_ec5799741c1cc89b7c4e027001591117c0a42142&consumer_secret=cs_eebb7c4994c4676d6ffa536e47bc3245f9dc9815&_embeded&slug=${id}`);
    const data = await res.json();
    return { props:data[0]}
  };

  constructor(props){
    super();
    this.state = {
        loading:true
    }
}

componentDidMount() {
  {this.props.props !== null ? this.setState({loading:false}) : null}
}

render() {
  let cloudurl = 'https://res.cloudinary.com/dealsnow/image/upload/t_forbig/'
  let cloudurlbig = 'https://res.cloudinary.com/dealsnow/image/upload/c_scale,f_auto,h_320,w_500/'
  let url = this.props.props.images[0].src
  let filename = url.substring(url.lastIndexOf('/')+1);
  const post = this.props.props
  return  <Layout>
  <React.Fragment>
  {this.state.loading === false?
    <div className="single">
      <h1>{post.name}</h1>
      {post.images ?
        <ProgressiveImage
              alt={post.name}
              preview={cloudurl+filename}
              image={cloudurlbig+filename}
            />
        : null}
        <div className="price" dangerouslySetInnerHTML={{ __html: post.price_html }}/>
      <div dangerouslySetInnerHTML={{ __html: post.description }} />
    </div>:
 <div className="loader"><HashLoader
 sizeUnit={"px"}
 size={150}
 color={'#f1592a'}
 loading={this.state.loading}
/></div>
}
</React.Fragment>
        </Layout>
    
}
}

export default Product;