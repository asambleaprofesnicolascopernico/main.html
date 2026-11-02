import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "../data/site-content";

function NewsArticle({ article }) {
  const { dateTime, dateLabel, badges, title, description, actions, poster } =
    article;

  return (
    <article className="rounded-2xl border border-[#e2e3dc] bg-white p-5 shadow-[0_3px_12px_rgb(23_50_41_/_4%)] sm:p-6">
      <p className="mb-3 flex flex-wrap items-center gap-2 text-sm text-[#59665f]">
        <time dateTime={dateTime}>{dateLabel}</time>
        {badges.map((badge) => (
          <span
            className="rounded-full bg-[#e7f0eb] px-2.5 py-1 text-xs font-bold text-[#28675b]"
            key={badge}
          >
            {badge}
          </span>
        ))}
      </p>

      <h3 className="m-0 font-serif text-[23px] leading-tight font-bold text-[#202d28]">
        {title}
      </h3>
      <p className="mt-3 mb-5 leading-relaxed text-[#48564f]">{description}</p>

      <div
        className={`grid gap-6 ${
          poster
            ? "lg:grid-cols-[minmax(0,1.35fr)_minmax(180px,0.65fr)]"
            : ""
        }`}
      >
        {actions.length > 0 && (
          <ol className="m-0 list-none space-y-4 p-0">
            {actions.map((action) => (
              <li
                className="flex gap-3 border-l-2 border-[#c4d5ca] pl-3"
                key={`${action.time}-${action.title}`}
              >
                <span className="w-14 shrink-0 pt-0.5 text-sm font-bold text-[#176252]">
                  {action.time}
                </span>
                <div>
                  <h4 className="m-0 text-sm leading-snug font-bold text-[#284b41]">
                    {action.title}
                  </h4>
                  <p className="mt-1 mb-0 text-sm leading-relaxed text-[#59665f]">
                    {action.location}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}

        {poster && (
          <figure className="m-0">
            {poster.src ? (
              <a
                className="relative block aspect-[1024/1448] overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b837]"
                href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${poster.src}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`${poster.alt} Abrir imagen en tamaño completo`}
              >
                <Image
                  className="object-contain"
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${poster.src}`}
                  alt={poster.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  unoptimized
                />
              </a>
            ) : (
              <div
                aria-label="Espacio reservado para el cartel"
                className="flex aspect-[1024/1448] items-center justify-center rounded-xl border border-dashed border-[#b8c8bc] bg-[#f2f7f3] p-5 text-center text-sm text-[#59665f]"
              >
                Añade el cartel a la carpeta public y escribe su ruta en
                poster.src.
              </div>
            )}
            <figcaption className="mt-2 text-center text-xs leading-relaxed text-[#66716b]">
              {poster.caption}
            </figcaption>
          </figure>
        )}
      </div>

      <p className="mt-5 mb-0 border-t border-[#e8ebe5] pt-4 text-sm leading-relaxed text-[#48564f]">
        ¿Tienes dudas sobre los recorridos o cómo participar?{" "}
        <Link
          className="font-bold text-[#176252] underline decoration-[#c4d5ca] decoration-2 underline-offset-4 hover:text-[#0b3c34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b837]"
          href="#contacto"
        >
          Escríbenos
        </Link>
        .
      </p>
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
        {newsArticles.map((article) => (
          <NewsArticle key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
}
