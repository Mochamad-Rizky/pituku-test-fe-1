import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import serviceContainer from "#/static/images/our-services/services-container.png";

export default function OurServices() {
  return (
    <section className="bg-[#F2FAF9] pb-10 pt-16">
      <MaxWidthWrapper className="max-w-screen-2xl px-5 lg:px-10">
        <h2 className="text-md px-4 text-center font-extrabold lg:text-4xl">
          Layanan Pituku
        </h2>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <div className="flex w-full flex-col gap-5 lg:w-1/2 lg:gap-0">
            <div className="mx-auto flex w-full max-w-lg flex-col gap-4 lg:flex-row">
              <div className="order-2 mx-0 mt-5 flex h-full w-full  flex-col-reverse items-center gap-4 self-stretch border-l-pituku-primary lg:order-1 lg:w-auto">
                <hr className="mx-auto inline-block h-20 flex-auto border lg:h-[200px]" />
                <span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="21"
                      stroke="#7ACCC3"
                      strokeWidth="2"
                    ></circle>
                    <circle cx="22" cy="22" r="16" fill="#7ACCC3"></circle>
                  </svg>
                </span>
              </div>
              <div className="order-1 flex flex-col items-center lg:order-2 lg:flex-row lg:items-start lg:gap-4">
                <div className="mb-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pituku-primary p-4 ring-4 ring-white">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.9197 16.6667H35.0803C36.1785 16.6667 37.126 16.6667 37.9063 16.7304C38.7299 16.7977 39.5492 16.9463 40.3374 17.348C41.5135 17.9472 42.4696 18.9033 43.0688 20.0793C43.4704 20.8676 43.619 21.6868 43.6863 22.5104C43.7501 23.2908 43.75 24.2382 43.75 25.3364V30.506C43.75 32.7638 43.75 34.585 43.6296 36.0597C43.5055 37.5782 43.2434 38.9119 42.6147 40.1458C41.616 42.1058 40.0224 43.6994 38.0624 44.6981C36.8285 45.3268 35.4947 45.5889 33.9763 45.713C32.5015 45.8335 30.6804 45.8334 28.4225 45.8334H21.5775C19.3196 45.8334 17.4985 45.8335 16.0237 45.713C14.5053 45.5889 13.1715 45.3268 11.9376 44.6981C9.97758 43.6994 8.38403 42.1058 7.38535 40.1458C6.75663 38.9119 6.49452 37.5782 6.37046 36.0597C6.24997 34.585 6.24998 32.7638 6.25 30.5059L6.25 25.3365C6.24996 24.2382 6.24993 23.2908 6.31369 22.5104C6.38098 21.6868 6.52956 20.8676 6.93121 20.0793C7.53042 18.9033 8.48655 17.9472 9.66256 17.348C10.4509 16.9463 11.2701 16.7977 12.0937 16.7304C12.8741 16.6667 13.8215 16.6667 14.9197 16.6667Z"
                        fill="#F2FAF9"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.6666 12.5001C16.6666 7.89771 20.3976 4.16675 25 4.16675C29.6023 4.16675 33.3333 7.89771 33.3333 12.5001V22.8486C33.3333 23.9991 32.4006 24.9319 31.25 24.9319C30.0994 24.9319 29.1666 23.9991 29.1666 22.8486V12.5001C29.1666 10.1989 27.3011 8.33342 25 8.33342C22.6988 8.33342 20.8333 10.1989 20.8333 12.5001V22.9167C20.8333 24.0673 19.9006 25.0001 18.75 25.0001C17.5994 25.0001 16.6666 24.0673 16.6666 22.9167V12.5001Z"
                        fill="#F2FAF9"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="mb-4 text-center font-bold lg:text-left">
                    Recyled Waste Materials Supply
                  </h3>
                  <p className="mt-3 text-justify text-sm">
                    Kami menjual berbagai sampah dan limbah Non-B3 berkualitas
                    yang dapat digunakan sebagai bahan baku pabrik manufaktur di
                    berbagai industri dengan harga kompetitif.
                  </p>
                  <p className="mt-3 text-justify text-sm">
                    Berbagai jenis sampah dan limbah Non-B3 yang kami jual
                    seperti plastik, logam, kertas, kaca, dalam bentuk bahan
                    mentah maupun sudah diproses. Cek katalog
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-lg flex-col gap-4 lg:flex-row">
              <div className="order-1 mx-0 mt-5 hidden h-full w-full flex-col-reverse items-center  gap-4 self-stretch border-l-pituku-primary lg:flex lg:w-auto">
                <span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="21"
                      stroke="#62A36C"
                      strokeWidth="2"
                    ></circle>
                    <circle cx="22" cy="22" r="16" fill="#62A36C"></circle>
                  </svg>
                </span>
              </div>
              <div className="order-1 flex flex-col items-center lg:order-2 lg:flex-row lg:items-start lg:gap-4">
                <div className="mb-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#62A36C] p-4 ring-4 ring-white">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M25 4.16675C19.2471 4.16675 14.5834 8.83045 14.5834 14.5834C14.5834 20.3364 19.2471 25.0001 25 25.0001C30.753 25.0001 35.4167 20.3364 35.4167 14.5834C35.4167 8.83045 30.753 4.16675 25 4.16675Z"
                        fill="#D6EFDA"
                      ></path>
                      <path
                        d="M25.0001 27.0833C32.4689 27.0833 38.9178 31.4502 41.9326 37.7701C42.5937 39.1559 42.9243 39.8489 42.666 41.4529C42.4911 42.5388 41.39 44.2841 40.4852 44.9095C39.1486 45.8333 37.9047 45.8332 35.4167 45.8332H14.5834C12.0954 45.8332 10.8515 45.8333 9.5149 44.9095C8.6101 44.2841 7.509 42.5388 7.33414 41.4529C7.07583 39.8489 7.40638 39.1559 8.06748 37.7701C11.0823 31.4502 17.5312 27.0833 25.0001 27.0833Z"
                        fill="#D6EFDA"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="mb-4 text-center font-bold lg:text-left">
                    Integrated waste Management Solution
                  </h3>
                  <p className="mt-3 text-justify text-sm">
                    Kami menyediakan layanan pengelolaan sampah terintegrasi
                    yang memudahkan proses pengumpulan, pengangkutan, dan
                    pengolahan limbah B3 secara efektif dalam skala besar. Kami
                    memastikan bahwa limbah diangkut dengan aman dan sesuai
                    dengan peraturan pemerintah
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center px-5 lg:w-1/2 lg:px-0">
            <Image
              src={serviceContainer}
              alt="service container factory"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
