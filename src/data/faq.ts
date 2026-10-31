import type { IconName } from '../components/icons/types';
import { SUPPORT_EMAIL } from '../config/site';
import { normalizeInternalPath, ROUTES } from '../utils/path';

export type FaqTopic = 'all' | 'plans' | 'esp' | 'scripts' | 'safety' | 'products' | 'blog' | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const main = link('Call of Duty 4: Modern Warfare Cheats', ROUTES.mainProduct);
const store = link('store', ROUTES.products);
const cloud = link('Cloud DMA', ROUTES.cloudDma);
const hwid = link('HWID Spoofer', ROUTES.hwidSpoofer);
const status = link('status page', ROUTES.status);
const setup = link('setup page', ROUTES.setup);
const faqPage = link('FAQ', ROUTES.faq);
const blog = link('guides', ROUTES.blog);
const reviews = link('reviews page', ROUTES.reviews);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check Call of Duty 4: Modern Warfare status?',
    a: `Open the ${status}. It separates product compatibility notes from game server status. It does not label the product undetected.`,
    scopes: ['modern-warfare-cheats', 'cloud-dma', 'hwid-spoofer'],
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: `Checkout for the product you selected handles delivery. Then follow the ${setup} and the note that arrives with the order. This site does not email a public loader link.`,
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can third-party software lead to a restriction?',
    a: 'Yes. Any modification can conflict with the game terms and with anti-cheat, including Easy Anti-Cheat where that system applies. This site does not promise a safe or undetected result.',
    scopes: ['modern-warfare-cheats'],
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platform is supported?',
    a: 'Windows PC. The listing is not a Call of Duty 4: Modern Warfare mobile product. macOS and Linux are not listed.',
  },
  {
    id: 'plans',
    topic: 'plans',
    icon: 'faqLicenseMove',
    q: 'What are the main product prices?',
    a: `${main} costs $15 for 1 week, $35 for 1 month, and $150 lifetime. Prices are in USD.`,
    scopes: ['modern-warfare-cheats'],
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are Cloud DMA and HWID Spoofer?',
    a: `Both are on the ${store}, next to the main product. ${cloud} is $15 weekly or $50 lifetime. ${hwid} is $15 weekly or $35 monthly. Each buy button uses its own checkout.`,
    scopes: ['cloud-dma', 'hwid-spoofer'],
  },
  {
    id: 'features',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Which features are on the main product?',
    a: 'Player ESP, Advanced Aimbot, Weapon ESP, Health Bar, Distance ESP, Box ESP, Skeleton ESP, Loot ESP, and No Recoil.',
    scopes: ['modern-warfare-cheats'],
  },
  {
    id: 'radar',
    topic: 'esp',
    icon: 'faqWhichTierEsp',
    q: 'Is radar a separate product?',
    a: `Radar wording is explained on the preview and in the aimbot and ESP guide. It is not a fourth checkout. Start from ${main}.`,
  },
  {
    id: 'hwid-guarantee',
    topic: 'safety',
    icon: 'faqHwidWhen',
    q: 'Will HWID Spoofer remove a restriction?',
    a: `No. ${hwid} does not guarantee access. The page also does not publish spoofing steps.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'bundle',
    topic: 'products',
    icon: 'faqComparePlans',
    q: 'Do I need all three products together?',
    a: 'No. The pages do not say the three products must be used together.',
  },
  {
    id: 'support-mail',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I contact support?',
    a: `Email ${SUPPORT_EMAIL} with the product name, order email, and Windows version.`,
  },
  {
    id: 'reviews',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Where are buyer reviews?',
    a: `The ${reviews} only publishes verified feedback. Empty means none are on file. Guides in the ${blog} are editorial, not testimonials.`,
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `Use the ${faqPage} for plans, features, and setup, or the ${blog} for characters, maps, ranks, shaders, and player-count terms.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'features', 'platforms', 'ban-risk', 'radar', 'bundle'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Plans, visuals, related products, setup, and guides for Call of Duty 4: Modern Warfare.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Short answers for what you are reading. The FAQ page collects the rest.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const general = siteFaqs.filter((f) => !f.scopes && f.topic !== 'all');
  const combined = [...scoped, ...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  }).slice(0, 8);
}

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are these guides product documentation?',
    a: `They explain terms and link to the ${store}. The product page is the list to use at checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Do the guides invent player counts or patch notes?',
    a: 'No. If a number or a patch is not from a source the article names, it is not stated as fact.',
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Where do I ask about an order?',
    a: `Email ${SUPPORT_EMAIL}. Do not put order details in a public comment.`,
  },
];

export function getBlogFaqs(tag: string, _slug: string): SiteFaqItem[] {
  const topic = siteFaqs.filter((item) => item.topic === 'blog' || (tag === 'Setup' && item.topic === 'setup'));
  const seen = new Set<string>();
  return [...topic, ...defaultBlogFaqs].filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  }).slice(0, 4);
}
