import Link from "next/link";
import { claims } from "../data/site-content";

function ClaimLink({ id, title, summary, icon }) {
  return (
    <li>
      <Link
        className="group flex items-start gap-3 border-b border-[#e5e5de] px-4 py-4 text-[#284b41] no-underline last:border-b-0 hover:bg-[#f2f6f1] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#d4b837]"
        href={`#${id}`}
      >
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e7f0eb] text-lg text-[#28675b]"
        >
          {icon}
        </span>
        <span>
          <strong className="block leading-snug group-hover:text-[#176252]">
            {title} <span aria-hidden="true">→</span>
          </strong>
          <span className="mt-1 block text-sm leading-relaxed text-[#69746e]">
            {summary}
          </span>
        </span>
      </Link>
    </li>
  );
}

export default function ClaimsSection() {
  return (
    <aside aria-labelledby="claims-title" className="scroll-mt-6">
      <div id="reivindicaciones" className="scroll-mt-6">
        <h2
          id="claims-title"
          className="m-0 max-w-[340px] font-serif text-[23px] leading-tight font-bold text-[#202d28]"
        >
          Para entender nuestras reivindicaciones
        </h2>
        <p className="mt-2 mb-4 text-[#66716b]">
          Los cambios que defendemos, explicados con claridad.
        </p>
      </div>
      <ul className="m-0 overflow-hidden rounded-xl border border-[#e0e1da] bg-white p-0 shadow-[0_3px_12px_rgb(23_50_41_/_4%)]">
        {claims.map((claim) => (
          <ClaimLink key={claim.id} {...claim} />
        ))}
      </ul>
    </aside>
  );
}
