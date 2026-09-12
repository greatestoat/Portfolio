import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-30 flex w-full items-center justify-between px-6 py-5 md:px-12">
      <Link href="/" className="font-mono text-sm tracking-wide text-white">
        R.PADAM<span className="text-crimson">_</span>
      </Link>
      <nav className="flex gap-8 font-mono text-xs text-steel">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="transition-colors hover:text-crimson"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
