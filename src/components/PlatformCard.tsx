import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PlatformCardProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  isReversed?: boolean;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  title,
  description,
  linkText,
  linkUrl,
  isReversed = false,
}) => {
  return (
    <div className={`flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Text Section - Left/Right Side */}
      <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-medium text-[#0D1D2C] mb-6 my-20 font-['Fraunces']">
          {title}
        </h3>
        
        <p className="text-[#64748B] text-base md:text-lg mb-8 leading-relaxed max-w-md pr-4">
          {description}
        </p>

        <div>
          <a
            href={linkUrl}
            className="inline-flex items-center gap-2 bg-[#FF4103] hover:bg-[#c34415] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors mb-20"
          >
            {linkText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Image Section Placeholder - Right Side */}
      <div className="w-full md:w-1/2 bg-[#EAEAEA] min-h-75 md:min-h-full flex items-center justify-center">
        {/* Placeholder Graphic */}
        <div className="flex items-center gap-2 text-[#D1D5DB]">
          <div className="w-8 h-8 rounded-full bg-current"></div>
          <div className="w-0 h-0 border-l-16 border-l-transparent border-b-32 border-b-current border-r-16 border-r-transparent"></div>
          <div className="w-8 h-8 bg-current"></div>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
