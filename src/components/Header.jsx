
import React from "react";
import { Button } from "./ui/button";

const navigationItems = [
  { label: "About" },
  { label: "Services" },
  { label: "Project" },
  { label: "Contact" },
];

export const Header = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[804px]">
        {/* Background Vector */}
        <img
          className="absolute top-[101px] left-[calc(50%-635px)] w-[1270px] h-[703px]"
          alt="Vector"
          src="https://c.animaapp.com/mj32vqleeMiOmR/img/vector-4.svg"
        />

        {/* Main Image */}
        <img
          className="absolute top-3 left-[calc(50%-64px)] w-[129px] h-[129px] object-cover opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]"
          alt="Image"
          src="https://c.animaapp.com/mj32vqleeMiOmR/img/image-9-1.png"
        />

        {/* Navigation */}
        <nav className="flex w-[1194px] items-center justify-between absolute top-28 left-36 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          {/* Navigation Items */}
          <div className="inline-flex items-center justify-center gap-[39.75px] px-[25.55px] py-[17px] rounded-[47.32px]">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="inline-flex items-center justify-center gap-[9.46px] transition-opacity hover:opacity-70"
              >
                <div className="relative w-fit mt-[-0.95px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-[15.1px] text-center tracking-[0] leading-[15.2px] whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Logo / Button */}
          <div className="inline-flex items-center justify-center gap-[34px]">
            <img
              className="relative"
              alt="Frame"
              src="https://c.animaapp.com/mj32vqleeMiOmR/img/frame-20577.svg"
            />
            <Button className="w-[157px] h-[43px] bg-c-1 hover:bg-c-1/90 rounded-[13px] transition-colors">
              <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-[18.9px] text-center tracking-[0] leading-[19px]">
                Get a Quote
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};
