import Head from 'next/head'
import { getPost, getAllPostIds } from '../../utils/contentful';

export default function Post({ postData }: { postData: Post }) {
  const { title, description, publishedAt } = postData;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <small>{publishedAt}</small>
      <p>{description}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      postData: await getPost(params.id)
    }
  }
}
