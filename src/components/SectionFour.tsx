import React from 'react'
import arrow from '../assets/arrow_right.png'
import { computationalTools } from '../utills/computationalTools'

const SectionFour = () => {

    const tools = computationalTools.map(tool => (
        <div key={tool.name} className=''>
            <img src={tool.image} alt={tool.name} className='w-35 h-33 object-contain' />
            <p className='mt-2 text-sm font-medium'>{tool.name}</p>
        </div>
    ))

  return (
    <div className='flex flex-col justify-center items-center p-10 md:p-15 dark:bg-[#040404] dark:text-white transition duration-400'>
        <button className='flex bg-[#FF770014] justify-between items-center p-2 px-4 rounded-3xl mt-5'>
                        <p className='font-semibold text-[14px] text-orange-500'>
                        Program Duration and Formation
                        </p>
                        <img src={arrow} className='ml-2' alt="" />
                    </button>
        <div className='my-15 grid grid-cols-3 md:grid-cols-5 gap-15'>
            {tools}
        </div>
    </div>
  )
}

export default SectionFour