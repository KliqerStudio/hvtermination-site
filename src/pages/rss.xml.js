import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const sorted = articles.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'High Voltage Insights',
    description: 'Independent technical coverage of high-voltage cable termination — materials, methods, and standards.',
    site: context.site,
    items: sorted.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/articles/${article.slug}/`,
      categories: article.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
