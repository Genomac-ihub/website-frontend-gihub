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

const getUserAuthorised = async ({ data, type }: AuthVariable): Promise<ApiResponse> => {
  const url: string = type === "login" ? "/auth/api/sign-in" : "/auth/api/sign-up";
  try {
    const response = await apiClient.post(url, data);
    console.log(response.data?.message);
    return response.data;
  } catch (error) {
    const backendError = { success: false, message: "check your credentials!!"};
    throw new Error(backendError.message)

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
