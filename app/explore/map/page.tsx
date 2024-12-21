import { Input } from "@/components/ui/input";
import Map from "@/components/ui/map";
import { Search } from "lucide-react";

export default function page() {
  return (
    <div className="flex gap-3">
      <div className="basis-1/3 border-r-4">
        <div className="  flex items-center">
          <Search />
          <Input type="email" placeholder={`Search`} className="border-none" />
        </div>

        <div>
          {/* the heading section */}
          <div className="w-full h-[248px] bg-gray-400">image</div>
          <div className="flex justify-between p-3">
            <div>
              <p>Fire Outbreak at Rumuokoro</p>
              <p>Fire Outbreak at Rumuokoro</p>
              <p>23 Alienware, Army Barracks</p>
            </div>
            <div>
              <p>12:30 AM</p>
              <p>0.3 Km</p>
            </div>
          </div>

          {/* the list side  */}
          <div className="flex items-center">
            <div className="image bg-gray-400 w-[48] h-[48]">
              <span>live</span>
            </div>
            <div className="flex justify-between p-3 w-full">
              <div>
                <p>Fire Outbreak at Rumuokoro</p>
                <p>Fire Outbreak at Rumuokoro</p>
                <p>23 Alienware, Army Barracks</p>
              </div>
              <div>
                <p>12:30 AM</p>
                <p>0.3 Km</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map section */}
      <div className=" basis-2/3 border-l-4">
        <Map />
      </div>
    </div>
  );
}
