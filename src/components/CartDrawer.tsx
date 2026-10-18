import { useEffect, type FormEvent } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, MessageCircle, PenLine } from 'lucide-react';
import { formatINR, SHIPPING_CHARGE, MIN_ORDER_VALUE } from '@/data/products';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  note?: string;
}

interface Props {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onQty: (id: string, delta: number) => void;
  onNote: (id: string, note: string) => void;
  onRemove: (id: string) => void;
  onCheckout: (e: FormEvent) => void;
}

export default function CartDrawer({ open, items, onClose, onQty, onNote, onRemove, onCheckout }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const belowMin = subtotal > 0 && subtotal < MIN_ORDER_VALUE;

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-stone-900/40" onClick={onClose} />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-display text-xl text-stone-800">Your Bag</h2>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 -mr-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center text-rose-400">
              <ShoppingBag size={24} />
            </div>
            <p className="font-display text-lg text-stone-700">Your bag is empty</p>
            <p className="text-sm text-stone-500">
              Fill it with something handmade and heartwarming.
            </p>
            <button
              onClick={onClose}
              className="mt-2 text-sm font-medium text-rose-700 underline underline-offset-4 hover:text-rose-900 transition-colors"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded-lg bg-rose-50"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <p className="text-sm font-medium text-stone-800 leading-snug">{item.name}</p>
                      <button
                        onClick={() => onRemove(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-stone-400 hover:text-rose-700 transition-colors shrink-0"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-stone-500 mt-0.5">{formatINR(item.price)}</p>
                    <div className="mt-2 inline-flex items-center border border-stone-300 rounded-full">
                      <button
                        onClick={() => onQty(item.id, -1)}
                        aria-label="Decrease quantity"
                        className="p-1.5 px-2 text-stone-600 hover:text-stone-900"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm w-6 text-center tabular-nums">{item.qty}</span>
                      <button
                        onClick={() => onQty(item.id, 1)}
                        aria-label="Increase quantity"
                        className="p-1.5 px-2 text-stone-600 hover:text-stone-900"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <label className="mt-2.5 flex items-start gap-2 text-xs text-stone-500 cursor-pointer group">
                      <PenLine size={13} className="mt-0.5 shrink-0 text-rose-400" />
                      <textarea
                        value={item.note ?? ''}
                        onChange={(e) => onNote(item.id, e.target.value)}
                        rows={1}
                        placeholder="Add a customization…"
                        className="w-full resize-none bg-transparent border-b border-stone-200 focus:border-rose-400 focus:outline-none py-1 placeholder:text-stone-400 text-stone-700 transition-colors"
                      />
                    </label>
                  </div>
                </li>
              ))}
            </ul>

            <form onSubmit={onCheckout} className="border-t border-stone-200 px-6 py-5 space-y-3">
              <div className="flex justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span className="font-medium text-stone-800">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-stone-600">
                <span>Shipping across India</span>
                <span className="font-medium text-stone-800">{formatINR(SHIPPING_CHARGE)}</span>
              </div>
              <div className="flex justify-between border-t border-stone-200 pt-3 text-sm">
                <span className="font-medium text-stone-800">Total</span>
                <span className="font-display text-lg text-stone-900">
                  {formatINR(subtotal + (subtotal > 0 ? SHIPPING_CHARGE : 0))}
                </span>
              </div>
              {belowMin && (
                <p className="text-xs text-rose-700 bg-rose-100/70 rounded-lg px-3 py-2">
                  Minimum order is Rs. 300 — add Rs. {MIN_ORDER_VALUE - subtotal} more to check out.
                </p>
              )}
              <p className="text-xs text-stone-500 flex items-center gap-1.5">
                <PenLine size={12} /> Add customization notes (colours, size, occasion) right on each
                item — we&apos;ll make it just how you want.
              </p>
              <button
                type="submit"
                disabled={belowMin}
                className="w-full bg-rose-700 text-cream py-3 rounded-full text-sm font-medium tracking-wide hover:bg-rose-800 active:scale-[0.99] transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-rose-700"
              >
                Checkout
              </button>
              <a
                href="https://www.instagram.com/threadedtreasures.co"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-stone-300 text-stone-700 py-3 rounded-full text-sm font-medium hover:border-stone-500 transition-colors"
              >
                <MessageCircle size={16} /> Order via Instagram DM
              </a>
            </form>
          </>
        )}
      </aside>
    </div>
  );
}
