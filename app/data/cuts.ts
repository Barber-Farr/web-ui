export type Cut = {
  id: string;
  name: string;
  summary: string;
  maintenance: string;
  bookingService: string;
  image?: string;
  imageAlt?: string;
};

export const cuts: Cut[] = [
  {
    id: "traditional-cut",
    name: "Traditional Cut",
    summary: "A clean, versatile cut shaped around your hair, routine, and preferred finish.",
    maintenance: "Usually refreshed every 4–6 weeks",
    bookingService: "Gent's Traditional Hair Cut",
    image: "/images/traditional-cut.jpg",
    imageAlt: "Traditional gentleman's haircut by Barber Farr",
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    summary: "A sharp fade taken down to skin and blended smoothly into the length above.",
    maintenance: "Usually refreshed every 2–3 weeks",
    bookingService: "Skin Fade",
    image: "/images/skin-fade.jpg",
    imageAlt: "Skin fade haircut by Barber Farr",
  },
  {
    id: "taper-fade",
    name: "Taper Fade",
    summary: "A softer fade concentrated around the temples and neckline while retaining weight.",
    maintenance: "Usually refreshed every 2–3 weeks",
    bookingService: "Taper Fade or Burst Fade",
    image: "/images/taper-fade.jpg",
    imageAlt: "Taper fade haircut by Barber Farr",
  },
  {
    id: "burst-fade",
    name: "Burst Fade",
    summary: "A curved fade around the ear that leaves more length and shape through the back.",
    maintenance: "Usually refreshed every 2–3 weeks",
    bookingService: "Taper Fade or Burst Fade",
    image: "/images/burst-fade.jpg",
    imageAlt: "Burst fade haircut by Barber Farr",
  },
  {
    id: "scissor-cut",
    name: "Natural Scissor Cut",
    summary: "A softer, natural finish created primarily with scissors and shaped to move well.",
    maintenance: "Usually refreshed every 6–8 weeks",
    bookingService: "Natural Scissor Cut",
    image: "/images/scissor-cut-v2.jpg",
    imageAlt: "Natural scissor haircut by Barber Farr",
  },
  {
    id: "restyle",
    name: "Restyle",
    summary: "Extra time for a meaningful change in length, shape, texture, or overall direction.",
    maintenance: "Varies according to the finished style",
    bookingService: "Men's Restyle",
  },
  {
    id: "pixie-cut",
    name: "Pixie Cut",
    summary: "A short, carefully shaped cut balancing texture, movement, and a clean silhouette.",
    maintenance: "Usually refreshed every 6–8 weeks",
    bookingService: "Women's Pixie Cut",
    image: "/images/pixie-cut.jpg",
    imageAlt: "Pixie haircut by Barber Farr",
  },
  {
    id: "under-cut",
    name: "Under Cut",
    summary: "A focused clipper service for maintaining a clearly separated shorter section.",
    maintenance: "Usually refreshed every 2–3 weeks",
    bookingService: "Under Cut",
    image: "/images/under-cut.webp",
    imageAlt: "Undercut by Barber Farr",
  },
];
