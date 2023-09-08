import AboutCTASection from "@components/sections/about";
import FAQSection from "@components/sections/faq";
import LandingHeroSection from "@components/sections/landing-hero";
import QualitiesSection from "@components/sections/qualities";

const HomeView: React.FunctionComponent = () => {
  return (
    <div className="home-view">
      <LandingHeroSection />
      <AboutCTASection />
      <QualitiesSection />
      <FAQSection />
    </div>
  )
};

export default HomeView;