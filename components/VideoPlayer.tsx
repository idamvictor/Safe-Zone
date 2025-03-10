"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Share2,
  ChevronDown,
  ChevronUp,
  X,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetPost } from "@/services/getPost";

type videoPlayerProps = {
  postId: string;
};

export default function VideoPlayer({ postId }: videoPlayerProps) {
  const [showComments, setShowComments] = useState(false);

  const { data: postDetails, isFetching, error } = useGetPost(postId);
  console.log(postDetails, isFetching, error);

  return (
    <div className="flex flex-col h-screen text-white">
      <main className="flex-grow overflow-hidden relative">
        <VideoContent
          onCommentClick={() => setShowComments(true)}
          postImg={
            postDetails?.user.image ||
            "https://res.cloudinary.com/dyp8gtllq/image/upload/v1741567808/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8_w240-h480-rw_vnarhl.webp"
          }
        />
        {showComments && (
          <CommentSection onClose={() => setShowComments(false)} />
        )}
      </main>
    </div>
  );
}

function VideoContent({
  onCommentClick,
  postImg,
}: {
  onCommentClick: () => void;
  postImg: string;
}) {
  return (
    <>
      <div className="relative h-full flex justify-center items-center">
        {/* <video
        className="w-full h-full object-cover"
        src="/placeholder.mp4"
        loop
        autoPlay
        muted
      /> */}

        <Image
          src={
            postImg
          }
          alt="Video"
          //   layout="fill"
          objectFit="cover"
          width={412}
          height={737}
          className="w-full md:max-w-[412] h-[737] object-cover rounded-xl"
        />

        {/* Action Buttons */}
        <div className="absolute bottom-20 right-4 flex flex-col items-center space-y-4 md:hidden">
          <ActionButton icon={<Heart size={24} />} label="1.5M" />
          <ActionButton
            icon={<MessageCircle size={24} />}
            label="3315"
            onClick={onCommentClick}
          />
          <ActionButton icon={<Share2 size={24} />} label="5118" />
        </div>

        {/* Up and Down control buttons */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden md:block">
          <ChevronUp size={30} />
          <ChevronDown size={30} />
        </div>
      </div>
    </>
  );
}

function ActionButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button className="flex flex-col items-center" onClick={onClick}>
      <div className="bg-gray-800 rounded-full p-3">{icon}</div>
      <span className="text-sm mt-1">{label}</span>
    </button>
  );
}

function CommentSection({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
      <div className="flex-grow" onClick={onClose} />
      <div className="bg-zinc-900 rounded-t-3xl p-4 h-[70vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">3315 comments</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <ScrollArea className="flex-grow mb-4">
          <CommentList />
        </ScrollArea>
        <CommentInput />
      </div>
    </div>
  );
}

function CommentList() {
  const comments = [
    {
      id: 1,
      user: "JohnDoe",
      avatar: "/placeholder.svg",
      content: "This is hilarious! 😂",
      likes: 1234,
      time: "2d",
    },
    {
      id: 2,
      user: "JaneSmith",
      avatar: "/placeholder.svg",
      content: "I can totally relate to this!",
      likes: 567,
      time: "1d",
    },
    {
      id: 3,
      user: "BobJohnson",
      avatar: "/placeholder.svg",
      content: "You nailed it!",
      likes: 89,
      time: "5h",
    },
    // Add more comments as needed
  ];

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

function Comment({
  user,
  avatar,
  content,
  likes,
  time,
}: {
  user: string;
  avatar: string;
  content: string;
  likes: number;
  time: string;
}) {
  return (
    <div className="flex space-x-3">
      <Avatar>
        <AvatarImage src={avatar} alt={user} />
        <AvatarFallback>{user[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <p className="font-semibold">{user}</p>
        <p>{content}</p>
        <div className="flex items-center space-x-3 mt-1 text-sm text-gray-400">
          <span>{time}</span>
          <button className="flex items-center space-x-1">
            <Heart size={12} />
            <span>{likes}</span>
          </button>
          <button>Reply</button>
        </div>
      </div>
    </div>
  );
}

function CommentInput() {
  return (
    <div className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage src="/placeholder.svg" alt="Your avatar" />
        <AvatarFallback>You</AvatarFallback>
      </Avatar>
      <input
        type="text"
        placeholder="Add comment..."
        className="flex-grow bg-zinc-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button size="icon" variant="ghost">
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
}
