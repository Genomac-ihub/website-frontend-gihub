import React from "react";
import ball from "../assets/Ellipse 176.png";
import ball2 from "../assets/Ellipse 177.png";
import GlowButton from "../components/GlowButton";
import { Link } from "react-router-dom";
import exlipse from "../assets/Elipse.png";
import rafiki from "../assets/rafiki.png";
import Content from "../assets/Content.png";
import grid from "../assets/image/hero-grid.DF71ygke.svg";
import iconlove from "../assets/image/Icon-love.png";
import image from "../assets/image/image.svg";
import Accordion from "../components/AccordionEarn";

const Earn = () => {
  const courseData = [
    {
      title: "Sign Up/Login",
      desc: "Get started by signing up or logging in to access your referral link/code",
    },
    {
      title: "Share Your Link or Code",
      desc: "Copy and share your unique referral link or code with friends.",
    },
    {
      title: "Your friend applies",
      desc: "When they use your referral link to apply for a program, they get a 10% discount.",
    },
    {
      title: "Earn your Rewards",
      desc: "You'll also receive a 10% of their application fee as reward for each successful referral.",
    },
  ];

  return (
    <>
      <img src={ball} className="fixed top-0  z-[-10] " />
      <img src={ball2} className="fixed top-0  z-[-10] -right-10 rounded-full" />
      <img src={grid} className='absolute -top-60  opacity-6 -z-1' />
      <img src={image} className='absolute hidden md:-top-60' />

      

      <section className="flex relative  flex-col items-center justify-center pt-30  md:pt-40 lg:pt-19 overflow-hidden ">
        <GlowButton desc="get paid at least $25-$300 and above per project" />

        <div className="px-4 md:px-10 ">
          <div className="text-[calc(1.5rem+1vw)]  mx-auto mt-6 lg:mt-12 z-10 text-center leading-[calc(2rem+2vw)] text-[#0D0D0D] max-w-3xl font-bold">
            Turn your network into cash — refer a friend to Genomac and get
            rewarded!.
          </div>
          <p className="text-center md:mx-auto z-0 mt-5 md:mt-5 sm:text-base text-[.8rem] text-[#404040] font-normal max-w-xl px-2 opacity-70">
           our earn program rewards you will a $25 commission when someone you
            refer to Genomac successfully completes their application
           for the computational biology program!.
          </p>

          <div className="flex sm:flex-row gap-3 sm:gap-4 md:justify-center items-center w-full px-10 sm:px-52 mt-[40px]">
            {/* Get Started */}
            <Link
             to="/earn"
              className="gap-3 mx-auto bg-gradient-to-br from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500  py-2 cursor-pointer px-4 sm:py-3 sm:px-8 rounded-full text-white shadow-md flex items-center text-[.9rem]"
            >
              Refer Now!
            </Link>
            <Link
            to="#"
              className="gap-3 mx-auto bg-transparent hover:from-orange-600 hover:to-orange-500 py-2 cursor-pointer px-4 sm:py-3 sm:px-8 rounded-full text-orange-500 border flex items-center text-[.9rem]"
            >
              Refer Policy
            </Link>
          </div>
        </div>
        <div className="mt-20">
          <img
            src={rafiki}
            alt="Profile"
            className="mx-auto w-[90%] max-w-2xl sm:w-full h-auto object-cover"
          />
        </div>

        <img src={exlipse} className="absolute bottom-0 z-[-10] " />
      </section>

      <section className="flex max-w-7xl max-sm:flex-col px-2 gap-10 justify-around items-center mx-auto mt-[100px] md:mt-[200px]">
        <div className="w-[100%] md:w-[50%] flex flex-col">
          <div className="flex font-bold text-[1.5rem] max-sm:text-center flex-col md:text-[2.25rem] md:w-[450px]">
            <h2>Earn with Genomac</h2>
            {/* <h2>(Course Overview)</h2> */}
          </div>
          <div className="flex flex-col max-md:text-center items-start px-2">
            <div className="mt-10 text-[#404040] text-[.8rem] md:text-base md:leading-6 space-y-3 md:w-[90%]">
              <h2>
                We're opening exclusive spots for partners to promote our
                Computational Biology Course, and we'd love for you to be part
                of it. For every person you refer who registers, you'll earn $25
                directly in your pocket. No prior experience is required; all
                you need is your network and the willingness to share this
                opportunity.
              </h2>
            </div>
            <div className="border-[1px] border-gray-200 w-[100%] mt-[30px] mb-[20px] "></div>
            <div className="text-[#404040] max-md:text-center md:w-[90%] text-[.8rem] md:text-base md:leading-6 space-y-3 ">
              <h2>
                As a partner, you'll also get first access to new programs as
                they launch, giving you more chances to earn while helping
                others discover valuable learning opportunities.It's simple,
                rewarding, and designed to benefit both you and your community.
                Ready to get started? Join us today!,
              </h2>
            </div>
            <div className="mt-[30px] md:mt-[60px] max-md:mx-auto">
              {/* Get Started */}
              <Link
                to="#"
                className="gap-3 mx-auto bg-gradient-to-br from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500  py-2 cursor-pointer px-4 sm:py-3 sm:px-8 rounded-full text-white shadow-md flex items-center text-[.9rem]"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[40%] ">
          <img src={Content} className="w-[100%] h-auto" />
        </div>
      </section>

      <section className=" bg-[#FAFAFA] py-20 flex flex-col gap-10 mt-[100px] px-6">
        <div className="flex flex-col items-center gap-5">
          <p className="leading-[2.5rem] text-center text-[#171717] font-bold md:w-[35%] text-[2rem]">
            How this works
          </p>
          <p className="text-center sm:w-[70%] md:w-[50%]  uppercase text-[.6rem] mx-auto text-[#FF7700] font-semibold text-sm leading-5 tracking-[1px]">
            It's a win-win situation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="flex flex-col h-full rounded-md p-5 gap-5 bg-white shadow-md"
            >
              <img src={iconlove} className="w-[50px] h-auto mx-auto " />
              <div className="w-[100%] flex flex-col gap-3">
                <h1 className="text-[1.5rem] text-center font-bold">
                  {course.title}
                </h1>
                <p className="text-[#737373] mx-auto text-center ">
                  {course.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs next... */}
      
      <Accordion />

    </>
  );
};

export default Earn;
