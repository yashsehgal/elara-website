"use client";
import { useState } from "react";
import ViewContainer from "@components/layouts/view-container";
import { Button } from "@components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavigationData = {
  logo: {
    imgURL: "/media/elara-dark.svg", // Add your logo image URL here
    title: "Elara Home Fittings Logo",
  },
  options: [
    { value: "About", link: "/#about" },
    { value: "Products", link: "/products" },
    { value: "FAQs", link: "/#faq" },
  ],
};

const NavigationSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-4">
      <ViewContainer className="flex flex-row items-center justify-between">
        <Link href="/" className="w-fit block">
          <div className="navbar-logo-wrapper w-fit h-auto">
            {NavigationData.logo.imgURL ? (
              <Image
                src={NavigationData.logo.imgURL}
                alt={NavigationData.logo.title || "Elara"}
                width={"160"}
                height={"200"} // auto
              />
            ) : (
              <div className="navbar-logo-htmlContent flex flex-col items-start">
                <span className="logo-htmlContent--headlineText font-medium text-xl">
                  {"Elara"}
                </span>
                <span className="logo-htmlContent--descriptionText font-normal text-sm -mt-1">
                  {"Home Fittings"}
                </span>
              </div>
            )}
          </div>
        </Link>

        <div className="md:hidden">
          {/* Hamburger menu icon for small screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block text-3xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        <div
          className={`${menuOpen ? "block" : "hidden"
            } md:block md:flex-row md:items-center md:justify-end md:gap-4 md:w-fit`}
        >
          <ul className="md:flex md:flex-row md:items-center md:justify-end md:gap-4">
            {NavigationData.options.map((option, optionIndex) => (
              <li
                className="text-base font-medium hover:text-neutral-500"
                key={optionIndex}
              >
                <Link
                  href={option.link || "#"}
                  aria-description={`Click here to see ${option.value}`}
                >
                  {option.value}
                </Link>
              </li>
            ))}
            <li>
              <Link href="tel:">
                <Button
                  variant={"outline"}
                  className="flex gap-1 transition-all"
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
  );
};

export default NavigationSection;
