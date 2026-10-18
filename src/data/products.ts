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
    id: 'rose-handbag',
    name: 'Eternal Rose Handbag',
    price: 2999,
    category: 'Bags',
    image: '/images/DEMO/crochet-rose-necklace-display.jpg',
    description:
      'A rose that blooms forever. This sculpted crochet handbag is shaped petal by petal into a full rose, finished with a gold chain strap and top handle. A showstopper for weddings, brunches, and every occasion in between.',
    rating: 5.0,
    reviews: 47,
    bestseller: true,
    customisable: true,
  },
  {
    id: 'book-sleeve',
    name: 'Granny Square Book Sleeve',
    price: 799,
    category: 'Pouches',
    image: '/images/DEMO/orange-granny-square-crochet-pouch.webp',
    description:
      'Keep your current read safe in a cosy classic. This granny square book sleeve has a wooden button closure and a soft stretch that hugs books of any size — from paperbacks to chunky hardcovers.',
    rating: 4.8,
    reviews: 31,
    customisable: true,
  },
  {
    id: 'hearts-scarf',
    name: 'Hearts Ribbed Scarf',
    price: 1899,
    category: 'Wearables',
    image: '/images/DEMO/buttoned-burgundy-crochet-bag.jpg',
    description:
      'Deep burgundy crochet with rows of little white hearts running down the length, finished with a full fringe. Warm enough for winter, sweet enough to gift.',
    rating: 4.9,
    reviews: 26,
    bestseller: true,
    customisable: true,
  },
  {
    id: 'ribbed-scarf',
    name: 'Classic Ribbed Scarf',
    price: 1699,
    category: 'Wearables',
    image: '/images/DEMO/purple-crochet-neckties.jpg',
    description:
      'A richly textured ribbed scarf crocheted in soft acrylic — shown here in deep navy, made to order in the colour of your choice. Long enough to wrap twice, with tassel ends.',
    rating: 4.7,
    reviews: 19,
    customisable: true,
  },
  {
    id: 'scarf-scrunchie-set',
    name: 'Peach Scarf & Scrunchie Set',
    price: 1499,
    compareAt: 1799,
    category: 'Wearables',
    image: '/images/DEMO/pink-crochet-flower-accessories.jpg',
    description:
      'A matched set in the softest peach: a ribbed scarf with tiny cream bows stitched along the length, paired with a ruffled scrunchie edged in cream. Comes gift-box ready.',
    rating: 4.8,
    reviews: 22,
    customisable: true,
  },
  {
    id: 'bridal-gajra',
    name: 'Bridal Gajra Set',
    price: 1899,
    category: 'Wearables',
    image: '/images/DEMO/embroidered-garment-detail.jpg',
    description:
      'Hand-crocheted white flower gajras for the bride — worn on the wrists with mehendi and pearls cascading down, as seen on real brides. Made to order for your big day.',
    rating: 5.0,
    reviews: 12,
    customisable: true,
  },
  {
    id: 'bow-clips',
    name: 'Bow Hair Clips',
    price: 349,
    category: 'Charms',
    image: '/images/DEMO/red-and-pink-crochet-bows-01.webp',
    description:
      'Hand-crocheted bows on sturdy clips — the accessory everyone asks about. Pick your colours and collect them all; they also look adorable pinned to bags.',
    rating: 4.9,
    reviews: 72,
    bestseller: true,
    customisable: true,
  },
  {
    id: 'bow-gift-pack',
    name: 'Bow Clip Gift Pack',
    price: 999,
    compareAt: 1199,
    category: 'Charms',
    image: '/images/DEMO/crochet-bow-color-collection.jpg',
    description:
      'A boxed set of hand-crocheted bow clips in a mix of colours — our most-gifted item for bridesmaid boxes, bridal showers, and birthdays.',
    rating: 4.9,
    reviews: 38,
    customisable: true,
  },
  {
    id: 'heart-keychain',
    name: 'Puffy Heart Keychain',
    price: 349,
    category: 'Charms',
    image: '/images/DEMO/red-crochet-heart-keychain.webp',
    description:
      'A squishy crocheted heart on a gold keyring — for your keys, your bag, or as a tiny "thinking of you" gift. Available in every colour we stock.',
    rating: 4.8,
    reviews: 64,
    customisable: true,
  },
  {
    id: 'sunflower-bouquet',
    name: 'Sunflower Kraft Bouquet',
    price: 999,
    category: 'Flowers & Plushies',
    image: '/images/DEMO/crochet-sunflower-bouquet.jpg',
    description:
      'Two handmade crochet sunflowers wrapped in kraft paper and tissue, ready to gift exactly as pictured. Sunshine that never wilts.',
    rating: 4.9,
    reviews: 51,
    bestseller: true,
    customisable: true,
  },
  {
    id: 'personalised-rose-pot',
    name: 'Personalised Potted Rose',
    price: 1199,
    category: 'Flowers & Plushies',
    image: '/images/DEMO/potted-crochet-rose-in-hand.jpg',
    description:
      'A crochet rose plant in a hand-stitched pot — with a name or initials embroidered on the front in the colour of your choice. A forever keepsake for desks and bedside tables.',
    rating: 5.0,
    reviews: 33,
    customisable: true,
  },
  {
    id: 'personalised-sunflower-pot',
    name: 'Personalised Sunflower Pot',
    price: 1399,
    category: 'Flowers & Plushies',
    image: '/images/DEMO/twin-potted-crochet-sunflowers.jpg',
    description:
      'Two cheerful crochet sunflowers rising from a hand-crocheted pot, personalised with any name embroidered on the front — like "Surbhi" here. Made to order.',
    rating: 4.9,
    reviews: 29,
    customisable: true,
  },
  {
    id: 'blue-peony-stems',
    name: 'Blue Peony Stems',
    price: 899,
    category: 'Flowers & Plushies',
    image: '/images/DEMO/blue-crochet-flower-arrangement.jpg',
    description:
      'Lush crochet peonies in dusty blue with buttery yellow centres, on flexible wired stems you can arrange in any vase. Sold individually or as a set.',
    rating: 4.8,
    reviews: 24,
    customisable: true,
  },
  {
    id: 'sunflower-stems',
    name: 'Sunny Sunflower Stems',
    price: 749,
    category: 'Flowers & Plushies',
    image: '/images/DEMO/crochet-sunflower-and-bag-display.jpg',
    description:
      'A single handmade crochet sunflower with leaf and wired stem — mix and match to build your own everlasting bouquet. Choose yellow, orange, or cream.',
    rating: 4.8,
    reviews: 42,
    customisable: true,
  },
];

export const formatINR = (n: number) => `Rs. ${n.toLocaleString('en-IN')}`;
