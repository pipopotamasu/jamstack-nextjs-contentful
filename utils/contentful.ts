import { createClient, EntryFields, Entry, Asset } from "contentful";

export type Post = {
  title: EntryFields.Text,
  image?: EntryFields.Link<Asset['fields']>,
  richText: EntryFields.RichText,
  description: EntryFields.Text,
  publishedAt: EntryFields.Date,
  pathName: EntryFields.Text,
}

const DEFAULT_ENTRIES_PARAMS = {
  content_type: 'practice'
}

export type PostEntry = Entry<Post>;

export const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID || '',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  host: process.env.CONTENTFUL_HOST
});

export async function getPosts () {
  const entries = await client.getEntries<Post>(DEFAULT_ENTRIES_PARAMS);
  return entries.items;
}

export async function getPost (id: string) {
  const entry = await client.getEntry<Post>(id);
  return entry.fields;
}

export async function getPostByPathName (path: string) {
  const entries = await client.getEntries<Post>({
    ...DEFAULT_ENTRIES_PARAMS,
    'fields.pathName': path,
  });
  return entries.items[0].fields;
}

export async function getAllPostPaths () {
  const items = await getPosts();

  return items.map((item) => {
    return {
      params: {
        path: item.fields.pathName
      }
    }
  });
}
