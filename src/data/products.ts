import type { IconName } from '../components/icons/types';
import { checkoutForSlug } from '../config/checkout';
import { t } from '../i18n';
import { productPath, ROUTES } from '../utils/path';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  headline?: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
  path: string;
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  'modern-warfare-cheats': ['cheats-guide', 'aimbot-esp', 'pc-setup', 'easy-anti-cheat'],
  'cloud-dma': ['cheats-guide', 'pc-setup', 'easy-anti-cheat'],
  'hwid-spoofer': ['pc-setup', 'easy-anti-cheat', 'cheats-guide'],
};

const windowsRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: '64-bit Windows 10 or Windows 11.' },
  { icon: 'reqCpu', text: 'A PC that already runs your Call of Duty 4: Modern Warfare client.' },
  { icon: 'reqSettings', text: 'Administrator access if the delivery instructions require it.' },
  { icon: 'reqWifi', text: 'A connection for checkout delivery and the status page.' },
];

const slide = (src: string, alt: string, caption: string, captionDesc: string): ProductSlide => ({
  src,
  alt,
  caption,
  captionDesc,
});

const mainImages: ProductSlide[] = [
  slide(
    '/images/gameplay/mw4-overview.svg',
    'Call of Duty 4: Modern Warfare Cheats preview card listing aimbot, ESP, and radar terms',
    'Main product preview',
    'Feature names for the Windows PC listing. This is not a live match screenshot.',
  ),
  slide(
    '/images/gameplay/mw4-features.svg',
    'Feature card for Player ESP, Box ESP, Skeleton ESP, and Loot ESP',
    'Player visuals',
    'Player ESP, box, skeleton, health, distance, weapon, and loot names from the product list.',
  ),
  slide(
    '/images/gameplay/mw4-radar.svg',
    'Radar and status card for Call of Duty 4: Modern Warfare Cheats',
    'Radar and status',
    'Radar is described on the preview. The status page does not claim an undetected result.',
  ),
];

const leadImages = (lead: string): ProductSlide[] =>
  mainImages.map((image, index) =>
    index === 0 ? { ...image, alt: `${lead} – ${image.alt}` } : { ...image },
  );

function steps(productName: string): ProductAcquisition {
  return {
    title: `How to buy ${productName}`,
    steps: [
      {
        num: '01',
        title: 'Confirm the product name',
        desc: `You are buying ${productName}. Cloud DMA, HWID Spoofer, and the main cheats listing are separate.`,
      },
      {
        num: '02',
        title: 'Choose a published plan',
        desc: 'The prices on this card are the prices charged for this product. They are in USD.',
      },
      {
        num: '03',
        title: 'Use this card’s checkout',
        desc: 'Buy now leaves this site for the checkout URL stored for this product only.',
      },
      {
        num: '04',
        title: 'Read delivery and status',
        desc: 'Follow the instructions that arrive with the order, then read the status page before you launch on Windows PC.',
      },
    ],
  };
}

const sharedLimitations =
  'Third-party software can violate the game’s terms and can lead to an account restriction. This listing does not promise that Easy Anti-Cheat, or any other anti-cheat, will miss the software. Compatibility can change after a game or Windows update.';

