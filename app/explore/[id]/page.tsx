import SocialPost from "@/components/SocialPost";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
return (
  <div className=" container mx-auto flex gap-4 motion-preset-slide-right-md">
    {/* i hid the id here */}
    <div className="hidden">{id}</div>
    <div className="w-[100%] md:basis-5/6">
      <VideoPlayer />
    </div>
    <div className="hidden md:flex basis-1/6">
      <SocialPost />
    </div>
  </div>
);}

