// src/tanstack/useForm.tsx
import { useMutation } from "@tanstack/react-query";
import apiClient from "../utills/apiClient";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  educationBackground: string;
  motivationCommitment: string;
  scholarshipReason: string;
  canCommit: string;
  hoursPerWeek: string;
  financialCommitment: string;
}

const postForm = async (formData: FormData) => {
  try {
    const res = await apiClient.post("/api/v1/applicant-form", formData); // Send formData directly
    if (res.status === 200 || res.status === 201 || res.status === 302) {
      return res.data; // Return the response data for use in onSuccess
    } else {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error; // Rethrow to let TanStack Query handle the error
  }
};

const useApplicantForm = () => {
  return useMutation({
    mutationFn: postForm,
  });
};

export default useApplicantForm;