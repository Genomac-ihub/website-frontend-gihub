import React, { useState, useEffect } from 'react';
import AboutCard1 from "../components/AboutCard1";
import AboutCard2 from "../components/AboutCard2";
import AboutCard3 from "../components/AboutCard3";
import { Link } from 'react-router-dom';
import arrow from "../assets/arrowVector.png";
import MeetOurTeam from "../components/meetOurTeam";
import MeetTeamCard from "../components/TeamCard";
import about from "../assets/image/aboutBg.jpg"
import GlowButton from "../components/GlowButton";
import image from "../assets/image/image.svg"
import grid from "../assets/image/hero-grid.DF71ygke.svg"
import frameGroup from "../assets/image/framegroup.svg"
import frame from "../assets/image/Frame 8972.svg"
import CoreInnovativeAreas from '../components/CoreInnovation';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const words = ['innovation', 'startups', 'technology', 'entrepreneurs', 'solutions'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <section className="flex relative flex-col items-center justify-center mt-40 md:mt-10 px-4 md:px-10">
        <GlowButton />

        <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] mx-auto mt-8 font-semibold z-10 leading-snug md:leading-tight lg:leading-[4.5rem] max-w-5xl">
          Investing in innovation that transforms the world.
        </div>

        <div className={`mt-8 md:mt-5 text-lg text-center sm:text-xl md:text-[1.2rem]  text-gray-600 font-light max-w-2xl mx-auto translate-y-0 opacity-100`}>
          <p className="leading-relaxed">
            At G-iHub we invest in{' '}
            <span className="relative font-medium">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {words[currentWordIndex]}
              </span>
              <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 transform origin-left scale-x-100 animate-pulse"></div>
            </span>
            {' '}that drive meaningful change and create lasting impact across communities worldwide.
          </p>
        </div>


      </section>

      <section className="relative overflow-hidden py-20 ">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl p-5 mx-auto">
          {/* About Us Section */}
          <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            {/* Content */}
            <div className="flex-1 lg:pr-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                About Us
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-orange-500">G-HUB</span>
                <br />
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Innovation Hub
                </span>
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 leading-relaxed">
                Driving Innovation Forward and Transforming Lives
              </h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Genomic Innovation Hub (G-HUB) is a pioneering platform dedicated to driving innovation,
                development, and commercialization in health tech and broader technological sectors.
              </p>

              {/* Key highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🧬", title: "Genomic Innovation", desc: "Cutting-edge research" },
                  { icon: "🚀", title: "Tech Advancement", desc: "Future-ready solutions" },
                  { icon: "🏥", title: "Health Tech", desc: "Transforming healthcare" },
                  { icon: "💡", title: "Innovation Hub", desc: "Collaborative ecosystem" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            {/* Image placeholder with modern design */}
            <div className="flex-1 lg:max-w-lg">
              <img src={frameGroup} />
            </div>
          </div>

          {/* Our Mission Section */}
          <div className={`flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>

            {/* Content */}
            <div className="flex-1 lg:pl-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                Our Mission
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-orange-500">
                  Unlock Expertise
                </span>
                <br />
                <span className="text-gray-800">Drive Success</span>
              </h2>

              <h3 className="  font-semibold text-gray-700 mb-6 leading-relaxed">
                Across Industries and Beyond Boundaries
              </h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                We're committed to delivering innovative solutions by driving innovation, commercialization,
                and social impact in health and broader tech ecosystems.
              </p>

              {/* Mission pillars */}
              <div className="space-y-4 mb-8">
                {[
                  { title: "Innovation", desc: "Pioneering breakthrough technologies" },
                  { title: "Commercialization", desc: "Bringing ideas to market successfully" },
                  { title: "Social Impact", desc: "Creating positive change in communities" }
                ].map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500  rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{pillar.title}</h4>
                      <p className="text-gray-600 text-sm">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            {/* Image placeholder with modern design */}
            <img src={frame} />
          </div>
        </div>
      </section>
      <section className="" >
        <MeetOurTeam />
      </section>

    </>
  )
}

export default About