import type { BlogBlock, BlogPostFull } from './types';

const rawGuides = import.meta.glob('./guides/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const image = '/images/blog/mw4-guide.svg';

const meta: Record<string, Omit<BlogPostFull, 'body' | 'slug' | 'image'>> = {
  'cheats-guide': {
    tag: 'Guides',
    title: 'Plans: Call of Duty 4: Modern Warfare cheats and what the words mean',
    desc: 'How this site uses Call of Duty 4: Modern Warfare cheats, the feature names, and which guides cover the game itself.',
    date: 'Oct 28, 2026',
    readTime: '8 min read',
    seoTitle: 'Plans – Call of Duty 4 | Modern Warfare Cheats',
    seoDescription:
      'Read how Call of Duty 4: Modern Warfare cheats are listed for Windows PC, what the plans cost, and which guides cover the game rather than checkout.',
    featured: true,
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'aimbot-esp': {
    tag: 'Features',
    title: 'Aimbot, ESP, wallhack, and radar terms',
    desc: 'What Advanced Aimbot, Player ESP, Loot ESP, and radar mean on this listing, without a detection claim.',
    date: 'Oct 27, 2026',
    readTime: '8 min read',
    seoTitle: 'Aimbot – Call of Duty 4 | Modern Warfare Cheats',
    seoDescription:
      'Definitions for Call of Duty 4: Modern Warfare aimbot, ESP, wallhack, loot visuals, and radar terms used on the Windows PC product.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'patch-notes': {
    tag: 'Updates',
    title: 'How to read patch notes and updates',
    desc: 'What a Call of Duty 4: Modern Warfare update note is for, and why this site will not invent a season.',
    date: 'Oct 26, 2026',
    readTime: '8 min read',
    seoTitle: 'Patch Notes – Call of Duty 4 | Modern Warfare Cheats',
    seoDescription:
      'How to read Call of Duty 4: Modern Warfare patch notes and updates without treating a seasonal headline as a real client change.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'player-count': {
    tag: 'Guides',
    title: 'Player count, Steam charts, and trackers',
    desc: 'Why this site does not publish a live Call of Duty 4: Modern Warfare player count, and how to read outside charts.',
    date: 'Oct 25, 2026',
    readTime: '8 min read',
    seoTitle: 'Call of Duty 4: Modern Warfare Player Count and Steam Charts',
    seoDescription:
      'How Call of Duty 4: Modern Warfare player count, Steam charts, trackers, and server status differ from this site’s product status.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'shader-loading': {
    tag: 'Troubleshooting',
    title: 'Why shaders can take a long time to load',
    desc: 'A plain explanation of shader waits on PC, and why a cheat plan is not a fix for the wrong client.',
    date: 'Oct 24, 2026',
    readTime: '8 min read',
    seoTitle: 'Call of Duty 4: Modern Warfare Shader Loading on PC',
    seoDescription:
      'Why Call of Duty shader loading can take a long time on PC, and how that differs from the 2007 game and from this product.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'ranks-tier-list': {
    tag: 'Guides',
    title: 'Ranks, prestige, tier lists, and pick rates',
    desc: 'How Call of Duty 4: Modern Warfare ranking worked, and why this site will not invent pick rates.',
    date: 'Oct 23, 2026',
    readTime: '8 min read',
    seoTitle: 'Call of Duty 4: Modern Warfare Ranks and Tier Lists',
    seoDescription:
      'Call of Duty 4: Modern Warfare ranks, ranking, tier lists, and pick rates explained without fabricated percentages.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'map-rotation': {
    tag: 'Guides',
    title: 'Maps and map rotation',
    desc: 'Launch maps players still name, what a rotation is, and why there is no verified 2026 map on this site.',
    date: 'Oct 22, 2026',
    readTime: '8 min read',
    seoTitle: 'Call of Duty 4: Modern Warfare Maps and Map Rotation',
    seoDescription:
      'Call of Duty 4: Modern Warfare maps, map rotation, and the limit on any new map 2026 claim this site will not make.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'release-date': {
    tag: 'Guides',
    title: 'Release date, download, and mobile searches',
    desc: 'When Call of Duty 4: Modern Warfare came out, and why download and mobile searches are not this product.',
    date: 'Oct 21, 2026',
    readTime: '8 min read',
    seoTitle: 'Call of Duty 4: Modern Warfare Release Date',
    seoDescription:
      'When Call of Duty 4: Modern Warfare came out, plus what download and mobile searches do not find on this Windows PC site.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'characters-skins': {
    tag: 'Guides',
    title: 'Characters, skins, and create-a-class sets',
    desc: 'Campaign characters, camouflage, and why legends are a different game’s word.',
    date: 'Oct 20, 2026',
    readTime: '8 min read',
    seoTitle: 'Characters – Call of Duty 4 | Modern Warfare Cheats',
    seoDescription:
      'Call of Duty 4: Modern Warfare characters, character names, skins, sets, and why legend searches belong to other games.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'easy-anti-cheat': {
    tag: 'Troubleshooting',
    title: 'Easy Anti-Cheat and the anti-cheat question',
    desc: 'How this site talks about Easy Anti-Cheat and PunkBuster without a bypass or an undetected label.',
    date: 'Oct 19, 2026',
    readTime: '8 min read',
    seoTitle: 'Anti Cheat – Call of Duty 4 | Modern Warfare Cheats',
    seoDescription:
      'Call of Duty 4: Modern Warfare anti-cheat terms, including Easy Anti-Cheat, with no bypass steps and no undetected claim.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
  'pc-setup': {
    tag: 'Setup',
    title: 'Windows PC setup, downloads, and macros',
    desc: 'Windows requirements, what alter and macro script searches do not get from this site, and the order to follow.',
    date: 'Oct 18, 2026',
    readTime: '8 min read',
    seoTitle: 'Call of Duty 4: Modern Warfare PC Setup',
    seoDescription:
      'Windows PC setup for Call of Duty 4: Modern Warfare Cheats, including download limits and why no macro script is published.',
    author: 'Call of Duty 4: Modern Warfare Cheats',
  },
};

function parseMarkdown(markdown: string): BlogBlock[] {
  const blocks: BlogBlock[] = [];
  let paragraph: string[] = [];

  const flush = () => {
    const text = paragraph.join(' ').trim();
    if (text) blocks.push({ type: 'p', text });
    paragraph = [];
  };

  for (const line of markdown.replace(/\r\n/g, '\n').split('\n')) {
    if (line.startsWith('## ')) {
      flush();
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      continue;
    }
    if (!line.trim()) {
      flush();
      continue;
    }
    paragraph.push(line.trim());
  }
  flush();
  return blocks;
}

export const blogPosts: BlogPostFull[] = Object.entries(meta).map(([slug, entry]) => {
  const key = Object.keys(rawGuides).find((path) => path.endsWith(`/${slug}.md`));
  if (!key) throw new Error(`Missing guide: ${slug}`);
  return {
    ...entry,
    slug,
    image,
    body: parseMarkdown(rawGuides[key]),
  };
});
