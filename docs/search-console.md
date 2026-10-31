# Search Console workflow (mw4cheats.net)

You verify the domain at your DNS provider. This repository does not include an HTML verification meta tag.

## Setup

1. Open [Google Search Console](https://search.google.com/search-console) and add the domain property for `mw4cheats.net`.
2. Under Sitemaps, submit `https://mw4cheats.net/sitemap.xml`.
3. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) if you use Bing.

## What to edit

Titles and descriptions for the main routes live in `src/config/pageSeo.ts`. Article titles live with each guide in `src/data/blog/posts.ts`. Do not invent player counts, patch notes, or review ratings in those fields.
