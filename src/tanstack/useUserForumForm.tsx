import apiClient from "../utills/apiClient";
import { useMutation } from "@tanstack/react-query";
import type { UserInfoInputs } from "../components/UserInfoForm";

const postApplicantForm = async (applicantData: UserInfoInputs): Promise<void> => {
    console.log(applicantData);
    try {
        const res = await apiClient.post("/api/forum-registration", { applicantData });
        if (res.status === 200 || res.status === 201 || res.status === 302) {
            window.location.href = "https://chat.whatsapp.com/KTewtF2OybCAoLjHH7wfmH";
        }
    } catch (erorr) {
        console.log(erorr)
    }
}

const useUserForumForm = () => {
    return useMutation({
        mutationFn: postApplicantForm,
    })
}


export default useUserForumForm;