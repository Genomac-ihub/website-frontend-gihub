import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import useVerifyAccount from "../tanstack/useVerifiyAccount"
import useHandleModal from "../zustard/useHandleModal"
const VerificationPage = () => {
  const navigate = useNavigate()
  const { mutate, isPending, error, isError } = useVerifyAccount()
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])
  const { setTheClickedModal } = useHandleModal()
  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return // only one char per input
    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const code = verificationCode.join("")

    if (code.length !== 6) {
      alert("Please enter all 6 digits of your verification code")
      return
    }
    console.log(code)
    // call your mutation here:
    mutate(code)
  }
  const handleResendCode = () => {
    console.log("Resending verification code")
    // Your resend logic here
  }

  return (
    <div className="w-[400px] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#ff7700]">G-IHUB</h1>
          <p className="mt-2 text-gray-600">Verify your account</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              We've sent a 6-digit verification code to your email. Please enter the code below.
            </p>

            <div className="flex justify-center space-x-2 mb-4">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-[#ff7700] focus:border-[#ff7700]"
                />
              ))}
            </div>

            {/* Display error from mutation */}
            {
              isError && (
                <div className="flex items-center justify-center text-[.8rem] mt-[.7rem] text-red-500 ">
                  {isError && <p className="text-red-500">{error.message}</p>}
                </div>
              )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff7700] hover:bg-[#e66a00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff7700] ${isPending && "opacity-50"}`}
            >
              {isPending ? "Verifying..." : "Verify"}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Didn't receive a code?{" "}
            <button
              onClick={handleResendCode}
              className="font-medium text-[#ff7700] hover:text-[#e66a00] cursor-pointer"
            >
              Resend code
            </button>
          </p>
        </div>

        <div className="text-center mt-2">
          <div onClick={() => setTheClickedModal("login")} className="text-sm cursor-pointer font-medium text-[#ff7700] hover:text-[#e66a00]">
            Back to login
          </div>
        </div>
      </div>
    </div >
  )
}

export default VerificationPage
