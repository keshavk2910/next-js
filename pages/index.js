import fetch from 'isomorphic-unfetch'

//Components
import CardList from '../components/card-list/card-list'
import Layout from '../components/layout'

function Home({props}) {
  return <Layout>
     {
       <CardList posts={props}/>
      }
      </Layout>
}

Home.getInitialProps = async () => {
        const res = await fetch('https://bigbuildingdev.tk/wp-json/wp/v2/posts/?_embed&per_page=12')
        const json = await res.json()
        return { props: json }
}


export default Home
