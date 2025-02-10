import icons from "./icons";
import images from "./images";

export const cards = [
  {
    title: "Card 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    category: "house",
    image: images.newYork,
  },
  {
    title: "Card 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    category: "house",
    image: images.japan,
  },
  {
    title: "Card 3",
    location: "Location 3",
    price: "$300",
    rating: 2,
    category: "flat",
    image: images.newYork,
  },
  {
    title: "Card 4",
    location: "Location 4",
    price: "$400",
    rating: 5,
    category: "villa",
    image: images.japan,
  },
];

export const featuredCards = [
  {
    title: "Villa Mewah di Pinggir Pantai",
    slug: "villa-mewah-pinggir-pantai",
    location: "Bali",
    price: 500,
    rating: 4.9,
    image: images.newYork,
    category: "Villa",
  },
  {
    title: "Rumah Minimalis Modern",
    slug: "rumah-minimalis-modern",
    location: "Jakarta Selatan",
    price: 350,
    rating: 4.7,
    image: images.jakarta,
    category: "House",
  },
  {
    title: "Apartemen Lux di Pusat Kota",
    slug: "apartemen-lux-pusat-kota",
    location: "Jakarta Pusat",
    price: 450,
    rating: 4.6,
    image: images.japan,
    category: "Flat",
  },
  {
    title: "Bungalow dengan Pemandangan Gunung",
    slug: "bungalow-pemandangan-gunung",
    location: "Lembang",
    price: 250,
    rating: 4.5,
    image: images.lembang,
    category: "Bungalow",
  },
  {
    title: "Rumah Klasik dengan Taman Luas",
    slug: "rumah-klasik-taman-luas",
    location: "Bandung",
    price: 400,
    rating: 4.4,
    image: images.taman,
    category: "House",
  },
  {
    title: "Villa di Atas Awan",
    slug: "villa-atas-awan",
    location: "Puncak",
    price: 600,
    rating: 4.8,
    image: images.puncak,
    category: "Villa",
  },
  {
    title: "Apartemen dengan View Laut",
    slug: "apartemen-view-laut",
    location: "Batam",
    price: 300,
    rating: 4.3,
    image: images.batam,
    category: "Flat",
  },
  {
    title: "Rumah Adat dengan Desain Tradisional",
    slug: "rumah-adat-tradisional",
    location: "Yogyakarta",
    price: 200,
    rating: 4.2,
    image: images.yogyakarta,
    category: "House",
  },
  {
    title: "Villa Pribadi dengan Kolam Renang",
    slug: "villa-pribadi-kolam-renang",
    location: "Seminyak",
    price: 700,
    rating: 4.9,
    image: images.seminyak,
    category: "Villa",
  },
  {
    title: "Apartemen Modern dengan Fasilitas Lengkap",
    slug: "apartemen-modern-fasilitas-lengkap",
    location: "Surabaya",
    price: 380,
    rating: 4.5,
    image: images.surabaya,
    category: "Flat",
  },
];

export const categories = [
  { title: "All", category: "All" },
  { title: "Houses", category: "House" },
  { title: "Condos", category: "Condos" },
  { title: "Duplexes", category: "Duplexes" },
  { title: "Studios", category: "Studios" },
  { title: "Villas", category: "Villa" },
  { title: "Apartments", category: "Apartments" },
  { title: "Townhomes", category: "Townhomes" },
  { title: "Others", category: "Others" },
];

export const settings = [
  {
    title: "My Bookings",
    icon: icons.calendar,
  },
  {
    title: "Payments",
    icon: icons.wallet,
  },
  {
    title: "Profile",
    icon: icons.person,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.shield,
  },
  {
    title: "Language",
    icon: icons.language,
  },
  {
    title: "Help Center",
    icon: icons.info,
  },
  {
    title: "Invite Friends",
    icon: icons.people,
  },
];

export const facilities = [
  {
    title: "Laundry",
    icon: icons.laundry,
  },
  {
    title: "Car Parking",
    icon: icons.carPark,
  },
  {
    title: "Sports Center",
    icon: icons.run,
  },
  {
    title: "Cutlery",
    icon: icons.cutlery,
  },
  {
    title: "Gym",
    icon: icons.dumbell,
  },
  {
    title: "Swimming pool",
    icon: icons.swim,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
  {
    title: "Pet Center",
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];

export const getDataBySlug = (slug: string) => {
  return featuredCards.find((card) => card.slug === slug);
};

