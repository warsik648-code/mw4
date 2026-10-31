import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { SUPPORT_EMAIL } from '../config/site';
import { ROUTES } from '../utils/path';

const store = ROUTES.products;

export const en: Translations = {
  site: {
    name: 'Call of Duty 4: Modern Warfare Cheats',
    domain: 'mw4cheats.net',
    title: 'Call Of Duty 4 – Aimbot, ESP and Radar',
    description:
      'Explore Call of Duty 4: Modern Warfare cheats for Windows PC, including MW4 player ESP, Modern Warfare 4 aimbot, and recoil control.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: store, label: 'Store' },
    { href: ROUTES.features, label: 'Features' },
    { href: ROUTES.blog, label: 'Blog' },
    { href: ROUTES.faq, label: 'FAQ' },
    { href: ROUTES.support, label: 'Support' },
  ],
  hero: {
    status: 'Windows PC · check the status page after each game update',
    eyebrow: 'Call of Duty 4: Modern Warfare',
    titleLine1: 'Call of Duty 4: Modern Warfare',
    titleLine2: 'Call Of Duty 4: Cheats',
    subtitle:
      'The Windows PC listing covers MW4 player ESP, Modern Warfare 4 aimbot, and MW4 no recoil, plus the box, skeleton, and distance visuals named below. Read the status page before you play.',
    ctaPrimary: 'View store',
    ctaDiscord: 'View features',
    modesLabel: 'Feature set',
    modes: ['Player ESP', 'Aimbot', 'No Recoil'],
    metrics: [
      { label: 'Platform', strong: 'Windows' },
      { label: 'Visuals', strong: 'ESP' },
      { label: 'Aiming', strong: 'Aimbot' },
      { label: 'Market', strong: 'Worldwide' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Call of Duty 4: Modern Warfare cheat features',
    subtitle:
      'Modern Warfare 4 cheat features below match the product page. Compatibility can change after a game update.',
    items: [
      {
        title: 'Advanced Aimbot',
        subtitle: 'Aiming options listed for this build.',
        desc: 'Modern Warfare 4 aimbot is the aiming feature on the product page. MW4 aim assist is that same entry, not a second product, and it is not a detection promise.',
        bullets: [
          'Listed as an aiming option for Windows PC',
          'Read the preview for the same names',
          'Recheck the status page after a game update',
          'Sold as part of the main product, not Cloud DMA',
          'The feature list is the same on every card for this product',
        ],
        tags: ['aimbot', 'Call of Duty 4: Modern Warfare cheats', 'pc'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Player visuals named on the product.',
        desc: 'MW4 player ESP and MW4 enemy ESP are the player-visual names on this listing. They are feature labels, not an anti-cheat result.',
        bullets: ['Player information overlay where the build supports it', 'Pair with Box ESP and Health Bar on the same list', 'Confirm the current build on the status page'],
        tags: ['player ESP', 'ESP', 'wallhack'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Weapon ESP',
        subtitle: 'Weapon information, where supported.',
        desc: 'Weapon ESP is listed separately from Player ESP so you can see which visuals the product actually names.',
        bullets: ['Weapon labels where the current build includes them', 'Not the same control as Loot ESP'],
        tags: ['weapon ESP', 'pc'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Health Bar',
        subtitle: 'Health readout on the feature list.',
        desc: 'Health Bar is the health visual published for this Call of Duty 4: Modern Warfare product.',
        bullets: ['Shown with the other player visuals', 'Availability follows the current build note'],
        tags: ['health', 'ESP'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Distance ESP',
        subtitle: 'Distance readouts on supported visuals.',
        desc: 'MW4 distance ESP adds distance text to the player visuals where the build includes it.',
        bullets: ['Distance text where the build includes it', 'Use with Player ESP, not as a separate product'],
        tags: ['distance ESP', 'ESP'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Box ESP',
        subtitle: 'Box outlines on the same visual set.',
        desc: 'MW4 box ESP is the box-style player visual. MW4 player outlines use that same visual set.',
        bullets: ['Listed beside Skeleton ESP', 'Does not add a second checkout'],
        tags: ['box ESP', 'ESP'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Skeleton ESP',
        subtitle: 'Skeleton-style player visuals.',
        desc: 'MW4 skeleton ESP is the skeleton-style player visual on the main product.',
        bullets: ['Player skeleton visuals where supported', 'See the preview page for the same names'],
        tags: ['skeleton ESP', 'ESP'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Loot ESP',
        subtitle: 'Loot information on the feature list.',
        desc: 'Loot ESP is the item-visual feature named for Call of Duty 4: Modern Warfare Cheats. It is not a skin unlock.',
        bullets: ['Loot labels where the build supports them', 'Separate from the characters and skin guide'],
        tags: ['loot ESP', 'loot'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'No Recoil',
        subtitle: 'Recoil control named on the product.',
        desc: 'MW4 no recoil is the recoil control on the main product. MW4 recoil control is that same feature, and this site does not publish a separate macro script.',
        bullets: ['Listed with the aiming features', 'Read the macro script guide before you assume extra tools'],
        tags: ['no recoil', 'aimbot'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Before you buy',
    title: 'Published plans, not detection promises',
    subtitle:
      'Call of Duty 4: Modern Warfare Cheats is the primary product. Prices, feature names, and checkout links on this site are the ones to compare. We do not publish an undetected or ban-free guarantee.',
    usLabel: 'This site',
    otherLabel: 'Not stated',
    rows: [
      {
        title: 'Three main-product plans',
        desc: 'Weekly access is $15, monthly access is $35, and lifetime access is $150. Those prices are in USD.',
      },
      {
        title: 'Separate related products',
        desc: 'Cloud DMA and HWID Spoofer have their own cards and checkout links. They are not required add-ons.',
      },
      {
        title: 'Named feature list',
        desc: 'Player ESP, Advanced Aimbot, Weapon ESP, Health Bar, Distance ESP, Box ESP, Skeleton ESP, Loot ESP, and No Recoil.',
      },
      {
        title: 'Windows PC only',
        desc: 'The listing is for Windows PC. It does not include a mobile client.',
      },
      {
        title: 'Status without a detection claim',
        desc: 'The status page explains compatibility limits and Easy Anti-Cheat questions. It does not mark the product undetected.',
      },
      {
        title: 'Support mailbox on file',
        desc: `Purchase and setup questions go to ${SUPPORT_EMAIL}. That address is the existing support contact.`,
      },
    ],
    metrics: [
      { value: '$15', title: '1 week', desc: 'Main product weekly plan, billed in USD.' },
      { value: '$35', title: '1 month', desc: 'Main product monthly plan, billed in USD.' },
      { value: '$150', title: 'Lifetime', desc: 'Main product lifetime plan, billed in USD.' },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Windows PC setup in',
    titleHighlight: 'three checkpoints',
    intro:
      'Setup for Call of Duty 4: Modern Warfare Cheats starts with the product you selected, the Windows PC requirements, and the current status note. Do not follow instructions from old pages about other games.',
    ctaPrimary: 'Open the store',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: store,
    ctaSecondaryHref: ROUTES.faq,
    steps: [
      {
        step: 'Step 1',
        title: 'Choose the matching product',
        desc: 'Main cheats, Cloud DMA, and HWID Spoofer use different checkout links. Confirm the card title before you pay.',
      },
      {
        step: 'Step 2',
        title: 'Read the delivery note',
        desc: 'After checkout, use only the access instructions that arrive with that order. This page does not host a public loader file.',
      },
      {
        step: 'Step 3',
        title: 'Check status, then launch on Windows',
        desc: 'Open the status page after a Call of Duty 4: Modern Warfare update. The product is listed for Windows PC, not mobile.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC listing.',
    subtitle: 'Read the status page before you treat a build as current.',
    items: ['Windows 10', 'Windows 11', 'Windows PC', 'Player ESP', 'Status page', 'Setup guide', 'Support email', 'Radar'],
  },
  cheats: {
    eyebrow: 'Main product',
    title: 'Call of Duty 4: Modern Warfare Cheats',
    subtitle: 'Primary listing for Windows PC. Related products stay on their own cards.',
    viewAll: 'View the product',
    explore: 'Explore',
    items: [
      {
        badge: 'Primary',
        tier: 'Main',
        name: 'Modern Warfare Cheats',
        title: 'Call of Duty 4: Modern Warfare Cheats',
        desc: 'Aiming features, player ESP, loot ESP, and radar terminology for Call of Duty 4: Modern Warfare on Windows PC.',
        features: ['Advanced Aimbot', 'Player ESP', 'Loot ESP', 'Box ESP', 'Skeleton ESP', 'No Recoil'],
        more: 3,
        href: ROUTES.mainProduct,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Store',
    title: 'Call of Duty 4: Modern Warfare store',
    subtitle:
      'The main cheats listing comes first. Cloud DMA and HWID Spoofer are related products with their own prices and checkout links.',
    homeSubtitle:
      'The main cheats listing comes first. Cloud DMA and HWID Spoofer are related products with their own pages.',
    viewAll: 'Open the store',
    get: 'Buy now',
    explore: 'View details',
    items: [
      {
        badge: 'Primary',
        category: 'Main product',
        title: 'Call of Duty 4: Modern Warfare Cheats',
        subtitle: '$15 week · $35 month · $150 lifetime',
        desc: 'Windows PC listing with the published aiming, ESP, loot, and recoil features.',
        features: ['Advanced Aimbot', 'Player ESP', 'Loot ESP', 'No Recoil'],
        more: 5,
        href: ROUTES.mainProduct,
      },
      {
        badge: 'Related',
        category: 'Related product',
        title: 'Cloud DMA',
        subtitle: '$15 week · $50 lifetime',
        desc: 'A separate product. It is not required to use the main cheats listing.',
        features: ['Own checkout link', 'Weekly and lifetime prices', 'Not a bundle'],
        more: 0,
        href: ROUTES.cloudDma,
      },
      {
        badge: 'Related',
        category: 'Related product',
        title: 'HWID Spoofer',
        subtitle: '$15 week · $35 month',
        desc: 'A separate product. It does not guarantee that a restricted account will play again.',
        features: ['Own checkout link', 'Weekly and monthly prices', 'Not a bundle'],
        more: 0,
        href: ROUTES.hwidSpoofer,
      },
    ],
  },
  blog: {
    eyebrow: 'Intel',
    title: 'Call of Duty 4: Modern Warfare guides',
    subtitle:
      'Guides cover characters, ranking, maps, player count, patch notes, shaders, and anti-cheat terms. They do not invent live server numbers.',
    latestTitle: 'Latest guides',
    latestSubtitle: 'Short slugs for the topics players search.',
    filterAll: 'All',
    sortLabel: 'Sort',
    sortNewest: 'Newest',
    sortOldest: 'Oldest',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No guides match that filter.',
    viewAll: 'All guides',
    read: 'Read guide',
    items: [],
  },
  toolkit: {
    eyebrow: 'Terms',
    title: 'Feature terms used on this site',
    subtitle: 'The same names appear on the product page, preview, and FAQ.',
    items: [
      { num: '01', label: 'Aim', title: 'Advanced Aimbot', desc: 'The aiming feature named for the main product.' },
      { num: '02', label: 'Visuals', title: 'Player ESP', desc: 'Player, box, skeleton, health, distance, and weapon visuals.' },
      { num: '03', label: 'Loot', title: 'Loot ESP', desc: 'Item visuals, separate from cosmetic skin guides.' },
      { num: '04', label: 'Radar', title: 'Radar terms', desc: 'Radar is described in the preview and the aimbot and ESP guide.' },
    ],
  },
  workflow: {
    eyebrow: 'Checkout',
    badge: 'PC',
    titleBefore: 'Pick a product, then',
    titleHighlight: 'use its own checkout',
    titleAfter: '',
    subtitle: 'A buy button on Cloud DMA or HWID Spoofer must not send you to the main cheats checkout.',
    ctaLabel: 'Open the store',
    ctaHref: store,
    ctaSecondary: 'Read the FAQ',
    ctaSecondaryHref: ROUTES.faq,
    items: [
      { num: '01', phase: 'Compare', title: 'Read the card', desc: 'The main card lists the cheat features. Cloud DMA and HWID Spoofer are separate products.' },
      { num: '02', phase: 'Pay', title: 'Use that card’s button', desc: 'Each Buy now control redirects to the checkout URL stored for that product.' },
      { num: '03', phase: 'Confirm', title: 'Match the product', desc: 'Stay on the card whose name you meant to open. The three products are not one bundle.' },
      { num: '04', phase: 'Play', title: 'Check status first', desc: 'A game update can change whether a build is currently usable. The status page says what we can verify.' },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'What this site will not claim',
    items: [
      { num: '01', title: 'No undetected label', desc: 'Easy Anti-Cheat questions are explained without a bypass or safety guarantee.' },
      { num: '02', title: 'No invented patch notes', desc: 'Update guides tell you how to read notes. They do not publish a fake season patch.' },
      { num: '03', title: 'No fake reviews', desc: 'The reviews page stays empty until feedback is verified.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Call of Duty 4: Modern Warfare Cheats support',
    subtitle: 'Questions about purchases, delivery, setup, and Windows PC compatibility.',
    channels: [
      {
        icon: 'users',
        title: 'Main product checkout',
        desc: 'Weekly, monthly, and lifetime plans for the cheats listing.',
        linkLabel: 'Continue to checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email support',
        desc: 'Use the existing support address for order and setup help.',
        linkLabel: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Plans, features, and compatibility answers.',
        linkLabel: 'View the FAQ',
        href: ROUTES.faq,
      },
      {
        icon: 'clock',
        title: 'Status page',
        desc: 'Compatibility notes after a game update. No detection guarantee.',
        linkLabel: 'Open status',
        href: ROUTES.status,
      },
    ],
    ticketTitle: 'Include in your message',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout for that product.' },
      { title: 'Product name', desc: 'Main cheats, Cloud DMA, or HWID Spoofer.' },
      { title: 'Windows version', desc: 'Windows 10 or Windows 11, plus the error text you see.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Plans, features, and support',
    subtitle: 'Prices and checkout links match the store. Detection results are not guaranteed.',
    items: [
      {
        num: '01',
        q: 'What does the main product cost?',
        a: 'Call of Duty 4: Modern Warfare Cheats is $15 for 1 week, $35 for 1 month, and $150 lifetime. Prices are in USD.',
      },
      {
        num: '02',
        q: 'What are the related product prices?',
        a: 'Cloud DMA is $15 for 1 week and $50 lifetime. HWID Spoofer is $15 for 1 week and $35 for 1 month. Each has its own checkout.',
      },
      {
        num: '03',
        q: 'Which features are listed?',
        a: 'Player ESP, Advanced Aimbot, Weapon ESP, Health Bar, Distance ESP, Box ESP, Skeleton ESP, Loot ESP, and No Recoil.',
      },
      {
        num: '04',
        q: 'Does the status page say the product is undetected?',
        a: 'No. The status page discusses Easy Anti-Cheat and game updates without a bypass or undetected claim.',
      },
      {
        num: '05',
        q: 'Which platform can I use?',
        a: 'Windows PC. The product is not a Call of Duty 4: Modern Warfare mobile client.',
      },
      {
        num: '06',
        q: 'Where do I get help?',
        a: `Email ${SUPPORT_EMAIL} with your order email, product name, and Windows version.`,
      },
    ],
  },
  footer: {
    tagline:
      'Call of Duty 4: Modern Warfare cheats for Windows PC. Guides also cover characters, ranking, maps, player count, patch notes, and PC setup.',
    explore: 'Explore',
    exploreLinks: [
      { href: ROUTES.mainProduct, label: 'Call of Duty 4: Modern Warfare cheats', ariaLabel: 'Main product' },
      { href: ROUTES.features, label: 'Aimbot, ESP and radar features', ariaLabel: 'Features' },
      { href: '/player-count/', label: 'Player count and Steam charts', ariaLabel: 'Player count guide' },
      { href: '/patch-notes/', label: 'Patch notes and updates', ariaLabel: 'Patch notes guide' },
      { href: '/characters-skins/', label: 'Characters and skins', ariaLabel: 'Characters guide' },
      { href: '/ranks-tier-list/', label: 'Ranks, ranking and tier lists', ariaLabel: 'Ranks guide' },
      { href: '/map-rotation/', label: 'Maps and map rotation', ariaLabel: 'Maps guide' },
      { href: '/shader-loading/', label: 'Shader loading on PC', ariaLabel: 'Shader guide' },
      { href: ROUTES.status, label: 'Status and anti-cheat notes', ariaLabel: 'Status' },
      { href: ROUTES.blog, label: 'All guides', ariaLabel: 'Blog' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Call of Duty 4: Modern Warfare Cheats',
      description: 'What mw4cheats.net publishes for Call of Duty 4: Modern Warfare on Windows PC.',
      sections: [
        {
          heading: 'What this site is',
          paragraphs: [
            'mw4cheats.net publishes Call of Duty 4: Modern Warfare Cheats, plus the related products Cloud DMA and HWID Spoofer. The main product is the primary listing. The other two are not hidden and are not described as required companions.',
            'Call of Duty 4 is the 2007 PC game these pages describe. Call of Duty 4 multiplayer and the campaign are game topics, separate from the Windows PC software listed for sale. The guides explain characters, maps, and ranks for Call of Duty 4 without inventing a live season, a player total, or a patch that this site has not verified. Those notes stay on this domain under the Call of Duty 4 name.',
            'Game names are used so you can tell which Windows PC title the pages discuss. This site is not the game publisher.',
          ],
        },
        {
          heading: 'What we will say',
          paragraphs: [
            'Plan prices, feature names, and checkout links are kept in one configuration so cards and buttons stay aligned. Guides explain characters, maps, ranks, player-count tools, shaders, and anti-cheat terms without inventing a live season patch or a current player total.',
            'We do not publish an undetected guarantee, a permanent safety claim, or fabricated buyer reviews.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            `Order and setup questions go to ${SUPPORT_EMAIL}. Include the product name so the reply matches the checkout you used.`,
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How mw4cheats.net handles analytics, cookies, and support messages.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'If analytics are enabled, the site may receive standard measurements such as page views, browser type, and approximate region. Checkout happens on the external payment page for the product you selected. Card numbers are not stored on mw4cheats.net.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us see which guides are useful. A support message may keep the email address and the text you send until the question is handled.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'The site may store a theme choice and, when you pick a language, a locale preference in local storage. You can block storage in the browser. The English pages remain available without it.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            `Privacy questions can go to ${SUPPORT_EMAIL}. Purchase rules are in the Terms & Conditions.`,
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description: 'Purchase and use terms for products listed on mw4cheats.net.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 30, 2026. Using mw4cheats.net or completing checkout for a product linked from this site means you agree to these terms and the Privacy Policy.',
          ],
        },
        {
          heading: 'Products and prices',
          paragraphs: [
            'Call of Duty 4: Modern Warfare Cheats is listed at $15 for 1 week, $35 for 1 month, and $150 lifetime. Cloud DMA is listed at $15 for 1 week and $50 lifetime. HWID Spoofer is listed at $15 for 1 week and $35 for 1 month. Prices are in USD.',
            'Feature names describe the current listing. A game update can change what a build can do. The status page does not promise that a build will remain usable.',
          ],
        },
        {
          heading: 'Checkout',
          paragraphs: [
            'Each product button redirects to that product’s checkout URL. Payment is handled on the external checkout page. This site does not store payment card numbers.',
          ],
        },
        {
          heading: 'Use',
          paragraphs: [
            'Access is for the purchaser. Do not share delivery files or sign-in details. Third-party software can conflict with a game’s terms and with anti-cheat systems, including Easy Anti-Cheat where that system applies. You accept that risk.',
          ],
        },
        {
          heading: 'Refunds',
          paragraphs: [
            'Contact support with your order email and product name if the delivery does not match the listing on a supported Windows PC setup. Account restrictions, ignored setup notes, and change-of-mind requests are not automatic refunds.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'These terms can be updated. The date above will change when they are. Continued use of the site after a change means you accept the revised terms.',
          ],
        },
      ],
    },
    support: {
      title: 'Call of Duty 4: Modern Warfare Cheats Support',
      description: 'Help with purchases, delivery, setup, and Windows PC compatibility.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Buy now',
    browseCheatsMobile: 'Buy now',
    homeAria: 'Call of Duty 4: Modern Warfare Cheats home',
    checkoutAria: 'Continue to Call of Duty 4: Modern Warfare Cheats checkout',
    discordAria: 'Compare Call of Duty 4: Modern Warfare Cheats plans',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    buyNow: 'Buy now',
    viewDetails: 'View details',
    popular: 'Primary',
    moreFeatures: 'more features',
    home: 'Home',
    checkoutHeading: 'Checkout',
    selectPlan: 'Select a plan',
    purchaseOption: 'Purchase option',
    total: 'Total',
    notFoundTitle: 'Page not found',
    notFoundBody: 'That URL does not exist on mw4cheats.net or it has moved. Use the store or the guide index.',
    backHome: 'Back to home',
    viewStore: 'View store',
    inThisArticle: 'In this article',
    relatedGuides: 'Related guides',
    ourProducts: 'Our products',
    articleSidebar: 'Article sidebar',
    windowsPc: 'Windows PC',
    gameName: 'Call of Duty 4: Modern Warfare',
  },
};
