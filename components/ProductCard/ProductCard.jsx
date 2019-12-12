import Link from 'next/link';
import ProgressiveImage from '../ProgressiveImage';

const ProductCard = ({post}) => {
  let cloudurl = 'https://res.cloudinary.com/dealsnow/image/upload/t_forbig/'
  let cloudurlbig = 'https://res.cloudinary.com/dealsnow/image/upload/c_scale,f_auto,h_303,w_473/'
  let url = post.images[0].src
  let filename = url.substring(url.lastIndexOf('/')+1);
    return (
        <React.Fragment>
        <Link href={`/product/[id]`} as={`/product/${post.slug}`}>
        <a>
    <div className='card-container'>
        <h1 key={post.id}>{post.name}</h1>
            {post.images ?
              <div className="maximg"><ProgressiveImage
              alt={post.name}
              preview={cloudurl+filename}
              image={cloudurlbig+filename}
            /></div>
            : null}
            <div className="price" dangerouslySetInnerHTML={{ __html: post.price_html }}/>
            <div className="content" dangerouslySetInnerHTML={{ __html: post.description }} />
    </div>
    </a>
    </Link>
    <style jsx>{`
    .maximg {
    width: 473px;
    height: 303px;
    }
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
export default ProductCard;
