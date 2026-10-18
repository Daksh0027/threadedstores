import { useState } from 'react';
import {
  Instagram,
  Star,
  ChevronRight,
  Package,
  Truck,
  Heart,
  Scissors,
  PenLine,
  ChevronDown,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import Header from '@/components/Header';
import Shop from '@/components/Shop';
import CartDrawer, { type CartItem } from '@/components/CartDrawer';
import ProductModal from '@/components/ProductModal';
import { PRODUCTS, formatINR, type Product } from '@/data/products';

const HERO_IMG =
  'https://d2iai535y0ceb2.cloudfront.net/img/6ab60c8135eaf519bab040a3/v1/512.webp';
const ABOUT_IMG =
  'https://images.pexels.com/photos/38649771/pexels-photo-38649771.jpeg?auto=compress&cs=tinysrgb&w=1200';
const CATEGORY_IMGS: Record<string, string> = {
  Bags: 'https://images.pexels.com/photos/9393758/pexels-photo-9393758.jpeg?auto=compress&cs=tinysrgb&w=800',
  Pouches:
    'https://images.pexels.com/photos/4856502/pexels-photo-4856502.jpeg?auto=compress&cs=tinysrgb&w=800',
  Charms:
    'https://images.pexels.com/photos/38634279/pexels-photo-38634279.jpeg?auto=compress&cs=tinysrgb&w=800',
  Wearables:
    'https://images.pexels.com/photos/13574113/pexels-photo-13574113.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Flowers & Plushies':
    'https://images.pexels.com/photos/20269075/pexels-photo-20269075.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const REVIEWS = [
  {
    text: 'The butterfly top is even prettier in person. The stitching is so neat and it fits perfectly. Worth every rupee!',
    name: 'Ananya S.',
    item: 'Monarch Butterfly Top',
  },
  {
    text: 'Ordered the rose bouquet for my mom’s birthday and she hasn’t stopped showing it off. Beautifully made and packed with so much care.',
    name: 'Rhea M.',
    item: 'Eternal Rose Bouquet',
  },
  {
    text: 'Third order from Threaded Treasures and every single piece is adorable. The little keychains are my favourite thing to gift.',
    name: 'Priya K.',
    item: 'Crochet Charm Keychain',
  },
];

const FAQS = [
  {
    q: 'How long does my order take?',
    a: 'Every piece is made by hand after you order, so please allow about 10 days for making plus shipping time. You’ll get updates the whole way.',
  },
  {
    q: 'Do you ship across India?',
    a: 'Yes — we ship pan-India from Mumbai, and 150+ orders have already made their way to happy customers.',
  },
  {
    q: 'Can I customise my order?',
    a: 'Yes — customisations are our favourite part. Add your colours, size, or idea in the customization box when you add to bag, or DM us on Instagram and we’ll make it exactly how you imagine it.',
  },
  {
    q: 'How do I care for my crochet piece?',
    a: 'Hand wash gently in cool water with mild soap, reshape, and dry flat in the shade. Treat it kindly and it lasts for years.',
  },
];

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5 text-amber-500">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={12} fill={i < Math.round(n) ? 'currentColor' : 'none'} />
      ))}
    </span>
  );
}

