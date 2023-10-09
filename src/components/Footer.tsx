import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import pitukuLogo from "#/static/images/pitukuLogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#D6EFDA] pb-10 pt-20">
      <MaxWidthWrapper className="flex max-w-screen-2xl flex-col gap-10 px-5 lg:flex-row">
        <div className="flex w-full flex-col items-center lg:w-1/2 lg:items-start">
          <div className="mb-3">
            <Image className="w-[150px]" src={pitukuLogo} alt="pituku" />
          </div>
          <h3 className="mb-2 text-center font-medium lg:text-left">
            PT Pituku Cordova Internasional
          </h3>
          <p className="text-center text-sm lg:max-w-md lg:text-left">
            Loka65 Jl. Anggrek Ungu No.C-07, Rw. Buntu, Kec. Serpong, Kota
            Tangerang Selatan, Banten 15310
          </p>

          <div className="mt-8">
            <div className="flex flex-col items-center gap-2 md:gap-0 lg:flex-row lg:items-start lg:gap-0">
              <span className="lg:inline-block lg:w-[100px]">Phone</span>
              <span>0822-4633-9932</span>
            </div>
            <div className="mt-5 flex flex-col items-center gap-2 md:gap-0 lg:mt-2 lg:flex-row lg:items-start lg:gap-0">
              <span className="lg:inline-block lg:w-[100px]">Email</span>
              <span>marketing@pitku.id</span>
            </div>
          </div>

          <ul className="mt-10 flex gap-7 lg:mt-5 lg:gap-4">
            <li>
              <Link aria-label="facebook" href="/">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_28_581)">
                    <path
                      d="M30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 22.4869 5.48528 28.6925 12.6562 29.8177V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93593 14.8957 5.85937 18.3219 5.85937C19.9631 5.85937 21.6797 6.15234 21.6797 6.15234V9.84375H19.7882C17.9249 9.84375 17.3438 11 17.3438 12.1862V15H21.5039L20.8389 19.3359H17.3438V29.8177C24.5147 28.6925 30 22.4869 30 15Z"
                      fill="black"
                    ></path>
                    <path
                      d="M20.8389 19.3359L21.5039 15H17.3438V12.1862C17.3438 11 17.9249 9.84375 19.7882 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.3219 5.85938C14.8957 5.85938 12.6562 7.93593 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8177C14.2093 30.0608 15.7907 30.0608 17.3438 29.8177V19.3359H20.8389Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_28_581">
                      <rect width="30" height="30" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link aria-label="whatsapp" href="/">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_28_584)">
                    <path
                      d="M15.0038 0H14.9963C6.72565 0 1.96817e-05 6.7275 1.96817e-05 15C-0.00511613 18.1594 0.994987 21.2385 2.85564 23.7919L0.98627 29.3644L6.75189 27.5213C9.19759 29.1438 12.0688 30.0063 15.0038 30C23.2744 30 30 23.2706 30 15C30 6.72938 23.2744 0 15.0038 0Z"
                      fill="black"
                    ></path>
                    <path
                      d="M23.7319 21.1821C23.37 22.204 21.9338 23.0515 20.7882 23.299C20.0044 23.4658 18.9807 23.599 15.5344 22.1702C11.1263 20.344 8.28753 15.8646 8.06628 15.574C7.85441 15.2833 6.28503 13.2021 6.28503 11.0496C6.28503 8.89709 7.37816 7.84897 7.81878 7.39897C8.18066 7.02959 8.77878 6.86084 9.35253 6.86084C9.53816 6.86084 9.70503 6.87021 9.85503 6.87771C10.2957 6.89646 10.5169 6.92272 10.8075 7.61834C11.1694 8.49022 12.0507 10.6427 12.1557 10.864C12.2625 11.0852 12.3694 11.3852 12.2194 11.6758C12.0788 11.9758 11.955 12.109 11.7338 12.364C11.5125 12.619 11.3025 12.814 11.0813 13.0877C10.8788 13.3258 10.65 13.5808 10.905 14.0215C11.16 14.4527 12.0413 15.8908 13.3388 17.0458C15.0132 18.5365 16.3707 19.0127 16.8563 19.2152C17.2182 19.3652 17.6494 19.3296 17.9138 19.0483C18.2494 18.6865 18.6638 18.0865 19.0857 17.4958C19.3857 17.0721 19.7644 17.0196 20.1619 17.1696C20.5669 17.3102 22.71 18.3696 23.1507 18.589C23.5913 18.8102 23.8819 18.9152 23.9888 19.1008C24.0938 19.2865 24.0938 20.1583 23.7319 21.1821Z"
                      fill="#FAFAFA"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_28_584">
                      <rect width="30" height="30" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link aria-label="instagram" href="/">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_28_588)">
                    <path
                      d="M20.625 0H9.375C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 0 6.8886 0 9.375L0 20.625C0 23.1114 0.98772 25.496 2.74587 27.2541C4.50403 29.0123 6.8886 30 9.375 30H20.625C23.1114 30 25.496 29.0123 27.2541 27.2541C29.0123 25.496 30 23.1114 30 20.625V9.375C30 6.8886 29.0123 4.50403 27.2541 2.74587C25.496 0.98772 23.1114 0 20.625 0ZM27.1875 20.625C27.1875 24.2437 24.2437 27.1875 20.625 27.1875H9.375C5.75625 27.1875 2.8125 24.2437 2.8125 20.625V9.375C2.8125 5.75625 5.75625 2.8125 9.375 2.8125H20.625C24.2437 2.8125 27.1875 5.75625 27.1875 9.375V20.625Z"
                      fill="black"
                    ></path>
                    <path
                      d="M15 7.5C13.0109 7.5 11.1032 8.29018 9.6967 9.6967C8.29018 11.1032 7.5 13.0109 7.5 15C7.5 16.9891 8.29018 18.8968 9.6967 20.3033C11.1032 21.7098 13.0109 22.5 15 22.5C16.9891 22.5 18.8968 21.7098 20.3033 20.3033C21.7098 18.8968 22.5 16.9891 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.6967C18.8968 8.29018 16.9891 7.5 15 7.5ZM15 19.6875C13.7573 19.686 12.5658 19.1917 11.6871 18.3129C10.8083 17.4342 10.314 16.2427 10.3125 15C10.3125 12.4144 12.4162 10.3125 15 10.3125C17.5837 10.3125 19.6875 12.4144 19.6875 15C19.6875 17.5837 17.5837 19.6875 15 19.6875Z"
                      fill="black"
                    ></path>
                    <path
                      d="M23.0625 7.93674C23.6144 7.93674 24.0619 7.4893 24.0619 6.93736C24.0619 6.38542 23.6144 5.93799 23.0625 5.93799C22.5105 5.93799 22.0631 6.38542 22.0631 6.93736C22.0631 7.4893 22.5105 7.93674 23.0625 7.93674Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_28_588">
                      <rect width="30" height="30" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center lg:w-1/4 lg:items-start">
          <h3 className="mb-5 text-center text-xl font-bold lg:text-left">
            Perusahaan
          </h3>

          <ul className="flex flex-col items-center gap-4 lg:items-start">
            <li>
              <Link href="/">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2 rounded-full bg-pituku-primary px-5 py-3 transition duration-300 hover:bg-opacity-70"
                href="/"
              >
                <Image
                  src="https://pituku.id/img/play-store.svg"
                  alt="playstore"
                  width={20}
                  height={20}
                />
                <span className="text-sm text-white">Play Store</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center lg:w-1/4 lg:items-start">
          <h3 className="mb-5 text-center text-xl font-bold lg:text-left">
            Legal
          </h3>

          <ul className="flex flex-col items-center gap-4 lg:items-start">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Term of Use</Link>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
