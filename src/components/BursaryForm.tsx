// src/components/Form.jsx
import { useEffect, useState } from "react";
import { Select } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
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
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const { mutate, isPending, isError, error } = useApplicantForm();
  const navigate = useNavigate();

  const makeRequest = async () => {
    try {
      const isLocalhost =
        window?.location?.hostname === "localhost" ||
        window?.location?.hostname === "127.0.0.1";
      const url = isLocalhost
        ? "http://localhost:4000/countries"
        : "https://www.apicountries.com/countries";

      const response = await axios.get(url);
      const data = response?.data;

      // Support multiple possible response shapes: array, { data: [] }, etc.
      let items: any[] = [];
      if (Array.isArray(data)) {
        items = data;
      } else if (Array.isArray(data?.data)) {
        items = data.data;
      } else {
        console.warn("Unexpected countries response shape:", data);
        setCountries([]);
        return;
      }

      const countryNames = items
        .map((c: any) => {
          if (!c) return null;
          if (typeof c === "string") return c;
          return (
            c?.name?.common ??
            c?.name ??
            c?.country ??
            c?.country_name ??
            c?.common_name ??
            c?.official ??
            null
          );
        })
        .filter(Boolean)
        .sort((a: string, b: string) => a.localeCompare(b));

      setCountries(countryNames as string[]);
    } catch (err: any) {
      // Axios network errors in the browser often indicate CORS issues.
      if (axios.isAxiosError(err) && err.code === "ERR_NETWORK") {
        console.error(
          "Network error while fetching countries. This may be a CORS issue in the browser:",
          err.message
        );
      } else {
        console.error("Error fetching countries:", err);
      }
      // Ensure component continues to render even when fetch fails
      setCountries([]);
    }
  };

  useEffect(() => {
    makeRequest();
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
      scholarshipReason2: applicantForm.scholarshipReason,
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
            "https://chat.whatsapp.com/BRv9WFnVjDIC4Np6dkKPlF?mode=ac_t",
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
    <div className="md:py-20 md:px-24 p-6 dark:bg-[#040404] dark:text-white transition duration-400">
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
                  className={`border border-[#DFDFDF] p-2.5 rounded-lg placeholder:text-sm focus:outline-none dark:bg-[#1a1a1a] dark:border-gray-600 ${
                    formErrors.firstName ? "border-red-500" : ""
                  }`}
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
                  className={`border border-[#DFDFDF] p-2.5 rounded-lg placeholder:text-sm focus:outline-none dark:bg-[#1a1a1a] dark:border-gray-600 ${
                    formErrors.lastName ? "border-red-500" : ""
                  }`}
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
                  className={`border border-[#DFDFDF] p-2.5 rounded-lg placeholder:text-sm focus:outline-none dark:bg-[#1a1a1a] dark:border-gray-600 ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
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
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Country</label>
                <Select
                  name="country"
                  value={applicantForm.country}
                  onChange={handleInputChange}
                  className={`border border-[#DFDFDF] p-2.5 rounded-lg focus:outline-none dark:bg-[#1a1a1a] dark:border-gray-600 dark:text-white ${
                    formErrors.country ? "border-red-500" : ""
                  }`}
                  required
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Select>
                {formErrors.country && (
                  <p className="text-red-500 text-sm">{formErrors.country}</p>
                )}
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
                className="border border-[#DFDFDF] p-2.5 rounded-lg placeholder:text-sm h-32 dark:bg-[#1a1a1a] dark:border-gray-600"
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
                <Select
                  name="canCommit1"
                  value={applicantForm.canCommit1}
                  onChange={handleInputChange}
                  className={`border border-[#DFDFDF] p-2.5 rounded-lg dark:bg-[#1a1a1a] dark:border-gray-600 dark:text-white ${
                    formErrors.canCommit ? "border-red-500" : ""
                  }`}
                  required
                >
                  <option value="">Choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-lg font-medium">
                If you select yes, which languages do you use?
              </label>
              <div>
                <Select
                  name="canCommit2"
                  value={applicantForm.canCommit2}
                  onChange={handleInputChange}
                  className={`border border-[#DFDFDF] p-2.5 rounded-lg dark:bg-[#1a1a1a] dark:border-gray-600 dark:text-white ${
                    formErrors.canCommit ? "border-red-500" : ""
                  }`}
                  required
                >
                  <option value="">Choose</option>
                  <option value="python">Python</option>
                  <option value="R">R</option>
                  <option value="bash">Bash</option>
                  <option value="">None</option>
                </Select>
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
                  className="border border-[#DFDFDF] p-2.5 rounded-lg placeholder:text-sm h-32 dark:bg-[#1a1a1a] dark:border-gray-600"
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
                  className="border border-[#DFDFDF] p-2.5 rounded-lg placeholder:text-sm h-32 dark:bg-[#1a1a1a] dark:border-gray-600"
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
                <Select
                  name="canCommit3"
                  value={applicantForm.canCommit3}
                  onChange={handleInputChange}
                  className={`border border-[#DFDFDF] p-2.5 rounded-lg dark:bg-[#1a1a1a] dark:border-gray-600 dark:text-white ${
                    formErrors.canCommit ? "border-red-500" : ""
                  }`}
                  required
                >
                  <option value="">Choose</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Select>
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
                  className={`border border-[#DFDFDF] p-2.5 rounded-lg placeholder:text-sm focus:outline-none dark:bg-[#1a1a1a] dark:border-gray-600 ${
                    formErrors.email ? "border-red-500" : ""
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
                    formErrors.scholarshipAwareness ? "border-red-500" : ""
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
                    formErrors.paymentAbility ? "border-red-500" : ""
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
                className="border border-[#FF7700] md:px-4 text-[14px] p-2 md:text-[16px] px-2.5 rounded-full md:p-2 hover:bg-orange-400 hover:text-white transition duration-300"
              >
                Back to Home
              </button>
            </Link>

            <button
              type="submit"
              disabled={isPending}
              className={`bg-[#FF7700] rounded-full md:p-2.5 md:px-4 text-[14px] p-2 md:text-[16px] px-2.5 text-white hover:bg-orange-400 transition duration-300 ${
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