export default function Storefront() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [active, setActive] = useState<Product | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const addToCart = (item: CartItem) => {
    setCart((c) => {
      const found = c.find((i) => i.id === item.id);
      if (found) return c.map((i) => (i.id === item.id ? { ...i, qty: i.qty + item.qty } : i));
      return [...c, item];
    });
  };

  const updateNote = (id: string, note: string) =>
    setCart((c) => c.map((i) => (i.id === id ? { ...i, note } : i)));

  const updateQty = (id: string, delta: number) =>
    setCart((c) =>
      c.map((i) => (i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i)).filter((i) => i.qty > 0)
    );

  const removeItem = (id: string) => setCart((c) => c.filter((i) => i.id !== id));

  const checkout = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Prototype: checkout will connect to payments in the next step.');
  };

  const scrollTo = (id: string) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const bestsellers = PRODUCTS.filter((p) => p.bestseller);

  return (
    <div className="min-h-screen bg-cream text-stone-800">
      <Header onNav={scrollTo} onCart={() => setCartOpen(true)} cartCount={cart.reduce((s, i) => s + i.qty, 0)} />

      {/* Mobile menu overlay */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div className="absolute inset-0 bg-stone-900/40" onClick={() => setMobileMenu(false)} />
          <div className="absolute inset-x-4 top-24 bg-cream rounded-2xl shadow-xl p-6 flex flex-col gap-4">
            {['shop', 'about', 'faq'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left font-display text-lg capitalize text-stone-800"
              >
                {id}
              </button>
            ))}
            <a
              href="https://instagram.com/threadedtreasures.co"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-rose-800 pt-2 border-t border-stone-200"
            >
              <Instagram size={16} /> @threadedtreasures.co
            </a>
          </div>
        </div>
      )}

      <main className="pt-28 sm:pt-[104px]">
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-rose-700 mb-4 fade-up">
                Arts &amp; Crafts Studio · Mumbai
              </p>
              <h1 className="font-display text-4xl sm:text-6xl leading-[1.1] text-stone-800 fade-up delay-1">
                Handmade with love,
                <br />
                stitched to last.
              </h1>
              <p className="mt-5 text-stone-600 leading-relaxed max-w-md fade-up delay-2">
                Crochet bags, pouches, charms and everlasting flowers — every piece made by hand in
                Mumbai, customised just for you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 fade-up delay-3">
                <button
                  onClick={() => scrollTo('shop')}
                  className="group inline-flex items-center gap-2 bg-rose-700 text-cream px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-rose-800 active:scale-[0.99] transition"
                >
                  Shop the collection
                  <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <a
                  href="https://instagram.com/threadedtreasures.co"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-stone-300 px-7 py-3.5 rounded-full text-sm font-medium text-stone-700 hover:border-stone-500 transition-colors"
                >
                  <Instagram size={16} /> @threadedtreasures.co
                </a>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm text-stone-500">
                <span className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </span>
                875 followers · 150+ orders shipped
              </p>
            </div>
            <div className="relative fade-up delay-2">
              <div className="absolute inset-3 rounded-2xl bg-rose-200/50 rotate-2" />
              <img
                src={HERO_IMG}
                alt="Threaded Treasures handmade crochet collection"
                className="relative rounded-2xl w-full aspect-[4/5] object-cover shadow-lg ring-1 ring-rose-100"
              />
              <div className="absolute -bottom-4 -left-4 bg-cream shadow-md rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 grid place-items-center">
                  <Heart size={16} />
                </span>
                <div>
                  <p className="text-xs font-medium text-stone-700">Made to order</p>
                  <p className="text-[11px] text-stone-500">Every piece one of a kind</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value strip */}
        <section className="border-y border-stone-200/70 bg-white/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 xs:grid-cols-3 gap-4 text-center sm:text-left">
            {[
              { icon: Scissors, title: 'Handmade to order', sub: 'Stitched fresh for every customer' },
              { icon: PenLine, title: 'Customisations welcome', sub: 'Your colours, your way' },
              { icon: Truck, title: 'Ships in ~10 days', sub: 'Across India, from Mumbai' },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3 justify-center sm:justify-start">
                <span className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 grid place-items-center shrink-0">
                  <Icon size={17} />
                </span>
                <div>
                  <p className="text-sm font-medium text-stone-800">{title}</p>
                  <p className="text-xs text-stone-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-rose-700 mb-2">Browse</p>
            <h2 className="font-display text-3xl sm:text-4xl text-stone-800">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(CATEGORY_IMGS).map(([name, img]) => (
              <button
                key={name}
                onClick={() => scrollTo('shop')}
                className="group relative rounded-xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={img}
                  alt={name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent" />
                <span className="absolute bottom-3 inset-x-0 text-center font-display text-cream text-lg">
                  {name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Bestsellers */}
        <section className="bg-rose-50/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-rose-700 mb-2">Loved by many</p>
                <h2 className="font-display text-3xl sm:text-4xl text-stone-800">Bestsellers</h2>
              </div>
              <button
                onClick={() => scrollTo('shop')}
                className="hidden sm:inline-flex items-center gap-1 text-sm text-rose-800 hover:text-rose-950 font-medium"
              >
                View all <ChevronRight size={15} />
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
              {bestsellers.map((p) => (
                <article key={p.id} className="group cursor-pointer" onClick={() => setActive(p)}>
                  <div className="relative overflow-hidden rounded-xl bg-rose-100 aspect-[4/5]">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-3 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-medium text-stone-800 group-hover:text-rose-800 transition-colors">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-stone-500">{formatINR(p.price)}</p>
                    </div>
                    <Stars n={p.rating} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Shop onOpen={setActive} onAdd={addToCart} />

        {/* About */}
        <section id="about" className="bg-white/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid sm:grid-cols-2 gap-10 sm:gap-16 items-center">
            <img
              src={ABOUT_IMG}
              alt="Colourful yarn balls"
              loading="lazy"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-md"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-rose-700 mb-2">Our Story</p>
              <h2 className="font-display text-3xl sm:text-4xl text-stone-800 leading-tight">
                From a hook and a ball of yarn
              </h2>
              <p className="mt-5 text-stone-600 leading-relaxed">
                Threaded Treasures began with a single crochet hook and a love for making things by
                hand. What started as gifts for friends grew into a little studio in Mumbai that has
                shipped over 150 orders — butterfly tops, bouquets that never wilt, bags, keychains
                and hampers — each one stitched slowly, never rushed.
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed">
                When you order from us, you&apos;re not buying from a factory. You&apos;re supporting
                a maker who literally loops every stitch with her own hands.
              </p>
              <a
                href="https://instagram.com/threadedtreasures.co"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-rose-800 hover:text-rose-950"
              >
                <Instagram size={16} /> Follow our journey on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-rose-700 mb-2">Kind words</p>
            <h2 className="font-display text-3xl sm:text-4xl text-stone-800">What Customers Say</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="bg-white rounded-2xl border border-stone-200/70 p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                <Stars n={5} />
                <blockquote className="mt-3 text-sm text-stone-600 leading-relaxed flex-1">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 pt-4 border-t border-stone-100">
                  <p className="text-sm font-medium text-stone-800">{r.name}</p>
                  <p className="text-xs text-stone-500">Bought: {r.item}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-rose-700 mb-2">Good to know</p>
            <h2 className="font-display text-3xl sm:text-4xl text-stone-800">Questions</h2>
          </div>
          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {FAQS.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-medium text-stone-800">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-stone-400 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden text-sm text-stone-600 leading-relaxed pb-5 pr-8">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-rose-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center text-cream">
            <Package size={28} className="mx-auto mb-4 opacity-90" />
            <h2 className="font-display text-3xl sm:text-4xl">Ready for something handmade?</h2>
            <p className="mt-3 text-cream/85 max-w-md mx-auto text-sm leading-relaxed">
              Custom orders are open. Tell us your colours, your idea, your occasion — we&apos;ll
              stitch it into reality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => scrollTo('shop')}
                className="bg-cream text-rose-800 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-white transition-colors"
              >
                Shop now
              </button>
              <a
                href="https://www.instagram.com/threadedtreasures.co"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-cream/50 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-cream/10 transition-colors"
              >
                <MessageCircle size={16} /> Custom order via Instagram DM
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-lg text-cream">Threaded Treasures</p>
            <p className="mt-2 text-sm text-stone-400 leading-relaxed">
              Handmade crochet treasures from Mumbai. All praise due to Allah.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-cream mb-3">Explore</p>
            <ul className="space-y-2 text-sm">
              {['shop', 'about', 'faq'].map((id) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)} className="capitalize hover:text-cream transition-colors">
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-cream mb-3">Say hello</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/threadedtreasures.co"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <Instagram size={15} /> @threadedtreasures.co
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} /> Mumbai, India
              </li>
              <li className="flex items-center gap-2">
                <Package size={15} /> 150+ orders shipped
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 py-5 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Threaded Treasures · Prototype
        </div>
      </footer>

      <ProductModal product={active} onClose={() => setActive(null)} onAdd={addToCart} />
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onQty={updateQty}
        onNote={updateNote}
        onRemove={removeItem}
        onCheckout={checkout}
      />
    </div>
  );
}
