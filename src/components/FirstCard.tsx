import image from '../assets/CardImage1.png';
import group from "../assets/image/Group1.svg"
const FirstCard = () => {
  return (
    <>
      <div className='bg-white border border-gray-200 rounded-3xl w-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
        {/* Image Section */}
        <div className='bg-gradient-to-br from-[#FADBCD] to-[#F5C6A8] rounded-t-3xl flex items-center justify-center h-[196px] relative'>
          <img src={group} alt="Bio-Coding Bootcamp" className='w-[220px] h-auto object-contain' />
          {/* Optional: Add a subtle pattern overlay */}
          <div className="absolute inset-0 bg-white/5 rounded-t-3xl"></div>
        </div>

        {/* Content Section */}
        <div className='p-6 space-y-4'>
          {/* Title */}
          <h3 className='font-bold text-xl lg:text-2xl text-gray-900 leading-tight'>
            Computational Biology
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
            Master Python and R to tackle real-world problems in genomics and bioinformatics. This program empowers life scientists with practical skills to pursue advanced degrees, research opportunities, and careers in bioinformatics and computational biology.
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
            <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 py-3 px-4 rounded-xl">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-700  font-medium text-[.9rem] sm:text-sm">Ongoing</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstCard