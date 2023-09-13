import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent p-4">
      <div className="bg-white rounded-lg w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Lotodados™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              href="/estatisticas"
              className="mr-4 hover:underline md:mr-6 "
            >
              Estátisticas
            </Link>
          </li>
          <li>
            <a href="#sobre" className="mr-4 hover:underline md:mr-6">
              Sobre
            </a>
          </li>
          <li>
            <a
              href="https://loterias.caixa.gov.br/"
              className="mr-4 hover:underline md:mr-6"
            >
              Caixa
            </a>
          </li>
          <li>
            <a
              href="https://adriel45dev.github.io/"
              className="hover:underline"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
