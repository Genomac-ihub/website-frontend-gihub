import { use } from "react"
import apiClient from "../utills/apiClient"
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface Reponse {
    success: boolean,
    message: string,
}
const getLoggedOut = async (): Promise<Response> => {
    const response = await apiClient.post("/auth/api/log-out")
    console.log(response)
    return response.data
}


export const useLogout = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: getLoggedOut,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ["userDetail"] })
        }
    })
}

export default useLogout