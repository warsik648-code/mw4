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
  sourcePath?: string;
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
      'Call of Duty 4: Modern Warfare Cheats is the primary product. Weekly access is $15, monthly access is $35, and lifetime access is $150.',
      'Cloud DMA and HWID Spoofer stay on the store as related products. A buy button on those cards must not send you to the main checkout.',
    ],
    tip: 'Match the card title to the checkout page before you pay.',
  }),
  note({
    slug: 'what-esp-names-mean',
    category: 'Guides',
    categoryTone: 'blue',
    title: 'What do Player ESP, Box ESP, and Loot ESP mean here?',
    excerpt: 'The names match the feature list. They are not extra products and they are not a detection claim.',
    sourceTitle: 'Aimbot, ESP and radar terms',
    sourcePath: '/aimbot-esp/',
    body: [
      'Player ESP, Weapon ESP, Health Bar, Distance ESP, Box ESP, and Skeleton ESP are player visuals. Loot ESP is the item visual. Advanced Aimbot and No Recoil are the aiming and recoil names.',
      'Radar is explained in the same guide. None of these labels means the build is undetected.',
    ],
    tip: 'Use the product page if a guide and a card ever disagree. The card is the checkout list.',
  }),
  note({
    slug: 'how-to-read-status',
    category: 'Updates',
    categoryTone: 'orange',
    title: 'How should I read Call of Duty 4: Modern Warfare status?',
    excerpt: 'The status page is about this listing and game-update risk. It is not a live server census.',
    sourceTitle: 'Patch notes and updates',
    sourcePath: '/patch-notes/',
    body: [
      'Product status and Call of Duty 4: Modern Warfare server status are different questions. This site does not publish a live server dashboard or a made-up player count.',
      'After a game update, read the status page before you assume the last build still matches the client.',
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
