export type ProductPlanId = 'weekly' | 'monthly' | 'lifetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
  duration: string;
}

const mainPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: 'USD / 7 days', duration: 'P7D' },
  { id: 'monthly', label: '1 Month', priceUsd: 35, priceNote: 'USD / 30 days', duration: 'P30D' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'USD · one-time', duration: 'P99Y' },
];

const hwidPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: 'USD / 7 days', duration: 'P7D' },
  { id: 'monthly', label: '1 Month', priceUsd: 35, priceNote: 'USD / 30 days', duration: 'P30D' },
];

const cloudDmaPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: 'USD / 7 days', duration: 'P7D' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 50, priceNote: 'USD · one-time', duration: 'P99Y' },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'hwid-spoofer') return hwidPlans;
  if (productSlug === 'cloud-dma') return cloudDmaPlans;
  return mainPlans;
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}
