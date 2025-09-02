import { useMutation } from "@tanstack/react-query";
import apiClient from "../utills/apiClient";
import useHandleModal from "../zustard/useHandleModal";
import { useQueryClient } from "@tanstack/react-query";

const verifyAccount = async (code: string) => {
    console.log(code)
    try {
        const response = await apiClient.post("/auth/verify-email", { token: code })
        console.log(response)
        return response.data
    } catch (error) {
        const backendError = { success: false, message: "check your credentials!!"};
        throw new Error(backendError.message)

    }
}

    const useVerifyAccount = () => {
        const queryClient = useQueryClient()
        const { setTheClickedModal } = useHandleModal()
        return useMutation({
            mutationFn: verifyAccount,
            onSuccess: () => {
                setTheClickedModal("")
                queryClient.invalidateQueries({ queryKey: ["userDetail"] })
            }
        })
    }

    export default useVerifyAccount