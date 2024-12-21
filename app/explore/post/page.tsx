import StoreButton from "@/components/store-button";
import { Input } from "@/components/ui/input";
import { CircleHelp, Compass, Play, Search, Video } from "lucide-react";
import React from "react";

export default function page() {
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

  return (
    <div className="flex gap-3 container mx-auto my-[64px]">
      <div className="basis-1/3 flex flex-col h-screen">
        <div className="flex gap-3.5 items-center px-7 py-[20px] w-full text-lg bg-zinc-500 bg-opacity-10 min-h-[44px] rounded-[69px] text-zinc-500">
          <Search />
          <Input type="email" placeholder={`Search`} className="border-none" />
        </div>
        <div className="flex gap-2 px-7 py-[20px]">
          <Compass />
          Explore
        </div>
        <div className="flex gap-2 px-7 py-[20px]">
          <Video /> Live
        </div>
        <div className="flex gap-2 px-7 py-[20px]">
          <CircleHelp />
          Help
        </div>

        <div>
          <div className="flex flex-col gap-6 items-center mt-12 max-w-full  max-md:mt-10">
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

      {/* Maiin section */}
      <div className="basis-2/3">
        <div>Happening right now in USER LOCATION NAME</div>
        <div className="flex flex-wrap gap-3">
          <div className="basis-[32%] grow bg-red-300 h-[399px] flex">
            <Play /> 203
          </div>
          <div className="basis-[32%] grow bg-red-300 flex">
            <Play /> 203
          </div>
          <div className="basis-[32%] grow bg-red-300 flex">
            <Play /> 203
          </div>
          <div className="basis-[32%] grow bg-red-300 h-[399px] flex">
            <Play /> 203
          </div>
          <div className="basis-[32%] grow bg-red-300 flex h-[399px]">
            <Play /> 203
          </div>
          <div className="basis-[32%] grow bg-red-300 flex">
            <Play /> 203
          </div>
        </div>
      </div>
    </div>
  );
}
