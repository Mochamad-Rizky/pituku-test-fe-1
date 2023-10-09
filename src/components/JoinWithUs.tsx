"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function JoinWithUs() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className={`bg-[#62A16C] ${
        inView ? "bg-join-bg" : ""
      } bg-cover bg-top bg-no-repeat`}
    >
      <MaxWidthWrapper className=" max-w-screen-2xl px-5 py-16 lg:py-32">
        <h2 className="text-md mb-8 text-center font-extrabold text-white lg:text-4xl">
          Bergabung Menjadi Bagian Pituku
        </h2>
        <p className="text- texts-[#ffffff9e] mx-auto text-center text-sm leading-8 text-white/90 lg:w-1/2 lg:text-base">
          Bergabung bersama kami dan jadilah salah satu bagian dari perubahan
          positif untuk bumi. Sampah bukanlah akhir dari cerita, melainkan awal
          dari kisah baru yang penuh harapan.
        </p>

        <div className="mt-10 flex justify-center lg:mt-20">
          <Link
            href="/"
            className="mx-auto inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-black"
          >
            Daftar
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
