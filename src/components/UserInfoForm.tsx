import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { countries } from "../data/Countries";
import { useEffect, useRef, useState } from "react";
import useUserForumForm from "../tanstack/useUserForumForm";

export type UserInfoInputs = {
  topic: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  reason: string;
};

const UserInfoForm = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<UserInfoInputs>();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);
  const { mutate, isPending } = useUserForumForm()
  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  const onSubmit: SubmitHandler<UserInfoInputs> = (data) => {
    mutate(data);
  };


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#ff7700]">Meeting Registration</h1>
        <p className="mt-2 text-gray-600">Please provide your information</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              {...register("firstName", { required: true })}
              id="firstName"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:ring-[#ff7700] focus:border-[#ff7700] sm:text-sm"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              {...register("lastName", { required: true })}
              id="lastName"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:ring-[#ff7700] focus:border-[#ff7700] sm:text-sm"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:ring-[#ff7700] focus:border-[#ff7700] sm:text-sm"
            placeholder="john.doe@example.com"
          />
        </div>

        <div ref={dropdownRef}>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <Controller
            control={control}
            name="country"
            rules={{ required: true }}
            render={({ field }) => (
              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-md cursor-pointer flex justify-between items-center focus:ring-[#ff7700] focus:border-[#ff7700] sm:text-sm"
                >
                  {field.value || "Select your country"}
                  <span className={`ml-2 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full px-3 py-2 border-b border-gray-300 bg-gray-50 text-sm focus:outline-none"
                    />
                    {filteredCountries.length ? (
                      filteredCountries.map((country, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            field.onChange(country);
                            setIsDropdownOpen(false);
                            setSearch("");
                          }}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          {country}
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-gray-500 text-sm">No countries found</div>
                    )}
                  </div>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
            Why do you want to attend?
          </label>
          <textarea
            {...register("reason", { required: true })}
            id="reason"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:ring-[#ff7700] focus:border-[#ff7700] sm:text-sm"
            placeholder="Your interest in the meeting..."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:opacity-50 cursor-pointer bg-[#ff7700] hover:bg-[#e66a00] focus:ring-2 focus:ring-offset-2 focus:ring-[#ff7700] ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {isPending ? "Submitting..." : "Register for Meeting"}
          </button>
            <p className="text-[.7rem] text-center text-gray-700 mt-[.8rem]">You would be redirected to our official whatsapp platform</p>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;
