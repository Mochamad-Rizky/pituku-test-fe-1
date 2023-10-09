"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  return (
    <section className="pb-16 pt-10">
      <MaxWidthWrapper className="px-5">
        <h2 className="text-md text-center font-bold lg:text-lg">FAQ&apos;s</h2>
        <p className="lg:text-md mt-6 text-center text-sm">
          Punya pertanyaan atau butuh bantuan?
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="mx-auto inline-block rounded-full bg-pituku-primary px-5 py-3 font-bold text-white"
          >
            Kontak Kami
          </Link>
        </div>

        <div className="mt-20 flex flex-col gap-4 md:flex-row md:gap-16">
          <div className="flex w-full flex-col gap-4 md:w-1/2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={cn(
                      "flex w-full border-b  border-gray-200 pb-3 text-left font-semibold ",
                      open && "text-pituku-primary",
                    )}
                  >
                    <span>
                      <svg
                        className={cn(
                          "mr-2 h-5 w-5 transform transition duration-300 ease-in-out",
                          open ? "rotate-180" : "",
                        )}
                        data-accordion-icon="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span>Apa itu Pituku?</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="py-2">
                      <p className="text-sm text-gray-500">
                        Pituku adalah pemasok sampah dan limbah berkualitas
                        dengan layanan pengelolaan sampah terintegrasi dan
                        terpercaya. Pituku menawarkan layanan one-stop waste
                        management yang memudahkan proses pengumpulan,
                        pengangkutan, dan pengolahan sampah secara efektif dan
                        efisien dalam skala besar.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={cn(
                      "flex w-full border-b  border-gray-200 pb-3 text-left font-semibold ",
                      open && "text-pituku-primary",
                    )}
                  >
                    <span>
                      <svg
                        className={cn(
                          "mr-2 h-5 w-5 transform transition duration-300 ease-in-out",
                          open ? "rotate-180" : "",
                        )}
                        data-accordion-icon="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      Apa saka recycled material yang di jual oleh Pituku?
                    </span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="py-2">
                      <p className="text-sm text-gray-500">
                        Pituku menjual berbagai jenis sampah mulai dari plastik,
                        gelas, karung, damar, botol, tutup galon, kaset,
                        alumunium, kuningan, besi, perunggu, tembaga, kertas,
                        kardus, koran, dan lainnya.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={cn(
                      "flex w-full border-b  border-gray-200 pb-3 text-left font-semibold ",
                      open && "text-pituku-primary",
                    )}
                  >
                    <span>
                      <svg
                        className={cn(
                          "mr-2 h-5 w-5 transform transition duration-300 ease-in-out",
                          open ? "rotate-180" : "",
                        )}
                        data-accordion-icon="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span>Apakah pituku memiliki fasilitas daur ulang?</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="py-2">
                      <p className="text-sm text-gray-500">
                        Ya, Pituku memiliki beberapa fasilitas daur ulang
                        seperti pengolahan limbah plastik dan kertas menjadi
                        produk yang dapat digunakan kembali. Selain itu,
                        perusahaan juga menggunakan teknologi dan metode
                        pengolahan yang ramah lingkungan untuk mengurangi dampak
                        limbah terhadap lingkungan.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
          <div className="flex w-full flex-col gap-4 md:w-1/2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={cn(
                      "flex w-full border-b  border-gray-200 pb-3 text-left font-semibold ",
                      open && "text-pituku-primary",
                    )}
                  >
                    <span>
                      <svg
                        className={cn(
                          "mr-2 h-5 w-5 transform transition duration-300 ease-in-out",
                          open ? "rotate-180" : "",
                        )}
                        data-accordion-icon="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span>Apa terdapat minimum order?</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="py-2">
                      <p className="text-sm text-gray-500">
                        Ya terdapat ketentuan jumlah minimum pemesanan sampah
                        dan limbah, yaitu sebesar 50 kg karung kemasan. Hubungi
                        kami untuk informasi lebih lanjut.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={cn(
                      "flex w-full border-b  border-gray-200 pb-3 text-left font-semibold ",
                      open && "text-pituku-primary",
                    )}
                  >
                    <span>
                      <svg
                        className={cn(
                          "mr-2 h-5 w-5 transform transition duration-300 ease-in-out",
                          open ? "rotate-180" : "",
                        )}
                        data-accordion-icon="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      Jasa pengangkutan limbah pituku meliputi daerah mana saja?
                    </span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="py-2">
                      <p className="text-sm text-gray-500">
                        Jasa pengangkutan limbah Pituku meliputi seluruh wilayah
                        di Indonesia
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={cn(
                      "flex w-full border-b  border-gray-200 pb-3 text-left font-semibold ",
                      open && "text-pituku-primary",
                    )}
                  >
                    <span>
                      <svg
                        className={cn(
                          "mr-2 h-5 w-5 transform transition duration-300 ease-in-out",
                          open ? "rotate-180" : "",
                        )}
                        data-accordion-icon="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span>Apakah pituku hanya menjual limbah non B3?</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="py-2">
                      <p className="text-sm text-gray-500">
                        Ya, Pituku hanya menjual limbah Non-B3 seperti limbah
                        kertas, plastik, logam, dan limbah organik lainnya. Cek
                        katalog disini untuk informasi lebih lanjut. Layanan
                        untuk limbah B3 berupa pengangkutan.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
