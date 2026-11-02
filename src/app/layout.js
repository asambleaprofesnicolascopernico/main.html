import "./globals.css";

export const metadata = {
  title: "Información para las familias | IES Nicolás Copérnico",
  description:
    "Información de la Asamblea de Profes del IES Nicolás Copérnico sobre la defensa de la educación pública y cómo apoyar sus reivindicaciones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#faf9f4] font-sans text-[16px] leading-[1.6] text-[#24312d] antialiased">
        {children}
      </body>
    </html>
  );
}
