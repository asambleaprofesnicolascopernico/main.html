import Link from "next/link";

const updates = [
  {
    eyebrow: "Guía práctica",
    title: "Cómo apoyar las reivindicaciones desde casa",
    description:
      "El registro telemático permite enviar una solicitud individual a la administración. Hemos reunido instrucciones sencillas y los textos que podéis copiar en cada apartado.",
    href: "/instrucciones",
    action: "Consultar los pasos",
  },
  {
    eyebrow: "Educación pública",
    title: "Una educación con tiempo y recursos para cada estudiante",
    description:
      "Ratios adecuadas, equipos educativos suficientes y apoyos a la diversidad son condiciones necesarias para atender al alumnado.",
    href: "/#reivindicaciones",
    action: "Ver qué defendemos",
  },
];

function UpdateCard({ eyebrow, title, description, href, action }) {
  return (
    <article className="rounded-2xl border border-[#e2e3dc] bg-white p-5 shadow-[0_3px_12px_rgb(23_50_41_/_4%)] sm:p-6">
      <p className="mb-2 text-xs font-bold tracking-[0.08em] text-[#6b6952] uppercase">
        {eyebrow}
      </p>
      <h3 className="m-0 font-serif text-[23px] leading-tight font-bold text-[#202d28]">
        {title}
      </h3>
      <p className="mt-3 mb-4 leading-relaxed text-[#48564f]">{description}</p>
      <Link
        className="font-bold text-[#176252] underline decoration-[#c4d5ca] decoration-2 underline-offset-4 hover:text-[#0b3c34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b837]"
        href={href}
      >
        {action} →
      </Link>
    </article>
  );
}

export default function NewsSection() {
  return (
    <section id="novedades" aria-labelledby="news-title" className="scroll-mt-6">
      <div className="mb-5">
        <h2
          id="news-title"
          className="m-0 font-serif text-[29px] leading-tight font-bold text-[#202d28]"
        >
          Novedades
        </h2>
        <p className="mt-1 mb-0 text-[#66716b]">
          Información útil para las familias.
        </p>
      </div>
      <div className="grid gap-4">
        {updates.map((update) => (
          <UpdateCard key={update.title} {...update} />
        ))}
      </div>
    </section>
  );
}
