import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getPosts, PostEntry } from '../utils/contentful';

export default function Home({ items }: { items: PostEntry[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
      </Head>

      <ul>
        {
          items.map((item) => {
            return (
              <li key={item.sys.id}>
                <Link href={`/posts/${item.sys.id}`}>
                  <a>
                    <h2>{item.fields.title}</h2>
                    <p>{item.fields.publishedAt}</p>
                  </a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      items: await getPosts()
    }
  }
}
