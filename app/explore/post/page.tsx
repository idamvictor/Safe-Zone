"use client";

import Image from "next/image";
import {
  Search,
  Compass,
  Radio,
  HelpCircle,
  Menu,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Sample data to mimic YouTube content
const contentItems = [
  {
    id: 1,
    title: "LIVE: Breaking News Coverage - Latest Updates",
    channelName: "News Network",
    channelAvatar: "/placeholder.svg?height=40&width=40",
    channelInitials: "NN",
    channelVerified: true,
    views: "11K",
    isLive: true,
    watching: "11K watching",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
    duration: null,
    timePosted: null,
  },
  {
    id: 2,
    title: "How to Build a Modern Web Application with Next.js",
    channelName: "Tech Tutorials",
    channelAvatar: "/placeholder.svg?height=40&width=40",
    channelInitials: "TT",
    channelVerified: true,
    views: "145K",
    isLive: false,
    watching: null,
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
    duration: "18:42",
    timePosted: "3 days ago",
  },
  {
    id: 3,
    title: "The Future of AI in 2025 - What to Expect",
    channelName: "AI Insights",
    channelAvatar: "/placeholder.svg?height=40&width=40",
    channelInitials: "AI",
    channelVerified: false,
    views: "78K",
    isLive: false,
    watching: null,
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
    duration: "24:15",
    timePosted: "1 week ago",
  },
  {
    id: 4,
    title: "LIVE: Tech Conference 2025 - Keynote Address",
    channelName: "Tech Events",
    channelAvatar: "/placeholder.svg?height=40&width=40",
    channelInitials: "TE",
    channelVerified: true,
    views: "5.2K",
    isLive: true,
    watching: "5.2K watching",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
    duration: null,
    timePosted: null,
  },
  {
    id: 5,
    title: "10 Hidden Features in the Latest Software Update",
    channelName: "Tech Tips",
    channelAvatar: "/placeholder.svg?height=40&width=40",
    channelInitials: "TT",
    channelVerified: false,
    views: "32K",
    isLive: false,
    watching: null,
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
    duration: "12:08",
    timePosted: "2 days ago",
  },
  {
    id: 6,
    title: "Exploring the New Design Trends for 2025",
    channelName: "Design Masters",
    channelAvatar: "/placeholder.svg?height=40&width=40",
    channelInitials: "DM",
    channelVerified: true,
    views: "64K",
    isLive: false,
    watching: null,
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
    duration: "15:30",
    timePosted: "5 days ago",
  },
];

export default function Page() {
  return (
    <div className="flex motion-preset-slide-right-md">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 p-4 flex-col border-r border-zinc-800">
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="mb-4 text-sm text-zinc-400 flex gap-1 items-center">
          {/* Mobile Sidebar Trigger */}
          <SidebarTrigger />
          <p>Happening right now in </p>
          <span className="text-foreground">USER LOCATION NAME</span>
        </div>

        {/* YouTube-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {contentItems.map((item) => (
            <Link
              href={`/explore/${item.id}`}
              key={item.id}
              className="group flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-2">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />

                {/* Duration or Live Badge */}
                {item.isLive ? (
                  <Badge
                    variant="destructive"
                    className="absolute bottom-2 left-2 flex items-center gap-1"
                  >
                    <Radio className="w-3 h-3" />
                    <span>LIVE</span>
                  </Badge>
                ) : (
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                    {item.duration}
                  </div>
                )}
              </div>

              {/* Content Details */}
              <div className="flex gap-3">
                {/* Channel Avatar */}
                <Avatar className="w-9 h-9 hidden sm:flex">
                  <AvatarImage
                    src={item.channelAvatar}
                    alt={item.channelName}
                  />
                  <AvatarFallback>{item.channelInitials}</AvatarFallback>
                </Avatar>

                {/* Content Info */}
                <div className="flex-1">
                  <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-zinc-300">
                    {item.title}
                  </h3>

                  <div className="flex items-center text-xs text-zinc-400">
                    <span>{item.channelName}</span>
                    {item.channelVerified && (
                      <CheckCircle className="w-3 h-3 ml-1 text-zinc-400 fill-zinc-400" />
                    )}
                  </div>

                  <div className="flex items-center text-xs text-zinc-400 mt-0.5">
                    {item.isLive ? (
                      <span className="text-red-500">{item.watching}</span>
                    ) : (
                      <>
                        <span>{item.views} views</span>
                        <span className="mx-1">•</span>
                        <span>{item.timePosted}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
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
            className="pl-8 bg-secondary border-none"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Compass className="h-5 w-5 mr-2" />
            Explore
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Radio className="h-5 w-5 mr-2" />
            Live
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="h-5 w-5 mr-2" />
            Help
          </Button>
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
