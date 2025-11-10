import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import 'react-phone-number-input/style.css'
import { useUserAffiliateInfoForm } from "../tanstack/useUserAffiliateInfoForm";
import github from "../assets/gihub.png";


const UserContactAffiliateInfo: React.FC = () => {
  const navigate = useNavigate();

  const [country, setCountry] = useState<any>(null); // Allow null initial state
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { mutate } = useUserAffiliateInfoForm();
  const [inviteUrl, setInviteUrl] = useState<string>('');

  useEffect(() => {
    const isCompleted = localStorage.getItem("isCompleted") || false;
    if (isCompleted) {
      navigate("/earn", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!country || !phoneNumber) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSubmitting(true);

    mutate({
      phoneNumber,
      country: country?.name,
    }, {
      onSuccess: (data) => {
        const url = data?.inviteUrl;
        if (url) {
          setInviteUrl(url);               // store it
          window.open(url, '_blank', 'noopener,noreferrer'); // open WhatsApp
        }
        localStorage.setItem("isCompleted", "true");
        navigate('/earn');
        setSubmitting(false);
       // <-- remove or comment out
      },
      onError: () => {
        setError("Something went wrong. Please try again.");
        setSubmitting(false);
      }
    });
    
      
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-lg w-full space-y-8">
        <div className="text-center">
          <img
            src={github}
            alt="Welcome"
            className="mx-auto h-32 w-auto mb-6"
          />
          <h1 className="text-3xl  font-extrabold text-gray-900 tracking-tight">
            Just one more step!
          </h1>
          <p className="mt-2 text-md text-gray-600">
            We need a few details to set up your affiliate account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <CountrySelect
                onChange={setCountry}
                placeHolder="Select your country"
                containerClassName="w-full"
                inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                value={phoneNumber}
                onChange={setPhoneNumber}
                placeholder="Enter your phone number"
                containerClass="w-full"
                inputClass="!w-full !text-sm !py-2 px-3 !border !border-gray-300 !rounded-md !shadow-sm focus:!border-orange-500 focus:!ring-orange-500"
                buttonClass="!border !border-gray-300 !rounded-l-md"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-md bg-green-50 p-2 text-center">
            <div className="flex">
              <div className="flex-shrink-0">
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">After submitting, you’ll be invited to our private WhatsApp group for guidance on earning with Genomac.</p>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={submitting}
              className="group relative w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-orange-400 disabled:cursor-not-allowed"
            >
              {submitting ? "Setting up your account..." : "Complete Setup"}
            </button>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            Your information is safe with us. We'll only use it for affiliate-related communication
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserContactAffiliateInfo;

// Map country names to ISO codes used by PhoneInput (extend as needed)
