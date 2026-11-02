"use client";

import { useEffect, useState } from "react";
import { claims } from "../data/site-content";

export default function ClaimsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <button
        className="inline-flex size-10 items-center justify-center rounded-md border border-[#d6ddd8] bg-[#f0f1ec] text-[#234c43] transition-colors hover:bg-[#e6ebe5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b837]"
        type="button"
        aria-label="Abrir menú de reivindicaciones"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <svg
          aria-hidden="true"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-[#102c28]/55 p-3 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            className="flex h-full w-full max-w-md flex-col overflow-y-auto rounded-xl bg-[#faf9f4] p-5 shadow-2xl sm:p-7"
            role="dialog"
            aria-modal="true"
            aria-labelledby="claims-menu-title"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2
                id="claims-menu-title"
                className="m-0 font-serif text-2xl font-bold text-[#183f37]"
              >
                Nuestras reivindicaciones
              </h2>
              <button
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-2xl text-[#31554b] hover:bg-[#e8eee8] focus-visible:outline-2 focus-visible:outline-[#d4b837]"
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>
            <ul className="m-0 grid list-none gap-2 p-0">
              {claims.map((claim) => (
                <li key={claim.id}>
                  <a
                    className="block rounded-lg border border-[#e1e3dc] bg-white p-4 text-[#254a40] no-underline transition-colors hover:border-[#9db9a8] hover:bg-[#f1f6f1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b837]"
                    href={`/#${claim.id}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <strong className="block leading-snug">{claim.title} →</strong>
                    <span className="mt-1 block text-sm leading-relaxed text-[#65726b]">
                      {claim.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="mt-auto rounded-full bg-[#124c42] px-5 py-3 text-center font-semibold text-white no-underline hover:bg-[#0b3c34] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b837]"
              href="/instrucciones"
              onClick={() => setIsOpen(false)}
            >
              Cómo apoyar desde casa →
            </a>
          </section>
        </div>
      )}
    </>
  );
}
