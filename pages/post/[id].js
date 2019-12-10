import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';

function Post({props}) {
  return  <Layout>
  <p>My Blog Post: {props.id}</p>
  </Layout>
    
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://bigbuildingdev.tk/wp-json/wp/v2/posts/?_embed&slug=${id}`);
  const data = await res.json();
  return { props:data[0]}
  
};
export default Post;