/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  mw4: 'https://zadeyo.com/go/ARIS?to=%2Fproducts%2Fmw4',
  cloudDma: 'https://levocheats.com/go/USMAN?to=%2Fcloud-dma',
  hwidSpoofer: 'https://levocheats.com/go/USMAN?to=%2Fhwid-spoofer',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/mw4', CHECKOUT_URLS.mw4],
  ['/go/mw4/', CHECKOUT_URLS.mw4],
  ['/go/modern-warfare', CHECKOUT_URLS.mw4],
  ['/go/modern-warfare/', CHECKOUT_URLS.mw4],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}

/** Keep plan selection when the internal /go/ path redirects to checkout. */
export function withForwardedQuery(destination, searchParams) {
  const url = new URL(destination);
  for (const [key, value] of searchParams.entries()) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  return url.toString();
}
