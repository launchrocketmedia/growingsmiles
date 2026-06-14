export const BRAND = {
  name: "Growing Smiles",
  full: "Growing Smiles Pediatric Dentistry by Dr. Jyoti Magoo",
  tagline: "Growing Healthy Smiles, One Child at a Time",
  phoneDisplay: "+91 99999 99999",
  phone: "+919999999999",
  whatsapp: "919999999999",
  email: "hello@growingsmiles.com",
  address:
    "Unit 220, Lake Primrose Commercial Complex, Panch Shrishti Complex Road, MHADA Colony 20, Powai, Mumbai, Maharashtra 400072",
  hours: "Monday – Saturday, 10:00 AM – 7:00 PM",
  reviewsUrl:
    "https://www.google.com/maps/place/Growing+Smiles,+Pediatric+Dentistry+by+Dr+Jyoti+Magoo/",
  rating: 4.9,
  reviewCount: 180,
};

export const waLink = (text = "Hi! I'd like to book an appointment at Growing Smiles.") =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV_LINKS = [
  { label: "Home", to: "/", hash: "" },
  { label: "About", to: "/", hash: "#about" },
  { label: "Services", to: "/", hash: "#services" },
  { label: "Reviews", to: "/", hash: "#reviews" },
  { label: "FAQs", to: "/", hash: "#faqs" },
];
