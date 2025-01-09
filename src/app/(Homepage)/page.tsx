import Collabration from "@/components/Hero/Collabration";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/Hero/HowItWorks";
import OurMission from "@/components/Hero/OurMission";
import WhyPrepare from "@/components/Hero/WhyPrepare";

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <Collabration />
        <HowItWorks />
        <WhyPrepare />
        <OurMission/>
      </div>
    </>
  );
}
