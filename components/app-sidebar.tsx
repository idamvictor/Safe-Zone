import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SquareX } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar side="left" className="md:hidden">
      <SidebarHeader>
        <div className="flex justify-between items-center">
          <span>Logo</span>
          <SidebarTrigger>
            {" "}
            <SquareX />{" "}
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Link href="/">HOME</Link>
        <Link href="/">EXPLORE</Link>
        <Link href="/">ABOUT</Link>
        <Link href="/">CONTACT</Link>
      </SidebarContent>
    </Sidebar>
  );
}
