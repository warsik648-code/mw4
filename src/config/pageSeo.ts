/**
 * Central titles and descriptions for indexable routes.
 * Supplied titles are used as written. Pricing lines follow the current plans.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Call Of Duty 4 – Aimbot, ESP and Radar',
    description:
      'Explore Call of Duty 4: Modern Warfare cheats for Windows PC, including MW4 player ESP, Modern Warfare 4 aimbot, and recoil control.',
  },
  '/features/': {
    title: 'Features – Call of Duty 4 | Modern Warfare Cheats',
    description:
      'Explore Call of Duty 4: Modern Warfare Cheats features for Windows PC, including aimbot, player ESP, box ESP, skeleton ESP, distance ESP, and radar, where the.',
  },
  '/store/': {
    title: 'Store – Call of Duty 4 | Modern Warfare Cheats',
    description:
      'Explore the Call of Duty 4: Modern Warfare Cheats store. Compare monthly access at $35 and lifetime access at $150, plus Cloud DMA and HWID.',
  },
  '/modern-warfare-cheats/': {
    title: 'Lifetime – Call of Duty 4 | Modern Warfare Cheats',
    description:
      'Lifetime access for the Windows PC listing: Player ESP, Advanced Aimbot, loot ESP, and radar. Choose $35 monthly or $150 lifetime.',
  },
  '/cloud-dma/': {
    title: 'Cloud DMA | Call of Duty 4: Modern Warfare Cheats',
    description:
      'Cloud DMA is a related product with lifetime access. It is sold separately from Call of Duty 4: Modern Warfare Cheats and uses its own checkout.',
  },
  '/hwid-spoofer/': {
    title: 'HWID Spoofer | Call of Duty 4: Modern Warfare Cheats',
    description:
      'HWID Spoofer is a related product with monthly access. It is sold separately and does not guarantee access after a platform restriction.',
  },
  '/status/': {
    title: 'Status – Call of Duty 4 | Modern Warfare Cheats',
    description:
      'Review Call of Duty 4: Modern Warfare product compatibility notes, game update notices, and Easy Anti-Cheat status.',
  },
  '/preview/': {
    title: 'Call of Duty 4: Modern Warfare Preview | Call of Duty 4: Modern Warfare Cheats',
    description:
      'Explore the Call of Duty 4: Modern Warfare Cheats preview for Call of Duty 4: Modern Warfare, including available aiming features, player visuals, loot information, and radar functionality.',
  },
  '/setup/': {
    title: 'Call of Duty 4: Modern Warfare Setup | Call of Duty 4: Modern Warfare Cheats',
    description:
      'Find Call of Duty 4: Modern Warfare Cheats setup information for Windows PC, including documented requirements, configuration guidance, product compatibility, and relevant game update considerations.',
  },
  '/support/': {
    title: 'Support – Call of Duty 4 | Modern Warfare Cheats',
    description:
      'Support: Find help with Call of Duty 4: Modern Warfare Cheats purchases, product delivery, setup, configuration, and compatibility questions for Call of Duty.',
  },
  '/faq/': {
    title: 'Plans Features – Call of Duty 4 | Modern Warfare Cheats',
    description:
      'Plans Features: Get answers about Call of Duty 4: Modern Warfare Cheats, including monthly and lifetime pricing, product features, and setup requirements.',
  },
  '/reviews/': {
    title: 'Call of Duty 4: Modern Warfare Cheats Reviews | Buyer Feedback',
    description:
      'Buyer feedback for Call of Duty 4: Modern Warfare Cheats. This page lists only verified reviews about features, setup, and compatibility. None are on file yet.',
  },
  '/blog/': {
    title: 'Guides – Call of Duty 4 | Modern Warfare Cheats',
    description:
      'Guides: Explore the Call of Duty 4: Modern Warfare information hub for product features, game updates, Windows PC requirements, aiming terminology, player.',
  },
  '/forum/': {
    title: 'Call Of Duty 4 Modern – Call of Duty 4',
    description:
      'Read editorial notes about Call of Duty 4: Modern Warfare features, ranks, maps, and Windows PC setup. This forum does not publish unverified buyer reviews.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Call of Duty 4: Modern Warfare Cheats',
    description:
      'Purchase terms, license use, and refund policy for Call of Duty 4: Modern Warfare Cheats, Cloud DMA, and HWID Spoofer sold through mw4cheats.net.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Call of Duty 4: Modern Warfare Cheats',
    description:
      'How mw4cheats.net uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About Call of Duty 4: Modern Warfare Cheats',
    description:
      'What this site publishes: Call of Duty 4: Modern Warfare Cheats plans, related products, guides, and compatibility notes at mw4cheats.net.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
