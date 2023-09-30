import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { cn } from "@utils/cn";
import { Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const NavigationData: {
  logo: {
    imgURL?: string;
    htmlImage?: ReactNode;
    title?: string;
  },
  options: Array<{
    value: string;
    link: string;
  }>;
} = {
  logo: {
    imgURL: "",
    title: "Elara Home Fittings Logo"
  },
  options: [
    { value: "About", link: "/#about" },
    { value: "Instagram", link: "https://instagram.com" }
  ]
}

const NavigationSection: React.FunctionComponent = () => {
  return (
    <nav className="my-4">
      <ViewContainer className="flex flex-row items-center justify-between">
        <Link href="/" className="w-fit block">
          <div className="navbar-logo-wrapper w-fit h-auto">
            {NavigationData.logo.imgURL ? <Image
              src={NavigationData.logo.imgURL}
              alt={NavigationData.logo.title || "Elara"}
              width={"200"}
              height={"200"}
            /> : <div className="navbar-logo-htmlContent flex flex-col items-start">
              <span className="logo-htmlContent--headlineText font-medium text-xl">
                {"Elara"}
              </span>
              <span className="logo-htmlContent--descriptionText font-normal text-sm -mt-1">
                {"Home Fittings"}
              </span>
            </div>}
          </div>
        </Link>
        <div className="navOptions-list-wrapper w-fit">
          <ul className="navOptions-list flex flex-row items-center justify-end gap-4">
            {NavigationData.options.map((option, optionIndex) => {
              return (
                <li className="navOptions-item text-base font-medium hover:text-neutral-500" key={optionIndex}>
                  <Link
                    href={option.link || "#"}
                    aria-description={`Click here to see ${option.value}`}
                  >
                    {option.value}
                  </Link>
                </li>
              )
            })}
            {/* <li className="navOptions-item">
              <Link href="/products">
                <Button>Explore Products</Button>
              </Link>
            </li> */}
            <li className="navOptions-item">
              <Link href="tel:">
                <Button
                  className={cn("flex flex-row gap-1 transition-all")}
                  variant={"outline"}
                >
                  <Phone className="w-4 h-auto" />
                  {"Contact us"}
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </ViewContainer>
    </nav>
  )
};

export default NavigationSection;