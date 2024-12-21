import StoreButton from "./store-button";


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


        <div className="flex flex-col md:flex-row justify-center gap-6 items-center self-center mt-12 max-w-full  max-md:mt-10">
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
