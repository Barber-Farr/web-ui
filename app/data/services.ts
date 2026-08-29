import { getServiceBookingUrl } from "./links";

export type Service = {
  name: string;
  duration: string;
  price: string;
  note?: string;
  bookingUrl?: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "cuts-and-fades",
    title: "Cuts & fades",
    services: [
      {
        name: "Gent's Traditional Hair Cut",
        duration: "20 mins",
        price: "£19",
        bookingUrl: getServiceBookingUrl("74490916"),
      },
      {
        name: "Skin Fade",
        duration: "40 mins",
        price: "£22",
        bookingUrl: getServiceBookingUrl("74492634"),
      },
      {
        name: "Taper Fade or Burst Fade",
        duration: "40 mins",
        price: "£22",
        bookingUrl: getServiceBookingUrl("74492645"),
      },
      {
        name: "Natural Scissor Cut",
        duration: "30 mins",
        price: "£23",
        note: "Available for all ages",
        bookingUrl: getServiceBookingUrl("74492680"),
      },
      {
        name: "Men's Restyle",
        duration: "45 mins",
        price: "£30",
        bookingUrl: getServiceBookingUrl("74759004"),
      },
      {
        name: "Women's Pixie Cut",
        duration: "50 mins",
        price: "£29",
        bookingUrl: getServiceBookingUrl("74492665"),
      },
    ],
  },
  {
    id: "cut-and-beard",
    title: "Cut & beard",
    services: [
      {
        name: "Gent's Traditional Hair Cut and Beard Trim",
        duration: "35 mins",
        price: "£24",
        bookingUrl: getServiceBookingUrl("74492630"),
      },
      {
        name: "Skin Fade and Beard Trim",
        duration: "45 mins",
        price: "£29",
        bookingUrl: getServiceBookingUrl("74492643"),
      },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    services: [
      {
        name: "Grade All Over",
        duration: "10 mins",
        price: "£11",
        bookingUrl: getServiceBookingUrl("74492649"),
      },
      {
        name: "Grade All Over and Beard Trim",
        duration: "25 mins",
        price: "£19",
        bookingUrl: getServiceBookingUrl("74492657"),
      },
      {
        name: "Beard Trim Only",
        duration: "15 mins",
        price: "£10",
        bookingUrl: getServiceBookingUrl("74492676"),
      },
      {
        name: "Under Cut",
        duration: "10 mins",
        price: "£7",
        bookingUrl: getServiceBookingUrl("74492671"),
      },
    ],
  },
  {
    id: "age-specific",
    title: "Younger & older gents",
    services: [
      {
        name: "Gent's Over 65 Years",
        duration: "15 mins",
        price: "£14",
        note: "Longer hair or a change in style may cost extra",
        bookingUrl: getServiceBookingUrl("74492684"),
      },
      {
        name: "Little Gent's Under 12 Years",
        duration: "20 mins",
        price: "£16",
        note: "Longer hair or a change in style may cost extra",
        bookingUrl: getServiceBookingUrl("74492691"),
      },
    ],
  },
];
