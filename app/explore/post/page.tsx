// 'use client'
// import React, { useState } from "react";
// import StoreButton from "@/components/store-button";
// import { Input } from "@/components/ui/input";
// import {
//   CircleHelp,
//   Compass,
//   Play,
//   Search,
//   Video,
//   Menu,
//   X,
// } from "lucide-react";

// export default function Page() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="motion-preset-slide-right container mx-auto my-[64px]">
//       {/* Sidebar Trigger Button */}
//       <button
//         className="md:hidden fixed top-[85px] left-4 z-50 bg-blue-500 text-white p-2 rounded"
//         onClick={toggleSidebar}
//       >
//         {sidebarOpen ? <X /> : <Menu />}
//       </button>

//       <div className="flex gap-3 relative">
//         {/* Sidebar */}
//         <div
//           className={`fixed md:relative inset-y-0 left-0 transform ${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } md:translate-x-0 md:flex md:basis-1/3 flex-col h-screen shadow-lg transition-transform duration-300 ease-in-out z-40 md:z-0 md:static`}
//         >
//           <PostSidebar />
//         </div>

//         {/* Main section */}
//         <div
//           className={`flex-1 md:basis-2/3 ${
//             sidebarOpen ? "ml-[0px]" : "ml-[0px]"
//           }`}
//         >
//           <PostMain />
//         </div>
//       </div>

//       {/* Overlay for Sidebar when open */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// }




// // ======================= Post Side bar ===============
// export function PostSidebar() {
//   const storeData = [
//     {
//       storeName: "Play Store",
//       subtitle: "Get it on",
//       iconSrc: "/svg/play-store.svg",
//       iconAlt: "Google Play Store icon",
//     },
//     {
//       storeName: "Apple Store",
//       subtitle: "Available on",
//       iconSrc: "/svg/apple-store.svg",
//       iconAlt: "Apple App Store icon",
//     },
//   ];

//   return (
//     <div>
//       <div className="flex gap-3.5 items-center px-7 py-[20px] w-full text-lg bg-zinc-500 bg-opacity-10 min-h-[44px] rounded-[69px] text-zinc-500">
//         <Search />
//         <Input type="email" placeholder={`Search`} className="border-none" />
//       </div>
//       <div className="flex gap-2 px-7 py-[20px]">
//         <Compass />
//         Explore
//       </div>
//       <div className="flex gap-2 px-7 py-[20px]">
//         <Video /> Live
//       </div>
//       <div className="flex gap-2 px-7 py-[20px]">
//         <CircleHelp />
//         Help
//       </div>

//       <div>
//         <div className="flex flex-col gap-6 items-center mt-12 max-w-full  max-md:mt-10">
//           {storeData.map((store, index) => (
//             <StoreButton
//               key={index}
//               storeName={store.storeName}
//               subtitle={store.subtitle}
//               iconSrc={store.iconSrc}
//               iconAlt={store.iconAlt}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ========================== Post Main ================================

// export function PostMain() {
//   return (
//     <div>
//       <div>Happening right now in USER LOCATION NAME</div>
//       <div className="flex flex-wrap gap-3">
//         <div className="basis-[32%] grow bg-red-300 h-[399px] flex">
//           <Play /> 203
//         </div>
//         <div className="basis-[32%] grow bg-red-300 flex">
//           <Play /> 203
//         </div>
//         <div className="basis-[32%] grow bg-red-300 flex">
//           <Play /> 203
//         </div>
//         <div className="basis-[32%] grow bg-red-300 h-[399px] flex">
//           <Play /> 203
//         </div>
//         <div className="basis-[32%] grow bg-red-300 flex h-[399px]">
//           <Play /> 203
//         </div>
//         <div className="basis-[32%] grow bg-red-300 flex">
//           <Play /> 203
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import StoreButton from "@/components/store-button";
import { Input } from "@/components/ui/input";
import {
  CircleHelp,
  Compass,
  Play,
  Search,
  Video,
  Menu,
  X,
} from "lucide-react";

// Page Component
const Page: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="motion-preset-slide-right container mx-auto my-[64px]">
      {/* Sidebar Trigger Button */}
      <button
        className="md:hidden fixed top-[85px] left-4 z-50 bg-blue-500 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      <div className="flex gap-3 relative">
        {/* Sidebar */}
        <div
          className={`fixed md:relative inset-y-0 left-0 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:flex md:basis-1/3 flex-col h-screen shadow-lg transition-transform duration-300 ease-in-out z-40 md:z-0 md:static`}
        >
          <PostSidebar />
        </div>

        {/* Main section */}
        <div className="flex-1 md:basis-2/3">
          <PostMain />
        </div>
      </div>

      {/* Overlay for Sidebar when open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Page;

// PostSidebar Component
const PostSidebar: React.FC = () => {
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
    <div>
      <div className="flex gap-3.5 items-center px-7 py-[20px] w-full text-lg bg-zinc-500 bg-opacity-10 min-h-[44px] rounded-[69px] text-zinc-500">
        <Search />
        <Input type="email" placeholder="Search" className="border-none" />
      </div>
      <div className="flex gap-2 px-7 py-[20px]">
        <Compass />
        Explore
      </div>
      <div className="flex gap-2 px-7 py-[20px]">
        <Video />
        Live
      </div>
      <div className="flex gap-2 px-7 py-[20px]">
        <CircleHelp />
        Help
      </div>

      <div>
        <div className="flex flex-col gap-6 items-center mt-12 max-w-full max-md:mt-10">
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

// PostMain Component
const PostMain: React.FC = () => {
  return (
    <div>
      <div>Happening right now in USER LOCATION NAME</div>
      <div className="flex flex-wrap gap-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`basis-[32%] grow bg-red-300 h-[399px] flex`}
          >
            <Play /> 203
          </div>
        ))}
      </div>
    </div>
  );
};
