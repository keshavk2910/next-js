import Link from 'next/link';
import ProgressiveImage from '../ProgressiveImage';
import Button from '@material-ui/core/Button';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const CartItem = ({post, dispatch}) => {
  let handleClick = () => {
    dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: post.id});
  }
  let cloudurl = 'https://ik.imagekit.io/zkvrzayer06/tr:w-20,h-20/'
  let cloudurlbig = 'https://ik.imagekit.io/zkvrzayer06/tr:w-470,h-314/'
  let url = post.images[0].src
  let filename = url.substring(url.indexOf('/', 10) + 1);
    return (
        <React.Fragment>
    <div className='card-container'>
    <Link href={`/product/[id]`} as={`/product/${post.slug}`}>
    <a>
        <h1 key={post.id}>{post.name}</h1>
            {post.images ?
              <div className="maximg"><ProgressiveImage
              alt={post.name}
              preview={cloudurl+filename}
              image={cloudurlbig+filename}
            /></div>
            : null}</a>
            </Link>
            {post.price_html ? <div className="price" dangerouslySetInnerHTML={{ __html: post.price_html }}/> :""}
            {post.description ?<div className="content" dangerouslySetInnerHTML={{ __html: post.description }} />:""}
            <Button variant="contained" color="secondary" onClick={handleClick} className="primary remove" endIcon={<RemoveCircleIcon/>}>REMOVE FROM QUOTE</Button>
    </div>
    
    <style jsx>{`
    a {
      text-decoration:none;
      color:#000
    }
    .card-container {
        
        background-color: #fff;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 25px;
        -moz-osx-font-smoothing: grayscale;
        backface-visibility: hidden;
        transform: translateZ(0);
        transition: transform 0.25s ease-out;
      }
      
      .card-container:hover {
        transform: scale(1.02);
      }
      img {
        max-width: 100%;
        margin-bottom: 25px;
    }
    @media (max-width: 768px) {
      .card-container{
        display: block;
        margin-bottom: 30px;
      }
    }
    .card-list a {
      color: #000!important;
    }
    .card-list a:hover {
      color: #000;
      text-decoration: none;
    }
    .card-list .content{
      color:#000;
    }
      `}</style>
    </React.Fragment>
    );
    }
export default CartItem;
