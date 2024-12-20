"use client";

import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import { SidebarTrigger } from "./ui/sidebar";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLink {
  label: string;
  url: string;
}

export const Header: React.FC = () => {
  const navigationLinks: NavigationLink[] = [
    { label: "HOME", url: "/" },
    // { label: "EXPLORE", url: "/explore" },
    { label: "ABOUT", url: "/about" },
    { label: "CONTACT", url: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <header className="bg-secondary w-[100%] h-[70px] items-center">
      {/* Logo Section */}
      <div className="container mx-auto flex justify-between ">
        <div className="flex gap-4 justify-center items-center py-5 text-3xl font-semibold tracking-tight leading-none text-primary fill-current">
          <Image
            src="/logo.ico"
            alt=""
            width={39}
            height={39}
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.63] "
          />
          <div className="self-stretch my-auto">Safe Zone</div>
        </div>

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
