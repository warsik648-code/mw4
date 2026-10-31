import { PRODUCT_BASE } from '../config/site';
import { MAIN_PRODUCT_PATH } from '../config/site';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

/** Former Dota template URLs → current routes. */
export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': MAIN_PRODUCT_PATH,
  '/cheats/lite/': MAIN_PRODUCT_PATH,
  '/cheats/pro': MAIN_PRODUCT_PATH,
  '/cheats/pro/': MAIN_PRODUCT_PATH,
  '/cheats/elite': MAIN_PRODUCT_PATH,
  '/cheats/elite/': MAIN_PRODUCT_PATH,
  '/cheats/compare': '/cheats-guide/',
  '/cheats/compare/': '/cheats-guide/',
  '/contact': '/support/',
  '/contact/': '/support/',
  '/products/dota-2-cheats': PRODUCT_BASE,
  '/products/dota-2-cheats/': PRODUCT_BASE,
  '/products/dota-2-cheats/elite': MAIN_PRODUCT_PATH,
  '/products/dota-2-cheats/elite/': MAIN_PRODUCT_PATH,
  '/products/dota-2-cheats/lite': MAIN_PRODUCT_PATH,
  '/products/dota-2-cheats/lite/': MAIN_PRODUCT_PATH,
  '/products/dota-2-cheats/pro': MAIN_PRODUCT_PATH,
  '/products/dota-2-cheats/pro/': MAIN_PRODUCT_PATH,
  '/products/dota-2-cheats/utilities': PRODUCT_BASE,
  '/products/dota-2-cheats/utilities/': PRODUCT_BASE,
  '/products/dota-2-cheats/ugc': PRODUCT_BASE,
  '/products/dota-2-cheats/ugc/': PRODUCT_BASE,
  '/products/dota-2-cheats/account-recovery': PRODUCT_BASE,
  '/products/dota-2-cheats/account-recovery/': PRODUCT_BASE,
  '/products/dota-2-cheats/unlock-all': '/characters-skins/',
  '/products/dota-2-cheats/unlock-all/': '/characters-skins/',
  '/products/dota-2-cheats/hwid-spoofer': '/hwid-spoofer/',
  '/products/dota-2-cheats/hwid-spoofer/': '/hwid-spoofer/',
  '/blog/dota-2-cheat-codes-guide': '/cheats-guide/',
  '/blog/dota-2-cheat-codes-guide/': '/cheats-guide/',
  '/blog/dota-2-console-cheats-tips': '/cheats-guide/',
  '/blog/dota-2-console-cheats-tips/': '/cheats-guide/',
  '/blog/how-to-use-dota-2-cheat-codes': '/cheats-guide/',
  '/blog/how-to-use-dota-2-cheat-codes/': '/cheats-guide/',
  '/blog/dota-2-cheats-features-guide': '/aimbot-esp/',
  '/blog/dota-2-cheats-features-guide/': '/aimbot-esp/',
  '/blog/dota-2-console-commands-cheats': '/cheats-guide/',
  '/blog/dota-2-console-commands-cheats/': '/cheats-guide/',
  '/blog/dota-2-lite-vs-pro': '/cheats-guide/',
  '/blog/dota-2-lite-vs-pro/': '/cheats-guide/',
  '/blog/dota-2-elite-tier-guide': '/cheats-guide/',
  '/blog/dota-2-elite-tier-guide/': '/cheats-guide/',
  '/blog/dota-2-scripts-ranked-mmr': '/aimbot-esp/',
  '/blog/dota-2-scripts-ranked-mmr/': '/aimbot-esp/',
  '/blog/dota-2-map-hack-setup': '/aimbot-esp/',
  '/blog/dota-2-map-hack-setup/': '/aimbot-esp/',
  '/blog/dota-2-zoom-hack-guide': '/aimbot-esp/',
  '/blog/dota-2-zoom-hack-guide/': '/aimbot-esp/',
  '/blog/dota-2-skin-changer-guide': '/characters-skins/',
  '/blog/dota-2-skin-changer-guide/': '/characters-skins/',
  '/blog/vac-patch-day-checklist': '/patch-notes/',
  '/blog/vac-patch-day-checklist/': '/patch-notes/',
  '/blog/dota-2-hwid-spoofer-after-ban': '/hwid-spoofer/',
  '/blog/dota-2-hwid-spoofer-after-ban/': '/hwid-spoofer/',
  '/blog/how-to-buy-dota-2-cheats-2026': '/store/',
  '/blog/how-to-buy-dota-2-cheats-2026/': '/store/',
  '/blog/dota-2-auto-combo-hero-scripts': '/aimbot-esp/',
  '/blog/dota-2-auto-combo-hero-scripts/': '/aimbot-esp/',
  '/blog/valve-anti-cheat-unable-to-verify': '/easy-anti-cheat/',
  '/blog/valve-anti-cheat-unable-to-verify/': '/easy-anti-cheat/',
  '/blog/dota-2-external-cheat-guide': '/cheats-guide/',
  '/blog/dota-2-external-cheat-guide/': '/cheats-guide/',
  '/blog/dota-2-stream-proof-setup': '/pc-setup/',
  '/blog/dota-2-stream-proof-setup/': '/pc-setup/',
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  blog: '/blog/',
  forum: '/forum/',
  products: PRODUCT_BASE,
  mainProduct: MAIN_PRODUCT_PATH,
  cloudDma: '/cloud-dma/',
  hwidSpoofer: '/hwid-spoofer/',
  features: '/features/',
  status: '/status/',
  preview: '/preview/',
  setup: '/setup/',
  reviews: '/reviews/',
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

/** Article URLs use a short slug at the site root, not /blog/. */
export function blogPostPath(slug: string): string {
  return `/${slug}/`;
}

/** @deprecated Use productPath */
export function cheatPath(slug: string): string {
  return productPath(slug);
}

const PRODUCT_PATHS: Record<string, string> = {
  'modern-warfare-cheats': MAIN_PRODUCT_PATH,
  'cloud-dma': '/cloud-dma/',
  'hwid-spoofer': '/hwid-spoofer/',
};

export function productPath(slug: string): string {
  return PRODUCT_PATHS[slug] ?? `/${slug}/`;
}
