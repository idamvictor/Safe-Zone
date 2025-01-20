import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Dribbble, Map } from 'lucide-react';
import Link from 'next/link';


export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Explore</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/explore/post" className="px-3 flex gap-1">
            <Dribbble />
            Post
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/explore/map" className="px-3">
            <Map className="inline" /> Explore Map
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


 
              