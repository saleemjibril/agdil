export const siteConfig = {
  name: "Digital Resource Library",
  shortName: "AGDIL",
  description:
    "Agrifood Digital Library — resources, marketplace, events, and funding for Nigeria’s agrifood and nutrition ecosystem.",
  url: "https://agdil.com",
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/library", label: "Library" },
  { href: "/store-listing", label: "Marketplace" },
  { href: "/market-intellingence", label: "Market Intelligence" },
  { href: "/event", label: "Events" },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "About Us",
    links: [
      { href: "/about-us", label: "Who We Are" },
      { href: "/#we-do", label: "What We Do" },
      { href: "/#partners", label: "Our Partners" },
      { href: "/#team", label: "Our Team" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { href: "/join-us", label: "Volunteering" },
      { href: "/about-us", label: "Mentorship" },
      { href: "/about-us", label: "Contact Us" },
    ],
  },
  {
    title: "Our Impact",
    links: [
      { href: "/credit-worthiness-assessment-form", label: "Access Crediworthiness" },
      { href: "/join-us", label: "Join Our Communities" },
      { href: "/#success", label: "Our Success Stories" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/event", label: "News & Event" },
      { href: "/blog", label: "Case Studies" },
      { href: "/library", label: "Toolkit" },
    ],
  },
];

export const footerLegalLinks: NavItem[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
];
