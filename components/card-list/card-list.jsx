import Card from '../card/card'

const CardList = ({posts}) => {
    return (
        <div className="container-list">
        <div className='card-list'>
        {
        posts.map(post => 
            <Card key={ post.id } post={post}/>
            )
        }
        </div>
        <style jsx>{`
        .card-list {
            width: 100%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
            margin-top: 50px;
            margin-bottom: 50px;
          }
          .container-list {
            width:95vw;
            margin: 0 auto;
          }
          @media (max-width: 768px) {
            .card-list {
              width: 90%;
              margin: 0 auto;
              display: block;
            }
          }
        `}</style>
        </div> );
    }
export default CardList;
