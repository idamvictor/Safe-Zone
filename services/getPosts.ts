import axiosInstance from "@/lib/axios";
import { Post } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const getPosts = async () => {
  try {
    const posts = await axiosInstance.get("/posts/no-auth");
    return (posts.data.items as Post) || [];
  } catch (error) {
    console.log(error);
  }
};

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};