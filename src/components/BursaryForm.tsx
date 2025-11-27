// src/components/Form.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useApplicantForm from "../tanstack/useForm";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  educationBackground: string;
  scholarshipReason: string;
  scholarshipReason2: string;
  canCommit1: string;
  canCommit2: string;
  canCommit3: string;
  hoursPerWeek: string;
  scholarshipAwareness: boolean;
  paymentAbility: boolean;
  financialCommitment: string;
}

interface FormErrors {
  [key: string]: string;
}

const BursaryForm = () => {
  const [applicantForm, setApplicantForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    educationBackground: "",
    scholarshipReason: "",
    scholarshipReason2: "",
    canCommit1: "",
    canCommit2: "",
    canCommit3: "",
    hoursPerWeek: "",
    scholarshipAwareness: false,
    paymentAbility: false,
    financialCommitment: "",
  });
  console.log(applicantForm);
  const [countries, setCountries] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const { mutate, isPending, isError, error } = useApplicantForm();
  // Reusable input styling
  const inputBase =
    "border border-[#DFDFDF] p-2.5 rounded-lg placeholder:text-sm focus:outline-none dark:bg-[#1a1a1a] dark:border-gray-600";
  const focusStyle = "focus:border-[#FF7700] focus:ring-1 focus:ring-[#FF7700]";
  const errorStyle = "border-red-500 ring-1 ring-red-500";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name"
        );
        const countryNames = response.data
          .map((country: any) => country.name.common)
          .sort();
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setApplicantForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!applicantForm.firstName) errors.firstName = "First Name is required";
    if (!applicantForm.lastName) errors.lastName = "Last Name is required";
    if (!applicantForm.email) errors.email = "Email is required";
    if (!applicantForm.country) errors.country = "Country is required";
    if (!applicantForm.canCommit1)
      errors.canCommit = "Commitment selection is required";
    if (!applicantForm.canCommit2)
      errors.canCommit = "Commitment selection is required";
    if (!applicantForm.scholarshipAwareness)
      errors.scholarshipAwareness =
        "Scholarship awareness confirmation is required";
    if (!applicantForm.paymentAbility)
      errors.paymentAbility = "Payment ability confirmation is required";
    // Basic email format validation
    if (
      applicantForm.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantForm.email)
    )
      errors.email = "Invalid email format";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);
    setFormErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitStatus("error");
      return;
    }

    // Combine scholarshipAwareness and paymentAbility into financialCommitment
    const financialCommitment = `Scholarship Awareness: ${
      applicantForm.scholarshipAwareness ? "Yes" : "No"
    }, Payment Ability: ${applicantForm.paymentAbility ? "Yes" : "No"}`;

    // Prepare payload matching backend schema
    const payload = {
      firstName: applicantForm.firstName,
      lastName: applicantForm.lastName,
      email: applicantForm.email,
      country: applicantForm.country,
      educationBackground: applicantForm.educationBackground,
      scholarshipReason: applicantForm.scholarshipReason,
      scholarshipReason2: applicantForm.scholarshipReason2,
      canCommit1: applicantForm.canCommit1,
      canCommit2: applicantForm.canCommit2,
      canCommit3: applicantForm.canCommit3,
      hoursPerWeek: applicantForm.hoursPerWeek,
      financialCommitment: financialCommitment,
    };

    mutate(payload, {
      onSuccess: () => {
        setSubmitStatus("success");
        console.log("Form submitted successfully:", payload);
        setApplicantForm({
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          educationBackground: "",
          scholarshipReason: "",
          scholarshipReason2: "",
          canCommit1: "",
          canCommit2: "",
          canCommit3: "",
          hoursPerWeek: "",
          scholarshipAwareness: false,
          paymentAbility: false,
          financialCommitment: "",
        });
        // Using navigate for safer redirect
        setTimeout(() => {
          window.open(
            "https://chat.whatsapp.com/KqU8e7lmQDX1FzkwP5tVBd",
            "_blank"
          );
        }, 1000);
      },
      onError: (err: any) => {
        setSubmitStatus("error");
        const backendErrors =
          err.response?.data?.message || "Failed to submit application.";
        setFormErrors({ backend: backendErrors });
        console.error("Error submitting form:", err);
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto md:py-20 p-6 dark:bg-[#040404] dark:text-white transition duration-400">
      <h2 className="font-semibold md:text-4xl text-2xl text-center mb-8">
        SCHOLARSHIP APPLICATION
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          {/* Personal Info */}
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-2xl text-[#FF7700]">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">First Name</label>
                <input
                  className={`${inputBase} ${
                    formErrors.firstName ? errorStyle : focusStyle
                  } w-full`}
                  type="text"
                  name="firstName"
                  value={applicantForm.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="Type your first name"
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm">{formErrors.firstName}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Last Name</label>
                <input
                  className={`${inputBase} ${
                    formErrors.lastName ? errorStyle : focusStyle
                  } w-full`}
                  type="text"
                  name="lastName"
                  value={applicantForm.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Type your last name"
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm">{formErrors.lastName}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Email</label>
                <input
                  className={`${inputBase} ${
                    formErrors.email ? errorStyle : focusStyle
                  } w-full`}
                  type="email"
                  name="email"
                  value={applicantForm.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Type your email"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div ref={dropdownRef}>
                <label className="block text-lg font-medium text-white mt-1 mb-1">
                  Country
                </label>
                <div className="relative">
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full px-3 py-2 rounded-md cursor-pointer flex justify-between items-center sm:text-sm ${
                      formErrors.country ? errorStyle : "border border-gray-300"
                    } bg-white h-11 text-gray-900 dark:bg-[#1a1a1a] dark:text-white`}
                  >
                    <span className="truncate">
                      {applicantForm.country || "Select your country"}
                    </span>
                    <span
                      className={`ml-2 transform transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full bg-white dark:bg-[#0b1220] mt-1 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto text-gray-900 dark:text-white">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={`${inputBase} w-full border-b-0 rounded-b-none bg-white dark:bg-[#071026] text-sm`}
                      />
                      {filteredCountries.length ? (
                        filteredCountries.map((country, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setApplicantForm((prev) => ({
                                ...prev,
                                country,
                              }));
                              setIsDropdownOpen(false);
                              setSearch("");
                            }}
                            className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-sm"
                          >
                            {country}
                          </div>
                        ))
                      ) : (
                        <div className="px-3 py-2 text-gray-500 dark:text-gray-400 text-sm">
                          No countries found
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Education Background */}
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-2xl text-[#FF7700]">
              Education Background
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">
                Educational Background (Field of Study or Work Experience)
              </label>
              <textarea
                className={`${inputBase} h-32 w-full ${focusStyle}`}
                name="educationBackground"
                value={applicantForm.educationBackground}
                onChange={handleInputChange}
                placeholder="Type here..."
              />
            </div>
            <div>
              <label className="text-lg font-medium">
                Do you have any experience with programming?
              </label>
              <div>
                <select
                  name="canCommit1"
                  value={applicantForm.canCommit1}
                  onChange={handleInputChange}
                  className={`${inputBase} w-full ${
                    formErrors.canCommit ? errorStyle : focusStyle
                  }`}
                  required
                >
                  <option value="">Choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-lg font-medium">
                If you select yes, which languages do you use?
              </label>
              <div>
                <select
                  name="canCommit2"
                  value={applicantForm.canCommit2}
                  onChange={handleInputChange}
                  className={`${inputBase} w-full ${
                    formErrors.canCommit ? errorStyle : focusStyle
                  }`}
                  required
                >
                  <option value="">Choose</option>
                  <option value="python">Python</option>
                  <option value="R">R</option>
                  <option value="bash">Bash</option>
                  <option value="">None</option>
                </select>
              </div>
            </div>
          </div>

          {/* Motivation & Commitment */}
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-2xl text-[#FF7700]">Commitment</h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">
                  Why are you interested in becoming a computational biologist
                  and bioinformatics data science engineer?
                </label>
                <textarea
                  className={`${inputBase} h-32 w-full ${focusStyle}`}
                  name="scholarshipReason"
                  value={applicantForm.scholarshipReason}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">
                  Why do you think the scholarship should be awarded to you and
                  how will it help you achieve your career or research goals?
                </label>
                <textarea
                  className={`${inputBase} h-32 w-full ${focusStyle}`}
                  name="scholarshipReason2"
                  value={applicantForm.scholarshipReason2}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">
                  Can you commit to completing this 5-month intensive program
                  with hands-on projects and mentorship
                </label>
                <select
                  name="canCommit3"
                  value={applicantForm.canCommit3}
                  onChange={handleInputChange}
                  className={`${inputBase} w-full ${
                    formErrors.canCommit ? errorStyle : focusStyle
                  }`}
                  required
                >
                  <option value="">Choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {formErrors.canCommit && (
                  <p className="text-red-500 text-sm">{formErrors.canCommit}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">
                  Enter your referral code if you have any
                </label>
                <input
                  name="hoursPerWeek"
                  value={applicantForm.hoursPerWeek}
                  onChange={handleInputChange}
                  className={`${inputBase} w-full ${
                    formErrors.email ? errorStyle : focusStyle
                  }`}
                  placeholder=""
                />
                {/* <select
                  name="hoursPerWeek"
                  value={applicantForm.hoursPerWeek}
                  onChange={handleInputChange}
                  className="border border-[#DFDFDF] p-2.5 rounded-lg dark:bg-[#1a1a1a] dark:border-gray-600 dark:text-white"
                >
                  <option value="">Choose</option>
                  <option value="5-10">5 - 10</option>
                  <option value="10-15">10 - 15</option>
                  <option value="15-20">15 - 20</option>
                </select> */}
              </div>
            </div>
          </div>

          {/* Financial Commitment */}
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-2xl text-[#FF7700]">
              Financial Commitment
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="scholarshipAwareness"
                  checked={applicantForm.scholarshipAwareness}
                  onChange={handleInputChange}
                  className={`accent-[#FF7700] w-5 h-5 ${
                    formErrors.scholarshipAwareness ? "ring-1 ring-red-500" : ""
                  }`}
                  required
                />
                <label className="text-lg">
                  Are you aware that this bursary waiver covers 90% of the
                  program cost, and you will be required to pay the remaining
                  $500?
                </label>
                {formErrors.scholarshipAwareness && (
                  <p className="text-red-500 text-sm">
                    {formErrors.scholarshipAwareness}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="paymentAbility"
                  checked={applicantForm.paymentAbility}
                  onChange={handleInputChange}
                  className={`accent-[#FF7700] w-5 h-5 ${
                    formErrors.paymentAbility ? "ring-1 ring-red-500" : ""
                  }`}
                  required
                />
                <label className="text-lg">
                  If selected, are you willing and able to pay the compulsory
                  $500 (10%) commitment fee? (Installment is allowed)
                </label>
                {formErrors.paymentAbility && (
                  <p className="text-red-500 text-sm">
                    {formErrors.paymentAbility}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submission Status Messages */}
          {isPending && (
            <p className="text-center text-blue-500">
              Submitting application...
            </p>
          )}
          {submitStatus === "success" && (
            <p className="text-center text-green-500">
              Application submitted successfully! Redirecting...
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-center text-red-500">
              {formErrors.backend ||
                "Failed to submit application. Please check the form and try again."}
            </p>
          )}

          <div className="flex justify-between mt-8">
            <Link to="/">
              <button
                type="button"
                className={`border border-[#FF7700] px-6 py-2 text-[14px] rounded-full hover:bg-orange-400 hover:text-white transition duration-300 ${focusStyle}`}
              >
                Back to Home
              </button>
            </Link>

            <button
              type="submit"
              disabled={isPending}
              className={`bg-[#FF7700] px-6 py-2 rounded-full text-[14px] text-white hover:bg-orange-400 transition duration-300 shadow-sm ${
                isPending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isPending ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BursaryForm;
