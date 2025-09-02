import React from 'react'
import arrow from '../assets/arrow_right.png'
import collage from '../assets/collage.png'
import collage_black from '../assets/collage_black.png'
import { Link } from 'react-router-dom'
// interface SectionOneProps {
//   darkMode: boolean;
//   switchTheme: () => void;
// }

const SectionOne= () => {
  return (
    <div className='md:p-15 md:mt-[-150px] py-10  pb-20 p-5 md:pb-[20px] md:flex h-full  overflow-hidden relative dark:bg-[#040404] '>

      <div className=' absolute w-full top-0 left-0 h-full'>
      <div className=' relative w-full top-0 left-0 h-full'>


        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-15 w-15 left-10 top-30 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-25 top-50 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-40 top-105 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-55 top-20 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-65 top-45 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-75 top-150 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-85 top-110 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-95 top-85 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-105 top-30 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-125 top-70 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-145 top-130 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-165 top-95 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-185 top-55 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-160 top-20 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-245 top-30 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-300 top-65 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-225 top- z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-255 top-45 z-0'></div>
        <div className='absolute blur-border border-[0.5px] border-[#FF770075] h-20 w-20 left-5 z-0'></div>
      </div>
      </div>

      <div className='absolute flex top-[-60px] left-[150px] blur-2xl'>
      <div className='w-20 h-40 skew-45 bg-[#FF7700] '></div>
      <div className='w-20 h-45 skew-45 bg-[#FF7700] ml-[80px]'></div>
      </div>
        <div className='md:mr-[-15rem] w-full  mt-25'>
        <button className='flex border-[1.5px] md:border-2  border-orange-500 justify-between items-center p-2 rounded-3xl z-10'>
            <p className='font-semibold text-[12px] md:text-[14px] text-orange-500'>
            Program Duration and Formation
            </p>
            <img src={arrow} className='ml-2 ' alt="" />
        </button>
        <p className='font-semibold py-5 text-[30px] md:text-[48px] text-wrap dark:text-white'>
            Become a Computational Biologist and Bioinformatics Engineer 
        </p>
        <p className='text-[12px] md:w-[50%] dark:text-[#D2D2D2]'>Master Algorithm Development and Bioinformatics Tool innovation for cutting-edge Biotech Research Allocation with Exclusive 90% Scholarship Offer</p>
        <div className='absolute bottom-7 md:bottom-60 flex md:w-[50%] mt-7 z-10 '>
            <button className='bg-orange-500 text-white text-[12px] px-2 md:px-4 py-1 rounded-4xl'>Contact Us</button>

           <Link to={"/form"} className=' ml-5 text-[12px] border border-orange-600 text-orange-500 px-2 md:px-4 py-1 rounded-full hover:border-orange-700 hover:text-orange-700 transition-all duration-300'>
             Apply For Scholarship
           </Link>
        </div>
        </div>

        <div className='md:ml-[-50px] md:mt-35 z-1 hidden md:flex'>
      {
      // darkMode ? <img src={collage_black} className="z-0" alt="" /> : 
      <img src={collage} className="z-0" alt="" />} 
        </div>
   </div>
  )
}

export default SectionOne