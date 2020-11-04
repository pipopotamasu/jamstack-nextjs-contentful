import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ASSETS_PREFIX } from '../constants';
import Link from 'next/link'
import { getPosts } from '../utils/contentful';
import { Entry } from "contentful";

export default function Home({ items }: { items: Entry<Post>[] }) {
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
                <Link href={`${ASSETS_PREFIX}/posts/${item.sys.id}`}>
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
