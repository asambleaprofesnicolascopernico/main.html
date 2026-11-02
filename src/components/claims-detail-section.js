import { claims } from "../data/site-content";

export default function ClaimsDetailSection() {
  return (
    <section
      className="scroll-mt-6 bg-[#f1f1e9] py-10 sm:py-12"
      aria-labelledby="claims-detail-title"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-6xl">
        <div className="mb-6 max-w-2xl">
          <h2
            id="claims-detail-title"
            className="m-0 font-serif text-[29px] leading-tight font-bold text-[#202d28]"
          >
            Qué defendemos
          </h2>
          <p className="mt-2 mb-0 text-[#59665f]">
            Una educación pública de calidad necesita condiciones que permitan
            acompañar a cada estudiante.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {claims.map((claim) => (
            <article
              className="scroll-mt-6 rounded-xl border border-[#e0e1da] bg-white p-5 shadow-[0_3px_12px_rgb(23_50_41_/_4%)]"
              id={claim.id}
              key={claim.id}
            >
              <span
                aria-hidden="true"
                className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[#e7f0eb] text-lg text-[#28675b]"
              >
                {claim.icon}
              </span>
              <h3 className="m-0 text-lg font-bold leading-snug text-[#284b41]">
                {claim.title}
              </h3>
              <p className="mt-2 mb-0 leading-relaxed text-[#59665f]">
                {claim.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
