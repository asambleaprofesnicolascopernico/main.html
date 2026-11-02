import Image from "next/image";
import BrandMark from "./brand-mark";

export default function HeroSection() {
  return (
    <section
      className="bg-[linear-gradient(112deg,#103f39_0%,#155c50_62%,#24705a_100%)] text-white"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto flex min-h-[376px] w-[calc(100%-32px)] max-w-6xl items-center justify-between gap-8 py-12 md:py-14">
        <div className="max-w-[720px]">
          <p className="mb-3 text-xs font-bold tracking-[0.12em] text-[#f0dc62] uppercase sm:text-sm">
            IES Nicolás Copérnico · Asamblea de profesorado
          </p>
          <h1
            id="hero-title"
            className="m-0 max-w-[780px] font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.035em]"
          >
            Información para las familias
          </h1>
          <p className="mt-5 mb-0 max-w-[650px] text-lg leading-relaxed text-[#e2eeea] sm:text-xl">
            Somos profesoras y profesores del instituto. Aquí os contamos qué
            defendemos y cómo podéis apoyarnos.
          </p>
        </div>
        <div className="hidden shrink-0 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl md:block">
          <Image
            className="size-75 rounded-2xl object-cover"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/nchuelga.png`}
            alt="Foto de un grupo de profesoras y profesores del instituto"
            width={2048}
            height={2048}
            sizes="300px"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
