import EmergencyResources from "@/components/home/EmergencyResources";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ReportForm from "@/components/home/ReportForm";
import SearchSection from "@/components/home/SearchSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ReportForm />
      <SearchSection />
      <EmergencyResources />
    </>
  );
}
