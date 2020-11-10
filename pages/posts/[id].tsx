import Head from 'next/head'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { getPost, getAllPostIds, Post as PostType } from '../../utils/contentful';
import { Document } from '@contentful/rich-text-types';

export default function Post({ postData }: { postData: PostType }) {
  const { title, description, publishedAt, image, richText } = postData;

  return (
    <div>
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
