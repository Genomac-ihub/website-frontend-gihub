"use client"

import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import useAuth from "../tanstack/useAuth"
import useHandleModal from "../zustard/useHandleModal"

export type SignUpInputs = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const SignUpPage = () => {
  const { mutate, isPending, isError, error } = useAuth()
  const { setTheClickedModal } = useHandleModal()
  const { register, handleSubmit, watch } = useForm<SignUpInputs>()
  const onSubmit: SubmitHandler<SignUpInputs> = (data) => mutate({ data, type: "signUp" })

  return (

    <div className="sm:w-[90%] h-[100vh] sm:h-[100%] flex justify-center  flex-col sm:block md:w-[80%] mx-auto space-y-5 bg-white rounded-lg shadow-md p-6 sm:p-8 transition-all">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#ff7700]">G-IHUB</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">Create your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4" action="#" method="POST">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              {...register("firstName", { required: true })}
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ff7700] focus:border-[#ff7700] text-sm"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              {...register("lastName", { required: true })}
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ff7700] focus:border-[#ff7700] text-sm"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ff7700] focus:border-[#ff7700] text-sm"
            placeholder="john.doe@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ff7700] focus:border-[#ff7700] text-sm"
            placeholder="••••••••"
          />
          <p className="mt-2 text-[.7rem] text-gray-500">Password must be at least 8 characters long, include at least one letter, one number, and one special character</p>
        </div>

        <div className="pt-1">
          <button
            type="submit"
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff7700] hover:bg-[#e66a00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff7700] ${isPending && "opacity-50"}`}
          >
            {isPending ? "signing up..." : "Sign up"}
          </button>
          {isError && <p className="text-red-500 text-[.7rem] text-center mt-2">{error.message}</p>}
        </div>
      </form>

      <div className="relative mt-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div>
        <button
            type="button"
            onClick={() => {
              window.location.href = 'https://offficial-website-backend-production.genomac.io/auth/google';
            }}
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff7700] cursor-pointer transition-colors"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" width="24" height="24">
            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
              <path
                fill="#4285F4"
                d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
              />
              <path
                fill="#34A853"
                d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
              />
              <path
                fill="#FBBC05"
                d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
              />
              <path
                fill="#EA4335"
                d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
              />
            </g>
          </svg>
          Sign up with Google
        </button>
      </div> 
      <div className="text-center mt-3">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setTheClickedModal("login")}
            className="font-medium cursor-pointer text-[#ff7700] hover:text-[#e66a00] transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>

  )
}

export default SignUpPage
