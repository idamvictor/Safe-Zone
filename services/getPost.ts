import axiosInstance from "@/lib/axios";
import { Post } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const getPost = async (postId: string) => {
  try {
    const post = await axiosInstance.get(`/posts/detail/${postId}`);
    return (post.data as Post) || [];
  } catch (error) {
    console.log(error);
  }
};

export const useGetPost = (postId: string) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
  });
};
