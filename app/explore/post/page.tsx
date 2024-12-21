import { Input } from "@/components/ui/input";
import { CircleHelp, Compass, Search, Video } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="flex gap-3">
      <div className="basis-1/3">
        <div className="  flex items-center">
          <Search />
          <Input type="email" placeholder={`Search`} className="border-none" />
        </div>
        <div className="flex gap-2">
          <Compass />
          Explore
        </div>
        <div className="flex gap-2">
          <Video /> Live
        </div>
        <div className="flex gap-2">
          <CircleHelp />
          Help
        </div>
      </div>

      {/* Maiin section */}
      <div className="basis-2/3">
        <div>Happening right now in USER LOCATION NAME</div>
        <div className="flex flex-wrap gap-3">
          <div className="basis-[32%] grow bg-red-300 h-[399px]">play</div>
          <div className="basis-[32%] grow bg-red-300">play</div>
          <div className="basis-[32%] grow bg-red-300">play</div>
          <div className="basis-[32%] grow bg-red-300 h-[399px]">play</div>
          <div className="basis-[32%] grow bg-red-300">play</div>
          <div className="basis-[32%] grow bg-red-300">play</div>
        </div>
      </div>
    </div>
  );
}
