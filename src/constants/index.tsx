import { dashboard, payment, withdraw } from "../assets";

export const navLinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "cryptocurrencies",
    imgUrl: withdraw,
    link: "/cryptocurrencies",
  },

  {
    name: "news",
    imgUrl: payment,
    link: "/news",
  },
];
