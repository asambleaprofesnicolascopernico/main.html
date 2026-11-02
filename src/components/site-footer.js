export default function SiteFooter() {
  return (
    <footer className="bg-[#faf9f4]">
      <div className="mx-auto flex w-[calc(100%-32px)] max-w-6xl flex-col justify-between gap-2 py-5 text-sm text-[#69746e] sm:flex-row sm:items-center">
        <p className="m-0">
          Asamblea de profesorado del IES Nicolás Copérnico · Información para
          las familias
        </p>
        <a
          className="font-semibold text-[#315d50] underline underline-offset-4 hover:text-[#168341] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b837]"
          href="#top"
        >
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
