import { useQuery } from "@tanstack/react-query";
import apiClient from "../utills/apiClient";
import type { AxiosError } from "axios";

// Function to fetch videos with tag
export const getVideo = async (tag: string) => {
  try {
    const response = await apiClient.get(`/api/v1/video/tag/${tag}`);
    console.log(response.data.data)
    return response.data.data;
  } catch (error) {
  }
};

// Custom hook that takes tag as a parameter
const useFetchVideoForUser = (tag: string) => {
  return useQuery({
    queryKey: ["videos", tag], // tag included to cache per-tag
    queryFn: () => getVideo(tag), // pass tag to fetch function
    retry: (failureCount, error) => {
      if ((error as AxiosError).response?.status === 404) return false;
      return failureCount < 3;
    },
    enabled: !!tag, // only fetch when tag is available
  });
};

export default useFetchVideoForUser;
