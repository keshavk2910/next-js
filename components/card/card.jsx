import Link from 'next/link';
import moment from 'moment';

const Card = ({post}) => {
    const date = post.date;
    const formattedDate = moment(date).format("LL");
    return (
        <React.Fragment>
        <Link href={`/post/[id]`} as={`/post/${post.slug}`}>
        <a>
    <div className='card-container'>
        <h1 key={post.id}>{post.title.rendered}</h1>
        <h4>{formattedDate}</h4>
            {post.featured_media ?
                <img alt={post.title.rendered} src={post._embedded['wp:featuredmedia'][0].source_url} />
            : null}
            <div className="content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
    </a>
    </Link>
    <style jsx>{`
    a {
      text-decoration:none;
      color:#000;
    }
    .content iframe{
        max-width: 100%;
    }
    .card-container {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 25px;
        cursor: pointer;
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
export default Card;
