import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function NothingToSee() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>

      <div className="relative h-[100vh] w-full overflow-hidden bg-black flex items-center justify-center">
        {/* Subtle background elements */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          <div className="absolute top-[20%] left-[30%] w-72 h-72 rounded-full bg-[#FF7700]/10 blur-3xl"></div>
          <div className="absolute bottom-[25%] right-[35%] w-80 h-80 rounded-full bg-[#FF7700]/5 blur-3xl"></div>
        </div>

        {/* Back button */}
        <Link to="/"
          className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white hover:text-[#FF7700] transition-colors duration-300 group"
          style={{
            transition: "color 0.3s ease",
          }}
        >
          <span
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#FF7700] bg-black/50 backdrop-blur-sm"
            style={{
              transition: "background-color 0.3s ease",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#FF7700]"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </span>
          <span
            className="text-sm font-medium"
            style={{
              opacity: 0,
              transform: "translateX(-5px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "1"
              e.currentTarget.style.transform = "translateX(0)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "0"
              e.currentTarget.style.transform = "translateX(-5px)"
            }}
          >
            Back
          </span>
        </Link>

        {/* Main content */}
        <div
          className="relative z-10 text-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <h1 className="text-white font-bold mb-10 flex flex-col gap-6 tracking-tight">
            <span
              className="block"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                lineHeight: "1",
                animation: mounted ? "fadeIn 1s ease-out forwards" : "none",
              }}
            >
              NEW EVENT
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                lineHeight: "1",
                opacity: 0,
                animation: mounted ? "fadeIn 1s ease-out 0.3s forwards" : "none",
              }}
            >
              WILL BE ANNOUNCED
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                lineHeight: "1",
                opacity: 0,
                animation: mounted ? "fadeIn 1s ease-out 0.6s forwards" : "none",
              }}
            >
              SOON!
            </span>
          </h1>

          <div className="mt-16">
            <Link to="/"
              className="px-10 py-2 cursor-pointer bg-gradient-to-br from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white rounded-full font-medium text-xl"
              style={{
                opacity: 0,
                animation: mounted ? "fadeIn 1s ease-out 0.9s forwards" : "none",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                // e.currentTarget.style.backgroundColor = "rgba(255, 119, 0, 0.9)"
                e.currentTarget.style.transform = "scale(1.05)"
              }}
              onMouseOut={(e) => {
                // e.currentTarget.style.backgroundColor = "#FF7700"
                e.currentTarget.style.transform = "scale(1)"
              }}
            >
              Go Back
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div
            className="text-white/20 text-sm"
            style={{
              opacity: 0,
              animation: mounted ? "fadeIn 1s ease-out 0.9s forwards" : "none",
            }}
          >
            Anticipate..... its almost here 
           </div>
        </div>
      </div>
    </>
  )
}
