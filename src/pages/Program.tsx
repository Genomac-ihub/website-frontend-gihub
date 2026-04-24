import { useState, useEffect, type ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Clock, Users, Globe, Check, Send } from "lucide-react";

interface ProgramContent {
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  cohort: string;
  format: string;
  description: string;
  bullets: string[];
  callout: ReactNode;
  comingSoon?: boolean;
}

const PROGRAM_DATA: Record<string, ProgramContent> = {
  "Founder Execution Challenge": {
    badge: "Program 01",
    title: "Founder Execution Challenge",
    subtitle:
      "A competitive program that surfaces Africa's most promising early-stage startup ideas through structured challenge rounds.",
    duration: "8 weeks",
    cohort: "Up to 50 teams",
    format: "Online + in-person",
    description:
      "The Founder Challenge is the entry point into the G-iHub ecosystem. Teams compete through a series of structured rounds that test their idea, market understanding, and execution ability. Top performers graduate into the Founder Program.",
    bullets: [
      "Idea validation workshops and mentorship sessions",
      "Structured pitch rounds with expert judges",
      "Access to StartupVerse for team collaboration and tracking",
      "Winners receive funding and direct entry into the Founder Program",
    ],
    callout: (
      <>
        All teams build and submit using{" "}
        <span className="font-medium text-gray-900">StartupVerse</span> — the
        G-iHub execution platform.
      </>
    ),
  },
  "Founder Bootcamp": {
    badge: "Program 02",
    title: "Founder Bootcamp",
    subtitle:
      "A cohort-based accelerator for early-stage founders building real products with real users across Africa.",
    duration: "12 weeks",
    cohort: "20-30 startups",
    format: "Online + in-person",
    description:
      "The Founder Program takes validated ideas and accelerates them into market-ready products. Founders receive structured curriculum, dedicated mentorship, and full access to G-iHub's network of investors and partners.",
    bullets: [
      "Weekly sessions covering product, growth, finance, and operations",
      "1-on-1 mentor matching with seasoned African entrepreneurs",
      "Full StartupVerse suite for execution, tracking, and reporting",
      "Investor demo day at program conclusion",
    ],
    callout:
      "The entire program is executed on StartupVerse — milestones, mentorship, and reporting all in one place.",
  },
  Incubation: {
    badge: "Program 03",
    title: "Incubation",
    subtitle:
      "Deep support for post-validation startups ready to build fast, hire well, and scale across Africa.",
    duration: "6-12 months",
    cohort: "10-15 startups",
    format: "In-person",
    description:
      "G-iHub's incubation program provides physical workspace, operational support, legal resources, and investor readiness coaching to startups that have already validated their product-market fit.",
    bullets: [
      "Physical workspace and lab access at G-iHub facilities",
      "Legal, HR, and finance support infrastructure",
      "Continued StartupVerse integration for operations and reporting",
      "Introductions to G-iHub's investor and corporate partner network",
    ],
    callout:
      "Incubated startups use StartupVerse for all operational tracking and investor reporting.",
  },
  "Innovation Clinics": {
    badge: "Program 04",
    title: "Innovation Clinics",
    subtitle:
      "Expert-led workshops that solve specific innovation challenges for founders and researchers at any stage.",
    duration: "1-3 days",
    cohort: "All founders",
    format: "Online + in-person",
    description:
      "Innovation Clinics are focused, high-intensity sessions that tackle specific challenges: fundraising, product design, regulatory navigation, health tech compliance, and more. Open to founders inside and outside the G-iHub ecosystem.",
    bullets: [
      "Topic-specific clinics run by expert practitioners.",
      "Small group format for maximum interaction",
      "Practical outputs and action plans for every participant.",
      "Access to G-iHub resource library via StartupVerse.",
    ],
    callout:
      "Clinic resources and action plans are delivered through StartupVerse.",
  },
  "University Programs": {
    badge: "Program 05",
    title: "University Programs",
    subtitle:
      "G-iHub partners with universities to bring innovation infrastructure directly to campus — programs, platforms, and verifiable credentials.",
    duration: "1-3 days",
    cohort: "All founders",
    format: "Online + in-person",
    description:
      "We partner with African universities to embed G-iHub programs, StartupVerse access, and Certifyer credentialing into campus innovation programs. Students graduate with verified credentials and a head start in the G-iHub ecosystem.",
    bullets: [
      "StartupVerse access for all participating students.",
      "Pathway from campus into the G-iHub Founder Program",
      "OmicsBoard integration for research-focused universities.",
      "Joint events, demo days, and innovation challenges.",
      "Campus Founder Challenges co-run with university innovation centers",
      "Faculty training on innovation program delivery",
      "Certifyer integration for student credentialing",
    ],
    callout:
      "Clinic resources and action plans are delivered through StartupVerse.",
  },
};

