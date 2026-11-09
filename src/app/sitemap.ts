import type { MetadataRoute } from 'next';
import { siteUrl, contentUpdated } from '@/data/site';
import { treatments } from '@/data/treatments';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(contentUpdated);
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${siteUrl}${path}`,
    lastModified: updated,
    priority,
  });

  return [
    page('/', 1),
    page('/tedaviler', 0.9),
    ...treatments.map((t) => page(`/tedaviler/${t.slug}`, 0.8)),
    page('/hakkinda', 0.7),
    page('/sss', 0.7),
    page('/iletisim', 0.8),
    page('/blog', 0.6),
    ...blogPosts.map((p) => page(`/blog/${p.slug}`, 0.5)),
    page('/gizlilik-politikasi', 0.2),
    page('/kvkk-aydinlatma-metni', 0.2),
    page('/cerez-politikasi', 0.2),
  ];
}
