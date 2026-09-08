import { useState } from "react";
import {
  ArrowRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

const heroImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9558-I7HRNg4qctT9e7oQLPhdLfAIEnjQRg.jpeg";
const collectionImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9559-Wo1wVNGVt2n9BK30Trv3dQJJdD0LEh.jpeg";

const categories = [
  { name: "Jewelry", eyebrow: "01 / Signature", image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { name: "Women’s Heels", eyebrow: "02 / The edit", image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { name: "Branded Watches", eyebrow: "03 / Timepieces", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { name: "Exclusive Necklaces", eyebrow: "04 / Statement", image: collectionImage },
];

const products = [
  { name: "The Jewelluxe", category: "Branded Watches", price: "$980", image: "https://images.pexels.com/photos/38946825/pexels-photo-38946825.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { name: "Celeste Drop", category: "Exclusive Necklaces", price: "$340", image: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { name: "Luna Stiletto", category: "Women’s Heels", price: "$420", image: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { name: "No. 04 Chain", category: "Jewelry", price: "$490", image: "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=900" },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [notice, setNotice] = useState("");
  const [email, setEmail] = useState("");

  const addToBag = (name: string) => {
    setBagCount((count) => count + 1);
    setNotice(`${name} added to your bag`);
    window.setTimeout(() => setNotice(""), 2400);
  };

  const navTo = (id: string) => { scrollTo(id); setMenuOpen(false); };

  return (
    <main className="min-h-screen overflow-hidden bg-obsidian text-ivory">
      <div className="flex min-h-8 items-center justify-center bg-champagne px-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-obsidian">Complimentary delivery on orders over $150</div>
      <header className="absolute left-0 right-0 top-8 z-30 border-b border-ivory/20 bg-obsidian/10 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 lg:px-12">
          <button onClick={() => navTo("top")} className="flex items-center gap-3" aria-label="Jewelluxe Co home">
            <span className="flex h-9 w-9 items-center justify-center border border-champagne font-serif text-2xl text-champagne">J</span>
            <span className="text-left"><strong className="block text-[11px] uppercase tracking-[0.3em]">Jewelluxe Co</strong><small className="mt-1 block text-[8px] uppercase tracking-[0.24em] text-ivory/55">Curated essentials</small></span>
          </button>
          <nav className="hidden items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/80 md:flex">
            <button onClick={() => navTo("collections")} className="hover:text-champagne">Collections</button>
            <button onClick={() => navTo("new-arrivals")} className="hover:text-champagne">New arrivals</button>
            <button onClick={() => navTo("story")} className="hover:text-champagne">Our story</button>
            <button onClick={() => navTo("sale")} className="text-champagne hover:text-ivory">Sale</button>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Toggle search" className="hidden hover:text-champagne sm:block"><Search size={17} strokeWidth={1.5} /></button>
            <button onClick={() => addToBag("Your selection")} aria-label="Shopping bag" className="relative hover:text-champagne"><ShoppingBag size={18} strokeWidth={1.5} />{bagCount > 0 && <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-champagne text-[9px] font-bold text-obsidian">{bagCount}</span>}</button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} className="md:hidden">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        {searchOpen && <div className="border-t border-ivory/15 bg-obsidian px-5 py-4"><label htmlFor="search" className="mx-auto flex max-w-[1440px] items-center gap-3 text-ivory/50"><Search size={16} /><input id="search" autoFocus placeholder="Search the maison" className="w-full bg-transparent text-sm outline-none placeholder:text-ivory/35" /></label></div>}
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-ivory/15 bg-obsidian px-5 py-6 text-[10px] font-semibold uppercase tracking-[0.2em] md:hidden"><button className="text-left" onClick={() => navTo("collections")}>Collections</button><button className="text-left" onClick={() => navTo("new-arrivals")}>New arrivals</button><button className="text-left" onClick={() => navTo("story")}>Our story</button><button className="text-left text-champagne" onClick={() => navTo("sale")}>Sale</button></nav>}
      </header>

      <section id="top" className="relative flex min-h-[700px] items-end overflow-hidden pb-16 pt-40 lg:min-h-[850px] lg:pb-24">
        <img src={heroImage} alt="Woman wearing statement jewelry from the Jewelluxe Co collection" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,18,11,.92)_0%,rgba(16,18,11,.4)_48%,rgba(16,18,11,.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,18,11,.82)_0%,transparent_42%,rgba(16,18,11,.2)_100%)]" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 lg:px-12"><div className="max-w-2xl"><p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-champagne"><Sparkles size={14} strokeWidth={1.5} /> The exclusive collection</p><h1 className="font-serif text-[clamp(4rem,10vw,9rem)] leading-[.82] tracking-[-.07em]">Made to be<br /><em className="font-serif font-normal text-champagne">noticed.</em></h1><p className="mt-9 max-w-md text-sm leading-6 text-ivory/75">Curated jewelry, heels and watches for women who define their own style.</p><div className="mt-9 flex flex-wrap gap-4"><button onClick={() => navTo("collections")} className="bg-champagne px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-obsidian transition hover:bg-ivory">Shop collection <ArrowRight className="ml-3 inline" size={14} /></button><button onClick={() => navTo("new-arrivals")} className="border border-ivory/55 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory transition hover:border-champagne hover:text-champagne">Explore new arrivals</button></div></div></div>
      </section>

      <section className="border-y border-ivory/10 bg-obsidian-soft py-6"><div className="mx-auto flex max-w-[1440px] flex-wrap justify-center gap-x-10 gap-y-3 px-5 text-center text-[9px] font-semibold uppercase tracking-[0.24em] text-ivory/55 sm:justify-between lg:px-12"><span>Women who define their style</span><span className="text-champagne">✦</span><span>Curated with intention</span><span className="text-champagne">✦</span><span>Lifetime care included</span></div></section>

      <section id="collections" className="mx-auto max-w-[1440px] px-5 py-20 lg:px-12 lg:py-28"><div className="mb-12 flex items-end justify-between border-b border-ivory/15 pb-7"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">The maison edit</p><h2 className="font-serif text-5xl tracking-[-.05em] sm:text-7xl">Find your signature</h2></div><span className="hidden text-[9px] uppercase tracking-[.22em] text-ivory/40 sm:block">Scroll to discover →</span></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <button key={category.name} className="group text-left" onClick={() => navTo("new-arrivals")}><div className="relative aspect-[.8] overflow-hidden bg-ivory/5"><img src={category.image} alt={category.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" /><div className="absolute bottom-5 left-5"><p className="mb-2 text-[9px] uppercase tracking-[.22em] text-champagne">{category.eyebrow}</p><h3 className="font-serif text-2xl text-ivory">{category.name}</h3></div></div></button>)}</div></section>

      <section id="story" className="bg-champagne px-5 py-20 text-obsidian lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="mb-5 text-[10px] font-semibold uppercase tracking-[.28em]">Our point of view</p><h2 className="font-serif text-6xl leading-[.88] tracking-[-.06em] sm:text-8xl">Wear<br /><em className="font-normal">the moment.</em></h2></div><div><p className="max-w-xl text-xl leading-relaxed sm:text-2xl">Jewelluxe Co is a study in personal style. We seek out the pieces that change the way a woman enters a room — considered, expressive, and entirely her own.</p><button onClick={() => navTo("collections")} className="mt-8 border-b border-obsidian pb-2 text-[10px] font-semibold uppercase tracking-[.2em]">Discover the maison <ArrowRight className="ml-3 inline" size={14} /></button></div></div></section>

      <section id="new-arrivals" className="mx-auto max-w-[1440px] px-5 py-20 lg:px-12 lg:py-28"><div className="mb-12 flex flex-col gap-5 border-b border-ivory/15 pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.28em] text-champagne">Just arrived</p><h2 className="font-serif text-5xl tracking-[-.05em] sm:text-7xl">New arrivals</h2></div><button className="flex items-center gap-2 self-start border-b border-ivory/30 pb-2 text-[10px] uppercase tracking-[.2em] text-ivory/70 hover:border-champagne hover:text-champagne">View all <ArrowRight size={14} /></button></div><div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-4 sm:gap-x-5">{products.map((product) => <ProductCard key={product.name} product={product} onAdd={addToBag} />)}</div></section>

      <section id="sale" className="relative mx-5 mb-20 overflow-hidden lg:mx-12"><img src={collectionImage} alt="Heels, watch, and statement necklace from the exclusive collection" loading="lazy" className="h-[440px] w-full object-cover object-center grayscale-[15%]" /><div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/45 to-transparent" /><div className="absolute inset-y-0 left-0 flex max-w-lg flex-col justify-center px-7 lg:px-16"><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.28em] text-champagne">The exclusive collection</p><h2 className="font-serif text-5xl leading-[.9] tracking-[-.05em] sm:text-7xl">A little<br /><em className="font-normal text-champagne">more.</em></h2><p className="mt-6 max-w-xs text-sm leading-6 text-ivory/70">Statement pieces for the nights you will remember.</p><button onClick={() => navTo("collections")} className="mt-7 flex items-center gap-3 self-start border-b border-champagne pb-2 text-[10px] font-semibold uppercase tracking-[.2em] text-champagne">Shop exclusive <ArrowRight size={14} /></button></div></section>

      <section className="border-t border-ivory/10 bg-obsidian-soft px-5 py-16 lg:px-12 lg:py-20"><div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center"><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.28em] text-champagne">A note from us</p><blockquote className="max-w-2xl font-serif text-3xl leading-tight tracking-[-.03em] sm:text-5xl">“The best accessories do not complete a look. They begin a conversation.”</blockquote></div><div className="lg:pl-20"><p className="max-w-md text-sm leading-7 text-ivory/60">Join our private list for first access to new arrivals, limited collections, and stories from the women who wear them.</p><form className="mt-7 flex max-w-md border-b border-ivory/35 pb-3" onSubmit={(event) => { event.preventDefault(); setEmail(""); setNotice("Welcome to the Aurelia private list"); window.setTimeout(() => setNotice(""), 2400); }}><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="w-full bg-transparent text-sm outline-none placeholder:text-ivory/35" aria-label="Email address" /><button aria-label="Join private list" className="text-champagne"><ArrowRight size={18} /></button></form></div></div></section>

      {notice && <div role="status" aria-live="polite" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-champagne/40 bg-obsidian-soft px-5 py-3 text-[10px] font-semibold uppercase tracking-[.15em] text-champagne shadow-2xl">{notice}</div>}
      <footer className="border-t border-ivory/10 bg-obsidian-soft px-5 py-12 lg:px-12 lg:py-16"><div className="mx-auto max-w-[1440px]"><div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]"><div><span className="font-serif text-3xl text-champagne">Jewelluxe Co</span><p className="mt-5 max-w-xs text-sm leading-6 text-ivory/50">Luxury essentials for women who define their own style.</p></div><FooterColumn title="Shop" items={["Collections", "New arrivals", "Best sellers", "Sale"]} /><FooterColumn title="Client care" items={["Shipping & returns", "Care guide", "Contact us", "Book an appointment"]} /><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.22em] text-ivory/45">Follow the maison</p><div className="flex gap-5 text-sm text-ivory/65"><button className="hover:text-champagne">Instagram</button><button className="hover:text-champagne">Pinterest</button></div></div></div><div className="mt-14 flex flex-col justify-between gap-4 border-t border-ivory/10 pt-5 text-[9px] uppercase tracking-[.2em] text-ivory/35 sm:flex-row"><span>© 2026 Jewelluxe Co</span><span>New York · London · Everywhere</span></div></div></footer>
    </main>
  );
}

function ProductCard({ product, onAdd }: { product: (typeof products)[number]; onAdd: (name: string) => void }) {
  return <article className="group"><div className="relative aspect-[.82] overflow-hidden bg-ivory/5"><img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><button onClick={() => onAdd(product.name)} aria-label={`Add ${product.name} to wishlist`} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-obsidian/70 text-ivory opacity-100 backdrop-blur-sm transition hover:bg-champagne hover:text-obsidian sm:opacity-0 sm:group-hover:opacity-100"><Heart size={14} strokeWidth={1.5} /></button></div><div className="pt-4"><div className="flex items-start justify-between gap-2"><h3 className="font-serif text-xl tracking-[-.03em]">{product.name}</h3><span className="text-xs text-champagne">{product.price}</span></div><p className="mt-1 text-[10px] uppercase tracking-[.14em] text-ivory/45">{product.category}</p><button onClick={() => onAdd(product.name)} className="mt-4 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.2em] text-champagne hover:text-ivory">Add to bag <ArrowRight size={12} /></button></div></article>;
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[.22em] text-ivory/45">{title}</p><div className="flex flex-col gap-3 text-sm text-ivory/65">{items.map((item) => <button key={item} className="text-left hover:text-champagne">{item}</button>)}</div></div>;
}

