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
    title: 'Call of Duty 4: Modern Warfare Cheats | Aimbot, ESP and Radar',
    description:
      'Explore Call of Duty 4: Modern Warfare cheats for Windows PC, including MW4 player ESP, Modern Warfare 4 aimbot, and recoil control.',
  },
  '/features/': {
    title: 'Call of Duty 4: Modern Warfare Features | Call of Duty 4: Modern Warfare Cheats',
    description:
      'Explore Call of Duty 4: Modern Warfare Cheats features for Windows PC, including aimbot, player ESP, box ESP, skeleton ESP, distance ESP, and radar, where the product lists them.',
  },
  '/store/': {
    title: 'Call of Duty 4: Modern Warfare Store | Call of Duty 4: Modern Warfare Cheats',
    description:
      'Explore the Call of Duty 4: Modern Warfare Cheats store. Compare weekly access at $15, monthly access at $35, and lifetime access at $150, plus Cloud DMA and HWID Spoofer.',
  },
  '/modern-warfare-cheats/': {
    title: 'Call of Duty 4: Modern Warfare Cheats | Weekly, Monthly and Lifetime',
    description:
      'Call of Duty 4: Modern Warfare cheats for Windows PC. Review Player ESP, Advanced Aimbot, loot ESP, and radar, then choose $15 weekly, $35 monthly, or $150 lifetime.',
  },
  '/cloud-dma/': {
    title: 'Cloud DMA | Call of Duty 4: Modern Warfare Cheats',
    description:
      'Cloud DMA is a related product at $15 for one week or $50 lifetime. It is sold separately from Call of Duty 4: Modern Warfare Cheats and uses its own checkout.',
  },
  '/hwid-spoofer/': {
    title: 'HWID Spoofer | Call of Duty 4: Modern Warfare Cheats',
    description:
      'HWID Spoofer is a related product at $15 for one week or $35 for one month. It is sold separately and does not guarantee access after a platform restriction.',
  },
  '/status/': {
    title: 'Call of Duty 4: Modern Warfare Status | Call of Duty 4: Modern Warfare Cheats',
    description:
      'Review Call of Duty 4: Modern Warfare product compatibility notes, game update notices, and Easy Anti-Cheat status. This page does not label the product undetected.',
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
    title: 'Call of Duty 4: Modern Warfare Cheats Support | Call of Duty 4: Modern Warfare',
    description:
      'Find help with Call of Duty 4: Modern Warfare Cheats purchases, product delivery, setup, configuration, and compatibility questions for Call of Duty 4: Modern Warfare on Windows PC.',
  },
  '/faq/': {
    title: 'Call of Duty 4: Modern Warfare Cheats FAQ | Plans, Features and Support',
    description:
      'Get answers about Call of Duty 4: Modern Warfare Cheats, including weekly, monthly, and lifetime pricing, product features, setup requirements, compatibility information, and support.',
  },
  '/reviews/': {
    title: 'Call of Duty 4: Modern Warfare Cheats Reviews | Buyer Feedback',
    description:
      'Buyer feedback for Call of Duty 4: Modern Warfare Cheats. This page lists only verified reviews about features, setup, and compatibility. None are on file yet.',
  },
  '/blog/': {
    title: 'Call of Duty 4: Modern Warfare Intel | Call of Duty 4: Modern Warfare Cheats',
    description:
      'Explore the Call of Duty 4: Modern Warfare information hub for product features, game updates, Windows PC requirements, aiming terminology, player visuals, loot, radar, and anti-cheat information.',
  },
  '/forum/': {
    title: 'Call of Duty 4: Modern Warfare Forum | Call of Duty 4: Modern Warfare Cheats',
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
