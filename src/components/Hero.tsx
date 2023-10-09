import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import leftImageHero from "#/static/images/hero/left-hero.png";
import rightImageHero from "#/static/images/hero/right-hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[linear-gradient(247.76deg,_#fdf9fe_15.79%,_#f4ffff_79.56%)] pb-28 pt-40 lg:pb-40">
      <MaxWidthWrapper className="max-w-screen-2xl">
        <h1 className="text-md px-4 text-center font-extrabold lg:text-4xl">
          Your No. 1 Waste Materials Supply & Recycling Partner
        </h1>

        <p className="mx-auto mb-12 mt-6 px-4 text-center text-sm lg:w-4/6">
          Pituku adalah pemasok sampah dan limbah berkualitas dengan layanan
          pengelolaan sampah terintegrasi dan terpercaya. Jadilah bagian dari
          perubahan positif untuk bumi bersama kami!
        </p>

        <div className="relative mx-auto flex w-full max-w-screen-xl justify-center px-5 lg:px-10">
          <div className="flex w-1/2 items-center justify-end lg:w-full">
            <Image
              priority
              src={leftImageHero}
              alt="left-hero"
              className="w-full"
            />
          </div>
          <button
            aria-label="rotate"
            className=" absolute left-1/2 top-1/2 z-[2] w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-white bg-pituku-primary p-0.5 sm:w-14 md:w-16 lg:w-20 lg:border-8"
          >
            <span className="text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m21.224 15.543-.813-1.464-1.748.972.812 1.461c.048.085.082.173.104.264a1.024 1.024 0 0 1-.014.5.988.988 0 0 1-.104.235 1 1 0 0 1-.347.352.978.978 0 0 1-.513.137H14v-2l-4 3 4 3v-2h4.601c.278 0 .552-.037.811-.109a2.948 2.948 0 0 0 1.319-.776c.178-.179.332-.38.456-.593a2.992 2.992 0 0 0 .336-2.215 3.163 3.163 0 0 0-.299-.764zM5.862 11.039l-2.31 4.62a3.06 3.06 0 0 0-.261.755 2.997 2.997 0 0 0 .851 2.735c.178.174.376.326.595.453A3.022 3.022 0 0 0 6.236 20H8v-2H6.236a1.016 1.016 0 0 1-.5-.13.974.974 0 0 1-.353-.349 1 1 0 0 1-.149-.468.933.933 0 0 1 .018-.245c.018-.087.048-.173.089-.256l2.256-4.512 1.599.923L8.598 8 4 9.964l1.862 1.075zm12.736 1.925L19.196 8l-1.638.945-2.843-5.117a2.95 2.95 0 0 0-1.913-1.459 3.227 3.227 0 0 0-.772-.083 3.003 3.003 0 0 0-1.498.433A2.967 2.967 0 0 0 9.41 3.944l-.732 1.464 1.789.895.732-1.465c.045-.09.101-.171.166-.242a.933.933 0 0 1 .443-.27 1.053 1.053 0 0 1 .53-.011.963.963 0 0 1 .63.485l2.858 5.146L14 11l4.598 1.964z"></path>
              </svg>
            </span>
          </button>
          <div className="relative flex w-1/2 items-center lg:w-full">
            <Image
              priority
              src={rightImageHero}
              alt="right-hero"
              className="w-full"
            />
            <button
              aria-label="play video"
              className="absolute -bottom-5 right-8 z-[3] flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-green-600 p-2 shadow-lg md:-bottom-7 md:right-6 md:h-16 md:w-16 md:border-8"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.9876 10.7709L37.2933 18.8179C39.0355 19.7978 40.4783 20.6094 41.5518 21.3499C42.6324 22.0954 43.6625 22.978 44.2253 24.227C45.0199 25.9903 45.0199 28.0098 44.2253 29.7732C43.6625 31.0222 42.6324 31.9048 41.5518 32.6502C40.4783 33.3908 39.0354 34.2024 37.2932 35.1823L22.9876 43.2292C21.3052 44.1756 19.9077 44.9617 18.7506 45.4798C17.5808 46.0034 16.3248 46.4137 14.9918 46.263C13.1014 46.0493 11.3889 45.0478 10.2758 43.5049C9.49098 42.417 9.23279 41.1211 9.11573 39.8448C8.99993 38.5824 8.99996 36.9789 9 35.0486V18.9515C8.99996 17.0212 8.99993 15.4178 9.11573 14.1553C9.23279 12.879 9.49098 11.5831 10.2758 10.4952C11.3889 8.95234 13.1014 7.95081 14.9918 7.73711C16.3248 7.58642 17.5808 7.99671 18.7506 8.52039C19.9077 9.03841 21.3052 9.82456 22.9876 10.7709Z"
                  fill="#F2FAF9"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
