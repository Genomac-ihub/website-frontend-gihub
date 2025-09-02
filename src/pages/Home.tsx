import { Link } from 'react-router-dom';
import img1 from "../assets/image.png";
import img2 from "../assets/image1.png";
import img3 from "../assets/image2.png";
import img4 from "../assets/working.png";
import img5 from "../assets/workingsm.png";
import bgImage from "../assets/bg-image.png";
import FirstCard from "../components/FirstCard";
import SecondCard from "../components/SecondCard";
import ThirdCard from "../components/ThirdCard";
import CardFour from "../components/CardFour";
import vector from "../assets/contactVector.png";
import frame from "../assets/image/Frame 396.svg"
import GlowButton from '../components/GlowButton';
import frame2 from "../assets/image/framw2.svg"
import { Lightbulb, Zap, Users, Target, TrendingUp } from 'lucide-react';
import boy from "../assets/image/boy.svg"
import hey from "../assets/image/hey.svg"
import girl from "../assets/image/girl.svg"
import vector2 from "../assets/image/Vector.svg"
import vector3 from "../assets/image/Vector 3.svg"
import Accordion from '../components/Accordion';
import image from "../assets/image/image.svg"
import grid from "../assets/image/hero-grid.DF71ygke.svg"
import useHandleModal from '../zustard/useHandleModal';
import atom from "../assets/image/Atom.svg"
import bulb from "../assets/image/bulb.svg"
import gym from "../assets/image/gym.svg"

