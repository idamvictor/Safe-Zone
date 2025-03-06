import axiosInstance from "@/lib/axios";
import { Post } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const getPosts = async (page: number) => {
  try {
    const highlights = await axiosInstance.get(`/posts/no-auth?page=${page}`);
    return (highlights.data.items as Post) || [];
  } catch (error) {
    console.log(error);
  }
};

export const usePostsDataPagination = (page: number) => {
  return useQuery({
    queryKey: ["highlights", page],
    queryFn: () => getPosts(page),
  });
};
