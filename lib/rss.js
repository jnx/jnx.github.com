import Parser from 'rss-parser'
export const FEEDS = [
  {
    slug: "yt",
    title: "The Jnx Youtube Channel",
    url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCNUzYcystxs_gx9mNc4xi-A",
  }
];

export async function getFeed(feedUrl) {
  let parser = new Parser()
  const feed = parser.parseURL(feedUrl)

  return feed
}
