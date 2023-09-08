import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";

const LandingHeroSection: React.FunctionComponent = () => {
  return (
    <main className="landingPage-hero-section my-32 relative">
      <ViewContainer>
        <h1 className="landingP-headline text-6xl font-bold text-center mx-auto">
          Elevate your life, <br /> with better security
        </h1>
        <p className="landingPage-description text-lg font-normal text-neutral-500 w-[380px] text-center mx-auto my-4">
          {"Elevate your home's security and aesthetic appeal with our premium locks and home fittings, elegance in every detail."}
        </p>
        <div className="landingPage-cta-wrapper flex flex-row items-center justify-center mx-auto w-fit gap-4">
          <Button variant={"ghost"}>
            {"Read FAQs"}
          </Button>
          <Button>
            {"Explore Products"}
          </Button>
        </div>
        <div className="absolute -top-20 left-1/2 -z-10 h-[200px] w-[200px] animate-pulse rounded-full bg-orange-200 blur-3xl transition-all" />
        <div className="absolute -top-20 left-1/3 -z-10 h-[200px] w-[200px] animate-pulse rounded-full bg-pink-300 blur-3xl transition-all" />
      </ViewContainer>
    </main>
  )
};

export default LandingHeroSection;