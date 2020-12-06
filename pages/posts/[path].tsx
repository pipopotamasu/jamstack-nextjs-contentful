import Head from 'next/head'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';
import styles from 'styles/Home.module.css'
import { getPostByPathName, getAllPostPaths, Post as PostType } from 'utils/contentful';

export default function Post({ postData }: { postData: PostType }) {
  const { title, description, publishedAt, image, richText } = postData;

  return (
    <div className={styles.main}>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <small>{publishedAt}</small>
      <p>{description}</p>
      {
        image && (
          <img src={image.fields.file.url} alt={image.fields.title} />
        )
      }
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(richText as Document) }} />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostPaths();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      postData: await getPostByPathName(params.path)
    }
  }
}
