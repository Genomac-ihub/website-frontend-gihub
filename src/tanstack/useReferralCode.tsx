// getReferralCode()
import { useQuery } from "@tanstack/react-query";
import apiClient from "../utills/apiClient";
import type { AxiosError } from "axios";

// Normalizes various possible backend shapes into a single string code
type ReferralApiResponse = {
  success?: boolean;
  data?: { code?: string } | string;
  code?: string;
  referralCode?: string;
  message?: string;
};

export const getReferralCode = async (): Promise<string> => {
  try {
    const response = await apiClient.post<ReferralApiResponse>("api/generate-referral-code", {});
    console.log("GASOLINE")
    console.log(response.data?.data)
    return response.data?.data as string;
  } catch (error) {
    console.error("Failed to generate referral code", error);
    throw error;
  }
};

const useReferralCode = () => {
  return useQuery<string, AxiosError>({
    queryKey: ["referralCode"],
    queryFn: getReferralCode,
    retry: (failureCount, error) => {
      if ((error as AxiosError).response?.status === 401) return false; // don't retry on auth
      return failureCount < 2;
    },
    staleTime: 1000 * 60 * 10,
  });
};

export default useReferralCode;