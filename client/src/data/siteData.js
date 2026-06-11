// ─── Image Imports (Vite processes these for reliable asset bundling) ───────
import imgLechonKawali from '../assets/images/lechon_kawali.png';
import imgAsado from '../assets/images/asado.png';
import imgTumbongSoup from '../assets/images/tumbong_soup.png';
import imgKamtoSoup from '../assets/images/kamto_soup.png';
import imgSiomaiSoup from '../assets/images/siomai_soup.png';
import imgFriedRice from '../assets/images/fried_rice.png';
import imgHeroBg from '../assets/images/hero_bg.png';
import imgGalleryRestaurant from '../assets/images/gallery_restaurant.png';
import imgGalleryCooking from '../assets/images/gallery_cooking.png';

// ─── Site Data for Rado's Lechon ───────────────────────────────────────────

export const SITE_INFO = {
  name: "Rado's Lechon",
  tagline: "Since 1994",
  fullName: "Rado's Lechon — Since 1994",
  founded: "1994",
  address: "2139 Simon St cor F Varona, Tondo, Manila",
  phone: "09274591167",
  phoneDisplay: "0927 459 1167",
  phoneHref: "tel:+639274591167",
  facebook: "https://www.facebook.com/profile.php?id=100070269823527",
  googleMaps: "https://www.google.com/maps/place/Rado's+Lechon+since1994/@14.6227372,120.9642421,17z",
  hours: "4:00 PM – 1:00 AM",
  hoursNote: "Open Daily",
  heroBg: imgHeroBg,
  story: `Rado's Lechon is a family-owned business founded by Rado in 1994 in Tondo, Manila. What started as a small carinderia serving affordable Filipino dishes gradually became a local institution known for its crispy lechon kawali, flavorful soups, and signature sauces.

Through dedication to quality food, consistent taste, and strong community support, Rado's Lechon has grown into one of Tondo's most recognized dining destinations, attracting both local residents and food enthusiasts from different parts of Metro Manila.

Today, the business continues to uphold the traditions and recipes that made it popular while serving generations of loyal customers.`,
  mission: "To provide authentic Filipino comfort food at affordable prices while preserving local food traditions and creating memorable dining experiences for every customer.",
};

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Lechon Kawali",
    price: "₱130",
    priceWithRice: "₱150",
    description: "Golden crispy deep-fried pork belly served with our signature homemade sauce and fresh grated papaya.",
    image: imgLechonKawali,
    isBestSeller: true,
    category: "lechon",
    emoji: "🔥",
  },
  {
    id: 2,
    name: "Asado",
    price: "₱130",
    priceWithRice: "₱150",
    description: "Slow-cooked dila, laman, and bahay guya in our signature homemade sauce, topped with fresh grated papaya.",
    image: imgAsado,
    isBestSeller: false,
    category: "lechon",
    emoji: "🍖",
  },
  {
    id: 3,
    name: "Tumbong Soup",
    price: "₱130",
    priceWithRice: "₱150",
    description: "Traditional Filipino pork spinal cord soup, freshly prepared and served piping hot.",
    image: imgTumbongSoup,
    isBestSeller: true,
    category: "soup",
    emoji: "🍲",
  },
  {
    id: 4,
    name: "Kamto Soup",
    price: "₱130",
    priceWithRice: "₱150",
    description: "Traditional Filipino pork knuckle soup, slow-cooked to bring out the rich, hearty flavor.",
    image: imgKamtoSoup,
    isBestSeller: true,
    category: "soup",
    emoji: "🍜",
  },
  {
    id: 5,
    name: "Siomai Soup",
    price: "₱50",
    priceWithRice: null,
    description: "Tender steamed pork dumplings in a warm, savory broth — a simple and satisfying Filipino classic.",
    image: imgSiomaiSoup,
    isBestSeller: false,
    category: "soup",
    emoji: "🥟",
  },
  {
    id: 6,
    name: "Fried Rice",
    price: "₱20",
    priceWithRice: null,
    description: "Fluffy garlic fried rice — the perfect companion to any dish on our menu.",
    image: imgFriedRice,
    isBestSeller: false,
    category: "sides",
    emoji: "🍚",
  },
];

export const SIGNATURE_DISHES = MENU_ITEMS.filter(item => item.isBestSeller);

export const GALLERY_IMAGES = [
  { src: imgLechonKawali, alt: "Crispy Lechon Kawali", caption: "Golden Crispy Lechon Kawali" },
  { src: imgTumbongSoup, alt: "Tumbong Soup", caption: "Steaming Tumbong Soup" },
  { src: imgGalleryRestaurant, alt: "Rado's Lechon Restaurant", caption: "Our Cozy Dining Space" },
  { src: imgKamtoSoup, alt: "Kamto Soup", caption: "Hearty Kamto Soup" },
  { src: imgGalleryCooking, alt: "Cooking in the Kitchen", caption: "Cooked with Passion" },
  { src: imgAsado, alt: "Asado", caption: "Signature Asado" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Jessie Deveza",
    rating: 5,
    review: "Very nice and clean food. I am always excited pag napunta ako — masarap ang pagkain nila, lalo na ang asado at tumbong!",
  },
  {
    id: 2,
    name: "Eric Tubiera",
    rating: 5,
    review: "Super Sarap lalo ng Tumbong at Lechon Kawali! Highly Recommended po!",
  },
  {
    id: 3,
    name: "Marvin Mijares",
    rating: 5,
    review: "Sarap! Tagal na nito — bata pa lang ako noon. Classic na talaga ang Rado's!",
  },
  {
    id: 4,
    name: "Louie Arbie Cabañero",
    rating: 5,
    review: "Sarap ng Lechon, Asado, Tumbong at Kamto Soup! Sulit na sulit sa presyo.",
  },
  {
    id: 5,
    name: "Ecel Grace Torrendon",
    rating: 5,
    review: "Napakasarap na Tumbong soup! Sulit ang layo ng biyahe namin, mura pa ang price. Babalik kami!",
  },
  {
    id: 6,
    name: "Jayson Mulingtapang",
    rating: 5,
    review: "Grabe ang sarap ng lechon kawali nila! Laging paborito ng buong pamilya namin. Solid talaga!",
  },
  {
    id: 7,
    name: "Cheche Jusay",
    rating: 5,
    review: "Ang sarap sarap! Sulit na sulit ang presyo. Babalik kami palagi dito — ramdam mo yung pagmamahal sa luto!",
  },
  {
    id: 8,
    name: "Dhie Rhyme",
    rating: 5,
    review: "Masarap talaga! Lalo na yung Tumbong soup — mainit at puno ng lasa. Solid ang Rado's!",
  },
  {
    id: 9,
    name: "Rafael Santos",
    rating: 5,
    review: "Dito na kami kumakain simula nang bata kami. Hindi nagbabago ang lasa — palagi pa ring masarap!",
  },
  {
    id: 10,
    name: "O'Neill Salocin",
    rating: 5,
    review: "Ang galing ng luto nila! Crispy ang lechon kawali at mainit ang soup. Highly recommend sa lahat!",
  },
];
