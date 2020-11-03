import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ASSETS_PREFIX } from '../constants';
import { client } from '../utils/contentful';
import { Entry } from "contentful";

type Post = {
  title: string,
  image: any,
  richText: any,
  description: string,
  publishedAt: string
}

export default function Home({ items }: { items: Entry<Post>[] }) {
  console.log(items);
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
                <h2>{item.fields.title}</h2>
                <p>{item.fields.publishedAt}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const entries = await client.getEntries<Post>();
  return {
    props: {
      items: entries.items
    }
  }
}
