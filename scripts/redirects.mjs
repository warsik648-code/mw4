import { LEGACY_REDIRECTS } from './legacy-redirects.mjs';

/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map(
  Object.entries(LEGACY_REDIRECTS).flatMap(([from, to]) => {
    const bare = from.endsWith('/') ? from.slice(0, -1) : from;
    return [
      [from, to],
      [bare, to],
    ];
  }),
);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
