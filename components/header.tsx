"use client";

import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import { SidebarTrigger } from "./ui/sidebar";
import { Map, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenuDemo from "./DropdownMenuDemo";

interface NavigationLink {
  label: string;
  url: string;
}

export const Header: React.FC = () => {
  const navigationLinks: NavigationLink[] = [
    { label: "HOME", url: "/" },
    { label: "EXPLORE", url: "/explore/map" },
    { label: "ABOUT", url: "/about" },
    { label: "SOS", url: "/sos" },
  ];

  const pathname = usePathname();

  return (
    <header className="bg-secondary w-[100%] h-[70px] items-center">
      {/* Logo Section */}
      <div className="px-3 md:container mx-auto flex justify-between items-center ">
        <Link
          href="/"
          className="flex gap-4 justify-center items-center py-5 text-[16px] md:text-3xl font-semibold tracking-tight leading-none text-primary fill-current"
        >
          <Image
            src="/logo.png"
            alt=""
            width={39}
            height={39}
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.63] w-[24px] h-[24px] md:w-[39px] md:h-[39px]"
          />
          <div className="self-stretch my-auto">Safe Zone</div>
        </Link>

        {pathname === "/" ? (
          ""
        ) : (
          <div className="flex ">
          <div className="hidden md:flex text-muted-foreground">
              <Link
                href="/explore/post"
                className="px-3 border-r-2 border-white"
              >
                Post
              </Link>
              <Link href="/explore/map" className="px-3">
                <Map className="inline" /> Explore Map
              </Link>
            </div>
            <div className="md:hidden">
              <DropdownMenuDemo />
            </div>
          </div>
        )}

        {/* Navigation Section */}
        <div className=" hidden lg:flex md:flex items-center text-base font-bold tracking-tight leading-none whitespace-nowrap text-muted-foreground">
          {navigationLinks.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className={`gap-2.5 self-stretch p-5 my-auto ${
                pathname === link.url ? "text-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </div>

        <SidebarTrigger className="lg:hidden md:hidden">
          <Menu />
        </SidebarTrigger>
      </div>
    </header>
  );
};

export default Header;
