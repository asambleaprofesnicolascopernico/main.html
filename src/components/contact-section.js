import CopyButton from "./copy-button";

export default function ContactSection() {
  const email = "ejemplo@ejemplo.com";

  return (
    <section
      id="contacto"
      className="scroll-mt-4 bg-[#e9efea] py-10 sm:py-12"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto flex w-[calc(100%-32px)] max-w-6xl flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-8">
        <div className="max-w-2xl">
          <h2
            id="contact-title"
            className="m-0 font-serif text-[29px] leading-tight font-bold text-[#202d28]"
          >
            Contacto
          </h2>
          <p className="mt-2 mb-0 text-[#4c5c54]">
            Si tenéis dudas, queréis colaborar o necesitáis más información, escribidnos. Estaremos encantadas de atenderos.
          </p>
        </div>
        <div className="w-fit max-w-full rounded-xl border border-[#e0e1da] bg-white p-3 text-center shadow-sm sm:p-4">
          <p className="mb-2 break-all text-sm font-semibold text-[#40564c]">
            asambleaprofesnicolascopernico@gmail.com
          </p>
          <div className="mt-3 flex flex-wrap items-start justify-center gap-3">
            <a
              className="inline-flex min-h-10 min-w-40 items-center justify-center rounded-md bg-[#124c42] px-4 py-2 text-sm font-bold text-white no-underline transition-colors hover:bg-[#0b3c34] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b837]"
              href={`mailto:${email}`}
            >
              Escribir un correo
            </a>
            <CopyButton text={email} label="Copiar dirección" size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}
