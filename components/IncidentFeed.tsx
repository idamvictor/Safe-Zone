"use client";

import { useGetPosts } from "@/services/getPosts";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/types";
import { timeFormat } from "@/lib/timeFormat";
import { getFirstImage } from "@/lib/getFirstImage";

export default function IncidentFeed() {
  const staticImage =
    "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg";

  const { data: feeds, isFetching, error } = useGetPosts();
  console.log(isFetching, error);

  const feed =
    Array.isArray(feeds) && feeds.length > 0
      ? feeds[Math.floor(Math.random() * feeds.length)]
      : null;
  const newTime = feed ? timeFormat(feed.created_at) : "";
  const newImage = feed ? getFirstImage(feed.files) : "";

  return (
    <div className="min-h-screen bg-secondary">
      {/* Search Bar */}
      <div className="sticky top-0 p-4 bg-secondary backdrop-blur-sm z-10">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-background rounded-full pl-10 pr-4 py-2 text-sm text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
        </div>
      </div>

      {/* Main Feed */}
      <div className="space-y-4">
        <div className="relative">
          <Image
            src={newImage || staticImage}
            alt={"Top Incident"}
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
            <h2 className="text-lg font-semibold">
              {(feed && feed.title) || "Testing"}
            </h2>
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-gray-300">
                {(feed && feed.city) || "Testing"}
              </p>
              <div className="text-right">
                <p className="text-xs text-gray-400">{newTime}</p>
                <p className="text-xs text-gray-400">
                  {(feed && feed.distance) || "Distance"} away
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Incident List */}
        <div className="space-y-2 px-4">
          {Array.isArray(feeds) &&
            feeds.map((feed: Post) => {
              const bgImage = getFirstImage(feed.files);
              const timeString = timeFormat(feed.created_at);

              return (
                <Link href={`/explore/${feed.id}`} key={feed.id} className="flex gap-3">
                  <div className="relative w-24 h-16 flex-shrink-0">
                    <Image
                      src={bgImage.toString() || staticImage}
                      alt={feed.city || "Incident"}
                      fill
                      className="object-cover rounded"
                    />
                    {feed.isLive && (
                      <div className="absolute top-1 left-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded flex items-center gap-1">
                        <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
                        Live
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium">{feed.title}</h3>
                    <p className="text-sm text-gray-400">{feed.city}</p>
                  </div>
                  <div className="text-right text-xs text-gray-400">
                    <p>{timeString || ""}</p>
                    <p>{feed.distance}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
