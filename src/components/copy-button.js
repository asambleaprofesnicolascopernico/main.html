"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Copiar", size = "default" }) {
  const [status, setStatus] = useState("");
  const isLarge = size === "large";
  const buttonSize =
    isLarge
      ? "min-h-10 min-w-40 rounded-md px-4 py-2 text-sm"
      : "min-w-[70px] rounded-md px-3 py-1.5 text-[13px]";

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copiado");
    } catch {
      setStatus("No se pudo copiar. Selecciona el texto y cópialo manualmente.");
    }
  }

  return (
    <div
      className={`flex min-w-max flex-col ${
        isLarge ? "items-center" : "items-end"
      }`}
    >
      <button
        className={`${buttonSize} border-0 bg-[#174b35] font-bold text-white transition-colors duration-150 hover:bg-[#246246] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6a93a] motion-reduce:transition-none`}
        type="button"
        onClick={copyText}
      >
        {label}
      </button>
      <span
        className={`max-w-[250px] text-[11px] leading-[1.3] text-[#35784d] ${
          isLarge ? "text-center" : "text-right"
        }`}
        role="status"
        aria-live="polite"
      >
        {status}
      </span>
    </div>
  );
}
