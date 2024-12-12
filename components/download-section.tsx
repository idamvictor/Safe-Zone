import Image from "next/image";
import * as React from "react";

interface StoreButtonProps {
  storeName: string;
  subtitle: string;
  iconSrc: string;
  iconAlt: string;
}

const storeData = [
  {
    storeName: "Play Store",
    subtitle: "Get it on",
    iconSrc: "/svg/play-store.svg",
    iconAlt: "Google Play Store icon",
  },
  {
    storeName: "Apple Store",
    subtitle: "Available on",
    iconSrc: "/svg/apple-store.svg",
    iconAlt: "Apple App Store icon",
  },
];

const StoreButton: React.FC<StoreButtonProps> = ({
  storeName,
  subtitle,
  iconSrc,
  iconAlt,
}) => {
  return (
    <div
      className="flex overflow-hidden gap-6 justify-center items-center self-stretch px-3 py-2 my-auto rounded-lg border border-secondary-foreground border-solid w-[219px]"
      role="button"
      tabIndex={0}
    >
      <div className="flex gap-1 items-start self-stretch my-auto w-[30px]">
        <Image
          src={iconSrc}
          alt={iconAlt}
          className="object-contain aspect-[0.91] w-[30px]"
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col self-stretch my-auto font-medium text-secondary-foreground ">
        <div className="py-px text-xs w-[98px] max-md:pr-5">{subtitle}</div>
        <div className="max-w-full text-2xl tracking-tighter ">{storeName}</div>
      </div>
    </div>
  );
};

export const DownloadSection: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-36 w-full border-b-2 bg-secondary border-secondary-foreground max-md:px-5 max-md:py-24 max-md:max-w-full ">
      <div className="flex flex-col justify-center mb-0 max-w-full w-[612px] max-md:mb-2.5">
        <div className="flex flex-col w-full text-center max-md:max-w-full">
          <div className="text-5xl font-bold leading-none text-secondary-foreground max-md:max-w-full max-md:text-4xl">
            Protect your world.
          </div>
          <div className="mt-6 text-lg font-medium leading-loose text-muted-foreground max-md:max-w-full">
            DOWNLOAD FOR FREE
          </div>
        </div>


        <div className="flex flex-wrap justify-center gap-6 items-center self-center mt-12 max-w-full w-[461px] max-md:mt-10">
          {storeData.map((store, index) => (
            <StoreButton
              key={index}
              storeName={store.storeName}
              subtitle={store.subtitle}
              iconSrc={store.iconSrc}
              iconAlt={store.iconAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
