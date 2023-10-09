import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import exposure1 from "#/static/images/exposure/1.jpg";
import exposure2 from "#/static/images/exposure/2.jpg";
import exposure3 from "#/static/images/exposure/3.jpg";
import exposure4 from "#/static/images/exposure/4.jpg";
import exposure5 from "#/static/images/exposure/5.jpg";
import exposure6 from "#/static/images/exposure/6.jpg";
import exposure7 from "#/static/images/exposure/7.jpg";
import exposure8 from "#/static/images/exposure/8.jpg";
import exposure9 from "#/static/images/exposure/9.jpg";
import Image from "next/image";

export default function Exposure() {
  return (
    <section className="pb-20 pt-10 lg:pb-32">
      <MaxWidthWrapper className="max-w-screen-2xl px-5">
        <h2 className="text-md mb-10 px-4 text-center font-extrabold lg:mb-20 lg:text-4xl">
          Media Exposure
        </h2>

        <div className="grid grid-cols-1 items-center justify-center gap-8 px-7 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="duration-400 m-auto cursor-pointer transition hover:scale-90 md:col-span-2">
            <Image
              className="rounded-xl shadow-lg"
              src={exposure1}
              alt="exposure"
            />
          </div>
          <div className="duration-400 m-auto cursor-pointer gap-16 transition hover:scale-90">
            <Image
              className="rounded-xl shadow-lg"
              src={exposure2}
              alt="exposure"
            />
          </div>
          <div className="duration-400 m-auto cursor-pointer transition hover:scale-90">
            <Image
              className="rounded-xl shadow-lg"
              src={exposure3}
              alt="exposure"
            />
          </div>
          <div className="duration-400 m-auto cursor-pointer transition hover:scale-90">
            <Image
              className="rounded-xl shadow-lg"
              src={exposure4}
              alt="exposure"
            />
          </div>
          <div className="duration-400 m-auto cursor-pointer transition hover:scale-90">
            <Image
              className="rounded-xl shadow-lg"
              src={exposure5}
              alt="exposure"
            />
          </div>
          <div className="duration-400 m-auto hidden cursor-pointer transition hover:scale-90 lg:block">
            <Image
              className="rounded-xl shadow-lg"
              src={exposure6}
              alt="exposure"
            />
          </div>
          <div className="duration-400 m-auto hidden cursor-pointer transition hover:scale-90 lg:block">
            <Image
              className="rounded-xl shadow-lg"
              src={exposure7}
              alt="exposure"
            />
          </div>
          <div className="duration-400 m-auto hidden cursor-pointer transition hover:scale-90 lg:block">
            <Image
              className="rounded-xl shadow-lg"
              src={exposure8}
              alt="exposure"
            />
          </div>
          <div className="duration-400 m-auto hidden cursor-pointer transition hover:scale-90 lg:block">
            <Image
              className="rounded-xl shadow-lg"
              src={exposure9}
              alt="exposure"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
