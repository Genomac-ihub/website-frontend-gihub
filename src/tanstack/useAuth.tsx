import { useMutation } from "@tanstack/react-query";
import apiClient from "../utills/apiClient";
import type { SignInInputs } from "../pages/LoginPage";
import type { SignUpInputs } from "../pages/SignUpPage";
import useHandleModal from "../zustard/useHandleModal";
import { useQueryClient } from "@tanstack/react-query";

interface ApiResponse {
  success: boolean;
  message?: string

}

type AuthVariable = {
  data: SignInInputs | SignUpInputs;
  type: string;
};

const BACKEND_VERIFICATION_FAIL_MSG = "We couldn't send the verification email right now. Please try again later.";
const FRONTEND_VERIFICATION_FAIL_MSG = "We’re having trouble sending the verification email right now. Please try again later or use another login method.";

const getUserAuthorised = async ({ data, type }: AuthVariable): Promise<ApiResponse> => {
  console.log(type)
  console.log("checking for the type")
  const url: string = type === "login" ? "/auth/api/sign-in" : "/auth/api/sign-up";
  console.log(url)
  try {
    const response = await apiClient.post(url, data);
    console.log(response.data?.message);
    return response.data;
  } catch (error: any) {
    const backendMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message;

    const message =
      backendMessage === BACKEND_VERIFICATION_FAIL_MSG
        ? FRONTEND_VERIFICATION_FAIL_MSG
        : backendMessage || "check your credentials!!";

    throw new Error(message)
  };
}
const useAuth = () => {
  const { setTheClickedModal } = useHandleModal();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: getUserAuthorised,
    onSuccess: (data) => {
      // console.log(data)
      if (data?.message === "Code was sent to your email") {
        setTheClickedModal("verification");
      }
      queryClient.invalidateQueries({ queryKey: ["userDetail"] })
     
    },
  });
};

export default useAuth;
