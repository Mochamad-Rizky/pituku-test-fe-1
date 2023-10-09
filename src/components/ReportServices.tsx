import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import typeWaste1 from "#/static/images/report-services/preview1.png";
import typeWaste2 from "#/static/images/report-services/preview2.png";
import typeWaste3 from "#/static/images/report-services/preview3.png";
import typeWaste4 from "#/static/images/report-services/preview4.png";
import Image from "next/image";

export default function ReportServices() {
  return (
    <section className="relative before:absolute before:top-[-200px] before:z-[1] before:h-[700px] before:w-full before:rotate-[42deg] before:skew-y-[-40deg] before:transform before:rounded-[100%] before:bg-white before:content-['']">
      <MaxWidthWrapper className="relative z-[3] max-w-screen-2xl bg-white pb-16">
        <h2 className="text-md px-4 text-center font-extrabold lg:text-4xl">
          Layanan One-Stop Waste Management
        </h2>
        <p className="mx-auto mt-6 px-4 text-center text-sm lg:w-4/6">
          Nikmati kemudahan layanan one-stop waste management yang memudahkan
          proses pengumpulan, pengangkutan, dan pengolahan sampah secara efektif
          dan efisien dalam skala besar. Kami percaya bahwa kolaborasi dalam
          pengelolaan sampah dapat menjadi salah satu kunci untuk mencapai
          target pembangunan berkelanjutan.
        </p>

        <div className="mt-10 grid grid-cols-1 justify-center gap-5 px-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="white flex flex-col items-center gap-3 rounded-2xl p-5 text-center shadow-xl">
            <Image src={typeWaste1} alt="Waste" />
            <h3 className="text-pituku-primary text-xl font-bold">+3000</h3>
            <p>Ton Penjualan Limbah Non-B3 Setiap Bulan</p>
          </div>
          <div className="whitetext-center flex flex-col items-center gap-3 rounded-2xl p-5 shadow-xl">
            <Image src={typeWaste2} alt="Waste" />
            <h3 className="text-pituku-primary text-xl font-bold">+20</h3>
            <p>Jenis Limbah Non B3</p>
          </div>
          <div className="white flex flex-col items-center gap-3 rounded-2xl p-5 text-center shadow-xl">
            <Image src={typeWaste3} alt="Waste" />
            <h3 className="text-pituku-primary text-xl font-bold">+250</h3>
            <p>Jaringan Pengepul / Penghasil Limbah Non B3</p>
          </div>
          <div className="white flex flex-col items-center gap-3 rounded-2xl p-5 text-center shadow-xl">
            <Image src={typeWaste4} alt="Waste" />
            <h3 className="text-pituku-primary text-xl font-bold">+100</h3>
            <p>Klien Jasa Disposal Limbah B3</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
