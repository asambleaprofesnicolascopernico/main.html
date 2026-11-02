import Link from "next/link";

export default function SupportCallout() {
  return (
    <section
      className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#e4e3db] border-l-[5px] border-l-[#e7d440] bg-white p-6 shadow-[0_12px_30px_rgb(19_50_41_/_8%)] sm:flex-row sm:items-center sm:px-8 sm:py-7"
      aria-labelledby="support-title"
    >
      <div className="max-w-[760px]">
        <p className="mb-1 text-xs font-bold tracking-[0.1em] text-[#28675b] uppercase">
          Cómo apoyar desde casa
        </p>
        <h2
          id="support-title"
          className="m-0 font-serif text-2xl leading-tight font-bold text-[#202d28] sm:text-[27px]"
        >
          Apoya nuestras reivindicaciones con un escrito
        </h2>
        <p className="mt-2 mb-0 text-[16px] leading-relaxed text-[#35413c]">
          Las familias podéis dirigir un «expone / solicita» a la Administración
          educativa de la Comunidad de Madrid para respaldar estas propuestas.
          Aquí os explicamos cómo hacerlo y cómo enviarlo.
        </p>
      </div>
      <Link
        className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#124c42] px-6 py-3 font-bold text-white no-underline transition-colors hover:bg-[#0b3c34] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b837]"
        href="/instrucciones"
      >
        Ver las instrucciones <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
