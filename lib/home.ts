/** Static homepage content aligned with agdil.com export + saved “Digital Resource Library.htm” (post-10.css). */

/** Elementor hero slides widget (elementor-element-0cb80ad). */
export const heroSlides = [
  "/uploads/2025/11/ogo.png",
  "/uploads/2025/11/new-soy.png",
  "/uploads/2025/11/Veges-scaled.png",
] as const;

export const marketPrices = [
  { label: "Maize 1kg(Abuja)", range: "₦500 – ₦800" },
  { label: "Maize 50kg(Abuja)", range: "₦25,000 – ₦55,000" },
  { label: "Maize 100kg(Abuja)", range: "₦50,000 – ₦110,000" },
  { label: "Millet 1kg(Abuja)", range: "₦500 – ₦1000" },
  { label: "Millet 50kg(Abuja)", range: "₦25,000 – ₦50,000" },
  { label: "Millet 100kg(Abuja)", range: "₦50,000 – ₦100,000" },
  { label: "Sorghum 1kg(Abuja)", range: "₦500 – ₦1100" },
  { label: "Sorghum 1kg(Abuja)", range: "₦500 – ₦1100" },
  { label: "Sorghum 50kg(Abuja)", range: "₦2500 – ₦50,000" },
  { label: "Sorghum 100kg(Abuja)", range: "₦50,000 – ₦100,000" },
  { label: "Soybean 1kg(Abuja)", range: "₦700 – ₦1400" },
  { label: "Soybean 50kg(Abuja)", range: "₦35,000 – ₦56,000" },
  { label: "Soybean 100kg(Abuja)", range: "₦70,000 – ₦110,000" },
] as const;

export type QuickAccessTile = {
  title: string;
  body: string;
  href: string;
  cta: string;
  /** Top / leading image (Elementor tile backgrounds). */
  image: string;
  /** Two-column-wide card: image left, copy + CTA right (Food Processing). */
  layout?: "featureWide";
};

export const quickAccessTiles: QuickAccessTile[] = [
  {
    title: "Get Business Funds",
    body: "Assess and improve your creditworthiness and see available funding opportunities for agrifood businesses.",
    href: "/get-business-funds",
    cta: "Learn More",
    image: "/uploads/2025/01/thumbnail_image.png",
  },
  {
    title: "Start an Agrifood Business",
    body: "Get step-by-step guidance on how to launch your business, from idea validation to legal registration and beyond.",
    href: "/start-an-agrifood-business",
    cta: "Learn More",
    image: "/uploads/2024/10/3e1eed6dd301691c6f19ab2c8cfd8622.png",
  },
  {
    title: "Learning Resources",
    body: "Access essential resources like templates, checklists and guides and toolkit to improve your knowledge and business performance",
    href: "/library",
    cta: "Learn More",
    image: "/uploads/2024/10/745224f3bbe2079bf46ae9489baceb92.png",
  },
  {
    title: "Marketplace",
    body: "Promote your products to a wider audience. Get access to quality agrifood and inputs",
    href: "/store-listing",
    cta: "Learn More",
    image: "/uploads/2025/02/Marketplace.jpg",
  },
  {
    title: "Nutrition",
    body: "Discover how nutrition supports health, prevents disease, and enhances food for optimal wellness.",
    href: "/library",
    cta: "Learn More",
    image: "/uploads/2025/01/flexitarian-diet-food-arrangement-scaled.jpg",
  },
  {
    title: "Market Intelligence",
    body: "Get real-time market information to help you position your business.",
    href: "/market-intellingence",
    cta: "Learn More",
    image: "/uploads/2024/11/image-83.png",
  },
  {
    title: "Food Processing",
    body: "Explore new markets and identify growth opportunities. Learn how to position your products or services to stand out and succeed in competitive and evolving industries, while effectively reaching your target audience.",
    href: "/library",
    cta: "Learn More",
    image: "/uploads/2024/10/e361fa8ec52d990c451b4dad3fe72401.png",
    layout: "featureWide",
  },
  {
    title: "Event",
    body: "Stay informed about upcoming workshops, webinars, and networking opportunities designed to equip you with the latest insights",
    href: "/event",
    cta: "Learn More",
    image: "/uploads/2024/10/dd310c8d6e7abf5822392a7d1068cfb9.jpeg",
  },
];

/** Meet Our Team section layered backgrounds (elementor-element-8a54f40). */
export const teamSectionBg = {
  base: "/uploads/2024/10/Shapee.png",
  overlay: "/uploads/2024/10/Shapeee-2.png",
} as const;

/** Homepage “What we do” counters (order matches design ref). */
export const impactStats = [
  { value: "250+", label: "Market Access facilitated" },
  { value: "25M+", label: "Amount generated in sales by MSMEs" },
  { value: "650+", label: "Access to Finance facilitated" },
  { value: "300", label: "MSMEs trained on Safe and Nutritious food practice" },
  { value: "320Tn", label: "Volume of nutritious foods produced" },
] as const;

