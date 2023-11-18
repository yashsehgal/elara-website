import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const LandingHeroSection: React.FunctionComponent = () => {
  return (
    <main className="landingPage-hero-section my-8 md:my-32 relative">
      <ViewContainer>
        <h1 className="landingP-headline text-4xl md:text-7xl font-bold text-center mx-auto">
          Elevate your life, <br /> with better security
        </h1>
        <p className="landingPage-description text-lg md:text-xl font-normal text-neutral-500 max-w-xl text-center mx-auto my-4">
          Elevate your home's security and aesthetic appeal with our premium
          locks and home fittings, elegance in every detail.
        </p>
        <div className="landingPage-cta-wrapper flex flex-col md:flex-row items-center justify-center mx-auto w-full md:w-fit gap-4">
          <Link href="/#faq">
            <Button variant={"ghost"}>{"Read FAQs"}</Button>
          </Link>
          <Link href="/products">
            <Button>
              {"Explore Products"}
              {/* <ArrowRight className="w-4 h-auto" /> */}
            </Button>
          </Link>
        </div>
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 -z-10 h-[150px] w-[150px] animate-pulse rounded-full bg-orange-200 blur-3xl transition-all hidden md:block" />
        <div className="absolute -top-20 left-1/3 transform -translate-x-1/3 -z-10 h-[150px] w-[150px] animate-pulse rounded-full bg-purple-300 blur-3xl transition-all hidden md:block" />
      </ViewContainer>
    </main>
  );
};

export default LandingHeroSection;
