"use client"

import useFetchVideoForUser from "../tanstack/useFetchVideoForUser"
import { useState } from "react"
import useUserDetail from "../tanstack/useUserDetail"

interface VideoData {
    _id: string
    title: string
    description: string
    thumbnailUrl: string
    videoUrl: string
    isAvailable: boolean
    createdAt: string
    updatedAt: string
    courseSection: number
    videoS3Key: string
    thumbnailS3Key: string
    __v: number
}

// Group videos by section
const groupVideosBySection = (videos: VideoData[]) => {
    const grouped: Record<number, VideoData[]> = {}

    videos.forEach((video) => {
        const section = video.courseSection
        if (!grouped[section]) {
            grouped[section] = []
        }
        grouped[section].push(video)
    })



    return grouped
}

const MyLearning = () => {
    const { data: userData } = useUserDetail()

    const { data } = useFetchVideoForUser("computational-biology")
    const videos = data || []
    const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null)
    const [openSections, setOpenSections] = useState<Record<number, boolean>>({})

    const groupedVideos = groupVideosBySection(videos)

    const toggleSection = (sectionNumber: number) => {
        setOpenSections((prev) => ({
            ...prev,
            [sectionNumber]: !prev[sectionNumber],
        }))
    }
    if (userData?.tags === "None") {
        return (<div className="h-[100vh] flex justify-center items-center text-[1.2rem]">No videos</div>)
    }
    return (
        <div className="min-h-[100vh] grid grid-cols-1 md:grid-cols-12 overflow-hidden">
            <div className="col-span-9 overflow-y-auto h-screen ">
                {selectedVideo ? (
                    <>
                        <video
                            src={selectedVideo.videoUrl}
                            controls
                            controlsList="nodownload"
                            onContextMenu={(e) => e.preventDefault()}
                            className="w-full h-[500px] bg-black aspect-video mb-6"
                            poster={selectedVideo.thumbnailUrl}
                        />
                        <div className="p-6 bg-white min-h-[80vh] rounded-lg m-4">
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-wide capitalize">{selectedVideo.title}</h2>

                            <p className="text-gray-800 mb-8 leading-relaxed text-base">{selectedVideo.description}</p>

                            <div className="flex flex-wrap gap-5">
                                <span className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-transform hover:scale-105">
                                    Module  {selectedVideo.courseSection}
                                </span>

                                <span
                                    className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-transform hover:scale-105 
                    ${selectedVideo.isAvailable ? "bg-green-100 text-green-900" : "bg-red-100 text-red-900"}`}
                                >
                                    {selectedVideo.isAvailable && (
                                        <>
                                            G-IHUB
                                        </>
                                    )}
                                </span>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-[100%] bg-black ">
                        <div className="text-center p-8 max-w-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 mx-auto text-gray-400 mb-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-800">No video selected</h3>
                            <p className="text-gray-600">Select a video from the course content to start learning</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-gray-50 p-4 col-span-3 overflow-y-auto h-screen">
                <div className="mb-8">

                    <h2 className="text-xl font-bold text-gray-800 mb-4">Course Content</h2>

                    {/* Accordion for course sections */}
                    <div className="space-y-4 ">
                        {Object.keys(groupedVideos).length > 0 ? (
                            Object.keys(groupedVideos)
                                .map(Number)
                                .sort((a, b) => a - b)
                                .map((sectionNumber) => (
                                    <div key={sectionNumber} className="border border-gray-200 rounded-lg overflow-hidden ">
                                        <button
                                            onClick={() => toggleSection(sectionNumber)}
                                            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                        >
                                            <h3 className="text-base font-semibold text-gray-800">Module {sectionNumber}</h3>
                                            <div className="flex items-center">
                                                <span className="text-sm text-gray-500 mr-3">{groupedVideos[sectionNumber].length} videos</span>
                                                <svg
                                                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openSections[sectionNumber] ? "transform rotate-180" : ""
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openSections[sectionNumber] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 "
                                                }`}
                                        >
                                            <div className="divide-y divide-gray-100">
                                                {[...groupedVideos[sectionNumber]].reverse().map((video, index) => (
                                                    <div
                                                        key={video._id}
                                                        onClick={() => setSelectedVideo(video)}
                                                        className="p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-3"
                                                    >
                                                        <div className="relative flex-shrink-0 ">
                                                            <img
                                                                src={video.thumbnailUrl || "/placeholder.svg?height=80&width=120"}
                                                                alt={video.title}
                                                                className="w-20 h-14 object-cover rounded"
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <div className="bg-black bg-opacity-30 rounded-full p-1">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-6 w-6 text-white"
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                    >
                                                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex-1">
                                                            <h4 className="text-xs font-medium text-gray-900 line-clamp-2">{video.title}</h4>
                                                            <div className="flex items-center mt-1">
                                                                <span
                                                                    className={`text-xs px-2 py-0.5 rounded-full ${video.isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                                                        }`}
                                                                >
                                                                    No {video.isAvailable && index + 1}
                                                                </span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <div className="text-center py-8 text-gray-500">No videos available for this course yet.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyLearning
