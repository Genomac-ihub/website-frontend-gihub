import useHandleModal from "../zustard/useHandleModal"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import VerificationPage from "../pages/VerificationPage"
import useUserDetail from "../tanstack/useUserDetail"
import { useEffect, useState } from "react"
import UserInfoForm from "./UserInfoForm"

const ModalContainer = () => {
  const { clickedModal, setTheClickedModal } = useHandleModal()
  const { data: userDetail } = useUserDetail()

  const [showingModal, setShowingModal] = useState(clickedModal)
  const [fadeState, setFadeState] = useState("opacity-100 translate-y-0")

  useEffect(() => {
    if (!clickedModal) {
      setFadeState("opacity-0 translate-y-4")
      setTimeout(() => setShowingModal(null), 300)
    } else {
      if (showingModal) {
        // Fade out current then fade in new
        setFadeState("opacity-0 translate-y-4")
        setTimeout(() => {
          setShowingModal(clickedModal)
          setFadeState("opacity-100 translate-y-0")
        }, 150)
      } else {
        setShowingModal(clickedModal)
        setFadeState("opacity-100 translate-y-0")
      }
    }
  }, [clickedModal])

  const getModalContent = () => {
    switch (showingModal) {
      case "login":
        return <LoginPage />
      case "signUp":
        return <SignUpPage />
      case "verification":
        return <VerificationPage />
      case "userInfoForm":
        return <UserInfoForm />
      default:
        return null
    }
  }

  return (
    clickedModal && showingModal ? (
      <div className="fixed inset-0 z-[1000] flex justify-center items-center">
        {/* Backdrop */}
        <div
          onClick={() => setTheClickedModal("")}
          className="absolute inset-0 opacity-50 backdrop-blur bg-black z-0 cursor-pointer"
        ></div>

        {/* Modal content */}
        <div
          className={`
            z-20 relative 
            transition-all duration-300 ease-in-out 
            ${fadeState}
          `}
        >
          {/* Close button - visible only on mobile */}
          <button
            onClick={() => setTheClickedModal("")}
            className="absolute top-15 right-4 z-30 block md:hidden text-black bg-white rounded-full p-2 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {getModalContent()}
        </div>
      </div>
    ) : null
  )
}

export default ModalContainer
