import React from 'react'
import { keyFeatures } from '../utills/keyFeatures'

interface KeyFeature {
    icon: string;
    feature: string;
    description: string;
}

const SectionFive = () => {

    const features = keyFeatures.map((feature: KeyFeature) => (
            <div key={feature.description} className='bg-[#1E1E1E] text-white px-10 md:py-10 md:w-[30%] mb-10 h-[250px] flex flex-col justify-center items-center gap-3'>
                <img src={feature.icon} className="w-10" />
                <div className='text-center'>{feature.feature}</div>
                <div className='text-center text-[13px]'>{feature.description}</div>
            </div>
    ))

    return (
    <div className='bg-[#181818] md:p-15 flex justify-center items-center flex-col '>
        <button className='flex bg-[#FF770014] justify-between items-center p-2 px-4 rounded-3xl mt-10'>
                        <p className='font-semibold text-[14px] text-orange-500'>
                        Our Key Features
                        </p>
                        <p className='ml-2'>🔥</p>
                    </button>
    <div className=' w-full p-5 mt-7 md:flex gap-5 flex-wrap justify-center items-center'>
            {features}
        </div>                    
    </div>
  )
}

export default SectionFive