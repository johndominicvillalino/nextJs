
import Link from 'next/link'
import {server} from '../../../config/index'
import Meta from '../../../components/Meta'



const index = ({article}) => {
  return (
    <>
    <Meta title={article.title}/>
    <h1>This is the ${article.title}</h1>
    <p>{article.body}</p>
    <br/>
    <Link href='/'>Go Back</Link>
    </>

  )
}

export const getServerSideProps = async (context) => {

    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getServerSidePaths  = async () => {
    const res = await fetch(`${server}/api/articles/`)

    const article = await res.json()
    const ids = article.map(article => article.id)
    const paths = ids.map(id => ({params:{id: id.toString()}}))

    return {
         
            paths,
            fallback: false
    }

}


export default index