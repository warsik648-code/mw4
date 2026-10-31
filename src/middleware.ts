import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect, withForwardedQuery } from './config/checkout-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const destination = resolveCheckoutPathRedirect(url.pathname);
  if (destination) {
    return context.redirect(withForwardedQuery(destination, url.searchParams), 302);
  }
  return next();
});
