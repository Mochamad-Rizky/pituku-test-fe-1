import Hero from "@/components/Hero";
import ReportServices from "@/components/ReportServices";
import OurServices from "@/components/OurServices";
import PriceHistory from "@/components/PriceHistory";
import Benefits from "@/components/Benefits";
import Supplier from "@/components/Supplier";
import IndustryServices from "@/components/IndustryServices";
import OurClient from "@/components/OurClient";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ReportServices />
      <OurServices />
      <PriceHistory />
      <Benefits />
      <Supplier />
      <IndustryServices />
      <OurClient />
    </main>
  );
}
