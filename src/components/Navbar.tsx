"use client";

import Image from "next/image";
import pitukuLogo from "#/static/images/pitukuLogo.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";
import ActiveLink from "@/components/ui/ActiveLink";

const locales = [
  { id: "id", name: "ID", icon: "🇮🇩" },
  { id: "en", name: "English", icon: "🇬🇧" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocales, setSelectedLocales] = useState(locales[0]);

  return (
    <header className="bg-white-700/80 fixed z-10 w-full backdrop-blur-md">
      <MaxWidthWrapper className="flex max-w-screen-2xl justify-between py-6">
        <div className="flex items-center">
          <Image
            className="ml-6"
            src={pitukuLogo}
            alt="pituku logo"
            priority={true}
          />
        </div>
        <div
          className={cn(
            "duration- visible fixed top-0 mx-0 flex w-full !transition-none lg:visible lg:static lg:flex",
            !isMenuOpen &&
              "invisible transition-[visibility] !duration-[1500ms]",
          )}
        >
          <div
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="h-screen w-[100px] flex-grow bg-black/50 lg:hidden"
          ></div>
          <div className="h-screen w-full max-w-sm bg-black/50 lg:static lg:mr-6 lg:h-auto lg:max-w-none lg:bg-transparent">
            <nav
              className={cn(
                "lg:auto flex h-full w-full transform flex-col bg-white px-6 py-2 text-white transition-[transform] duration-[1000ms] lg:translate-x-0 lg:flex-row lg:items-center lg:justify-center lg:bg-transparent lg:py-0 lg:transition-none",
                isMenuOpen ? "translate-x-0" : "translate-x-full",
              )}
            >
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="relative -left-[70px] top-[30px] lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <Image className="lg:hidden" src={pitukuLogo} alt="pituku logo" />
              <ul className="mt-10 flex flex-col gap-5 text-black lg:mt-0 lg:flex-grow lg:flex-row lg:justify-center lg:gap-0 lg:divide-x lg:[&_li]:px-2 xl:[&_li]:px-5">
                <li>
                  <ActiveLink
                    activeClassName="font-bold text-pituku-primary "
                    className={cn(
                      "hover:text-pituku-primary text-black transition-[color] duration-300 lg:visible",
                      !isMenuOpen && "invisible",
                    )}
                    href="/"
                  >
                    Beranda
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    activeClassName="font-bold text-pituku-primary "
                    className={cn(
                      "hover:text-pituku-primary text-black transition-[color] duration-300 lg:visible",
                      !isMenuOpen && "invisible",
                    )}
                    href="/about-us"
                  >
                    Tentang Kami
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    activeClassName="font-bold text-pituku-primary lg:visible"
                    className={cn(
                      "hover:text-pituku-primary transition-[color] duration-300 lg:visible",
                      !isMenuOpen && "invisible",
                    )}
                    href="/fasilitas"
                  >
                    Fasilitas
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    activeClassName="font-bold text-pituku-primary lg:visible"
                    className={cn(
                      "hover:text-pituku-primary transition-[color] duration-300 lg:visible",
                      !isMenuOpen && "invisible",
                    )}
                    href="/catalogue"
                  >
                    Katalog
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    activeClassName="font-bold text-pituku-primary lg:visible"
                    className={cn(
                      "hover:text-pituku-primary transition-[color] duration-300 lg:visible",
                      !isMenuOpen && "invisible",
                    )}
                    href="/article"
                  >
                    Artikel
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    activeClassName="font-bold text-pituku-primary lg:visible"
                    className={cn(
                      "hover:text-pituku-primary transition-[color] duration-300 lg:visible",
                      !isMenuOpen && "invisible",
                    )}
                    href="/contact"
                  >
                    Kontak
                  </ActiveLink>
                </li>
              </ul>
              <div className="flex flex-col gap-3 lg:ml-auto lg:flex-row xl:gap-5">
                <Listbox value={selectedLocales} onChange={setSelectedLocales}>
                  <div className="relative mt-7 lg:mt-0 lg:self-center">
                    <Listbox.Button className="flex w-20 items-center gap-2 text-black lg:justify-end">
                      <span className="text-2xl">{selectedLocales.icon}</span>
                      {selectedLocales.name}
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Listbox.Options className="absolute top-[40px] w-40 overflow-hidden rounded-md border bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {locales.map((locale) => (
                          <Listbox.Option
                            className="flex w-full items-center gap-2 p-2 hover:cursor-pointer hover:bg-gray-200"
                            key={locale.id}
                            value={locale}
                          >
                            <span className="text-2xl">{locale.icon}</span>
                            {locale.name}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
                <div>
                  <Link
                    href="/"
                    className={cn(
                      "hover:text-pituku-primary inline-block py-3 pr-0 text-left text-black transition-[color] duration-300 lg:visible xl:pr-3",
                      !isMenuOpen && "invisible",
                    )}
                  >
                    Masuk
                  </Link>
                </div>
                <div>
                  <Link
                    href="/"
                    className={cn(
                      "bg-pituku-primary inline-block rounded-full px-7 py-2.5 text-center text-white transition-[background-color] duration-300 hover:bg-gray-400 lg:visible xl:px-12",
                      !isMenuOpen && "invisible",
                    )}
                  >
                    Daftar
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <button
          className="mr-6 block lg:hidden"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.10403 6.21417C3.10112 5.82298 3.41588 5.5035 3.80707 5.50058L15.1401 5.41614C15.5313 5.41322 15.8508 5.72798 15.8537 6.11918C15.8566 6.51037 15.5418 6.82985 15.1506 6.83277L3.81762 6.91721C3.42643 6.92012 3.10695 6.60536 3.10403 6.21417ZM3.12514 9.04743C3.12223 8.65624 3.43699 8.33675 3.82818 8.33384L15.1612 8.24939C15.5524 8.24648 15.8719 8.56124 15.8748 8.95243C15.8777 9.34362 15.5629 9.66311 15.1718 9.66602L3.83873 9.75046C3.44754 9.75338 3.12806 9.43862 3.12514 9.04743ZM3.14625 11.8807C3.14334 11.4895 3.4581 11.17 3.84929 11.1671L9.5158 11.1249C9.90699 11.122 10.2265 11.4367 10.2294 11.8279C10.2323 12.2191 9.91755 12.5386 9.52635 12.5415L3.85985 12.5837C3.46865 12.5866 3.14917 12.2719 3.14625 11.8807Z"
              fill="#131A29"
            ></path>
          </svg>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}
