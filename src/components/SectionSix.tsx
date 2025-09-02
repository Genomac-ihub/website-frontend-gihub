import React from 'react'
import arrow from '../assets/arrow_right.png'
import avatarOne from '../assets/avatar-1.png'
import avatarTwo from '../assets/avatar-2.png'
import avatarThree from '../assets/avatar-3.png'

const SectionSix = () => {
  return (
    <div className='p-15 flex flex-col items-center  dark:bg-[#040404] dark:text-white transition duration-400'>
      <button className='flex bg-[#FF770014] justify-between items-center p-2 px-4 rounded-3xl mb-10'>
      <p className='font-semibold text-[14px] text-orange-500'>
      What our students are saying about us
      </p>
      <img src={arrow} className='ml-2' alt="" />
      </button>      

      <div className='flex flex-col items-center justify-center'>
        <div className='italic w-[50%] text-center mb-10'>Great program so far. I would suggest that for subsequent Bootcamps, the duration be extended to say 6 months or even a year so that extreme newbies to this field would have the time to adapt more to the concepts and practices been taught.</div>
        <div className='mb-2'>Joshua Ampofo Yentumi </div>
        <div className='text-[#5B5B5B] mb-5'>Data Engineer</div>
        <div className='flex  justify-between items-end'>
          <img src={avatarOne} className="object-contain" />
          <img src={avatarTwo} className="object-contain" />
          <img src={avatarThree} className="object-contain h-[48px" />
        </div>
      </div>
    </div>
  )
}

export default SectionSix