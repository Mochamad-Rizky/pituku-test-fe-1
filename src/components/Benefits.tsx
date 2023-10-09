"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function Benefits() {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref}
      className={cn(
        "bg-green-600 py-24",
        inView && "bg-benefits-bg bg-cover object-contain",
      )}
    >
      <MaxWidthWrapper className="max-w-screen-2xl ">
        <h2 className="w-full px-3 text-center text-lg font-extrabold leading-normal text-white lg:ml-auto lg:mr-[15%] lg:max-w-md lg:text-left lg:text-[3rem]">
          Keuntungan Menggunakan Platform Pituku
        </h2>
      </MaxWidthWrapper>
    </section>
  );
}
