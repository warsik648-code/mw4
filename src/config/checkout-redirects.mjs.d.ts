export const CHECKOUT_URLS: {
  readonly mw4: string;
  readonly cloudDma: string;
  readonly hwidSpoofer: string;
};

export const CHECKOUT_PATH_REDIRECTS: ReadonlyMap<string, string>;

export function resolveCheckoutPathRedirect(pathname: string): string | null;

export function withForwardedQuery(destination: string, searchParams: URLSearchParams): string;
