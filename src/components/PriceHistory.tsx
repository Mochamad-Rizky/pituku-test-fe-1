import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import WasteChart from "@/components/WasteChart";

export default function PriceHistory() {
  return (
    <section className="pb-20 pt-16">
      <MaxWidthWrapper className="max-w-screen-2xl px-5">
        <h2 className="text-md px-4 text-center font-extrabold lg:text-4xl">
          Bergabung Menjadi Supplier Pituku
        </h2>
        <p className="mx-auto mt-6 px-4 text-center text-sm lg:w-4/6">
          Bergabung bersama kami menjadi Supplier Pituku. Kami membeli sampah
          dan limbah non-B3 dari pengepul dan penghasil, dengan harga terbaik
          dan transparan. Hanya di platform Pituku, kamu dapat memantau harga
          sampah dan limbah secara real-time. Tingkatkan penjualan dan raih
          keuntungan dengan bergabung menjadi Supplier Pituku!
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="mx-auto inline-block rounded-full bg-pituku-primary px-5 py-3 font-bold text-white"
          >
            Bergabung Sekarang
          </Link>
        </div>

        <div className="mt-16 rounded-md p-3  shadow-2xl">
          <h3 className="font-medium">Statistik Harga PET Bening/Kg</h3>
          <p className="text-sm text-gray-500">
            Lihat harga berbagai jenis sampah lainnya dengan menjadi Supplier
            Pituku
          </p>

          <div>
            <WasteChart />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
