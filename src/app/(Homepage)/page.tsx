import Collabration from "@/components/Hero/Collabration";
import Hero1 from "@/components/Hero/Hero1";
import HowItWorks from "@/components/Hero/HowItWorks";
import WhyPrepare from "@/components/Hero/WhyPrepare";

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
        <Hero1 />
        <Collabration />
        <HowItWorks />
        <WhyPrepare />
      </div>
    </>
  );
}
