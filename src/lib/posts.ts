import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf());
}

export function postPath(id: string) {
  return `/posts/${id.replace(/\.(md|mdx)$/, '')}/`;
}

export function tagPath(tag: string) {
  return `/tags/${encodeURIComponent(tag.toLowerCase())}/`;
}

export function categoryPath(category: string) {
  return `/categories/${encodeURIComponent(category.toLowerCase().replaceAll(' & ', '-and-').replaceAll(' ', '-'))}/`;
}
