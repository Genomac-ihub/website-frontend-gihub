import { Link } from "react-router-dom";
import img1 from "../assets/hero-img.svg";
import img2 from "../assets/image2.svg";
import img3 from "../assets/texture.svg";
import { Aperture, Component, Command, Hexagon } from "lucide-react";
import PlatformCard from "../components/PlatformCard";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration in ms
      once: true, // whether animation should happen only once
      offset: 20,
    });
  }, []);

  const platforms = [
    {
      title: "StartupVerse",
      description:
        "The digital startup ecosystem where the other 90% of founders turn ideas into real startups with zero execution gaps.",
      linkText: "View platform",
      linkUrl: "https://startupverse.app",
    },
    {
      title: "OmicsBoard",
      description:
        "Empowering life science researchers with intuitive bioinformatics and data analytics tools.",
      linkText: "View platform",
      linkUrl: "https://omicsboard.com",
    },
    {
      title: "Certifyer",
      description:
        "A secure digital credentialing platform for modern educational and professional institutions.",
      linkText: "View platform",
      linkUrl: "https://certifyer.online",
    },
    {
      title: "Healthmania",
      description:
        "Advancing digital health technologies to improve patient outcomes across the continent.",
      linkText: "View platform",
      linkUrl: "https://healthmania.app",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div>
      <section
        data-aos="fade-up"
        className="relative flex flex-col items-center pt-24 pb-4 md:pt-48 px-4 md:px-10 mx-2 md:mx-6 md:mt-2 lg:-mt-28 rounded-4xl border border-[#C0A9FF] shadow-sm bg-linear-to-br from-[#f7e6e9] via-[#f3d7dc] to-[#f9ecef] overflow-hidden md:h-[180vh]"
      >
        {/* <img src={img3} alt="" className='absolute w-full h-full border top-0 bg-repeat' /> */}
        <div
          className="w-full h-full absolute top-0"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="absolute inset-0 inset-y-80 -bottom-10 bg-[radial-gradient(circle_at_80%_50%,rgba(246,193,184,0.6),transparent_40%)]"></div>
        <div className="absolute  w-full h-1/2 bottom-10 bg-[background:radial-gradient(circle_at_80%_50%,rgba(254,217,232,1))]"></div>

        {/* Background Decorative Wavy Image - Pushed to the bottom */}
        <div className="text-center text-[2.5rem] sm:text-4xl md:text-5xl lg:text-[4rem] mx-auto font-semibold z-10 leading-[1.1] md:leading-[1.1] max-w-5xl text-[#1A1A1A] tracking-[-0.02em]">
          Building Africa's Innovation Eco <br />system{" "}
          <span className="font-light font-['Instrument_Serif'] italic text-[2.5rem] sm:text-3xl md:text-5xl lg:text-[4.5rem]">
            Empower{" "}
          </span>
          Your Team
        </div>

        <p className="text-center z-10 mt-6 md:mt-8 text-[1rem] sm:text-base md:text-lg text-gray-500 font-normal max-w-3xl px-4 leading-relaxed">
          G-iHub is a venture builder and platform creation to solution provider
          developing the next generation of African founders, researchers, and
          innovation infrastructure.
        </p>

        <div className="z-10 flex flex-row items-center justify-center mt-10 gap-4">
          <button className="bg-[#FC350B] hover:bg-[#FF6B35] transition-colors duration-300 py-3 px-8 rounded-full text-white shadow-md flex items-center text-[1rem] sm:text-[1rem] font-medium">
            Explore platform
          </button>
        </div>

        {/* Wavy Img */}
        <div className="hidden w-full h-auto mt-4 md:mt-8 z-0 md:flex items-center justify-center">
          <img
            src={img1}
            alt="Wavy Abstract"
            className="w-[110%] max-w-none md:w-full h-auto object-cover transform translate-y-4 md:translate-y-12 absolute bottom-5"
          />
        </div>
      </section>

      <section
        data-aos="slide-up"
        className="bg-[#F6F5EF]">
        <section className="md:px-16">
          <section
            data-aos="slide-up"
            className="-my-6 max-w-7xl mx-auto py-10 rounded-2xl"
          >
            <p className="px-4 text-sm text-orange-500">
              <span className="italic">//</span> Ecosystem Platform{" "}
              <span className="italic">//</span>
            </p>

            <div className="flex flex-row items-end justify-between mt-6 mx-auto px-2 md:px-4">
              <div
                className="text-md md:text-5xl leading-15 tracking-tight w-1/2"
                style={{ fontFamily: "Fraunces" }}
              >
                <p>Four Platform</p>
                <p>One Ecosystem.</p>
              </div>
              <div className="text-xs md:text-[16px] leading-7 max-w-md w-1/2 text-[#767676]">
                <p>
                  Each platform solves a specific infrastructure problem for
                  African innovators.
                </p>
              </div>
            </div>
          </section>

          <section
            data-aos="slide-up"
            className="rounded-none lg:rounded-2xl mt-10 px-2 pt-5 mx-auto max-w-7xl bg-[#F6F5EF]"
          >
            <div className="flex flex-col items-center justify-center mx-auto gap-10">
              {platforms.map((platform, index) => (
                <PlatformCard
                  key={index}
                  title={platform.title}
                  description={platform.description}
                  linkText={platform.linkText}
                  linkUrl={platform.linkUrl}
                  isReversed={index % 2 !== 0}
                />
              ))}
            </div>
          </section>
        </section>

        <section
          data-aos="slide-up"
          className="mt-20 max-w-7xl mx-auto md:px-16 px-4 bg-white py-10"
        >
          <div className="mb-10">
            <p className="text-sm text-orange-500 mb-4">
              <span className="italic">//</span> What we do <span className="italic">//</span>
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-4">
              <h2 className="text-3xl md:text-[2.5rem] leading-15 font-bold text-[#0D1D2C] md:w-1/2"
              style={{fontFamily: "Fraunces"}}>
                We build the infrastructure <br className="hidden md:block" />
                Innovations runs on
              </h2>
              <p className="text-gray-500 text-base md:text-[16px] md:w-5/12 leading-relaxed">
                From founder development to platform creation, G-iHub is the
                connective tissue of Africa's innovation economy
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[inset_0_10px_25px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col md:flex-row divide-y-20 md:divide-y-0 md:divide-x divide-gray-100">
            {/* Column 1 */}
            <div className="flex-1 p-8 md:p-12 hover:bg-gray-50/50 transition-colors duration-300">
              <span className="text-[#FF4103] font-['Fraunces'] text-2xl md:text-3xl mb-6 block">
                01
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-[#0D1D2C] font-['Fraunces'] mb-4">
                Founder Development
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Structed program from idea through validation, execution and
                scale. Every founder build on StartupVerse
              </p>
              <Link
                to="/program"
                className="inline-flex items-center gap-2 text-[#FF4103] text-xs font-medium uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                PROGRAM & INCUBATION
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex-1 p-8 md:p-12 hover:bg-gray-50/50 transition-colors duration-300">
              <span className="text-[#0D1D2C] font-['Fraunces'] text-2xl md:text-3xl mb-6 block">
                02
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-[#0D1D2C] font-['Fraunces'] mb-4">
                Platform Building
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                We build and operate digital platform serving entire innovation
                vertical accorss Africal
              </p>
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 text-[#FF4103] text-xs font-medium uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                EXPLORE PLATFORM
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex-1 p-8 md:p-12 hover:bg-gray-50/50 transition-colors duration-300">
              <span className="text-[#0D1D2C] font-['Fraunces'] text-2xl md:text-3xl mb-6 block">
                03
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-[#0D1D2C] font-['Fraunces'] mb-4">
                Research Science
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Advancing deep innovation through research program labs, and
                scientific publication
              </p>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 text-[#FF4103] text-xs font-medium uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                RESEARCH PROGRAMS
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section data-aos="slide-up" className="mt-0 py-16 bg-white md:px-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#0D1D2C] font-['Fraunces']">
              Our Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {[
              {
                icon: (
                  <Aperture
                    strokeWidth={1}
                    fill="#9CA3AF"
                    className="w-6 h-6 text-transparent"
                  />
                ),
                name: "Designership",
              },
              {
                icon: (
                  <Component
                    strokeWidth={1}
                    fill="#9CA3AF"
                    className="w-6 h-6 text-transparent"
                  />
                ),
                name: "Designership",
              },
              {
                icon: (
                  <Command strokeWidth={2} className="w-6 h-6 text-[#9CA3AF]" />
                ),
                name: "Designership",
              },
              {
                icon: (
                  <Hexagon
                    strokeWidth={0}
                    fill="#9CA3AF"
                    className="w-6 h-6 text-[#9CA3AF]"
                  />
                ),
                name: "Designership",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] hover:bg-gray-50 flex items-center justify-center py-8 rounded-md transition-colors cursor-pointer border border-gray-50"
              >
                <div className="flex items-center gap-3 text-gray-500">
                  {partner.icon}
                  <span className="font-semibold text-gray-600 text-[1rem]">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Impact by Number Section */}
      <section className="bg-[#05151C] py-20 px-16">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <p className="text-[#A7D7C8] text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            <span className="italic">//</span> Impact by number <span className="italic">//</span>
          </p>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-['Fraunces'] mb-16">
            Growing the African innovation economy
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-y-0 relative">
            {[
              { number: "500+", label: "Founders Reached" },
              { number: "12", label: "Country active" },
              { number: "4+", label: "Live platform" },
              { number: "8k+", label: "Active member" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center relative ${
                  index !== 3 ? "md:border-r border-[#13303D]" : ""
                }`}
              >
                <h3 className="text-[#A7D7C8] text-[2.5rem] md:text-5xl lg:text-[3rem] font-medium font-['Fraunces'] mb-3">
                  {stat.number}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm font-light tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F6F5EF] py-24 px-4 md:px-16">
        <div
          data-aos="fade-up"
          className="max-w-6xl mx-auto bg-[#FF4103] rounded-4xl overflow-hidden flex flex-col md:flex-row items-center justify-between relative shadow-xl"
        >
          {/* Text Side */}
          <div className="p-10 md:p-16 lg:px-20 lg:py-20 md:w-1/2 z-10 w-full">
            <h2 className="text-3xl md:text-4xl text-white font-medium mb-4 leading-12">
              Ready to build on <br className="hidden md:block" />
              Africa's infrastructure?
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-10 max-w-sm leading-relaxed">
              Whether you're a founder, researcher, institution, or investor —
              there's a pathway for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/platform"
                className="bg-white text-[#FF4103] hover:bg-gray-50 px-8 py-3 rounded-full font-medium text-sm text-center transition-colors"
              >
                View All Platform
              </Link>
              <Link
                to="/program"
                className="border border-white/60 text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium text-sm text-center transition-colors"
              >
                View Programs
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-end items-end relative md:absolute md:right-0 md:bottom-0 h-full pt-10 md:pt-0 pointer-events-none">
            <img
              src={img2}
              alt="Platform interfaces mockups"
              className="w-full md:w-[90%] lg:w-full h-auto object-cover transform translate-x-4 md:translate-x-12 translate-y-4 md:translate-y-12 md:self-end"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
