
import { create } from "zustand";

interface Modal {

    clickedModal: string | null,
    setTheClickedModal: (modal: string) => void;
}

const useHandleModal = create<Modal>((set) => ({
    clickedModal: null,
    setTheClickedModal: (modal) => set({ clickedModal: modal }),
}))

export default useHandleModal