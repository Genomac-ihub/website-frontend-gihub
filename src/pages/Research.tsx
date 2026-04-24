import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heart } from 'lucide-react'; 

const researchData = [
  {
    title: "Genomics & Omics",
    desc: "Pan-African genomics research supporting OmicsBoard's network. We study genetic diversity, disease prevalence, and population health across African cohorts."
  },
  {
    title: "Digital Health",
    desc: "Research at the intersection of technology and health delivery in African contexts — from telemedicine adoption to AI diagnostics in low-resource settings."
  },
  {
    title: "Innovation Ecosystems",
    desc: "Studying what makes African innovation ecosystems thrive — from capital flows and policy to infrastructure gaps and founder success patterns."
  },
  {
    title: "Urban Innovation",
    desc: "Research into smart city infrastructure, urban mobility, housing, and the role of innovation in shaping Africa's rapidly growing urban centers."
  },
  {
    title: "CleanTech & Energy",
    desc: "Studying clean energy access, off-grid solutions, and the economics of energy transition across African markets and communities."
  },
  {
    title: "AgriTech & Food Security",
    desc: "Research supporting agricultural innovation, food systems resilience, and the role of technology in closing Africa's food security gaps."
  }
];

const labsData = [
  {
    tag: "GENOMICS LAB",
    title: "African Genomics Research Lab",
    desc: "A dedicated genomics research facility partnering with universities, hospitals, and OmicsBoard users across Africa. The lab focuses on building the continent's genomic data infrastructure and training the next generation of African genomics scientists."
  },
  {
    tag: "HEALTH INNOVATION LAB",
    title: "Digital Health Innovation Lab",
    desc: "A multidisciplinary lab working at the interface of health systems, technology, and human-centered design. Partners with Healthmania to translate research into deployable health tech products for African markets."
  },
  {
    tag: "POLICY LAB",
    title: "Innovation Policy Research Lab",
    desc: "Researching the policy environments that enable or hinder innovation in African countries. Produces reports, briefs, and recommendations for governments and regional bodies seeking to grow their innovation ecosystems."
  },
  {
    tag: "STARTUP LAB",
    title: "Founder Research Lab",
    desc: "Longitudinal research tracking African founders, startup success patterns, and ecosystem development. Findings directly inform G-iHub's programs and StartupVerse's product development."
  }
];

const publicationsData = [
  {
    year: "2025",
    title: "The State of African Innovation Ecosystems: 2025 Report",
    desc: "A comprehensive look at innovation infrastructure, capital flows, and founder outcomes across 20 African markets. Co-published with the Pan-African Science Council.",
    tag: "ECOSYSTEM RESEARCH"
  },
  {
    year: "2025",
    title: "Genomic Diversity in West African Populations: Findings from the OmicsBoard Network",
    desc: "Multi-institutional research conducted through OmicsBoard, examining genetic variation across 8 West African countries and its implications for precision medicine.",
    tag: "GENOMICS"
  },
  {
    year: "2024",
    title: "Digital Health Adoption in Sub-Saharan Africa: Barriers, Drivers, and Pathways",
    desc: "A Healthmania-backed study examining technology adoption patterns in African health systems with policy recommendations for governments and health ministries.",
    tag: "DIGITAL HEALTH"
  },
  {
    year: "2023",
    title: "Founder Outcomes in African Accelerators: A 5-Year Longitudinal Study",
    desc: "Using G-iHub program data, this study examines what predicts success for African startup founders across sectors, geographies, and program types.",
    tag: "INNOVATION RESEARCH"
  }
];

const Research = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="font-sans overflow-hidden min-h-screen">
      
      {/* Focus Areas Section */}
      <div className="bg-[#F6F5EF] pt-16 pb-24 lg:pb-32">
        <div className="px-4 md:px-10 lg:px-32">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="slide-up">
          <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-1.5">
            // Research Focus Areas //
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1D2C] font-['Fraunces'] leading-tight">
            Where we focus our science.
          </h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchData.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-md p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100/50 flex flex-col hover:-translate-y-1 transition-transform duration-300"
              data-aos="slide-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100/50 flex items-center justify-center mb-6">
                <Heart className="w-5 h-5 text-blue-500" strokeWidth={2} />
              </div>
              <h3 className="text-[1.25rem] md:text-xl font-bold text-[#0D1D2C] font-['Fraunces'] mb-4 leading-snug tracking-tighter">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[0.95rem] md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Innovation Labs Section */}
      <div className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
          
          <div className="text-center mb-16" data-aos="slide-up">
            <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-1.5">
              // Innovation Labs //
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1D2C] font-['Fraunces'] leading-tight mb-4">
              Where the work gets done
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {labsData.map((lab, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300"
                data-aos="slide-up"
                data-aos-delay={(idx % 2) * 100}
              >
                <div className="mb-4 text-[#FF4103] text-xs md:text-sm font-semibold tracking-[0.1em] uppercase">
                  {lab.tag}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0D1D2C] font-['Fraunces'] mb-4 leading-snug">
                  {lab.title}
                </h3>
                <p className="text-gray-500 text-[0.95rem] md:text-[1rem] leading-relaxed">
                  {lab.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Publication Section */}
      <div className="bg-[#F6F5EF] py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-10 lg:px-16">
          
          <div className="text-center mb-16" data-aos="slide-up">
            <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-1.5">
              // Publication //
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1D2C] font-['Fraunces'] leading-tight mb-4">
              Research that informs the ecosystem.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {publicationsData.map((pub, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col md:flex-row gap-6 md:gap-10 hover:-translate-y-1 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 100}
              >
                <div className="shrink-0">
                  <div className="bg-[#0D1D2C] text-white text-xs sm:text-sm font-semibold rounded-md px-6 py-2.5 md:mt-1 text-center min-w-[5rem] font-['Fraunces']">
                    {pub.year}
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-[1.3rem] md:text-2xl font-bold text-[#0D1D2C] font-['Fraunces'] mb-3 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-gray-500 text-[0.95rem] md:text-[1rem] leading-relaxed mb-6">
                    {pub.desc}
                  </p>
                  <span className="text-[#FF4103] text-xs font-medium tracking-[1px] uppercase mt-auto">
                    {pub.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Research;
