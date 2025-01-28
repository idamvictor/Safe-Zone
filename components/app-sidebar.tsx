"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SquareX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const mainNavItems = [
    { text: "HOME", url: "/" },
    { text: "ABOUT", url: "/about" },
    { text: "SOS", url: "/sos" },
    { text: "EXPLORE", url: "/explore/map" },
  ];

  const footerNavItems = [
    { text: "Help", url: "/" },
    { text: "Privacy", url: "/" },
    { text: "Mission", url: "/" },
  ];

  const pathname = usePathname();
  console.log(pathname);

  return (
    <Sidebar side="left" className="md:hidden">
      <SidebarHeader className="bg-secondary">
        <div className="flex overflow-hidden justify-between items-center px-0 py-2.5 w-full text-lg font-semibold leading-none">
          <div className="flex gap-2.5 justify-center items-center py-3">
            <Image
              src="/logo.png"
              width={24}
              height={24}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.6]"
            />
            <div className="self-stretch my-auto">Safe Zone</div>
          </div>

          <SidebarTrigger>
            {" "}
            <SquareX />{" "}
          </SidebarTrigger>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 gap-0">
        {mainNavItems.map((item, id) => (
          <Link
            key={id}
            href={item.url}
            className={`overflow-hidden px-5 py-6 w-full border-b text-muted-foreground ${
              pathname === item.url ? "text-primary" : ""
            }`}
          >
            {item.text}
          </Link>
        ))}
      </SidebarContent>

      <SidebarFooter className="gap-0">
        {footerNavItems.map((item, id) => (
          <div
            className="overflow-hidden px-5 py-6 w-full border-b text-muted-foreground"
            key={id}
            // href={item.url}
          >
            {item.text}
          </div>
        ))}
      </SidebarFooter>
    </Sidebar>
  );
}