const Program = () => {
  const [activeTab, setActiveTab] = useState("Founder Execution Challenge");

  const tabs = [
    "Founder Execution Challenge",
    "Founder Bootcamp",
    "Incubation",
    "Innovation Clinics",
    "University Programs",
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const activeContent = PROGRAM_DATA[activeTab];

  return (
    <div className="bg-[#F6F5EF] min-h-screen pt-16 font-['Inter']">
      <div className="px-4 md:px-32 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="slide-up">
          <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-1.5">
            // Our program //
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0D1D2C] font-['Fraunces'] leading-tight shadow-none">
            Five pathways. One ecosystem.
          </h1>
        </div>

        {/* Tabs Navigation */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12"
          data-aos="slide-up"
          data-aos-delay="100"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[0.95rem] md:text-base font-medium transition-all duration-300 relative ${
                activeTab === tab
                  ? "text-[#1A1A1A]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute -bottom-px left-0 w-full h-0.5 bg-[#FF4103]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="max-w-5xl mx-auto"
        >
          {activeContent ? (
            <div className="bg-[#FFFBF7] rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] p-8 md:p-14 border border-gray-100 animate-fade-in">
              {/* Program label */}
              <div className="mb-6">
                <span className="inline-block bg-[#FFF5F3] text-orange-500 border border-[#FF4103]/20 text-[0.8rem] md:text-sm font-medium px-4 py-1.5 rounded-full">
                  {activeContent.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-[1.8rem] font-bold text-[#0D1D2C] font-['Fraunces'] mb-4">
                  {activeContent.title}
                </h2>
                <p className="text-gray-600 max-w-2xl leading-relaxed">
                  {activeContent.subtitle}
                </p>
              </div>

              <hr className="border-gray-100 mb-4" />

              {/* Metas */}
              <div className="flex flex-col gap-2.5 mb-10">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 flex justify-center">
                    <Clock className="w-4.5 h-4.5 text-gray-500" />
                  </div>
                  <span className="text-[0.95rem]">
                    <span className="text-gray-500">Duration:</span>{" "}
                    <span className="font-medium text-gray-800">
                      {activeContent.duration}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 flex justify-center">
                    <Users className="w-4.5 h-4.5 text-gray-500" />
                  </div>
                  <span className="text-[0.95rem]">
                    <span className="text-gray-500">Cohort:</span>{" "}
                    <span className="font-medium text-gray-800">
                      {activeContent.cohort}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 flex justify-center">
                    <Globe className="w-4.5 h-4.5 text-gray-500" />
                  </div>
                  <span className="text-[0.95rem]">
                    <span className="text-gray-500">Format:</span>{" "}
                    <span className="font-medium text-gray-800">
                      {activeContent.format}
                    </span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed text-[0.95rem] md:text-[1rem]">
                {activeContent.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-4 mb-12">
                {activeContent.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check
                      className="w-[1.15rem] h-[1.15rem] text-gray-800 mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-700 text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Callout */}
              <div className="bg-[#FFF5F3] border border-[#FF4103]/20 rounded-xl p-6 md:p-4 text-center mb-10">
                <p className="text-gray-700 text-[0.9rem] md:text-sm">
                  {activeContent.callout}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <button className="inline-flex items-center gap-3 bg-[#FF4103] hover:bg-[#E03A00] text-white px-7 py-3 rounded-full font-medium transition-colors group text-[0.95rem]">
                  Apply Now
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                    <Send className="w-3 h-3 text-[#FF4103] -ml-0.5 mt-0.5" />
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-14 text-center animate-fade-in">
              <p className="text-gray-500 italic">
                Content for '{activeTab}' coming soon...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Founder Journey Section */}
      <div className="px-4 py-16 md:px-32 bg-[#FFFBF7]">
        <div className="text-center mb-16" data-aos="slide-up">
          <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
            // Founder Journey //
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#0D1D2C] font-['Fraunces'] leading-tight">
            How Founders Move Through G-iHub
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {[
            {
              num: "01",
              title: "Ideation",
              desc: "Enter via Founder Challenge or Innovation Clinics. Validate your idea with structure and expert support.",
            },
            {
              num: "02",
              title: "Execution",
              desc: "Join the Founder Program. Build your product on StartupVerse with mentors, curriculum, and community.",
            },
            {
              num: "03",
              title: "Incubation",
              desc: "Graduate into G-iHub's incubation. Get workspace, operational support, and investor introductions.",
            },
            {
              num: "04",
              title: "Scale",
              desc: "Access G-iHub's partner network, capital connections, and Pan-African market pathways.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-10 md:p-14 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100/50"
              data-aos="slide-up"
              data-aos-delay={idx * 100}
            >
              <div className="text-xl md:text-2xl font-['Fraunces'] text-gray-800 mb-6">
                {step.num}
              </div>
              <div>
                <h3 className="text-2xl md:text-2xl tracking-tighter font-medium font-['Fraunces'] text-[#1A1A1A] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-[0.95rem] md:text-base leading-6 max-w-md md:max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;
