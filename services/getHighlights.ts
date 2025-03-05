import axiosInstance from "@/lib/axios";
import { Post } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const getHighlights = async () => {
  try {
    const highlights = await axiosInstance.get("/posts/no-auth");
    return (highlights.data.items as Post) || [];
  } catch (error) {
    console.log(error);
  }
};

export const useGetHighlights = () => {
  return useQuery({
    queryKey: ["highlights"],
    queryFn: getHighlights,
  });
};
