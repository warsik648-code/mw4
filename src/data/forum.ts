export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  subheading?: string;
  seoTitle?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides', tone: 'blue', icon: 'navBlog' },
  { name: 'Updates', tone: 'orange', icon: 'refresh' },
  { name: 'Compatibility', tone: 'green', icon: 'messageCircle' },
] as const;

function note(input: Omit<ForumPost, 'author' | 'age' | 'commentsCount' | 'upvotes' | 'flair' | 'comments'> & { tip: string }): ForumPost {
  const { tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: 'Editorial',
    commentsCount: 1,
    upvotes: 0,
    flair: 'From the guide',
    comments: [{ author: 'guide_team', age: 'Editor note', score: 0, body: tip }],
  };
}

export const forumPosts: ForumPost[] = [
  note({
    slug: 'which-product-is-primary',
    category: 'General',
    categoryTone: 'purple',
    title: 'Which Call of Duty 4: Modern Warfare product is the main listing?',
    excerpt: 'The cheats card is the primary product. Cloud DMA and HWID Spoofer are related listings with their own checkout links.',
    sourceTitle: 'Call of Duty 4: Modern Warfare cheats buyer guide',
    sourcePath: '/cheats-guide/',
    body: [
      'Call of Duty 4: Modern Warfare Cheats is the primary product. Monthly access is $35 and lifetime access is $150.',
      'Cloud DMA and HWID Spoofer stay on the store as related products. A buy button on those cards must not send you to the main checkout.',
    ],
    tip: 'Match the card title to the checkout page before you pay.',
  }),
  note({
    slug: 'what-esp-names-mean',
    category: 'Guides',
    categoryTone: 'blue',
    title: 'What ESP names mean here',
    excerpt: 'ESP names on this listing match the feature list. They are not extra products and they are not a detection claim.',
    sourceTitle: 'Aimbot, ESP and radar terms',
    sourcePath: '/aimbot-esp/',
    subheading: 'Esp: Call of Duty 4: Modern Warfare Cheats',
    body: [
      'The card lists player visuals, an item label, an aiming entry, and a recoil entry. Those are names for one Windows PC product. They are not extra products you add at checkout, and none of them is a detection claim.',
      'Player visuals are the names for information drawn around another player: a box outline, a skeleton line, a health reading, a distance reading, and a weapon label. The item label is the loot entry. Aiming is Advanced Aimbot. Recoil control is No Recoil. Radar wording is explained in the same guide and is not a separate checkout.',
      'Read the names as labels on a list, not as a promise about anti-cheat. If a guide and the product card ever disagree, the card is the list that checkout uses. The guide only defines the words so a search and the card can be read together.',
      'A box outline is the rectangle drawn around a player model. A skeleton line follows the pose. Health and distance are numbers next to that model. A weapon label names the gun the player is holding. Loot text points at items rather than players. Keeping those jobs separate is how you tell the visual set apart from a second product.',
      'Easy Anti-Cheat questions stay on the status page. This note does not say a build is hidden, safe, or permanent. After a game update, the feature names can still be printed on the card while compatibility is unverified. That is why the status page and this definition are different pages.',
    ],
    tip: 'Use the product page if a guide and a card ever disagree. The card is the checkout list.',
  }),
  note({
    slug: 'how-to-read-status',
    category: 'Updates',
    categoryTone: 'orange',
    title: 'How should I read Call of Duty 4: Modern Warfare status?',
    seoTitle: 'Should – how to read this status note',
    excerpt: 'You should read the status note as a compatibility record for this listing. It is not a live server census or a detection claim.',
    sourceTitle: 'Patch notes and updates',
    sourcePath: '/patch-notes/',
    subheading: 'Should: Call of Duty 4: Modern Warfare Cheats',
    body: [
      'You should treat this note as a compatibility record for the Windows PC listing. You should not read it as a player-count board, a Steam chart, or a promise that a build stays usable after a patch.',
      'Product status and game-server status are different questions. This site does not publish a live server dashboard or a made-up player count. After a game update, open the status page before you assume the last build still matches the client.',
      'A useful reading order is short. First, confirm you are looking at this listing and not a newer Modern Warfare title. Second, read whether any compatibility note is actually published. Third, treat an empty note as “unverified,” not as “safe.” Easy Anti-Cheat is discussed on that page without a bypass claim, and public material for the 2007 PC release also mentions PunkBuster. Neither name is a result.',
      'Server population, tracker sites, and patch headlines answer other questions. Use those sources for population. Use the patch-notes guide to see how this site talks about updates without inventing a season. Use this discussion when the question is how the status page should be read before you play.',
      'If the card, the status page, and a guide disagree, the status page is the compatibility record and the card is the feature list. This discussion does not add a third list. It only explains which page answers which question.',
    ],
    tip: 'Easy Anti-Cheat is discussed there without a bypass claim.',
  }),
  note({
    slug: 'windows-pc-only',
    category: 'Compatibility',
    categoryTone: 'green',
    title: 'Is there a Call of Duty 4: Modern Warfare mobile setup?',
    excerpt: 'The products on this site are listed for Windows PC. Mobile searches are a different platform.',
    sourceTitle: 'Windows PC setup',
    sourcePath: '/pc-setup/',
    body: [
      'Checkout, requirements, and setup notes are for Windows 10 and Windows 11. A search for Call of Duty 4: Modern Warfare mobile does not map to a product on this site.',
      'Confirm the game client itself runs on your PC before you buy. This page does not ship the game download.',
    ],
    tip: 'Include your Windows version if you email support about setup.',
  }),
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
