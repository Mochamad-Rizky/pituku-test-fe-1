import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import News from "@/components/News";
import { Suspense } from "react";
import SkeletonNews from "@/components/skeleton/SkeletonNews";
import Link from "next/link";

export default function UpToDateNews() {
  return (
    <section className="pb-20 pt-10">
      <MaxWidthWrapper className="max-w-screen-2xl px-5">
        <h2 className="text-md mb-20 px-4 text-center font-extrabold lg:text-4xl">
          Berita Terbaru
        </h2>
        <div className="mt-10">
          <Suspense fallback={<SkeletonNews />}>
            <News />
          </Suspense>
        </div>
        <div className="mt-10 flex justify-center lg:mt-20">
          <Link
            href="/"
            className="mx-auto inline-block rounded-full bg-pituku-primary px-5 py-3 text-white"
          >
            Selengkapnya
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
