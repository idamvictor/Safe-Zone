import Image from "next/image";
import * as React from "react";

const socialIcons = [
  {
    src: "/svg/facebook.svg",
    alt: "facebook",
  },
  {
    src: "/svg/facebook.svg",
    alt: "twitter",
  },
  {
    src: "/svg/facebook.svg",
    alt: "instagram",
  },
  {
    src: "/svg/facebook.svg",
    alt: "tiktok",
  },
  {
    src: "/svg/facebook.svg",
    alt: "youtube",
  },
];

const companyLinks = ["Mission", "Vision", "Explore"];
const supportLinks = ["Help", "Privacy", "Terms"];

const Footer: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 py-12 w-full bg-secondary max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap items-center max-md:max-w-full">
        <div className="flex overflow-hidden flex-col grow shrink items-start self-stretch py-0.5 pr-20 my-auto text-secondary-foreground min-w-[240px] w-[442px] max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[248px]">
            <div className="flex gap-4 justify-center items-center self-start py-5 text-3xl font-semibold tracking-tight leading-none text-center">
              <Image
                src="/logo.ico"
                alt="Safe Zone Logo"
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.63]"
                width={39}
                height={39}
              />
              <div className="self-stretch my-auto">Safe Zone</div>
            </div>
            <div className="text-base leading-8">
              We watch your back all day!
            </div>
          </div>
          <div className="mt-40 text-base leading-8 max-md:mt-10">
            @Copyright 2024.
          </div>
        </div>
        <div className="flex items-center self-stretch my-auto text-base leading-8 text-secondary-foreground whitespace-nowrap min-w-[240px]">
          <div className="flex overflow-hidden flex-col self-stretch px-px pt-1 pb-32 my-auto w-[203px] max-md:pb-24">
            <div className="self-start font-bold">COMPANY</div>
            <div className="flex flex-col mt-8">
              {companyLinks.map((link, index) => (
                <div key={index} tabIndex={0} role="link">
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden flex-col self-stretch px-px pt-1 pb-32 my-auto w-[203px] max-md:pb-24">
            <div className="self-start font-bold">SUPPORT</div>
            <div className="flex flex-col mt-8">
              {supportLinks.map((link, index) => (
                <div key={index} tabIndex={0} role="link">
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col grow shrink items-start self-stretch pt-1 pr-16 pb-48 my-auto min-w-[240px] w-[281px] max-md:pb-24">
          <div className="text-base font-bold leading-8 text-secondary-foreground">
            SOCIALS
          </div>
          <div className="flex gap-4 items-center mt-11 max-md:mt-10">
            {socialIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="object-contain shrink-0 self-stretch my-auto aspect-square"
                width={18}
                height={18}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
