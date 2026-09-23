import type { APIRoute } from "astro";
import { site } from "../data/site";
import { langs, locales, routes, type RouteKey } from "../i18n";

// Pages kept out of search results
const excluded: RouteKey[] = ["privacy"];

// Hand-rolled because the German and English slugs differ, which @astrojs/sitemap cannot pair up
export const GET: APIRoute = () => {
  const abs = (p: string) => new URL(p, site.url).href;
  // Static site: every page changes with each deploy, so the build date is the honest lastmod
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = (Object.keys(routes) as RouteKey[])
    .filter((key) => !excluded.includes(key))
    .flatMap((key) =>
      langs.map((lang) => {
        const alternates = langs
          .map((l) => `    <xhtml:link rel="alternate" hreflang="${locales[l].html}" href="${abs(routes[key][l])}"/>`)
          .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(routes[key].de)}"/>`)
          .join("\n");
        return `  <url>\n    <loc>${abs(routes[key][lang])}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`;
      }),
    );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
