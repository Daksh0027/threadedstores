import { useState } from 'react';
import { Search, Check } from 'lucide-react';
import { CATEGORIES, PRODUCTS, formatINR, type Product } from '@/data/products';
import type { CartItem } from './CartDrawer';

interface Props {
  onOpen: (p: Product) => void;
  onAdd: (item: CartItem) => void;
}

export default function Shop({ onOpen, onAdd }: Props) {
  const [cat, setCat] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const quickAdd = (p: Product) => {
    onAdd({ id: p.id, name: p.name, price: p.price, image: p.image, qty: 1 });
    setJustAdded(p.id);
    setTimeout(() => setJustAdded((cur) => (cur === p.id ? null : cur)), 900);
  };

  const filtered = PRODUCTS.filter(
    (p) =>
      (cat === 'All' || p.category === cat) &&
      p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section id="shop" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-rose-700 mb-2">The Collection</p>
        <h2 className="font-display text-3xl sm:text-4xl text-stone-800">Shop Handmade</h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                cat === c
                  ? 'bg-stone-800 text-cream border-stone-800'
                  : 'border-stone-300 text-stone-600 hover:border-stone-500 hover:text-stone-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative w-full sm:w-56">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pieces…"
            className="w-full pl-9 pr-4 py-2.5 rounded-full border border-stone-300 bg-white/60 text-sm placeholder:text-stone-400 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-stone-500 py-16">
          Nothing matches that search — try another word.
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
          {filtered.map((p) => (
            <article key={p.id} className="group cursor-pointer" onClick={() => onOpen(p)}>
              <div className="relative overflow-hidden rounded-xl bg-rose-50 aspect-[4/5]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {p.bestseller && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.15em] bg-cream/95 text-rose-800 rounded-full px-2.5 py-1">
                    Bestseller
                  </span>
                )}
                {p.compareAt && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.15em] bg-rose-700 text-cream rounded-full px-2.5 py-1">
                    Sale
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    quickAdd(p);
                  }}
                  aria-label={`Add ${p.name} to bag`}
                  className={`absolute bottom-3 right-3 w-9 h-9 rounded-full grid place-items-center sm:opacity-0 sm:group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 ${
                    justAdded === p.id
                      ? 'bg-green-700 text-cream opacity-100'
                      : 'bg-cream/95 text-stone-700 hover:bg-rose-700 hover:text-cream'
                  }`}
                >
                  {justAdded === p.id ? <Check size={16} /> : '+'}
                </button>
              </div>
              <div className="pt-3">
                <h3 className="text-sm font-medium text-stone-800 leading-snug group-hover:text-rose-800 transition-colors">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-stone-500">
                  {formatINR(p.price)}
                  {p.compareAt && (
                    <span className="ml-2 text-xs line-through text-stone-400">
                      {formatINR(p.compareAt)}
                    </span>
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
