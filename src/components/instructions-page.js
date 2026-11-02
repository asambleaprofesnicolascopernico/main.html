import Link from "next/link";
import CopyButton from "./copy-button";

const requestFields = [
  {
    title: "1. Asunto",
    text: "Apoyo a las reivindicaciones del profesorado",
  },
  {
    title: "2. Expone",
    text: "1. Que las reivindicaciones planteadas por el profesorado afectan no solo a sus condiciones laborales, sino también a la calidad de la educación y a la atención que recibe el alumnado.\n\n2. Que consideramos especialmente necesarias unas ratios adecuadas, plantillas suficientes y mayores recursos para la atención a la diversidad, que permitan una atención educativa individualizada.\n\n3. Que es necesario garantizar una red pública suficiente, con centros e instalaciones adecuados y los recursos necesarios para atender la demanda educativa.",
  },
  {
    title: "3. Solicita",
    text: "1. Que la Consejería mantenga una negociación efectiva con el Comité de Huelga sobre sus reivindicaciones.\n\n2. Que se adopten medidas para reducir las ratios y aumentar las plantillas y recursos de los centros públicos, especialmente los destinados a la atención a la diversidad.\n\n3. Que se garantice una red pública suficiente y adecuadamente dotada, mediante la construcción de los centros necesarios y la mejora y mantenimiento de los existentes.",
  },
  {
    title: "4. Organismo: Consejería",
    text: "Consejería de Educación Ciencia y Universidades",
    note: "Selecciona o pega esta opción en el primer desplegable del formulario.",
  },
  {
    title: "5. Organismo: Dirección General / Organismo",
    text: "Dirección de Área Territorial Madrid Capital",
    note: "Pega este texto en el campo específico de Dirección General / Organismo.",
  },
];

function CopyableField({ title, text, note }) {
  const fieldId = title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");

  return (
    <section
      className="rounded-xl border border-[#dce4dd] bg-white p-4 shadow-sm sm:p-5"
      aria-labelledby={`field-${fieldId}`}
    >
      <div className="mb-3 flex items-start justify-between gap-3 sm:items-center">
        <h2
          id={`field-${fieldId}`}
          className="m-0 text-[15px] leading-snug font-bold text-[#315d50]"
        >
          {title}
        </h2>
        <CopyButton text={text} />
      </div>
      <p className="m-0 [overflow-wrap:anywhere] rounded-lg border border-[#e1ebe4] bg-[#f2f7f3] px-3.5 py-3 whitespace-pre-line">
        {text}
      </p>
      {note && (
        <p className="mt-2 mb-0 text-sm text-[#5d6e65]">{note}</p>
      )}
    </section>
  );
}

export default function InstructionsPage() {
  return (
    <>
      <header className="border-b border-[#e2e8e2] bg-white">
        <div className="mx-auto flex w-[calc(100%-32px)] max-w-3xl items-center justify-between gap-4 py-4">
          <Link
            className="font-semibold text-[#245547] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b837]"
            href="/"
          >
            ← Volver a portada
          </Link>
          <span className="hidden text-sm text-[#68756d] sm:inline">
            Asamblea de Profes · IES Nicolás Copérnico
          </span>
        </div>
      </header>
      <main
        className="mx-auto w-[calc(100%-24px)] max-w-3xl py-8 sm:w-[calc(100%-32px)] sm:py-12"
        id="contenido"
      >
        <header className="mb-7 text-center sm:mb-9">
          <p className="mb-2 text-xs font-bold tracking-[0.12em] text-[#36765a] uppercase">
            Cómo apoyar desde casa
          </p>
          <h1 className="m-0 font-serif text-[clamp(2rem,6vw,3rem)] leading-tight font-bold text-[#173f36]">
            Presenta tu escrito de apoyo
          </h1>
          <p className="mx-auto mt-3 mb-0 max-w-2xl text-[#53645b]">
            Guía para registrar telemáticamente una solicitud a favor de la
            educación pública. Puedes copiar cada texto y pegarlo en el campo
            correspondiente.
          </p>
        </header>

        <section
          className="mb-4 rounded-xl border border-[#dce4dd] border-l-4 border-l-[#187b45] bg-white p-4 shadow-sm sm:p-5"
        >
          <p className="m-0">
            <strong>¿Por qué este escrito?</strong> Las familias que deseáis
            respaldar la mejora de la educación pública podéis registrar de
            forma oficial y gratuita una solicitud ante la administración. Cada
            escrito individual presentado en el registro telemático genera
            constancia administrativa formal exigiendo a la Consejería
            negociación, bajada de ratios y dotación de recursos para nuestros
            centros.
          </p>
        </section>

        <section className="mb-4 rounded-xl border border-[#dce4dd] bg-white p-4 shadow-sm sm:p-5">
          <h2 className="mt-0 mb-2 text-base font-bold text-[#28674f]">
            📋 Pasos para la presentación telemática
          </h2>
          <ol className="m-0 list-decimal space-y-1.5 pl-5">
            <li>
              Pulsa el botón verde para abrir el trámite oficial en la sede
              electrónica.
            </li>
            <li>
              Identifícate con tu certificado digital, Cl@ve o DNI electrónico.
            </li>
            <li>
              Completa tus datos personales y pega cada bloque usando los
              botones <strong>Copiar</strong>.
            </li>
            <li>
              Si dispones de ella, adjunta la tabla reivindicativa en PDF.
            </li>
            <li>
              Firma la solicitud y descarga el justificante oficial con
              registro de entrada.
            </li>
          </ol>
        </section>

        <section className="mb-5 rounded-xl border border-[#cbe3d0] bg-[#e8f5e9] p-4 text-center sm:p-5">
          <p className="mt-0 mb-3">
            <strong>Paso 1:</strong> Abre el registro telemático de la Comunidad
            de Madrid.
          </p>
          <a
            className="flex min-h-13.5 items-center justify-center gap-1.5 rounded-lg bg-[#187b45] px-5 py-3 font-bold text-white no-underline transition-colors hover:bg-[#11683a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b837]"
            href="https://sede.comunidad.madrid/prestacion-social/formulario-solicitud-generica"
            target="_blank"
            rel="noreferrer"
          >
            Abrir Registro Telemático CAM <span aria-hidden="true">↗</span>
          </a>
        </section>

        <div className="grid gap-4">
          {requestFields.map((field) => (
            <CopyableField key={field.title} {...field} />
          ))}
        </div>

        <section className="mt-4 rounded-xl border border-[#dce4dd] bg-white p-4 shadow-sm sm:p-5">
          <h2 className="mt-0 mb-2 text-base font-bold text-[#28674f]">
            6. Documentación adicional (opcional)
          </h2>
          <p className="m-0">
            En el apartado de documentación del formulario oficial puedes
            adjuntar la tabla de reivindicaciones registrada por los
            convocantes, si la tienes disponible.
          </p>
        </section>
      </main>
    </>
  );
}
