import { useQuery } from "@tanstack/react-query";
import apiClient from "../utills/apiClient";
import type { AxiosError } from "axios";


interface User {
  _id: string;
  firstName: string;
  lastName: string;
  profilePicture?:string;
  tags: string;
}

interface ApiResponse {
  success: boolean;
  data: User;
}


export const getUserDetail = async (): Promise<User> => {
  try {
    const response = await apiClient.get<ApiResponse>(`api/user-detail`);
    console.log(response.data.data);
    return response.data.data; // this is the User object
  } catch (error) {
    console.error("Failed to get user detail", error);
    throw error; 
  }
};



const useUserDetail = () => {
  return useQuery({
    queryKey: ["userDetail"],
    queryFn: getUserDetail,
    retry: (failureCount, error) => {
      if ((error as AxiosError).response?.status === 401) return false;
      return failureCount < 3;
    },
  });
};

export default useUserDetail;
