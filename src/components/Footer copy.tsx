import React from 'react'
import blackLogo from '../assets/logo-black.png'

const Footer = () => {
  return (
    <div className=' md:p-15 p-10 md:px-20 text-[14px] bg-black text-white flex flex-col '>
        <div className='md:flex justify-between w-full'>
           <div className='grid md:grid-cols-3 grid-cols-3 md:gap-25 gap-5 '>
             <div>
                <p>Resources</p>
                <ul className='text-[#737373] mt-3 flex flex-col gap-2'>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Learn Center</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Support</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Slack Community</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Events</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Cookies</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Terms of Service</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p>Products</p>
                <ul className='text-[#737373] mt-3 flex flex-col gap-2'>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>How it works</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Features</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Pricing</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Tools & Integration</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Start for Free</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Sign In</li>
                </ul>
            </div>
            <div>
                <p>About</p>
                <ul className='text-[#737373] mt-3 flex flex-col gap-2'>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Our Story</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Media Kit</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Blog</li>
                    <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Email Us</li>
                </ul>
            </div>
           </div>

            <div className='md:w-[30%] mt-10 md:mt-0'>
                <img src={blackLogo} alt="Designership Logo" className='w-[124px]  mb-4' />
                <p className='text-[#949494]'>Get the latest updates about Designership’s new features and product updates.</p>
                <div className='flex mt-6 h-[40px] justify-between'>
                <input type="text" placeholder='Enter your email' className='text-black w-[65%] rounded-[6px] px-3 border-none outline-none bg-white' />
                <button className='border-none w-[30%] rounded-[6px] bg-[#FF7700]'>Submit</button>
                </div>
            </div>
        </div>

        <div className=' w-full mt-15 text-[#737373] justify-between py-5  border-t border-[#cfcece] md:flex flex flex-col gap-5'>
        <ul className='flex md:w-[40%] justify-between'>
            <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Terms of Service</li>
            <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Privacy Policy</li>
            <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Security</li>
            <li className='hover:text-[#cfcece] transition-all duration-300 cursor-pointer'>Sitemap</li>
        </ul>
        <div>© 2025 Designership. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer