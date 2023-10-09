import Hero from "@/components/Hero";
import ReportServices from "@/components/ReportServices";
import OurServices from "@/components/OurServices";
import PriceHistory from "@/components/PriceHistory";
import Benefits from "@/components/Benefits";
import Supplier from "@/components/Supplier";
import IndustryServices from "@/components/IndustryServices";
import OurClient from "@/components/OurClient";
import FAQ from "@/components/FAQ";
import UpToDateNews from "@/components/UpToDateNews";
import Exposure from "@/components/Exposure";
import JoinWithUs from "@/components/JoinWithUs";

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
      <FAQ />
      <UpToDateNews />
      <Exposure />
      <JoinWithUs />
    </main>
  );
}
