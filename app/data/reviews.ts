export type Review = {
  quote: string;
  attribution: string;
};

export const reviewSummary = {
  rating: 5,
  count: 95,
  source: "Google",
  business: "Moli Barbers",
  lastVerified: "29 August 2026",
};

export const reviews: Review[] = [
  {
    quote: "Great staff, good haircuts and reasonably priced... can’t go wrong.",
    attribution: "Google review · Moli Barbers",
  },
  {
    quote: "Great cut, attention to detail and listening to customer requests.",
    attribution: "Google review · Moli Barbers",
  },
  {
    quote: "Great haircut and even nicer people.",
    attribution: "Google review · Moli Barbers",
  },
];
