import React from 'react'
import arrow from '../assets/arrow_right.png'
import cellTower from '../assets/cellTower.png'
import chemicalFlask from '../assets/chemical_flask.png'
import cubeFocus from '../assets/cubefocus.png'

const SectionSeven = () => {
  return (
    <div className='md:p-15 p-5 flex flex-col items-center dark:bg-[#040404] dark:text-white transition duration-400'>
    <button className='flex bg-[#FF770014] justify-between items-center p-2 px-4 rounded-3xl mb-10'>
          <p className='font-semibold text-[14px] text-orange-500'>
          Research Project
          </p>
          <img src={arrow} className='ml-2' alt="" />
    </button>      
    <div className='w-full md:flex md:justify-between justify-center  px-10'>
        <div className=' md:w-[30%]'>
            <div className='flex  py-2  items-center'>
                <img src={chemicalFlask} alt="" />
                <p className='m-2 text-2xl font-semibold'>Topic</p>
            </div>
            <div className='text-[16px] w-[99%] py-3'>
                Development of predict algorithms for metastasis - associated CNVs via cross cancer variant frequency analysis.
            </div>
        </div>
        <div className='md:w-[30%]'>
            <div className='flex  py-2  items-center'>
                <img src={cellTower} alt="" />
                <p className='m-2 text-2xl font-semibold'>Aim</p>
            </div>
            <div className='text-[16px] w-[99%] py-3'>
               Design and implement novel algorithms for identifying genetic mutations across multiple cancer types using variant allele frequencies.  
            </div>
        </div>
        <div className='md:w-[30%]'>
            <div className='flex  py-2  items-center'>
                <img src={cubeFocus} alt="" />
                <p className='m-2 text-2xl font-semibold'>Outcomes</p>
            </div>
            <div className='text-[16px] w-[99%] py-3'>
               The bioinformactics tool will be published and deployed on Linux and the web using Flask, Nexflow, or Snakemake.
            </div>
        </div>
    </div>            
    </div>
  )
}

export default SectionSeven