/** Homepage partners row (heading + logos; matches design ref — GAIN, Nigeria, IKORE, AWITA). */
export const trustedPartners = [
  {
    src: "/uploads/2024/10/Logoo4.png",
    alt: "GAIN — Global Alliance for Improved Nutrition",
  },
  {
    src: "/uploads/2024/10/Logoo3.png",
    alt: "Federal Government of Nigeria",
  },
  {
    src: "/uploads/2024/10/Logoo2.png",
    alt: "IKORE",
  },
  {
    src: "/uploads/2024/10/Logoo1.png",
    alt: "AWITA — Association of Women in Trade and Agriculture",
  },
  {
    src: "/uploads/2024/10/Logoo5.png",
    alt: "Partner",
  },
] as const;

export type FormalizationCard = {
  title: string;
  href: string;
  /** Full-bleed photo behind gradient overlay. */
  coverImage: string;
  /** Optional mark above the title (CAC uses title only in design ref). */
  logo?: string;
};

export const formalizationCards: FormalizationCard[] = [
  {
    title: "SMEDAN",
    href: "/join-us",
    coverImage: "/uploads/2025/08/WhatsApp-Image-2025-08-28-at-11.53.58_e2c3eb54.jpg",
    logo: "/uploads/2026/03/smedan-fav-1.png",
  },
  {
    title: "CAC",
    href: "/cac-registration-form",
    coverImage: "/uploads/2025/08/WhatsApp-Image-2025-08-28-at-14.39.38_35952183.jpg",
  },
  {
    title: "AWITA",
    href: "/join-us",
    coverImage: "/uploads/2025/08/WhatsApp-Image-2025-08-28-at-11.08.55_add31d38.jpg",
    logo: "/uploads/2026/03/awita-fav.png",
  },
  {
    title: "NAFDAC",
    href: "/join-us",
    coverImage: "/uploads/2025/08/WhatsApp-Image-2025-08-28-at-11.52.14_d72c4b16.jpg",
    logo: "/uploads/2026/03/final-CAC.png",
  },
];

export const teamHome = [
  { slug: "dr-gbenga-ariyo-ayodele", image: "/uploads/2025/08/Dr-gbenga.png" },
  { slug: "yakubu-nabil", image: "/uploads/2025/08/Dr-Nabil.png" },
  { slug: "favour-jauro", image: "/uploads/2025/08/Favour-Jauro.png" },
  { slug: "michael-adegbuyi", image: "/uploads/2026/03/New-Ike-Chinaza.png" },
  { slug: "martina-hembafan-ngutor", image: "/uploads/2025/08/Martina-Hembafan.png" },
  { slug: "nkemjika-onuoha", image: "/uploads/2025/08/Nkemjika-Onuhoha.png" },
] as const;

export const successStories = [
  {
    quote:
      "Meet Sefa Gbenda, a young agripreneur from Benue State who runs a small-scale processing business focusing on maize and cassava. Like many other entrepreneurs in the region, Sefa faces significant challenges in accessing markets, managing her finances, and scaling her operations. When she heard about the GAIN SAEDS Project, Sefa was eager to participate, seeing it as a unique opportunity to overcome the obstacles that have held her business back.",
    cite: "How Sefa Gbenda Grew with Our Support",
    image: "/uploads/2025/02/testi.jpg",
  },
  {
    quote:
      "Oyadeyi Abiola, CEO of Larry Bee Enterprises, once struggled with market access, funding, and business formalization in the cassava value chain. Through the SAEDS project, he gained critical skills in record-keeping, safe processing, and business registration—unlocking funding opportunities and boosting operational efficiency by 30%. With Ikore’s support, he accessed a 40% discount for business registration, positioning his enterprise for growth.",
    cite: "From Struggles to Success: Oyadeyi Abiola’s SAEDS Journey",
    image: "/uploads/2025/02/testi-2.jpg",
  },
] as const;

/** Article carousel order + card backgrounds (Elementor loop). */
export const homeArticleCarousel = [
  {
    slug: "feeding-the-future-why-school-feeding-and-nutrition-education-must-go-hand-in-hand-in-nigeria",
    cover: "/uploads/2025/08/Blog-8.png",
  },
  {
    slug: "empowering-women-farmers-to-improve-nutrition-in-nigeria",
    cover: "/uploads/2025/08/Blog-4.jpg",
  },
  {
    slug: "the-double-burden-dilemma-fighting-malnutrition-and-obesity-in-nigerias-nutrition-transition",
    cover: "/uploads/2025/08/Blog-3.jpg",
  },
  {
    slug: "from-global-tables-to-local-plates-climate-smart-solutions-for-nigerias-nutrition-future",
    cover: "/uploads/2025/08/Blog-2.jpg",
  },
  {
    slug: "addressing-micronutrient-deficiencies-in-nigeria-through-sustainable-agrifood-solutions",
    cover: "/uploads/2025/08/Blog-1.jpg",
  },
] as const;
