'use client'
import IncidentFeed from "@/components/IncidentFeed";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/map"), { ssr: false });

export default function page() {
  return (
    <div className=" flex flex-col-reverse md:flex-row gap-3 p-4 motion-preset-slide-right-md">

      <IncidentFeed />  

      {/* map section */}
      <div className=" basis-2/3 border-l-4">
        <DynamicMap />
      </div>
    </div>
  );
}


