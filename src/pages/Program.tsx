import rafiki from "../assets/image/rafiki.png"
import eclipse from "../assets/gihub-eclipse.png"
import iconlove from "../assets/image/Icon-love.png"
import blueIcon from "../assets/purple-heart.png"
import deepBlueIcon from "../assets/deepBlueIcon.png"
import PurpleIcon from "../assets/PurpleIcon.png"
import PinkIcon from "../assets/PinkIcon.png"
import { Check, Twitter } from 'lucide-react';
import instructor from "../assets/image/guy.png"

const Program = () => {

    const courseData = [
        {
            title: "Python fundamentals for bio/health apps",
            desc: "Learn the core Python skills you need to analyze biological and health data effectively.Ç"
        },
        {
            title: "How to handle biological sequence data (FASTA, CSV)",
            desc: "Practice reading, cleaning, and working with real biological datasets in common formats."
        },
        {
            title: "Build interactive web tools with Streamlit",
            desc: "Turn your scripts into simple, user-friendly apps that others can interact with."
        },
        {
            title: "Connect your code to real-world biotech use cases",
            desc: "See how coding skills directly apply to solving problems in biology and healthcare."
        },
        {
            title: "Deploy your mini bioinformatics apps to share with others",
            desc: "Learn how to publish your tools online so anyone can try them out."
        },
        {
            title: "How to handle biological sequence data (FASTA, CSV)",
            desc: "Practice reading, cleaning, and working with real biological datasets in common formats."
        }
    ]
    const features = [
        'Analytics',
        'AI suggest text',
        'Content tracking',
        'API access',
        'Chat support'
    ];

    const instructorsSocialMediaLink = [
        {
            linkden: "https://www.linkedin.com/in/terkuma-saaondo-2201521a0"
        }
    ]


    const everyOne = [
        {
            icon: blueIcon,
            bg: "#15FFFF33",
            desc: "Biology, Biotech, and Computational Science Students"
        },
        {
            icon: deepBlueIcon,
            bg: "#1F67F533",
            desc: "Researchers looking to build analysis tools"
        },
        {
            icon: PurpleIcon,
            bg: "#692BF833",
            desc: "Researchers looking to build analysis tools"
        },
        {
            icon: PinkIcon,
            bg: "#FF0CDA33",
            desc: "Anyone eager to build tools, not just use them"
        }
    ]
    return (
        <div>
            <section className="flex relative flex-col md:items-center md:justify-center mt-30  md:mt-40 lg:mt-19 overflow-hidden ">
                <a href="https://forms.gle/KPMSZMs1h27fkoDR9" className=" gap-5 mx-auto bg-gradient-to-br opacity-80 bg-[#FF770014] text-black  py-2 cursor-pointer px-4 sm:px-8 rounded-full shadow-md flex items-center text-[.8rem]">
                    🔥 Cohort 1 filled 3x faster than expected
                </a>
                <div className="px-4 md:px-10 ">
                    <div
                        className="text-[calc(1.5rem+2vw)]  mx-auto mt-6 lg:mt-12 z-10 text-center leading-[calc(2rem+2vw)] text-[#0D0D0D] max-w-3xl font-bold"
                    >
                        Build your first Bioinformatics App with Python & Streamlit.
                    </div>
                    <p className="text-center md:mx-auto z-0 mt-5 md:mt-5 sm:text-base text-[.8rem] text-[#404040] font-normal max-w-xl px-2">
                        Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow..
                    </p>

                    <div className="flex sm:flex-row gap-3 sm:gap-4 md:justify-center items-center w-full px-2 sm:px-0 mt-[40px]">
                        {/* Get Started */}
                        <a
                            href="https://forms.gle/KPMSZMs1h27fkoDR9"
                            className="gap-3 mx-auto bg-gradient-to-br from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500  py-2 cursor-pointer px-4 sm:py-3 sm:px-8 rounded-full text-white shadow-md flex items-center text-[.9rem]">
                            90% Bursary Waiver Available
                        </a>

                    </div>
                </div>
                <div className="mt-20">
                    <img src={rafiki} alt="" />
                </div>
            </section>

            <section className="flex max-w-7xl max-sm:flex-col px-2 gap-10 justify-around items-center mx-auto mt-[100px] md:mt-[200px]">
                <div className="w-[100%] md:w-[50%] flex flex-col">
                    <div className="flex font-bold text-[1.5rem] max-sm:text-center flex-col md:text-[2.25rem] md:w-[450px]">
                        <h2>All what you need to know </h2>
                        <h2>(Course Overview)</h2>
                    </div>
                    <div className="flex flex-col text-center items-start px-2">
                        <div className="mt-10 text-[#404040] text-[.8rem] md:text-base md:leading-6 space-y-3 md:w-[90%]">
                            <h2>Learn how to build real-world bioinformatics tools using Python and Streamlit without needing advanced coding experience. This short-term course takes you from zero to launching your first simple app for genomics, biomedical data analysis, or molecular diagnostics.
                            </h2>
                        </div>
                        <div className="border-[1px] border-gray-200 w-[100%] mt-[30px] mb-[20px] "></div>
                        <div className="text-[#404040] text-center md:w-[90%] text-[.8rem] md:text-base md:leading-6 space-y-3 ">
                            <h2>A beginner-friendly journey that shows you how to design, code, and deploy simple bioinformatics apps for genomics, biomedical data, and diagnostics, all using Python and Streamlit..</h2>
                        </div>
                        <div className="mt-[30px] md:mt-[60px] max-md:mx-auto">
                            {/* Get Started */}
                            <a href="https://forms.gle/KPMSZMs1h27fkoDR9" className="gap-3 mx-auto bg-gradient-to-br from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500  py-2 cursor-pointer px-4 sm:py-3 sm:px-8 rounded-full text-white shadow-md flex items-center text-[.9rem]">
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-[40%] ">
                    <img src={eclipse} className="w-[100%] h-auto" />
                </div>
            </section>

            <section className=" bg-[#FAFAFA] py-20 flex flex-col gap-20 mt-[100px] px-6">
                <div className="flex flex-col items-center gap-5" >
                    <p className='text-center sm:w-[70%] md:w-[50%]  uppercase text-[.8rem] mx-auto text-[#FF7700] font-semibold text-sm leading-5 tracking-[1px]'>Why this course</p>
                    <p className='leading-[2.5rem] text-center text-[#171717] font-bold md:w-[35%] text-[2rem]'>What you will learn and why it works fast.</p>
                </div>
                <div className="flex flex-wrap max-w-7xl mx-auto gap-y-10 ">
                    {
                        courseData.map((course, index) => (

                            <div key={index} className="flex flex-col max-w-6xl mx-auto md:w-[18rem] lg:w-[24rem] h-auto rounded-md p-5 md:gap-5 bg-white shadow-md">
                                <img src={iconlove} className="w-[50px] h-auto" />
                                <div className="w-[90%] flex flex-col gap-8">
                                    <h1 className="text-[1.1rem] font-semibold">{course.title}</h1>
                                    <p className="text-[#737373]">{course.desc}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </section>

            <section className="py-20 mx-auto flex flex-col justify-center items-center gap-18 mt-[100px] px-6 ">
                <div className="flex flex-col items-center gap-5" >
                    <p className='leading-[2.5rem] text-center text-[#171717] font-bold md:w-[70%] text-[2rem]'>This isn’t for everyone.{" "}It’s for you.</p>
                </div>
                <div className="flex flex-wrap mx-auto gap-x-10 max-w-[75rem] justify-between gap-y-10">
                    {
                        everyOne.map((item, index) => (
                            <div key={index} style={{ backgroundColor: item.bg }} className={`flex flex-col gap-5 rounded-md p-4 w-[100%] sm:w-[48%]`}>
                                <img src={item.icon} className="w-[40px] h-auto" />
                                <p className="font-bold">{item.desc}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col items-center mt-[20px] justify-center  w-full max-w-[76rem] px-8 py-6 md:py-10 lg:py-14 h-auto md:h-[23.75rem] rounded-md bg-gradient-to-r from-[#0DFFB0] to-[#F5E200] text-center space-y-4 sm:space-y-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        Total Bonus Value:<span className="text-[#15B097]">{" "}$1,500</span>
                    </h1>

                    <h2 className="text-base sm:text-lg md:text-xl font-semibold opacity-50">
                        Your investment today
                    </h2>

                    <div className="flex flex-col sm:flex-row sm:justify-between text-lg sm:text-xl font-medium gap-1 w-[20%]">
                        <h2 className="text-[2rem] line-through">$1000</h2>
                        <h2 className="text-[#15B097] text-[2rem] font-bold">$100</h2>
                    </div>

                    <a href="https://forms.gle/KPMSZMs1h27fkoDR9" className="gap-3 cursor-pointer mx-auto bg-gradient-to-br from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 py-2 px-4 rounded-full text-white shadow-md flex items-center text-sm sm:text-base font-medium">
                        Yes I want it before door close
                    </a>

                    <div className="text-sm sm:text-base opacity-60 font-medium">
                        90% discount available to 30 persons
                    </div>
                </div>
            </section>

            <section className="bg-[#FAFAFA] ">
                <div className="max-w-6xl mx-auto px-6 py-8 " >
                    {/* Promotional banner */}
                    <div className=" rounded-lg p-6 mb-8 ">
                        <div className="flex flex-col lg:flex-row gap-40 lg:items-center lg:justify-between">
                            <div className="flex-1">
                                <p className="text-[#FF7700] font-medium mb-3">
                                    90% Bursary Waiver available to 30 person
                                </p>
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                    Become a certified Bioinformatics
                                </h1>
                                <p className="text-gray-600 mb-6">
                                    Certificate of Participation and certificate of innovation (for those
                                    who complete and present a working tool).
                                </p>
                                <a href="https://forms.gle/KPMSZMs1h27fkoDR9" className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-colors">
                                    Apply for 90% Bursary Waiver
                                </a>
                            </div>

                            <div className="lg:w-80">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <h3 className="font-semibold text-gray-800 mb-4">SPECIAL FEATURES</h3>
                                    <div className="space-y-3">
                                        {features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white">
                <div className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
                                Instructor's Statement
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center lg:text-left">
                                This course is about showing you how easy it is to turn a simple
                                biological idea into a tool people can use. With just Python and Streamlit,
                                you'll build something real and you'll walk away empowered to build more.
                            </p>
                        </div>


                        <div className="flex justify-center">
                            <div className="text-center lg:text-left">
                                <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg mb-4 overflow-hidden mx-auto lg:mx-0">
                                    <img
                                        src={instructor}
                                        alt="Saando Terkuma"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">
                                    Saando Terkuma
                                </h3>
                                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                                    Bioinformatics Instructor
                                </p>
                                <div className="flex justify-center lg:justify-start gap-2">
                                    <a
                                        href="#"
                                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <i className="bi bi-twitter-x text-gray-700"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <i className="bi bi-linkedin text-blue-600"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Program
