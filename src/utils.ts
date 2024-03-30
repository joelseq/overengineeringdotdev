import { getCollection } from "astro:content";

export async function getAllTags() {
  const posts = await getCollection("blog");
  const tags = new Set<string>();

  posts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags);
}

export async function getAllPostsWithTag(tagName: string) {
  const posts = await getCollection("blog");

  return posts.filter(
    (post) => post.data.tags && post.data.tags.includes(tagName),
  );
}
