import React from 'react'
import img from '../assets/man-with-a-bulb.png'
import imgBg from '../assets/img-bg.png'
import arrow from '../assets/arrow_right.png'


const SectionTwo = () => {
  return (
    <div className='md:p-15 p-10 md:pt-30 pt-15 flex justify-between dark:bg-[#040404] dark:text-white transition duration-400' >
        <div className='w-[50%] hidden md:flex'>
            <img className='w-[420px] relative' src={imgBg} alt="" />
        </div>
            <img className='w-[450px] hidden md:flex absolute ml-[-15px] mt-[-15px]' src={img}/>

        <div className='md:w-[50%]  flex flex-col justify-center items-center'>
            <button className='flex bg-[#FF770014] justify-between items-center p-2 px-4 rounded-3xl'>
                <p className='font-semibold text-[14px] text-orange-500'>
                Program Duration and Formation
                </p>
                <img src={arrow} className='ml-2' alt="" />
            </button>
            
            <div className='flex flex-col gap-4 mt-10'>
                <div className=''>
                    <h1 className='font-semibold md:text-[24px] '>📅 Duration:</h1>
                    <p className='text-[16px]'>Five (5) month intensive learning</p>
                </div>
                <div className=''>
                    <h1 className='font-semibold md:text-[24px] '>🌍 Format:</h1>
                    <p>This Bootcamp is designed to be 100% Remote with live Classes, hands-On training at self-paced and learning with Project Work.</p>
                </div>
                <div className=''>
                    <h1 className='font-semibold md:text-[24px] '>📂 Access:</h1>
                    <p className='mt-2'>Pre-recorded video classes for flexible self-Learning.</p>
                    
                    <p className='mt-2'>✔ Live Interactive Sessions for Q&A and mentorship.</p>

                    <p className='mt-2'>This Program Original Cost is $5000: But successful applicant will receive a 90% scholarship and pay only $500 (%10).</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo