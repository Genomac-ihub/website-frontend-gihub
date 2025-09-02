import { create } from "zustand";

interface UserDetail {

    id: string,
    firstName: string,
    lastName: string,
    role: string,
    tag: string

}
interface Modal {

    userDetails: UserDetail | null,
    setTheUserDetails: (modal: UserDetail) => void;
}

const useUserDetail = create<Modal>((set) => ({
    userDetails: null,
    setTheUserDetails: (data) => set({ userDetails: data }),
}))

export default useUserDetail