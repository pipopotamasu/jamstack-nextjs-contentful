import { createClient } from "contentful";

export const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID || '',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
});

export async function getPosts () {
  const entries = await client.getEntries<Post>();
  return entries.items;
}

export async function getPost (id: string) {
  const entry = await client.getEntry<Post>(id);
  return entry.fields;
}

export async function getAllPostIds () {
  const items = await getPosts();

  return items.map((item) => {
    return {
      params: {
        id: item.sys.id
      }
    }
  });
}