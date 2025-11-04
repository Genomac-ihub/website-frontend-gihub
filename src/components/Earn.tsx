// Earn component
import React, { useState } from "react";
import useReferralCode from "../tanstack/useReferralCode";

// Earn component
const Earn = () => {
  const { data: affiliateCode, isLoading, isError } = useReferralCode();
  const [copied, setCopied] = useState<{ code: boolean; link: boolean }>({ code: false, link: false });

  const isReferralComingSoon = true;
  const affiliateLink = isReferralComingSoon
    ? ""
    : affiliateCode
      ? `https://portal.genomach.com/auth/signin?ref=${affiliateCode}`
      : "";

  const copyToClipboard = async (text: string, key: "code" | "link") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 1500);
    } catch { }
  };

  const earnedUSD = 0;
  const thresholdUSD = 10;
  const progress = Math.min(100, Math.round((earnedUSD / thresholdUSD) * 100));
  const referralsCount = 0; // replace with real data when available

  return (
    <div className="w-full px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8 py-10">
      <div className="flex mt-20 lg:mt-10 flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Refer a friend and earn</h1>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium">Affiliate Code:</span>
          <span className="px-2 py-1 rounded-md bg-black text-white text-xs font-bold">
            {isLoading ? "Generating..." : isError ? "Unavailable" : affiliateCode}
          </span>
          <button
            disabled={!affiliateCode}
            onClick={() => affiliateCode && copyToClipboard(affiliateCode, "code")}
            className={`px-3 py-1 rounded-md text-white text-xs font-semibold ${affiliateCode ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"
              }`}
            aria-live="polite"
          >
            {copied.code ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <p className="text-sm text-center md:text-left text-gray-600 mb-8">
        Invite friends to Genomac, and earn when they join.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl p-6 bg-gradient-to-br from-orange-50 to-orange-100 ring-1 ring-orange-200 shadow-sm">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-2">Your Affiliate Code</p>
              <div className="flex  max-sm:flex-col flex-row gap-3">
                <input
                  readOnly
                  value={isLoading ? "" : affiliateCode ?? ""}
                  placeholder={isLoading ? "Generating your code..." : "No code found"}
                  className="flex-1 px-3 py-2 rounded-md bg-white ring-1 ring-orange-200 text-sm"
                />
                <button
                  disabled={!affiliateCode}
                  onClick={() => affiliateCode && copyToClipboard(affiliateCode, "code")}
                  className={`px-3 py-2 rounded-md text-white text-xs font-semibold ${affiliateCode ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                  {copied.code ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            {/* Referral link section */}
            <div>
              <p className="text-sm font-medium mb-2">Your Referral Link</p>
              <div className="flex max-sm:flex-col  flex-row gap-3">
                <input
                  readOnly
                  value={""}
                  placeholder={"Coming soon"}
                  className="flex-1 px-3 py-2 rounded-md bg-white text-sm border border-orange-200"
                />

                <button
                  disabled
                  className="px-3 py-1 rounded-md text-white text-xs font-semibold bg-gray-400 cursor-not-allowed opacity-50"
                  aria-disabled="true"
                >
                  Copy
                </button>

              </div>
            </div>

            {/* Share buttons row */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                disabled
                aria-disabled="true"
                className="px-3 py-2 text-[.8rem] rounded-md bg-gray-200 text-gray-500 opacity-50 cursor-not-allowed pointer-events-none"
              >
                Share on X
              </button>
              <button
                disabled
                aria-disabled="true"
                className="px-3 py-2 text-[.8rem] rounded-md bg-gray-200 text-gray-500 opacity-50 cursor-not-allowed pointer-events-none"
              >
                Share on LinkedIn
              </button>
              <button
                disabled
                aria-disabled="true"
                className="px-3 py-2 text-[.8rem] rounded-md bg-gray-200 text-gray-500 opacity-50 cursor-not-allowed pointer-events-none"
              >
                Share on Facebook
              </button>
              <button
                disabled
                aria-disabled="true"
                className="px-3 py-2 text-[.8rem]   rounded-md bg-gray-200 text-gray-500 opacity-50 cursor-not-allowed pointer-events-none"
              >
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>

        <aside className="rounded-xl p-6 bg-white ring-1 ring-gray-200 shadow-sm">
          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <p className="text-sm text-gray-600">Referrals</p>
            <div
              className={`w-20 h-20 rounded-full border-2 flex items-center justify-center text-3xl font-extrabold transition-colors ${referralsCount > 0 ? 'border-orange-500 text-black' : 'border-gray-300 text-gray-500'}`}
              aria-label={`Total referrals: ${referralsCount}`}
              role="status"
            >
              {referralsCount}
            </div>
            <p className="text-xs text-gray-500">Total invites joined</p>
          </div>
        </aside>


      </div>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl p-6 ring-1 ring-gray-200 bg-white">
          <p className="font-semibold">1. Share</p>
          <p className="text-sm text-gray-600">Send your referral link to friends and colleagues.</p>
        </div>
        <div className="rounded-xl p-6 ring-1 ring-gray-200 bg-white">
          <p className="font-semibold">2. They join</p>
          <p className="text-sm text-gray-600">When they sign up & pay with your link, it’s tracked.</p>
        </div>
        <div className="rounded-xl p-6 ring-1 ring-gray-200 bg-white">
          <p className="font-semibold">3. You earn</p>
          <p className="text-sm text-gray-600">Get rewards as your referrals pay for the course.</p>
        </div>
      </section>
    </div>
  );
}

export default Earn;
