import { useState } from 'react';
import { X, Plus, Check, PenLine } from 'lucide-react';
import { formatINR, type Product } from '@/data/products';
import type { CartItem } from './CartDrawer';

interface Props {
  product: Product | null;
  onClose: () => void;
  onAdd: (item: CartItem) => void;
}

const SIZES = ['S', 'M', 'L', 'Free'];

export default function ProductModal({ product, onClose, onAdd }: Props) {
  const [size, setSize] = useState('Free');
  const [note, setNote] = useState('');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const isWearable = product.category === 'Wearables';

  const handleAdd = () => {
    onAdd({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
      note: note.trim() || undefined,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setNote('');
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center sm:p-6">
      <div className="absolute inset-0 bg-stone-900/50" onClick={onClose} />
      <div
        role="dialog"
        aria-label={product.name}
        className="relative w-full max-w-3xl bg-cream rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-cream/90 backdrop-blur text-stone-600 hover:text-stone-900 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="grid sm:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 sm:h-full object-cover sm:rounded-l-2xl bg-rose-50"
          />
          <div className="p-6 sm:p-8 flex flex-col">
            {product.bestseller && (
              <span className="self-start text-[11px] uppercase tracking-[0.15em] text-rose-700 bg-rose-100 rounded-full px-3 py-1 mb-3">
                Bestseller
              </span>
            )}
            <h2 className="font-display text-2xl text-stone-800 leading-tight">{product.name}</h2>
            <p className="mt-2 text-lg font-medium text-stone-700">
              {formatINR(product.price)}
              {product.compareAt && (
                <span className="ml-2 text-sm text-stone-400 line-through">
                  {formatINR(product.compareAt)}
                </span>
              )}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-stone-600">{product.description}</p>

            {isWearable && (
              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-stone-500 mb-2">Size</p>
                <div className="flex gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        size === s
                          ? 'border-rose-700 bg-rose-700 text-cream'
                          : 'border-stone-300 text-stone-700 hover:border-stone-500'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.customisable && (
              <div className="mt-5">
                <label
                  htmlFor="customization"
                  className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-stone-500 mb-2"
                >
                  <PenLine size={12} className="text-rose-400" /> Customisation (optional)
                </label>
                <textarea
                  id="customization"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={2}
                  maxLength={300}
                  placeholder="Colours you'd like, a name to stitch in, gift wrapping, anything…"
                  className="w-full rounded-xl border border-stone-200 bg-white/70 px-4 py-3 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 resize-none transition"
                />
                <p className="mt-1 text-[11px] text-stone-400">
                  Tell us your colours, size, or occasion — we&apos;ll message you to confirm.
                </p>
              </div>
            )}

            <div className="mt-auto pt-6 space-y-3">
              <button
                onClick={handleAdd}
                className={`w-full py-3 rounded-full text-sm font-medium tracking-wide transition active:scale-[0.99] flex items-center justify-center gap-2 ${
                  added ? 'bg-green-700 text-cream' : 'bg-rose-700 text-cream hover:bg-rose-800'
                }`}
              >
                {added ? (
                  <>
                    <Check size={16} /> Added to bag
                  </>
                ) : (
                  <>
                    <Plus size={16} /> Add to bag
                  </>
                )}
              </button>
              <p className="text-center text-xs text-stone-500">
                Handmade to order · Ships in about 10 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
