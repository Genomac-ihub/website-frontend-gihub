import group2 from '../assets/image/Group2.svg'
import { Link } from 'react-router-dom'
const SecondCard = () => {
  return (
    <>
      <div className='bg-white border border-gray-200 rounded-3xl w-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
        {/* Image Section */}
        <div className='bg-gradient-to-br from-[#FADBCD] to-[#F5C6A8] rounded-t-3xl flex items-center justify-center h-[196px] relative'>
          <img src={group2} alt="Bio-Coding Bootcamp" className='w-[300px] h-auto object-contain' />
          {/* Optional: Add a subtle pattern overlay */}
          <div className="absolute inset-0 bg-white/5 rounded-t-3xl"></div>
        </div>

        {/* Content Section */}
        <div className='p-6 space-y-4'>
          {/* Title */}
          <h3 className='font-bold text-xl lg:text-2xl text-gray-900 leading-tight'>
           International Bio-coding Bootcamp 
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            A 5-month intensive training that transforms you into a computational biologist &
            bioinformatics data science engineerequipping you with the ability to develop innovative bioinformatics tools.
          </p>

          {/* Features/Highlights */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
              Python & R
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
              Genomics
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
              Bioinformatics
            </span>
          </div>

          {/* Action Section */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">$xxxx</span>
              <span className="text-sm text-gray-500">Full program</span>
            </div>

            <Link to="/event" className="bg-gradient-to-r cursor-pointer from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 py-3 px-6 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm">
              <span>Coming Soon</span>
              <svg className="w-4 h-4 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default SecondCard