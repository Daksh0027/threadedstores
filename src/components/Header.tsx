interface Props {
  onNav: (id: string) => void;
  onCart: () => void;
  cartCount: number;
}

const LINKS = [
  { id: 'shop', label: 'Shop' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
];

export default function Header({ onNav, onCart, cartCount }: Props) {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-cream/90 backdrop-blur border-b border-rose-100">
      <div className="bg-rose-100/80 text-rose-800 text-[11px] sm:text-xs text-center py-1.5 px-4 tracking-wide">
        Handmade to order · Customisations available · We ship across India
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button onClick={() => onNav('home')} className="flex items-center gap-2.5 group">
          <img
            src="/images/DEMO/threaded-treasures-logo-01.jpg"
            alt="Threaded Treasures logo"
            className="h-11 w-auto rounded-full ring-1 ring-rose-200/70 bg-white shadow-sm group-hover:ring-rose-300 transition-shadow"
          />
          <span className="hidden xs:inline sm:inline font-display text-lg text-rose-800 tracking-wide">
            Threaded Treasures
          </span>
        </button>

        <nav className="hidden sm:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm text-stone-600 hover:text-rose-800 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={onCart}
          className="relative flex items-center gap-2 text-sm text-stone-700 hover:text-rose-800 transition-colors"
          aria-label="Open cart"
        >
          <span>Bag</span>
          <span
            className={`grid place-items-center min-w-6 h-6 px-1.5 rounded-full text-xs font-medium transition-colors ${
              cartCount > 0 ? 'bg-rose-700 text-cream' : 'bg-stone-200 text-stone-600'
            }`}
          >
            {cartCount}
          </span>
        </button>
      </div>
      <nav className="sm:hidden flex justify-center gap-8 pb-2.5">
        {LINKS.map((l) => (
          <button
            key={l.id}
            onClick={() => go(l.id)}
            className="text-xs text-stone-600 hover:text-rose-800 transition-colors"
          >
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
