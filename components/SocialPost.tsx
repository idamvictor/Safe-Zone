"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  Search,
  Bookmark,
  Share2,
  Facebook,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function SocialPost() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Profile Section */}
      <div className="flex items-center gap-3 p-4">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AAA6jnJrdVTsdORGwk5onvntLI1ehp.png"
            alt="User avatar"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">Sochima</h2>
          <p className="text-sm text-gray-400">Sochii22</p>
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="flex items-center gap-4 px-4 py-2">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          <span>236</span>
        </div>
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5" />
          <span>3.2k</span>
        </div>
        <div className="flex items-center gap-2">
          <Bookmark className="w-5 h-5" />
          <span>50</span>
        </div>
        <div className="flex items-center gap-2">
          <Share2 className="w-5 h-5" />
          <span>1k</span>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <TikTokIcon className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <WhatsAppIcon className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
        </div>
      </div>

      {/* Link Section */}
      <div className="mx-4 my-2 bg-gray-900 rounded-lg p-3 flex justify-between items-center">
        <span className="text-sm text-gray-400 truncate">
          https://www.safezone.com/design/KOXfbP3f6yuCig4...
        </span>
        <Button variant="ghost" size="sm" className="text-blue-500">
          Copy
        </Button>
      </div>

      {/* Comments Section */}
      <div className="p-4">
        <h3 className="text-gray-400 mb-4">Comments (23)</h3>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-3 mb-6">
            <Avatar className="h-8 w-8">
              <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">User{i + 1}</span>
                <span className="text-gray-400 text-sm">22h</span>
              </div>
              <p className="text-sm mb-1">
                This is so bad. I hope fire service gets here on time.
              </p>
              <div className="flex items-center gap-4">
                <button className="text-sm text-gray-400">Reply</button>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm text-gray-400">8098</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* App Download Section */}
      <div className="mt-auto p-4 flex flex-col items-center gap-4">
        <p className="text-blue-500">Download app to engage</p>
        <div className="flex gap-4">
          <Image
            src="/placeholder.svg?height=40&width=135"
            alt="Get it on Google Play"
            width={135}
            height={40}
            className="h-10"
          />
          <Image
            src="/placeholder.svg?height=40&width=135"
            alt="Download on the App Store"
            width={135}
            height={40}
            className="h-10"
          />
        </div>
      </div>
    </div>
  );
}

// Custom Icons
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}
