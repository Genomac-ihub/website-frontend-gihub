import React, { useState } from 'react';
import { Calendar, Clock, Users, Code, Zap, CheckCircle, User, MessageCircle } from 'lucide-react';
import GlowButton from './GlowButton';
import tolani from "../assets/image/IMG-20250603-WA0006.jpg"
import chres from "../assets/image/IMG-20250529-WA0003.jpg"
import useHandleModal from '../zustard/useHandleModal'
const WebinarLandingPage: React.FC = () => {
    const { setTheClickedModal } = useHandleModal()
    return (
        <div className="">
            {/* Hero Section */}
            <section className="relative pt-32 pb-9 md:py-8">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
                <div className="relative max-w-6xl mx-auto px-4">
                    <div className="text-center">
                        <GlowButton />
                        <h1 className="text-6xl md:text-8xl text-black font-bold my-6 sm:mt-10 leading-tight">
                            Land your first <br />
                            <span className="">Tech role </span>
                        </h1>
                        <p className="text-md sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Build your first portfolio webpage
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>June 27, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>3:00 - 5:00 PM GMT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">About</h2>
                            <p className="text-md sm:text-lg text-gray-500 mb-6">
                                Do you want to land a job? Do you know you can easily land a top-class job in your field with an outstanding portfolio? You can achieve this yourself by leveraging tech tools like HTML, CSS and JavaScript to accurately represent yourself in a world revolving towards a tech revolution.
                            </p>
                            <p className="text-md sm:text-lg text-gray-500">
                                This webinar will guide you through every step to achieve this. Find out for yourself in this comprehensive course.
                            </p>
                        </div>
                        <div className="bg-black text-white rounded-lg p-6 md:p-8 border border-gray-800">
                            <h3 className="text-3xl md:text-2xl font-bold mb-6">Key Areas Covered</h3>
                            <ul className="text-sm sm:text-xl space-y-4">
                                <li className="flex items-start gap-3">
                                    <Code className="w-6 h-6 text-white flex-shrink-0" />
                                    <span>Introduction to Web Development</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Code className="w-6 h-6 text-white flex-shrink-0" />
                                    <span>Overview of Frontend Development</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Code className="w-6 h-6 text-white flex-shrink-0" />
                                    <span>Learning HTML, CSS and JavaScript</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Code className="w-6 h-6 text-white flex-shrink-0" />
                                    <span>Building a Simple Portfolio Website</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Attend */}
            <section className="py-16 bg-black">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl text-white font-bold text-center mb-12">Who Should Attend?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800">
                            <Users className="w-12 h-12 mx-auto mb-4 text-white" />
                            <h3 className="text-xl font-semibold mb-3 text-[#FF7700]">Beginners</h3>
                            <p className="text-gray-300">Interested in web development and want to start their journey</p>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800">
                            <User className="w-12 h-12 mx-auto mb-4 text-white" />
                            <h3 className="text-xl font-semibold mb-3 text-[#FF7700]">Professionals</h3>
                            <p className="text-gray-300">Business professionals looking to present skills attractively</p>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800">
                            <Zap className="w-12 h-12 mx-auto mb-4 text-white" />
                            <h3 className="text-xl font-semibold mb-3 text-[#FF7700]">Job Seekers</h3>
                            <p className="text-gray-300">Individuals looking for new job or career transition</p>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-6 text-center border border-gray-800">
                            <Code className="w-12 h-12 mx-auto mb-4 text-white" />
                            <h3 className="text-xl font-semibold mb-3 text-[#FF7700]">Entrepreneurs</h3>
                            <p className="text-gray-300">Startup founders interested in showcasing their companies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Attend */}
            <section className="py-16 bg-white text-black">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Attend?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4">
                            <CheckCircle className="w-8 h-8 text-[#FF7700] mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Learn by Doing</h3>
                                <p className="text-gray-600">Walk through the fundamental processes step-by-step</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="w-8 h-8 text-[#FF7700] mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Coding Required</h3>
                                <p className="text-gray-600">Learn HTML, CSS and JavaScript hands-on</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="w-8 h-8 text-[#FF7700] mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Expand Your Skills</h3>
                                <p className="text-gray-600">Gain practical knowledge with hands-on projects</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="w-8 h-8 text-[#FF7700] mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Join a Community</h3>
                                <p className="text-gray-600">Connect with like-minded learners and tech enthusiasts</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="w-8 h-8 text-[#FF7700] mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Exclusive Insights</h3>
                                <p className="text-gray-600">Get access to resources and opportunities beyond the webinar</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle className="w-8 h-8 text-[#FF7700] mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Free Resources</h3>
                                <p className="text-gray-600">Free class (worth $100) + certificate included</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Meet Your Instructors</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="rounded-full overflow-hidden w-32 h-32 bg-white mx-auto mb-6 flex items-center justify-center">
                                <img className="w-full h-full object-cover" style={{ objectPosition: '50% 10%' }} src={chres} alt="Speaker" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Goodness Adewuyi</h3>
                            <p className="text-gray-400 text-lg">Speaker</p>
                            <p className="text-gray-400 mt-4">Expert frontend developer with years of experience in building modern web applications</p>
                        </div>
                        <div className="text-center">
                            <div className="rounded-full overflow-hidden w-32 h-32 bg-white mx-auto mb-6 flex items-center justify-center">
                                <img className="w-full h-full object-cover" src={tolani} alt="Speaker" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Bukunmi Adigun</h3>
                            <p className="text-gray-400 text-lg">Moderator</p>
                            <p className="text-gray-400 mt-4">Experienced moderator ensuring smooth flow and maximum engagement throughout the session</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pt-16 pb-40 sm:pb-32 bg-black border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-white text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join thousands of learners and take your first step into the exciting world of web development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <div className="flex items-center gap-2 text-gray-300">
                            <Calendar className="w-5 h-5" />
                            <span className="font-semibold">June 20, 2025 | 3:00 - 5:00 PM GMT</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setTheClickedModal("userInfoForm")}
                        className="cursor-pointer bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
                    >
                        Register Now - It's Free!
                    </button>

                </div>
            </section>
        </div>
    );
};

export default WebinarLandingPage;