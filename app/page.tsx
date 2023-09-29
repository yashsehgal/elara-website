import AboutCTASection from "@components/sections/about";
import FAQSection from "@components/sections/faq";
import LandingHeroSection from "@components/sections/landing-hero";
import ProductSection from "@components/sections/products-section";
import QualitiesSection from "@components/sections/qualities";

const HomeView: React.FunctionComponent = () => {
  return (
    <div className="home-view">
      <LandingHeroSection />
      <div id="about">
        <AboutCTASection />
      </div>
      <ProductSection />
      <FAQSection />
      <QualitiesSection />
      <AboutCTASection />
    </div>
  )
};

export default HomeView;