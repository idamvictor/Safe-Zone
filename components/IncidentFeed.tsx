"use client";

import { Search } from "lucide-react";
import Image from "next/image";

interface IncidentItem {
  title: string;
  location: string;
  time: string;
  distance: string;
  isLive?: boolean;
  imageUrl: string;
}

export default function IncidentFeed() {
  const incidents: IncidentItem[] = [
    {
      title: "Fire Outbreak at Rumukoro",
      location: "23 Alienware, Army Barracks",
      time: "12:30",
      distance: "0.3 Km",
      imageUrl:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
      isLive: true,
    },
    {
      title: "Fire Outbreak at Rumukoro",
      location: "23 Alienware, Army Barracks",
      time: "12:30",
      distance: "0.3 Km",
      imageUrl:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
    },
    {
      title: "Fire Outbreak at Rumukoro",
      location: "23 Alienware, Army Barracks",
      time: "12:30",
      distance: "0.3 Km",
      imageUrl:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
    },
    {
      title: "Fire Outbreak at Rumukoro",
      location: "23 Alienware, Army Barracks",
      time: "12:30",
      distance: "0.3 Km",
      imageUrl:
        "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075746/samples/ecommerce/leather-bag-gray.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Search Bar */}
      <div className="sticky top-0 p-4 bg-black/90 backdrop-blur-sm z-10">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-full bg-gray-900 rounded-full pl-10 pr-4 py-2 text-sm text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
        </div>
      </div>

      {/* Main Feed */}
      <div className="space-y-4">
        {/* Featured Incident */}
        <div className="relative">
          <Image
            src={incidents[0].imageUrl || "/placeholder.svg"}
            alt={incidents[0].title}
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
            <h2 className="text-lg font-semibold">{incidents[0].title}</h2>
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-gray-300">{incidents[0].location}</p>
              <div className="text-right">
                <p className="text-xs text-gray-400">{incidents[0].time} AM</p>
                <p className="text-xs text-gray-400">
                  {incidents[0].distance} away
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Incident List */}
        <div className="space-y-2 px-4">
          {incidents.map((incident, index) => (
            <div key={index} className="flex gap-3">
              <div className="relative w-24 h-16 flex-shrink-0">
                <Image
                  src={incident.imageUrl || "/placeholder.svg"}
                  alt={incident.title}
                  fill
                  className="object-cover rounded"
                />
                {incident.isLive && (
                  <div className="absolute top-1 left-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
                    Live
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium">{incident.title}</h3>
                <p className="text-sm text-gray-400">{incident.location}</p>
              </div>
              <div className="text-right text-xs text-gray-400">
                <p>{incident.time}</p>
                <p>{incident.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
