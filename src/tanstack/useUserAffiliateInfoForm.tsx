import { useMutation } from "@tanstack/react-query";
import apiClient from "../utills/apiClient";

interface FormData {
    phoneNumber: string;
    country: string
}


const postUserAffiliateInfo = async (formData: FormData) => {
    try {
        console.log(formData);
        const res = await apiClient.post("/api/v1/affiliate", formData); // Send formData directly
        if (res.status === 200 || res.status === 201 || res.status === 302) {
            return res.data; // Return the response data for use in onSuccess
        } else {
            throw new Error(`Unexpected status code: ${res.status}`);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        throw error; // Rethrow to let TanStack Query handle the error
    }
}

export const useUserAffiliateInfoForm = () => {
    return useMutation({
        mutationFn: postUserAffiliateInfo,
    });
}