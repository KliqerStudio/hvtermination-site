import { getCollection } from 'astro:content';
import { slugifyTag } from '../utils/slugify';

export async function GET(context) {
  const site = context.site.toString().replace(/\/$/, '');
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  const staticUrls = [
    { loc: '/', lastmod: null },
    { loc: '/articles/', lastmod: null },
    { loc: '/about/', lastmod: null },
  ];

  const tagSet = new Map();
  for (const article of articles) {
    for (const tag of article.data.tags) {
      const slug = slugifyTag(tag);
      if (!tagSet.has(slug)) tagSet.set(slug, true);
    }
  }

  const articleUrls = articles.map((article) => ({
    loc: `/articles/${article.slug}/`,
    lastmod: (article.data.updatedDate ?? article.data.pubDate).toISOString(),
  }));

  const tagUrls = Array.from(tagSet.keys()).map((slug) => ({
    loc: `/articles/tag/${slug}/`,
    lastmod: null,
  }));

  const allUrls = [...staticUrls, ...articleUrls, ...tagUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${site}${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
