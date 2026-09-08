import { useState } from "react";
import {
  ArrowUpRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

const watches = [
  {
    name: "The Nocturne",
    type: "Automatic / 38mm",
    price: "$1,240",
    image:
      "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tone: "Obsidian / Gold",
  },
  {
    name: "The Aurelia",
    type: "Solar / 32mm",
    price: "$980",
    image:
      "https://images.pexels.com/photos/38946825/pexels-photo-38946825.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tone: "Champagne / Gold",
  },
  {
    name: "The Meridian",
    type: "Automatic / 40mm",
    price: "$1,560",
    image:
      "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tone: "Steel / Onyx",
  },
  {
    name: "The Solstice",
    type: "Quartz / 30mm",
    price: "$740",
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tone: "Ivory / Gold",
  },
  {
    name: "The Élan",
    type: "Automatic / 36mm",
    price: "$1,180",
    image:
      "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1000",
    tone: "Black / Gold",
  },
];

const jewelry = [
  {
    name: "Solitaire Signet",
    type: "18k Gold / Diamond",
    price: "$620",
    image:
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Luna Drop",
    type: "Gold Vermeil / Pearl",
    price: "$340",
    image:
      "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Arc Cuff",
    type: "Recycled Sterling Silver",
    price: "$280",
    image:
      "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "No. 04 Chain",
    type: "18k Gold / 45cm",
    price: "$490",
    image:
      "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    name: "Celeste Ring",
    type: "Gold Vermeil / Opal",
    price: "$390",
    image:
      "https://images.pexels.com/photos/9428786/pexels-photo-9428786.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  const addToBag = () => {
    setBagCount((count) => count + 1);
    setStatusMessage("Added to your bag");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-cream">
      <div className="announcement flex items-center justify-center gap-2 bg-gold px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-ink">
        Complimentary shipping on orders over $150 <span className="hidden sm:inline">·</span> Complimentary monogramming this season
      </div>

      <header className="absolute left-0 right-0 top-8 z-30 border-b border-white/15 bg-ink/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 lg:px-10">
          <button className="flex items-center gap-3 text-left" onClick={() => scrollToSection("top")} aria-label="Go to top">
            <span className="font-display text-2xl tracking-[-0.06em] text-gold">J</span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.28em] sm:block">Jewelluxe Co</span>
          </button>
          <nav className="hidden items-center gap-9 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/75 md:flex">
            <button className="transition-colors hover:text-gold" onClick={() => scrollToSection("watches")}>Watches</button>
            <button className="transition-colors hover:text-gold" onClick={() => scrollToSection("jewelry")}>Jewelry</button>
            <button className="transition-colors hover:text-gold" onClick={() => scrollToSection("story")}>Our story</button>
          </nav>
          <div className="flex items-center gap-4 text-cream">
            <button className="hidden transition-colors hover:text-gold sm:block" onClick={() => setSearchOpen(!searchOpen)} aria-label={searchOpen ? "Close search" : "Search"}><Search size={17} strokeWidth={1.5} /></button>
            <button className="relative transition-colors hover:text-gold" onClick={addToBag} aria-label="Shopping bag">
              <ShoppingBag size={18} strokeWidth={1.5} />
              {bagCount > 0 && <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-ink">{bagCount}</span>}
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="border-t border-white/10 bg-ink px-5 py-4 sm:px-10">
            <label className="mx-auto flex max-w-[1400px] items-center gap-3 text-cream/50" htmlFor="site-search"><Search size={16} /><input id="site-search" autoFocus className="w-full bg-transparent py-2 text-sm text-cream outline-none placeholder:text-cream/35" placeholder="Search watches, jewelry..." /></label>
          </div>
        )}
        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 bg-ink px-5 py-6 text-[10px] font-semibold uppercase tracking-[0.22em] md:hidden">
            <button className="text-left" onClick={() => { scrollToSection("watches"); setMenuOpen(false); }}>Watches</button>
            <button className="text-left" onClick={() => { scrollToSection("jewelry"); setMenuOpen(false); }}>Jewelry</button>
            <button className="text-left" onClick={() => { scrollToSection("story"); setMenuOpen(false); }}>Our story</button>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[720px] items-end bg-ink pb-16 pt-40 lg:min-h-[820px] lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_24%,rgba(198,161,91,0.2),transparent_30%),linear-gradient(90deg,rgba(20,19,17,0.85)_0%,rgba(20,19,17,0.22)_70%)]" />
        <div className="absolute right-0 top-0 h-full w-[68%] bg-cover bg-center opacity-80 mix-blend-screen" style={{ backgroundImage: "url(https://images.pexels.com/photos/38946825/pexels-photo-38946825.jpeg?auto=compress&cs=tinysrgb&w=1800)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/25" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold"><Sparkles size={14} strokeWidth={1.5} /> Objects of intention</div>
            <h1 className="max-w-3xl font-display text-[clamp(4.2rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.07em]">Time,<br /><em className="font-editorial font-normal text-gold">beautifully</em><br />kept.</h1>
            <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <p className="max-w-xs text-sm leading-6 text-cream/65">Jewelry and timepieces for the moments that become part of you.</p>
              <button onClick={() => scrollToSection("watches")} className="group flex items-center gap-3 border-b border-gold pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Explore the collection <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-5 hidden text-right text-[9px] uppercase tracking-[0.24em] text-cream/45 lg:block"><span className="mb-2 block text-gold">01 / 04</span>New season<br />Objects of intention</div>
      </section>

      <section className="border-y border-white/10 bg-ink-soft/80 py-7">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-cream/55 sm:justify-between lg:px-10">
          <span>Designed in New York</span><span className="hidden text-gold sm:inline">✦</span><span>Made to be remembered</span><span className="hidden text-gold sm:inline">✦</span><span>Lifetime care included</span>
        </div>
      </section>

      <section id="watches" className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">01 / Timepieces</p><h2 className="font-display text-5xl tracking-[-0.05em] sm:text-6xl">The watch edit</h2></div>
          <button className="hidden items-center gap-2 border-b border-cream/30 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:border-gold hover:text-gold sm:flex" onClick={() => scrollToSection("watches")}>View all watches <ArrowUpRight size={14} /></button>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-5">
          {watches.map((watch) => <ProductCard key={watch.name} {...watch} onAdd={addToBag} />)}
        </div>
      </section>

      <section id="story" className="bg-gold px-5 py-16 text-ink lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <div><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em]">Our point of view</p><h2 className="font-display text-5xl leading-[0.9] tracking-[-0.06em] sm:text-7xl">For the<br /><em className="font-editorial font-normal">in-between.</em></h2></div>
          <div><p className="max-w-xl text-xl leading-relaxed tracking-[-0.02em] sm:text-2xl">Jewelluxe is a study in restraint. We create considered pieces that move with you — through the everyday, the unexpected, and everything worth remembering.</p><button onClick={() => scrollToSection("jewelry")} className="mt-8 flex items-center gap-3 border-b border-ink pb-2 text-[10px] font-semibold uppercase tracking-[0.2em]">Discover our story <ArrowUpRight size={15} /></button></div>
        </div>
      </section>

      <section id="jewelry" className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex items-end justify-between gap-5"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">02 / Jewelry</p><h2 className="font-display text-5xl tracking-[-0.05em] sm:text-6xl">Quietly radiant</h2></div><button onClick={() => scrollToSection("jewelry")} className="hidden items-center gap-2 border-b border-cream/30 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/70 sm:flex">View all jewelry <ArrowUpRight size={14} /></button></div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-5">{jewelry.map((piece) => <ProductCard key={piece.name} {...piece} onAdd={addToBag} />)}</div>
      </section>

      {statusMessage && <div role="status" aria-live="polite" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-gold/30 bg-ink-soft px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold shadow-2xl">{statusMessage}</div>}

      <footer className="border-t border-white/10 bg-ink-soft px-5 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1400px]"><div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><span className="font-display text-3xl tracking-[-0.06em] text-gold">Jewelluxe Co</span><p className="mt-5 max-w-xs text-sm leading-6 text-cream/50">Objects of intention, made for a lifetime of moments.</p></div><FooterColumn title="Explore" items={["Watches", "Jewelry", "Our story"]} /><FooterColumn title="Client care" items={["Shipping & returns", "Care guide", "Contact us"]} /><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/45">Stay in the know</p><div className="flex border-b border-cream/25 pb-3"><input className="w-full bg-transparent text-sm outline-none placeholder:text-cream/35" placeholder="Your email address" /><button className="text-gold"><ArrowUpRight size={17} /></button></div></div></div><div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-cream/35 sm:flex-row"><span>© 2024 Jewelluxe Co.</span><span>New York · London · Everywhere</span></div></div>
      </footer>
    </main>
  );
}

function ProductCard({ name, type, price, image, tone, onAdd }: { name: string; type: string; price: string; image: string; tone?: string; onAdd: () => void }) {
  return <div className="group"><div className="relative aspect-[0.82] overflow-hidden bg-cream/5"><img src={image} alt={name} loading="lazy" className="h-full w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><button onClick={onAdd} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-cream/80 opacity-100 backdrop-blur-sm transition hover:bg-gold hover:text-ink sm:opacity-0 sm:group-hover:opacity-100" aria-label={`Add ${name} to bag`}><Heart size={14} strokeWidth={1.5} /></button></div><div className="pt-4"><div className="flex items-start justify-between gap-2"><h3 className="font-display text-xl tracking-[-0.03em] text-cream sm:text-2xl">{name}</h3><span className="text-xs text-gold">{price}</span></div><p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-cream/45">{type}</p>{tone && <p className="mt-2 text-[10px] text-cream/35">{tone}</p>}</div></div>;
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/45">{title}</p><div className="flex flex-col gap-3 text-sm text-cream/65">{items.map((item) => <button key={item} className="text-left transition-colors hover:text-gold" onClick={() => scrollToSection(item === "Watches" ? "watches" : item === "Jewelry" ? "jewelry" : "story")}>{item}</button>)}</div></div>;
}