export const productPages: ProductPage[] = [
  {
    slug: 'modern-warfare-cheats',
    kind: 'tier',
    badge: 'Primary',
    tier: 'Main',
    category: 'Main product',
    name: 'Modern Warfare Cheats',
    title: 'Call of Duty 4: Modern Warfare Cheats',
    headline: 'Lifetime: Call of Duty 4: Modern Warfare Cheats',
    subtitle: '$15 for 1 week, $35 for 1 month, or $150 lifetime.',
    desc: 'Call of Duty 4: Modern Warfare cheats for Windows PC, with Advanced Aimbot, Player ESP, Weapon ESP, Health Bar, Distance ESP, Box ESP, Skeleton ESP, Loot ESP, and No Recoil.',
    features: ['Advanced Aimbot', 'Player ESP', 'Weapon ESP', 'Health Bar', 'Loot ESP', 'No Recoil'],
    more: 3,
    variant: 'popular',
    buyUrl: checkoutForSlug('modern-warfare-cheats'),
    images: leadImages('Lifetime'),
    overview: {
      title: 'The primary Call of Duty 4: Modern Warfare listing',
      paragraphs: [
        'Lifetime access is the longest published option on this listing, at $150. Weekly access is $15 and monthly access is $35. The card covers Advanced Aimbot, Player ESP, and the rest of the named visuals for the Windows PC product.',
        'Cloud DMA and HWID Spoofer sit beside it in the store because they are related products. You do not have to buy them to check out this listing.',
      ],
    },
    acquisition: steps('Call of Duty 4: Modern Warfare Cheats'),
    goodToKnow:
      'Read the status page after a Call of Duty 4: Modern Warfare update. A build note there is the compatibility record. It is not an undetected certificate.',
    limitations: sharedLimitations,
    fullFeatures: [
      'Player ESP',
      'Advanced Aimbot',
      'Weapon ESP',
      'Health Bar',
      'Distance ESP',
      'Box ESP',
      'Skeleton ESP',
      'Loot ESP',
      'No Recoil',
    ],
    systemRequirements: windowsRequirements,
    about: [
      {
        type: 'p',
        text: 'Call of Duty 4: Modern Warfare Cheats is the Windows PC product on mw4cheats.net. The feature names on this page are the ones repeated on the homepage, preview, FAQ, and store.',
      },
      { type: 'h2', text: 'Lifetime: Call of Duty 4: Modern Warfare Cheats' },
      {
        type: 'p',
        text: 'Choose 1 week for $15, 1 month for $35, or lifetime for $150. The buy button adds the plan you select and redirects to this product’s checkout, not to Cloud DMA or HWID Spoofer.',
      },
    ],
    body: [
      { type: 'h2', text: 'What the names mean' },
      {
        type: 'p',
        text: 'Advanced Aimbot is the aiming feature. Player ESP, Weapon ESP, Health Bar, Distance ESP, Box ESP, and Skeleton ESP are the player visuals. Loot ESP is the item visual. No Recoil is the recoil feature. Radar wording is explained on the preview and in the aimbot and ESP guide.',
      },
      { type: 'h2', text: 'What this page will not add' },
      {
        type: 'p',
        text: 'There is no separate skin unlock, mobile app, or macro script in this listing. Characters, skins, ranks, maps, and player count are covered in the guides so you can tell game information from product features.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['modern-warfare-cheats'],
    path: productPath('modern-warfare-cheats'),
  },
  {
    slug: 'cloud-dma',
    kind: 'utility',
    badge: 'Related',
    category: 'Related product',
    name: 'Cloud DMA',
    title: 'Cloud DMA',
    subtitle: '$15 for 1 week or $50 lifetime.',
    desc: 'Cloud DMA is a related product with its own checkout. It is not bundled with Call of Duty 4: Modern Warfare Cheats, and this page does not invent hardware specifications.',
    features: ['$15 for 1 week', '$50 lifetime', 'Separate checkout', 'Not required with the main product'],
    more: 0,
    buyUrl: checkoutForSlug('cloud-dma'),
    images: leadImages('Cloud Dma'),
    overview: {
      title: 'A related product, not the main cheats listing',
      paragraphs: [
        'Cloud DMA is sold next to Call of Duty 4: Modern Warfare Cheats so you can see it without hunting through the footer. The price is $15 for one week or $50 lifetime.',
        'This page does not claim that Cloud DMA must be used with the main product, and it does not publish unstated compatibility guarantees.',
      ],
    },
    acquisition: steps('Cloud DMA'),
    goodToKnow: 'Use the Cloud DMA buy button. It does not redirect to the main cheats checkout.',
    limitations:
      'No extra technical specification is published here. If a detail is not on this card, treat it as unpublished rather than implied.',
    fullFeatures: ['Weekly plan at $15', 'Lifetime plan at $50', 'Dedicated checkout URL', 'Shown beside the main product'],
    systemRequirements: windowsRequirements,
    body: [
      { type: 'h2', text: 'Price' },
      { type: 'p', text: 'Cloud DMA is $15 for 1 week and $50 lifetime. It does not use the $35 monthly or $150 lifetime price from the main cheats listing.' },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['cloud-dma'],
    path: productPath('cloud-dma'),
  },
  {
    slug: 'hwid-spoofer',
    kind: 'utility',
    badge: 'Related',
    category: 'Related product',
    name: 'HWID Spoofer',
    title: 'HWID Spoofer',
    subtitle: '$15 for 1 week or $35 for 1 month.',
    desc: 'HWID Spoofer is a related product with its own checkout. It does not guarantee that a hardware or account restriction will be lifted.',
    features: ['$15 for 1 week', '$35 for 1 month', 'Separate checkout', 'No access guarantee'],
    more: 0,
    buyUrl: checkoutForSlug('hwid-spoofer'),
    images: leadImages('Hwid Spoofer'),
    overview: {
      title: 'A separate hardware-ID product',
      paragraphs: [
        'HWID Spoofer is listed at $15 for one week and $35 for one month. It is not a lifetime plan, and it is not included in the $150 cheats lifetime plan.',
        'Buying it does not mean a restricted Call of Duty 4: Modern Warfare account will play again. This page does not publish spoofing steps.',
      ],
    },
    acquisition: steps('HWID Spoofer'),
    goodToKnow: 'Support can only discuss the order you place. They cannot promise a platform will remove a restriction.',
    limitations:
      'Hardware-ID changes can break a Windows install when they are done carelessly. This site does not provide a spoofing procedure, driver steps, or a ban-evasion checklist.',
    fullFeatures: ['Weekly plan at $15', 'Monthly plan at $35', 'Dedicated checkout URL', 'Shown beside the main product'],
    systemRequirements: [
      { icon: 'reqWindows', text: '64-bit Windows 10 or Windows 11.' },
      { icon: 'reqShieldGuide', text: 'Read this page’s limits before checkout. There is no access guarantee.' },
      { icon: 'reqWifi', text: 'A connection for checkout and support email.' },
    ],
    body: [
      { type: 'h2', text: 'What this product is not' },
      {
        type: 'p',
        text: 'It is not a guide to evade a ban, and it is not a substitute for the main Call of Duty 4: Modern Warfare Cheats plans. Use its own buy button.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['hwid-spoofer'],
    path: productPath('hwid-spoofer'),
  },
];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = mainImages;

export const productHub = {
  path: ROUTES.products,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Call of Duty 4: Modern Warfare Cheats at $15, $35, and $150, plus Cloud DMA and HWID Spoofer with their own checkout links.',
  buyUrl: checkoutForSlug('modern-warfare-cheats'),
};