import AOS from "aos"
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const Home = () => {
  const { setTheClickedModal } = useHandleModal();
  useEffect(() => {
    AOS.init({
      duration: 500,     // animation duration in ms
      once: true,        // whether animation should happen only once
      offset: 20,
    })
  }, [])


  return (
    <div className=''>

      <section className="flex relative flex-col items-center justify-center mt-40 md:mt-10 px-4 md:px-10">
        <GlowButton />
        <img src={image} className='absolute hidden md:-top-60' />
        <img src={grid} className='absolute -top-60  opacity-6 -z-1' />

        <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] mx-auto mt-8 font-semibold z-10 leading-snug md:leading-tight lg:leading-[4.5rem] max-w-5xl">
          Enhancing Lives And Driving Economic{" "}
          <span className="text-darkOrange bg-gray-50 border border-gray-200 rounded-md md:rounded-lg px-3 font-light font-['Libre_Baskerville'] italic text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Growth.
          </span>
        </div>

        <p className="text-center z-0 mt-5 md:mt-7 text-[.9rem] sm:text-base md:text-lg text-gray-600 font-normal max-w-xl px-2">
          Explore the Future of Health Tech and Broader Technological Innovations with G-iHub.
        </p>

        <div className="z-0 flex flex-row items-center justify-center mt-10 gap-4">
          <button onClick={() => { setTheClickedModal("signUp"); }} className="bg-gradient-to-br from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500  py-2 cursor-pointer px-4 sm:py-3 sm:px-8 rounded-full text-white shadow-md flex items-center text-[1rem] sm:text-[.9rem]">
            <p>Get started</p>

          </button>

          <button className=" hover:from-orange-600 hover:to-orange-500  py-2 cursor-pointer px-4 sm:py-3 sm:px-8 rounded-full text-black border-[1px] border-gray-400 shadow-md flex items-center text-[1rem] sm:text-[.9rem]">
            <Link to="/about">Contact Us</Link>
          </button>

        </div>

        <div className="my-10 flex items-center justify-center w-full max-w-6xl h-auto px-4">
          <img src={frame} alt="G-iHub Frame" className="w-[600px] md:w-full h-auto" />
        </div>
      </section>

      <section data-aos="slide-up" className="my-20 max-w-7xl mx-auto ">

        <div className='pt-20'>
          <p className='text-center text-[1.8rem] sm:w-[70%] md:w-[50%]  md:leading-12 font-bold mx-auto lg:text-4xl '>
            We Are Transforming Ideas into Sustainable <span className="text-darkOrange ">Innovations.</span>
          </p>
        </div>


        <div className="mx-auto md:mx-10 py-8 px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div className="bg-orange-50  border-orange-200 rounded-2xl px-6 sm:px-8 pt-10 h-auto min-h-[639px] relative overflow-hidden ">
              {/* Decorative Vectors - Background */}
              <img src={vector3} className='absolute top-2 left-1/2 transform -translate-x-1/2 w-40 sm:w-48 opacity-50' />
              <img src={vector3} className='absolute top-10 left-20 w-52 sm:w-80 opacity-50' />
              <img src={vector3} className='absolute top-2 -left-4 w-60 sm:w-[30rem] opacity-50' />
              <img src={vector2} className='absolute -bottom-2 -left-4 w-full max-w-[50rem] opacity-50' />
              <img src={vector2} className='absolute -bottom-24 left-2 w-96 sm:w-[480px] opacity-50' />
              <img src={vector2} className='absolute -bottom-36 left-8 w-80 sm:w-[400px] opacity-50' />

              {/* Content */}
              <div className="flex flex-col gap-3 mb-4 z-10 relative">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  {/* <Lightbulb className="w-5 h-5 text-white" /> */}
                  <img src={bulb} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Tech Innovations</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed z-10 relative max-w-lg">
                We're dedicated to accelerating technological innovations,
                such as Omnichannel, Multifinance, and AMization Africa. Our
                focus on data and technology acceleration enables us to bring cutting-
                edge solutions to market faster, driving transformative change
                across healthcare and broader technological sectors.
              </p>

              {/* Foreground Image - Boy */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-auto sm:top-[21rem] sm:left-[123px] sm:translate-x-0 w-72 sm:w-[328px] h-auto z-10">
                <img src={boy} className=" sm:w-full h-auto" />
              </div>

            </div>

            <div className="bg-purple-100 border-2 border-purple-200 rounded-2xl px-6 sm:px-8 pt-10 pb-24 sm:pb-8 relative min-h-[639px] overflow-hidden">
              {/* Title and Icon */}
              <img src={vector3} className='absolute top-2 left-1/2 transform -translate-x-1/2 w-40 sm:w-48 opacity-50' />
              <img src={vector3} className='absolute top-10 left-20 w-52 sm:w-80 opacity-50' />
              <img src={vector3} className='absolute top-2 -left-4 w-60 sm:w-[30rem] opacity-50' />
              <img src={vector2} className='absolute -bottom-2 -left-4 w-full max-w-[50rem] opacity-50' />
              <img src={vector2} className='absolute -bottom-24 left-2 w-96 sm:w-[480px] opacity-50' />
              <img src={vector2} className='absolute -bottom-36 left-8 w-80 sm:w-[400px] opacity-50' />
              <div className="flex flex-col gap-3 mb-4 z-10 relative">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  {/* <Zap className="w-5 h-5 text-white" /> */}
                  <img src={atom} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Tech Commercialization</h3>
              </div>

              {/* Paragraph */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 z-10 relative max-w-xl">
                At G-Hub, we are offering a full customer experience service
                that focuses on developing and commercializing health-tech
                products to improve the overall customer experience. Our goal
                is to create sustainable and profitable business models
                for better healthcare outcomes.
              </p>

              {/* Responsive Image */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-auto sm:left-[83px] sm:translate-x-0 sm:top-[17rem] w-[350px] sm:w-[440px] h-auto z-0">

                <img src={hey} className="w-full h-auto" />
              </div>
            </div>


            <div className="lg:col-span-2 flex flex-col md:flex-row items-start md:items-center bg-blue-50 border border-blue-200 rounded-2xl px-6 sm:px-8 pt-10 pb-28 md:pb-8 relative min-h-[639px] md:min-h-[400px] overflow-hidden">
              {/* Text Section */}
              <img src={vector3} className='absolute top-2 left-1/2 transform -translate-x-1/2 w-40 sm:w-48 opacity-50' />
              <img src={vector3} className='absolute top-10 left-20 w-52 sm:w-80 opacity-50' />
              <img src={vector3} className='absolute top-12 -left-4 w-60 sm:w-[30rem] opacity-50' />
              <img src={vector2} className='absolute -bottom-2 -right-4 w-full max-w-[50rem] opacity-50' />
              <img src={vector2} className='absolute -bottom-24 right-22 w-96 sm:w-[480px] opacity-50' />
              <img src={vector2} className='absolute -bottom-36 left-8 w-80 sm:w-[400px] opacity-50' />
              <div className="flex flex-col gap-3 mb-6 md:mb-0 z-10 relative max-w-xl">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  {/* <Users className="w-5 h-5 text-white" /> */}
                  <img src={gym} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Tech Entrepreneurship</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our startup incubation program is designed to cultivate innovative
                  ideas into successful startups, providing the training,
                  resources, and support needed to navigate the journey from
                  concept to market-ready products.
                </p>
              </div>

              {/* Image */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-auto md:right-8 md:translate-x-0 w-[320px] md:w-[350px] h-auto z-0">

                <img src={girl} className="w-full h-auto" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section data-aos="slide-up" className="rounded-none lg:rounded-3xl md:mx-10 mt-20 px-2 pt-5 mx-auto" >
        <div className="flex flex-col items-center" >
          <p className='text-center text-[1.8rem] sm:w-[70%] md:w-[50%] md:leading-12 font-bold mx-auto lg:text-4xl'>Our Courses</p>
          <p className='md:w-[45%] mt-2 text-center sm:text-[1rem] text-[1rem] text-gray-500'>Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.</p>
        </div>

        <div className="mx-auto p-3 flex flex-col md:flex-row gap-10 md:gap-4 py-20 max-w-7xl " >
          <FirstCard />
          <SecondCard />
        </div>
        <Accordion />
      </section>
      <div className="pt-14 pb-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white to-orange-50">
        <div className="sm:max-w-4xl mx-auto text-center">

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-snug sm:leading-tight break-words px-2">
            Start Learning with {" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              GI-HUB
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-10 max-w-md sm:max-w-xl mx-auto leading-relaxed px-2">
            Join thousands of learners advancing their careers in genomics, bioinformatics, and computational biology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-2 sm:px-0">
            {/* Get Started */}
            <button onClick={() => { setTheClickedModal("signUp"); }} className="gap-3 bg-gradient-to-br from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500  py-2 cursor-pointer px-4 sm:py-3 sm:px-8 rounded-full text-white shadow-md flex items-center text-[.9rem]">
              <span>Get Started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Sign In */}
            <button onClick={() => { setTheClickedModal("login"); }} className=" hover:from-orange-600 hover:to-orange-500  py-2 gap-3 cursor-pointer px-8 sm:py-3 sm:px-8 rounded-full text-black border-[1px] border-gray-400 shadow-md flex items-center text-[.9rem]">
              <span>Sign In</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home