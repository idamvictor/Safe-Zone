'use client'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/map"), { ssr: false });

export default function page() {
  return (
    <div className=" flex flex-col-reverse md:flex-row gap-3 p-4 motion-preset-slide-right-md">
      <div className="basis-1/3">
        <div className="flex gap-3.5 items-center px-7 w-full text-lg bg-zinc-500 bg-opacity-10 min-h-[44px] rounded-[69px] text-zinc-500">
          <Search />
          <Input type="email" placeholder={`Search`} className="border-none" />
        </div>

        <div>
          {/* the heading section */}
          <div className="w-full h-[248px] bg-gray-400">image</div>
          <div className="flex justify-between p-3">
            <div>
              <p className="font-bold">Fire Outbreak at Rumuokoro</p>
              <p className="text-muted-foreground text-sm">
                Fire Outbreak at Rumuokoro
              </p>
              <p className="text-muted-foreground text-sm">
                23 Alienware, Army Barracks
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">12:30 AM</p>
              <p className="text-muted-foreground text-sm">0.3 Km</p>
            </div>
          </div>

          {/* the list side  */}
          <div className="flex items-center ">
            <div className="image bg-gray-400 w-[48] h-[48]">
              <span>live</span>
            </div>
            <div className="flex justify-between p-3 w-full">
              <div>
                <p className="font-bold">Fire Outbreak at Rumuokoro</p>
                <p className="text-muted-foreground text-sm">
                  Fire Outbreak at Rumuokoro
                </p>
                <p className="text-muted-foreground text-sm">
                  23 Alienware, Army Barracks
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">12:30 AM</p>
                <p className="text-muted-foreground text-sm">0.3 Km</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map section */}
      <div className=" basis-2/3 border-l-4">
        <DynamicMap />
      </div>
    </div>
  );
}
