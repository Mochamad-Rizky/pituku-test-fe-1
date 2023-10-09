import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import clientContainer from "#/static/images/client/client-container.webp";
import client1 from "#/static/images/client/1.png";
import client2 from "#/static/images/client/2.png";
import client3 from "#/static/images/client/3.png";
import client4 from "#/static/images/client/4.jpg";
import client5 from "#/static/images/client/5.jpeg";

import Image from "next/image";
export default function OurClient() {
  return (
    <section className="pb-20">
      <MaxWidthWrapper className="max-w-screen-2xl">
        <div className="flex flex-col justify-center px-5 lg:flex-row lg:items-center">
          <div className="mx-auto w-full max-w-lg lg:mx-0 lg:w-1/2">
            <h2 className="text-lg font-bold">Dipercaya oleh Klien Kami</h2>
            <p className="mt-3 text-sm font-medium">
              Terpercaya dan memiliki reputasi yang baik. Kami berkomitmen
              memberikan layanan one-stop waste management terbaik untuk
              memenuhi kebutuhan klien kami. Berikut beberapa klien yang telah
              mempercayakan kami:
            </p>

            <ul className="mt-10 flex flex-wrap justify-center gap-10 lg:justify-normal  [&_li]:w-[90px] lg:[&_li]:w-[120px]">
              <li>
                <Image src={client1} alt="Indopangan sentosa " />
              </li>
              <li>
                <Image src={client2} alt="Gudang Garam" />
              </li>
              <li>
                <Image src={client3} alt="Alexindo" />
              </li>
              <li>
                <Image src={client4} alt="Anugerah mutu bersama" />
              </li>
              <li>
                <Image src={client5} alt="Ardena" />
              </li>
            </ul>
          </div>
          <div className="hidden w-full lg:flex lg:w-1/2 lg:justify-end">
            <Image
              className="w-full max-w-lg"
              src={clientContainer}
              alt="client container"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
