import { Link } from "react-router-dom"
import BigImage from "../assets/image/bigImage.svg"
import right from "../assets/image/right.svg"
import left from "../assets/image/left1.png"
import left2 from "../assets/image/right2.png"
import FirstCard from "../components/FirstCard"
import SecondCard from "../components/SecondCard"
import { Users, Video, Calendar, Code, Globe, Award } from 'lucide-react';
import girlGroup from "../assets/image/girlGroup.svg"
import globalStudent from "../assets/image/globalStudent.svg"
import teach from "../assets/image/teach.svg"
import calendar from "../assets/image/calendar.svg"
import girlSnap from "../assets/image/girlSnap.svg"
import point from "../assets/image/point.svg"
import ayomide from "../assets/image/ayomide.png"
import bella from "../assets/image/bella.png"
import farouke from "../assets/image/farouke.png"
import fineGirl from "../assets/image/fineGirl.png"
import useHandleModal from "../zustard/useHandleModal"
import hey from "../assets/image/hey.jpg"
import image2 from "../assets/image/image2.jpg"
import trainer from "../assets/image/trainer.jpg"
import AOS from "aos"
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const Courses = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,     // animation duration in ms
            once: true,        // whether animation should happen only once
            offset: 20,
        })
    }, [])
    const { setTheClickedModal } = useHandleModal();
    const instructors = [
        {
            name: "Oladele Ayomide",
            role: "Sr. Developer",
            description:
                "Ayomide specializes in building scalable web applications and mentoring upcoming developers. He's worked on high-traffic systems and is passionate about clean code and architecture.",
            image: ayomide,
            twitter: "#",
            linkedin: "#",
        },
        {
            name: "Gloria Adegbola",
            role: "Bio-coding Biologist",
            description:
                "Gloria is known for creating intuitive, inclusive design systems. She brings a human-centered approach to every product she touches and mentors young designers across Africa.",
            image: bella,
            twitter: "#",
            linkedin: "#",
        },
        {
            name: "Faruq Adeyemi Yusurf",
            role: "Bio-coding Biologist",
            description:
                "Faruq is a Bio-coding Biologist who bridges the worlds of biology and technology. His work involves decoding complex biological systems through software, bringing new innovations to biotech and digital health.",
            image: farouke,
            twitter: "#",
            linkedin: "#",
        },
        {
            name: "Chioma Onyido",
            role: "Bio-coding Biologist",
            description:
                "Chioma is a Bio-coding Biologist focused on leveraging software to unlock insights in molecular biology and genomics. Her work sits at the cutting edge of science and code, enabling powerful research tools.",
            image: fineGirl,
            twitter: "#",
            linkedin: "#",
        },
    ];


    const features = [
        {
            title: "One-On-One Mentorship",
            description: "Get personalized guidance from dedicated mentors who are excited to help you grow and succeed.",
            icon: <Users className="w-8 h-8 text-orange-500" />,
            illustration: "👨‍🏫👩‍💻"
        },
        {
            title: "Global Student Community",
            description: "Join a vibrant global community of passionate bio-coders, researchers, and problem-solvers who will support your journey as you grow into breakthroughs begin.",
            icon: <Globe className="w-8 h-8 text-orange-500" />,
            illustration: "🌍👥"
        },
        {
            title: "World-Class Instructors",
            description: "Get personalized guidance from dedicated mentors who are excited to help you grow and succeed.",
            icon: <Award className="w-8 h-8 text-orange-500" />,
            illustration: "🏆👨‍🏫"
        },
        {
            title: "Flexible Learning",
            description: "Get personalized guidance from dedicated mentors who are excited to help you grow and succeed.",
            icon: <Calendar className="w-8 h-8 text-orange-500" />,
            illustration: "📅⏰"
        },
        {
            title: "Live Video Sessions",
            description: "Get personalized guidance from dedicated mentors who are excited to help you grow and succeed.",
            icon: <Video className="w-8 h-8 text-orange-500" />,
            illustration: "🎥💻"
        },
        {
            title: "Hands-On project",
            description: "Get personalized guidance from dedicated mentors who are excited to help you grow and succeed.",
            icon: <Code className="w-8 h-8 text-orange-500" />,
            illustration: "🔧💡"
        }
    ];

    return (
        <div>

            <section className="flex relative flex-col md:items-center md:justify-center mt-30 md:mt-10 overflow-hidden ">
                <div className="px-4 md:px-10 ">
                    <div className="md:text-center text-[3.2rem] sm:text-7xl  md:text-[4.5rem] mx-auto mt-3 md:mt-30 lg:mt-3 z-10 leading-snug md:leading-tight lg:leading-[4.5rem] max-w-4xl font-semibold">
                        Grow your skill’s, define your{" "}
                        <span className="text-darkOrange bg-gray-50 border border-gray-200 rounded-md md:rounded-lg px-3 font-light font-['Libre_Baskerville'] italic text-[3.2rem] sm:text-xl md:text-5xl lg:text-6xl">
                            Future.
                        </span>
                    </div>

                    <p className="md:text-center md:mx-auto z-0 mt-5 md:mt-7 text-sm sm:text-base md:text-lg text-gray-600 font-normal max-w-xl px-2">
                        Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow..
                    </p>

                    <div className="flex sm:flex-row gap-3 sm:gap-4 md:justify-center items-center w-full px-2 sm:px-0 mt-[40px]">
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
                <div data-aos="slide-up"
                    className={`z-0  h-[400px] mt-20 md:mt-20 ml-6 max-md:rounded-tl-4xl max-md:rounded-bl-4xl md:h-[640px] relative md:rounded-bl-[20%] w-8xl md:w-2xl lg:w-[80%]  md:mx-auto max-md:overflow-hidden shadow-2xl transform transition-transform duration-[1200ms] ease-out "
                                }`}
                >
                    <div className="bg-black absolute inset-0 block md:hidden opacity-40 z-10" />
                    <img src={right} alt="G-iHub Frame" className="hidden md:block w-[200px] -right-10 top-40 h-auto absolute" />
                    <img src={left} alt="G-iHub Frame" className="hidden md:block w-[200px] -left-10 top-40 h-auto absolute" />
                    <img src={left2} alt="G-iHub Frame" className="hidden md:block w-[200px] -left-12 top-55  h-auto absolute" />
                    <img src={BigImage} className="w-[100%] h-[100%] object-cover z-0" />
                    <div className="absolute block md:hidden bottom-10 left-0 z-10 right-0 px-4 overflow-x-auto scrollbar-hide">
                        <div className="flex gap-x-2 w-max pl-20 md:pl-30">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white flex items-center  gap-x-2 justify-center px-8  h-[70px] rounded-3xl flex-shrink-0 snap-start shadow-md"
                                >
                                    <img
                                        src={
                                            i === 0
                                                ? image2
                                                : i === 1
                                                    ? hey
                                                    : trainer
                                        }
                                        className="w-[45px] h-[45px] rounded-full object-cover"
                                    />
                                    <div className="text-center">
                                        <p className="text-[1rem] font-bold">
                                            {i === 0
                                                ? "2K+ trained"
                                                : i === 1
                                                    ? "2k+ students"
                                                    : "professinal trainers"}
                                        </p>
                                        <p className="text-[.7rem] text-gray-500">
                                            {i === 0
                                                ? "world wide"
                                                : i === 1
                                                    ? "Currently trainning"
                                                    : "Accross the world"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="slide-up" className="rounded-none lg:rounded-3xl md:mx-10 mt-40 px-5 pt-5  " >
                <div className="flex flex-col items-center mx-auto max-w-6xl" >
                    <p className='text-center text-[1.8rem] sm:w-[70%] md:w-[50%] md:leading-12 font-bold mx-auto lg:text-4xl'>Our Courses</p>
                    <p className='md:w-[45%] mt-2 text-center sm:text-[1rem] text-[1rem] text-gray-500'>Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.</p>
                </div>

                <div className="mx-auto  flex flex-col md:flex-row gap-10 md:gap-4 py-20 max-w-7xl " >
                    <FirstCard />
                    <SecondCard />
                </div>
            </section>
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Why you should study at{" "}
                            <span className="text-orange-500">GiHub</span>
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-2xl px-2 pt-2 pb-8 border-[1px] border-gray-400 hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Illustration Area */}
                                <div className="bg-[#FADBCD] rounded-lg  mb-6 flex items-center justify-center ">
                                    {/* Abstract illustration placeholder */}

                                    {/* Simple illustration elements */}
                                    <div className="relative z-10 flex items-center justify-center space-x-2">
                                        {index === 0 && (
                                            <div className="flex items-center space-x-2">
                                                <img src={girlGroup} />
                                            </div>
                                        )}

                                        {index === 1 && (
                                            <div className="flex items-center space-x-2">
                                                <img src={globalStudent} />
                                            </div>
                                        )}
                                        {index === 2 && (

                                            <div className="flex items-center space-x-2">
                                                <img src={teach} />
                                            </div>

                                        )}

                                        {index === 3 && (
                                            <div className="flex flex-col items-center space-x-2">
                                                <div className="h-[20px]"></div>
                                                <div className="rounded-tr-xl rounded-tl-xl mx-2 overflow-hidden ">
                                                    <img src={calendar} />
                                                </div>
                                            </div>

                                        )}

                                        {index === 4 && (
                                            <div className="flex items-center space-x-2">
                                                <img src={girlSnap} />
                                            </div>
                                        )}

                                        {index === 5 && (
                                            <div className="flex items-center space-x-2">
                                                <img src={point} />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-[1.2rem] font-semibold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[.8rem] text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 px-2">
                        <h2 className='text-center text-3xl sm:w-[70%] md:w-[50%] md:leading-12 font-bold mx-auto lg:text-4xl'>
                            Meet Our <span className="text-orange-500">Extraordinary</span> Instructors
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base mt-8">
                            Our instructors are industry leaders, creative thinkers, and passionate educators dedicated to helping you level up your skills.
                        </p>
                    </div>

                    {/* Instructors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                        {instructors.map((instructor, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Profile Image */}
                                <div className="w-full sm:w-[220px] max-w-[250px] flex-shrink-0">
                                    <div className="w-full md:h-48 sm:h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg overflow-hidden">
                                        <img
                                            src={instructor.image}
                                            alt={instructor.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center sm:text-left">
                                    {/* Name and Role */}
                                    <div className="mb-3">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {instructor.name}
                                        </h3>
                                        <p className="text-orange-500 font-medium">{instructor.role}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {instructor.description ||
                                            "With years of experience and a deep love for teaching, they bring real-world expertise and a fresh perspective to every lesson."}
                                    </p>

                                    {/* Social Media Links */}
                                    <div className="flex justify-center sm:justify-start space-x-4">
                                        {instructor.twitter && (
                                            <a
                                                href={instructor.twitter}
                                                className="text-gray-600 hover:text-blue-500 transition-colors"
                                                aria-label="Twitter"
                                            >
                                                <i className="bi bi-twitter-x text-lg"></i>
                                            </a>
                                        )}
                                        {instructor.linkedin && (
                                            <a
                                                href={instructor.linkedin}
                                                className="text-gray-600 hover:text-blue-700 transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <i className="bi bi-linkedin text-lg"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Courses
