import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import img1 from "../assets/Team/img1.png";
import img2 from "../assets/Team/img2.png";
import img3 from "../assets/Team/img3.png";
import img4 from "../assets/Team/img4.png";
import img5 from "../assets/Team/img5.png";
import img6 from "../assets/Team/img6.png";
import img7 from "../assets/Team/img7.png";

import { TrendingUp, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const historyData = [
  {
    year: "2020",
    title: "Founded as Genomac Innovation Lab",
    desc: "Started as a research and innovation Lab under Genomac Holdings, focused on science-driven entrepreneurship in West Africa.",
  },
  {
    year: "2024",
    title: "Genomac Hub rebranded",
    desc: "Genomac Hub rebranded to Genomac Holdings and launched 4 of her subsidiaries including Genomac Innovation Hub",
  },
  {
    year: "2025",
    title: "OmicsBoard & Certifyer go live",
    desc: "Two new platforms launched to serve the research and credentialing verticals across African universities and institutions.",
  },
];

const teamData = [
  { name: "Oluwaseyi Olawale", role: "Founder & CEO", img: img1 },
  { name: "Gloria Adegbola", role: "Director, G-iHUB", img: img2 },
  { name: "Ayomide Oladele", role: "Lead, Innovation Unit", img: img3 },
  { name: "Goodness Adewuyi", role: "Software Developer", img: img4 },
  { name: "Omotolani Afolayan", role: "Software Developer", img: img5 },
  { name: "George Babalola", role: "Product Designer", img: img6 },
  { name: "Yakubu Abdulbasit", role: "Fullstack Developer", img: img7 },
];

const renderPerson = (
  person: { name: string; role: string; img: string },
  globalIdx: number,
  rowDelayIdx: number,
) => (
  <div
    key={globalIdx}
    className="flex flex-col group w-full"
    data-aos="slide-up"
    data-aos-delay={rowDelayIdx * 100}
  >
    <div className="aspect-[4/5] w-full rounded-[1rem] bg-[#FF4103] overflow-hidden mb-5">
      <img
        src={person.img}
        alt={person.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <h3 className="text-[1rem] md:text-[1.1rem] font-bold text-[#1A1A1A] font-['Fraunces'] mb-1 text-center">
      {person.name}
    </h3>
    <p className="text-gray-500 text-[0.85rem] text-center w-full">
      {person.role}
    </p>
  </div>
);

const About = () => {
  const historyContainerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".history-card");

      // Refresh ScrollTrigger after AOS animations settle
      setTimeout(() => ScrollTrigger.refresh(), 500);

      cards.forEach((card, index) => {
        // Pin the card when it reaches the top
        ScrollTrigger.create({
          trigger: card,
          start: "top 120px",
          endTrigger: ".history-timeline-wrapper",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        // Animate card down slightly as the next card comes up
        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.2,
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top bottom",
              end: "top 20%",
              scrub: true,
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: historyContainerRef, dependencies: [] },
  );

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="font-sans overflow-hidden">
      {/* Overview Section */}
      <div className="bg-[#F6F5EF] pt-36 pb-24 md:pb-16">
        <div className=" px-4 md:px-16">
          <div className="flex flex-col lg:flex-row items-center pb-32 gap-16 lg:gap-24">
            {/* Left Visual Bento Grid */}
            <div
              className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6 max-w-lg lg:max-w-none mx-auto"
              data-aos="fade-right"
            >
              <div className="flex flex-col gap-6">
                {/* Top Left - Circle Image */}
                <div className="relative aspect-square w-full">
                  <img
                    src={image3}
                    alt="Student portrait"
                    className="w-full h-75 object-cover rounded-full "
                  />
                </div>
                {/* Bottom Left - Dark Box */}
                <div className="relative aspect-square w-full h-50 bg-[#001621] rounded-2xl"></div>
              </div>

              <div className="flex flex-col gap-6">
                {/* Top Right - Orange Shape */}
                <div className="relative aspect-square w-full h-50 bg-[#FF4103] rounded-2xl rounded-tr-[80%] xs:rounded-tr-full"></div>

                {/* Bottom Right - Building Image */}
                <div className="relative aspect-square w-full">
                  <img
                    src={image4}
                    alt="Institution Building"
                    className="w-full h-75 object-cover rounded-2xl rounded-br-[80%] xs:rounded-br-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-2">
                // Our overview //
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0D1D2C] font-['Fraunces'] md:leading-19 mb-4 md:mb-6">
                An institution built
                <br className="hidden lg:block" /> for the long term
              </h1>

              <p className="text-gray-600 text-[1rem] md:text-lg leading-relaxed mb-4 md:mb-6 max-w-lg">
                Genomac Innovation Hub (G-iHub) is not just an accelerator or a
                co-working space. We are an ecosystem orchestrator — designing,
                building, and operating the platforms, programs, and
                infrastructure that African innovation needs to compound over
                time.
              </p>

              <p className="text-gray-600 text-[1rem] md:text-lg leading-relaxed max-w-lg">
                From first-time founders to deep research scientists, G-iHub
                creates structured pathways that connect talent with tools,
                community, and capital.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="bg-white py-20 lg:py-32">
        <div className="mx-auto px-4 md:px-10 lg:px-16">
          {/* Header */}
          <div className="text-center mb-16" data-aos="slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0D1D2C] font-['Fraunces'] mb-4">
              Our Vision and Mission
            </h2>
            <p className="text-gray-600 text-[1rem] md:text-lg max-w-xl mx-auto leading-relaxed">
              As Guiding our strategic direction and defining our purpose in
              transforming Africa's biotechnology landscape.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            {/* Mission Card */}
            <div
              className="bg-[#FF4103] rounded-lg p-10 md:py-5 md:px-8 shadow flex flex-col gap-6"
              data-aos="slide-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <TrendingUp
                  className="w-6 h-6 text-[#FF4103]"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                {" "}
                <p className="text-white/90 text-xs font-semibold tracking-[0.15em] uppercase">
                  Our Mission
                </p>
                <h3 className="text-2xl md:text-[1.75rem] font-medium text-white font-['Fraunces'] leading-snug lg:pr-10">
                  To build the infrastructure that powers African innovation
                </h3>
                <p className="text-white/80 text-[1rem] md:text-[1.1rem] leading-relaxed">
                  We do this by developing founders, building platforms,
                  advancing research, and connecting the institutions that make
                  innovation sustainable at continental scale.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div
              className="bg-[#05151C] rounded-lg p-10 md:p-14 shadow"
              data-aos="slide-up"
              data-aos-delay="200"
            >
              <div className="w-14 h-14 bg-[#F6F5EF] rounded-full flex items-center justify-center mb-12">
                <Shield className="w-6 h-6 text-[#05151C]" strokeWidth={2} />
              </div>
              <p className="text-white/80 text-sm font-semibold tracking-[0.15em] uppercase mb-5">
                Our Vision
              </p>
              <h3 className="text-2xl md:text-[1.75rem] font-medium text-white font-['Fraunces'] leading-snug mb-5 lg:pr-10">
                A self-sustaining African innovation economy
              </h3>
              <p className="text-gray-400 text-[1rem] md:text-[1.1rem] leading-relaxed">
                We envision a Pan-African ecosystem where every serious
                innovator has access to the tools, programs, and networks needed
                to build lasting impact — regardless of where they start.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-[#F6F5EF] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
          <div className="text-center mb-16" data-aos="slide-up">
            <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
              // Our philosophy //
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#0D1D2C] font-['Fraunces'] mb-4">
              How we think about innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔁",
                title: "Systems, not events",
                desc: "We build compounding systems that get stronger over time, not one-off programs that fade after a cohort ends.",
              },
              {
                icon: "🌱",
                title: "Infrastructure first",
                desc: "Platforms and tools outlast any single program. We build infrastructure so every founder benefits from those who came before.",
              },
              {
                icon: "🤝",
                title: "Ecosystem thinking",
                desc: "No single actor can build Africa's innovation economy alone. We connect and amplify the full ecosystem — universities, governments, corporates, and founders.",
              },
              {
                icon: "🔬",
                title: "Science meets startup",
                desc: "We sit at the intersection of research and entrepreneurship, ensuring African science creates African companies.",
              },
              {
                icon: "📐",
                title: "Structure enables freedom",
                desc: "Clear frameworks and structured programs give founders the freedom to focus on what matters — building great products.",
              },
              {
                icon: "🌍",
                title: "Pan-African by design",
                desc: "Our platforms and programs are designed to work across borders, languages, and contexts from day one.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                data-aos="slide-up"
                data-aos-delay={(idx % 3) * 100}
              >
                <div className="text-[2rem] mb-6 inline-block">{item.icon}</div>
                <h3 className="text-[1.2rem] font-medium text-[#1A1A1A] font-['Fraunces'] leading-snug mb-4 lg:pr-4">
                  {item.title}
                </h3>
                <p className="text-[#5a6b65] text-[0.95rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
          <div className="text-center mb-16" data-aos="slide-up">
            <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
              // Leadership //
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#0D1D2C] font-['Fraunces'] mb-4">
              The team behind G-iHub
            </h2>
          </div>

          <div className="flex flex-col gap-y-12 md:gap-y-16">
            {/* Top Tier - 1 Person */}
            <div className="grid grid-cols-1 justify-items-center">
              <div className="w-full max-w-[280px] md:max-w-[320px]">
                {renderPerson(teamData[0], 0, 0)}
              </div>
            </div>

            {/* Middle Tier - 2 People */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16 justify-items-center md:px-16 lg:px-32">
              {teamData.slice(1, 3).map((person, idx) => (
                <div
                  key={idx + 1}
                  className="w-full max-w-[280px] md:max-w-[320px]"
                >
                  {renderPerson(person, idx + 1, idx)}
                </div>
              ))}
            </div>

            {/* Bottom Tier - 4 People */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
              {teamData.slice(3, 7).map((person, idx) => (
                <div
                  key={idx + 3}
                  className="w-full max-w-[280px] md:max-w-[320px]"
                >
                  {renderPerson(person, idx + 3, idx)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-[#F6F5EF] py-20 lg:py-32" ref={historyContainerRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
          <div className="text-center mb-16" data-aos="slide-up">
            <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
              // Our history //
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#0D1D2C] font-['Fraunces'] mb-4">
              How G-iHub was built
            </h2>
            <p className="text-gray-500 text-[1rem] md:text-[1.1rem] max-w-2xl mx-auto leading-relaxed">
              From a small research initiative to a Pan-African innovation
              platform, G-iHub has grown by staying true to one idea: build the
              infrastructure Africa needs.
            </p>
          </div>

          <div className="relative flex flex-col gap-12 lg:gap-32 pb-40 history-timeline-wrapper">
            {historyData.map((item, idx) => (
              <div
                key={idx}
                className="history-card w-full origin-top"
                style={{ zIndex: idx * 10 }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-[#F6F5EF] p-8 md:p-14 rounded-[2rem] shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.06)] border border-white/40">
                  {/* Timeline Copy */}
                  <div className="w-full lg:w-1/2 lg:pl-6">
                    <p className="text-[#FF4103] text-sm md:text-[0.95rem] font-semibold tracking-wider mb-3">
                      {item.year}
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold text-[#0D1D2C] font-['Fraunces'] leading-snug mb-5">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[1rem] leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>

                  {/* Placeholder Visual */}
                  <div className="w-full lg:w-1/2 flex lg:justify-end">
                    <div className="w-full max-w-md aspect-[4/5] bg-gray-200/60 rounded-xl flex items-center justify-center border border-gray-100">
                      <div className="flex items-center justify-center gap-3 opacity-15">
                        <div className="w-10 h-10 rounded-full bg-black"></div>
                        <div
                          className="w-10 h-10 bg-black"
                          style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                          }}
                        ></div>
                        <div className="w-10 h-10 bg-black"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Genomac Holdings Section */}
      <div className="relative bg-[#FF4103] mt-20 py-20 lg:py-32 overflow-hidden">
        {/* Subtle background circles */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/[0.03] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 md:w-[35rem] md:h-[35rem] bg-black/[0.03] rounded-full -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-10 lg:px-16 z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <p className="text-white/90 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase mb-4">
                Our Parent
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-bold text-white font-['Fraunces'] leading-[1.1] mb-6">
                Genomac Holdings
              </h2>

              <p className="text-white text-[1rem] leading-relaxed mb-6 max-w-xl">
                G-iHub is the innovation arm of Genomac Holdings, a Pan-African
                holding company operating across health, technology, and
                science. Genomac Holdings provides G-iHub with institutional
                backing, infrastructure, and long-term strategic support.
              </p>
              <p className="text-white text-[1rem] leading-relaxed max-w-xl">
                From first-time founders to deep research scientists, G-iHub
                creates structured pathways that connect talent with tools,
                community, and capital.
              </p>
            </div>

            {/* Right Column: Glass / Border Card */}
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="bg-white/5 rounded-2xl border border-white/20 p-8 md:p-12 lg:p-14 backdrop-blur-sm">
                {/* Row 1 */}
                <div className="border-b border-white/20 pb-5 mb-5">
                  <h4 className="text-[1.25rem] md:text-[1.4rem] font-['Fraunces'] text-white mb-2">
                    Relationship
                  </h4>
                  <p className="text-white/80 text-[0.95rem]">
                    Innovation & Venture Building Arm.
                  </p>
                </div>
                {/* Row 2 */}
                <div className="border-b border-white/20 pb-5 mb-5">
                  <h4 className="text-[1.25rem] md:text-[1.4rem] font-['Fraunces'] text-white mb-2">
                    Founded
                  </h4>
                  <p className="text-white/80 text-[0.95rem]">2018</p>
                </div>
                {/* Row 3 */}
                <div>
                  <h4 className="text-[1.25rem] md:text-[1.4rem] font-['Fraunces'] text-white mb-2">
                    Headquarters
                  </h4>
                  <p className="text-white/80 text-[0.95rem]">
                    Ogbomoso, Oyo state.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
