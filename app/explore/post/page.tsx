"use client";

import Image from "next/image";
import { Search, Compass, Radio, HelpCircle, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex bg-black text-white motion-preset-slide-right-md">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 p-4 flex-col border-r border-zinc-800">
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 ">
        <div className="mb-4 text-sm text-zinc-400 flex gap-1 items-center">
          {/* Mobile Sidebar Trigger */}
          <SidebarTrigger />
          <p>Happening right now in </p>
          <span className="text-white">USER LOCATION NAME</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              views: 345,
              image:
                "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
            },
            {
              views: 245,
              image:
                "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
            },
            {
              views: 345,
              image:
                "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
            },
            {
              views: 0,
              image:
                "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
            },
            {
              views: 0,
              image:
                "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
            },
            {
              views: 0,
              image:
                "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
            },
          ].map((item, i) => (
            <Link href='/explore/1'
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`News item ${i + 1}`}
                fill
                className="object-cover"
              />
              {item.views > 0 && (
                <div className="absolute bottom-2 left-2 flex items-center space-x-1 text-white text-sm">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <Radio className="w-3 h-3" />
                  </div>
                  <span>{item.views}</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Extracted sidebar content into a separate component
function SidebarContent() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-8 bg-zinc-900 border-none text-white"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <button className="flex items-center space-x-2 w-full p-2 hover:bg-zinc-900 rounded-lg">
            <Compass className="h-5 w-5" />
            <span>Explore</span>
          </button>
          <button className="flex items-center space-x-2 w-full p-2 hover:bg-zinc-900 rounded-lg">
            <Radio className="h-5 w-5" />
            <span>Live</span>
          </button>
          <button className="flex items-center space-x-2 w-full p-2 hover:bg-zinc-900 rounded-lg">
            <HelpCircle className="h-5 w-5" />
            <span>Help</span>
          </button>
        </nav>
      </div>

      {/* App Store Buttons */}
      <div className="mt-auto space-y-2">
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg"
          alt="Get it on Google Play"
          width={140}
          height={40}
          className="rounded"
        />
        <Image
          src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg"
          alt="Download on the App Store"
          width={140}
          height={40}
          className="rounded"
        />
      </div>
    </div>
  );
}


function SidebarTrigger() {
  return (
    <div className="md:hidden z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-black">
          <div className="flex flex-col h-full p-4">
            <SidebarContent />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
