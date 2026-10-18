export type Category = 'Bags' | 'Pouches' | 'Charms' | 'Wearables' | 'Flowers & Plushies';

export interface Product {
  id: string;
  name: string;
  price: number;
  compareAt?: number;
  category: Category;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  bestseller?: boolean;
  customisable?: boolean;
}

export const CATEGORIES: ('All' | Category)[] = [
  'All',
  'Bags',
  'Pouches',
  'Charms',
  'Wearables',
  'Flowers & Plushies',
];

export const SHIPPING_CHARGE = 80;
export const MIN_ORDER_VALUE = 300;

export const PRODUCTS: Product[] = [
  {
    id: 'monarch-top',
    name: 'Monarch Butterfly Top',
    price: 2499,
    category: 'Wearables',
    image: 'https://images.pexels.com/photos/13574113/pexels-photo-13574113.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Our signature piece. A hand-crocheted butterfly top with wing-shaped sleeves, made to order in your size and colour. Every stitch is placed by hand — no two are ever identical.',
    rating: 4.9,
    reviews: 34,
    bestseller: true,
    customisable: true,
  },
  {
    id: 'rose-bouquet',
    name: 'Eternal Rose Bouquet',
    price: 1299,
    category: 'Flowers & Plushies',
    image: 'https://images.pexels.com/photos/20269075/pexels-photo-20269075.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A bouquet that never wilts. Handmade crochet roses wrapped and ready to gift — perfect for birthdays, anniversaries, or just because. Pick your colours in the customization note.',
    rating: 5.0,
    reviews: 58,
    bestseller: true,
    customisable: true,
  },
  {
    id: 'mesh-shoulder-bag',
    name: 'Bow Mesh Shoulder Bag',
    price: 1599,
    category: 'Bags',
    image: 'https://images.pexels.com/photos/9393758/pexels-photo-9393758.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A soft, structured shoulder bag crocheted in breathable cotton mesh with a detachable bow charm. Fits your phone, wallet, and a little bit of sunshine.',
    rating: 4.8,
    reviews: 41,
    bestseller: true,
    customisable: true,
  },
  {
    id: 'floral-tote',
    name: 'Garden Floral Tote',
    price: 1899,
    compareAt: 2299,
    category: 'Bags',
    image: 'https://images.pexels.com/photos/30224898/pexels-photo-30224898.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Roomy everyday tote with hand-embroidered floral details. Strong enough for books, pretty enough for brunch.',
    rating: 4.7,
    reviews: 27,
    customisable: true,
  },
  {
    id: 'mini-crossbody',
    name: 'Mini Crochet Crossbody',
    price: 1399,
    category: 'Bags',
    image: 'https://images.pexels.com/photos/33207480/pexels-photo-33207480.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Light as air, cute as a button. A mini crossbody for days when you only need the essentials.',
    rating: 4.7,
    reviews: 22,
    customisable: true,
  },
  {
    id: 'flower-pouch',
    name: 'Daisy Coin Pouch',
    price: 649,
    category: 'Pouches',
    image: 'https://images.pexels.com/photos/4856502/pexels-photo-4856502.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A snug little pouch for coins, earphones, and lip balm — finished with a hand-stitched daisy. Cute, soft, and one of a kind.',
    rating: 4.8,
    reviews: 25,
    customisable: true,
  },
  {
    id: 'smiley-pouch',
    name: 'Smiley Zip Pouch',
    price: 749,
    category: 'Pouches',
    image: 'https://images.pexels.com/photos/36644646/pexels-photo-36644646.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A cheerful zip pouch that makes you smile every time you reach for it. Great as a little gift or a treat-your-own.',
    rating: 4.7,
    reviews: 14,
    customisable: true,
  },
  {
    id: 'keychain-charms',
    name: 'Crochet Charm Keychain',
    price: 399,
    category: 'Charms',
    image: 'https://images.pexels.com/photos/38634279/pexels-photo-38634279.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Tiny handmade charms for your keys, bag, or pencil case. Mix and match — collect them all.',
    rating: 4.7,
    reviews: 64,
    customisable: true,
  },
  {
    id: 'daisy-bookmark',
    name: 'Daisy Flower Bookmark',
    price: 349,
    category: 'Charms',
    image: 'https://images.pexels.com/photos/35155955/pexels-photo-35155955.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Mark your page with a hand-crocheted daisy. A tiny, thoughtful gift for every bookworm in your life.',
    rating: 4.8,
    reviews: 52,
  },
  {
    id: 'chick-car-charm',
    name: 'Chick Rearview Charm',
    price: 449,
    category: 'Charms',
    image: 'https://images.pexels.com/photos/37508797/pexels-photo-37508797.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A sunny little crochet chick to keep you company on every drive. Also adorable hung on bags and mirrors.',
    rating: 4.8,
    reviews: 18,
    customisable: true,
  },
  {
    id: 'sunflower-bouquet',
    name: 'Crochet Sunflowers',
    price: 899,
    category: 'Flowers & Plushies',
    image: 'https://images.pexels.com/photos/18692008/pexels-photo-18692008.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A little vase of sunshine. Handmade crochet sunflowers on flexible stems — arrange them once, smile forever. Sold individually or as a set of three.',
    rating: 4.9,
    reviews: 46,
    customisable: true,
  },
  {
    id: 'cat-plush',
    name: 'Kitty Amigurumi Plush',
    price: 999,
    category: 'Flowers & Plushies',
    image: 'https://images.pexels.com/photos/38724016/pexels-photo-38724016.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'A pocket-sized crochet companion, stuffed to be perfectly squishable. Choose from grey, orange, or cream.',
    rating: 4.9,
    reviews: 39,
    bestseller: true,
    customisable: true,
  },
  {
    id: 'bunny-plush',
    name: 'Bunny Amigurumi',
    price: 1199,
    category: 'Flowers & Plushies',
    image: 'https://images.pexels.com/photos/16228950/pexels-photo-16228950.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Soft, huggable, and stitched with love. Our bunny plush is a nursery favourite and gift-box ready.',
    rating: 4.9,
    reviews: 31,
    customisable: true,
  },
  {
    id: 'critter-plush',
    name: 'Tiny Critter Plush',
    price: 849,
    category: 'Flowers & Plushies',
    image: 'https://images.pexels.com/photos/10585144/pexels-photo-10585144.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Small enough for a pocket, soft enough for a nap. Hand-crocheted critters in seasonal colours.',
    rating: 4.8,
    reviews: 17,
    customisable: true,
  },
];

export const formatINR = (n: number) => `Rs. ${n.toLocaleString('en-IN')}`;
