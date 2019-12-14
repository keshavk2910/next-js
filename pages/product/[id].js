import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';
import {HashLoader} from 'react-spinners';
import {Component} from 'react';
import ProgressiveImage from '../../components/ProgressiveImage';

class Product extends Component {
  static getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://bigbuildingdev.tk/wp-json/wc/v2/products/?consumer_key=ck_f9ee88d5eb42a67ca37c755db128f76f0bff399e&consumer_secret=cs_e250fdf46dd1559b92c8018cc06891b8104281af&_embeded&slug=${id}`);
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
  let cloudurl = 'https://ik.imagekit.io/zkvrzayer06/tr:w-20,h-20/'
  let cloudurlbig = 'https://ik.imagekit.io/zkvrzayer06/tr:w-470,h-314/'
  let url = this.props.props.images[0].src
  let filename = url.substring(url.indexOf('/', 10) + 1);
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