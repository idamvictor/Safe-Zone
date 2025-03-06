"use client";

import Image from "next/image";
import {
  Search,
  Compass,
  Radio,
  HelpCircle,
  Menu,
  // CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { StoreButtons } from "@/components/store-buttons";
import { getFirstImage } from "@/lib/getFirstImage";
import { timeFormat } from "@/lib/timeFormat";
import { Post } from "@/lib/types";
import PaginationDemo from "@/components/pagination-demo";
// import { useState } from "react";
import { usePostsDataPagination } from "@/services/postDataPagination";
import { parseAsInteger, useQueryState } from "nuqs";

const PAGE_SIZE = 50;

export default function Page() {
  // const [page, setPages] = useState(1);

  const [page, setPages] = useQueryState("page", parseAsInteger.withDefault(1));

  const { data: feeds, isFetching, error } = usePostsDataPagination(page);

  const noOfPages = Array.isArray(feeds)
    ? Math.ceil(feeds.length / PAGE_SIZE)
    : 1;

  if (error) return <p>Something went wrong</p>;

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
          {isFetching ? (
            <p>Loading</p>
          ) : Array.isArray(feeds) ? (
            feeds?.map((item: Post) => {
              const image = getFirstImage(item.files);
              const timePosted = timeFormat(item.created_at);

              return (
                <Link
                  href={`/explore/${item.id}`}
                  key={item.id}
                  className="group flex flex-col"
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-2">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={item.title || "Post page"}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />

                    {/* Duration or Live Badge */}
                    {/* {item.isLive ? (
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
                )} */}
                  </div>

                  {/* Content Details */}
                  <div className="flex gap-3">
                    {/* Channel Avatar */}
                    <Avatar className="w-9 h-9 hidden sm:flex">
                      <AvatarImage
                        src={item.user.image || "/placeholder.svg"}
                        alt={" Channel Avatar"}
                      />
                      <AvatarFallback>
                        {item.user.username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    {/* Content Info */}
                    <div className="flex-1">
                      <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-zinc-300">
                        {item.title || "Post tittle"}
                      </h3>

                      <div className="flex items-center text-xs text-zinc-400">
                        <span>{item.user.username}</span>
                        {/* {item.channelVerified && (
                      <CheckCircle className="w-3 h-3 ml-1 text-zinc-400 fill-zinc-400" />
                    )} */}
                      </div>

                      <div className="flex items-center text-xs text-zinc-400 mt-0.5">
                        {/* {item.isLive ? (
                      <span className="text-red-500">{item.watching}</span>
                    ) : (
                      <>
                        <span>{item.views} views</span>
                        <span className="mx-1">•</span>
                        <span>{item.timePosted}</span>
                      </>
                    )} */}
                        <span>{timePosted}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>No Post</p>
          )}
        </div>
        <div className="mt-8">
          <PaginationDemo
            page={page}
            setPages={setPages}
            noOfPages={noOfPages}
          />
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
      {/* Replace the old Image components with the new StoreButtons */}
      <StoreButtons />
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
