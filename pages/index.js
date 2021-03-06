
import {server,test} from '../config/index'
import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";


export default function Home({articles}) {

  console.log(server)

  return (
    <div>
     <Meta />
      <ArticleList articles={articles} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}
