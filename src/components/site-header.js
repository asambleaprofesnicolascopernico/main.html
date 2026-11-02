import Link from "next/link";
import BrandMark from "./brand-mark";
import ClaimsMenu from "./claims-menu";

const navigation = [
  { href: "/#novedades", label: "Novedades" },
  { href: "/#reivindicaciones", label: "Reivindicaciones" },
  { href: "/#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-[#e8e7df] bg-[#faf9f4]">
      <div className="mx-auto flex min-h-[58px] w-[calc(100%-32px)] max-w-6xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ClaimsMenu />
          <Link
            className="flex items-center gap-2.5 text-[#183f37] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b837]"
            href="/#top"
          >
            <BrandMark compact />
            <span className="flex flex-col leading-tight">
              <strong className="text-[15px] sm:text-base">
                Asamblea de profesorado
              </strong>
              <span className="text-[13px] text-[#65726b]">IES Nicolás Copérnico</span>
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a
              className="text-[15px] font-semibold text-[#294d43] no-underline transition-colors hover:text-[#168341] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b837]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
