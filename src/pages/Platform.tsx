import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const platformsData = [
  {
    id: "startupverse",
    tag: "Execution Engine",
    title: "StartupVerse",
    desc1: "StartupVerse is G-iHub's flagship founder execution platform. Every G-iHub program participant builds, tracks milestones, accesses mentorship, and reports progress through StartupVerse.",
    desc2: "Beyond programs, StartupVerse is available to any African founder as a standalone tool for building, launching and scaling a startup with structure and community support.",
    pills: ["Early-stage Founders", "Program Participants", "Incubated Startups", "University Students"],
    bullets: [
      "Milestone and OKR tracking built for startup execution",
      "Mentor matching and session management",
      "Investor-ready reporting and due diligence tools",
      "Community and peer collaboration features",
      "Integration with all G-iHub programs and incubation"
    ],
    ctaText: "Get Access to StartupVerse",
    imageBg: "bg-[#FF4103]",
    imageTitle: "Startup\nVerse",
    imageSub: "EXECUTION PLATFORM"
  },
  {
    id: "omicsboard",
    tag: "Research Platform",
    title: "OmicsBoard",
    desc1: "OmicsBoard is a collaborative research platform designed for genomics and omics scientists across African institutions. It enables data sharing, collaborative analysis, and publication — all within a Pan-African research network.",
    desc2: "OmicsBoard bridges the gap between African research institutions, making it easier to conduct, collaborate on, and publish omics research at scale.",
    pills: ["Research Scientists", "Universities", "Health Institutions", "Policy Bodies"],
    bullets: [
      "Omics dataset upload, storage, and collaborative analysis tools",
      "Pan-African researcher network and community",
      "Publication and peer review workflow support",
      "Integration with Healthmania for health research applications",
      "Institutional dashboard for university research programs"
    ],
    ctaText: "Request OmicsBoard Access",
    imageBg: "bg-[#05151C]",
    imageTitle: "OmicsBoard",
    imageSub: "RESEARCH PLATFORM"
  },
  {
    id: "certifyer",
    tag: "Credential Engine",
    title: "Certifyer",
    desc1: "Certifyer is G-iHub's verifiable digital credentialing platform. It enables institutions, programs, and organizations to issue tamper-proof digital credentials that are instantly verifiable anywhere in the world.",
    desc2: "Certifyer powers credentialing for all G-iHub programs, university partnerships, and is available to any African institution looking to modernize their certification infrastructure.",
    pills: ["Universities", "Program Providers", "Corporate Training", "Governments"],
    bullets: [
      "Instant issuance of verifiable digital credentials and certificates",
      "Blockchain-backed verification for tamper-proof records",
      "White-label option for institutions to issue under their own brand",
      "Integrated with all G-iHub programs and university partnerships",
      "API for seamless integration with existing LMS and HR systems"
    ],
    ctaText: "Deploy Certifyer at your Institution",
    imageBg: "bg-[#14325a]",
    imageTitle: "Certifyer",
    imageSub: "CREDENTIAL PLATFORM"
  },
  {
    id: "healthmania",
    tag: "Digital Health",
    title: "Healthmania",
    desc1: "Healthmania is G-iHub's digital health innovation platform. It connects health startups, researchers, clinicians, and institutions working on Africa's most pressing health challenges through a shared digital infrastructure.",
    desc2: "Healthmania integrates with OmicsBoard for research applications and with StartupVerse for health startup execution, creating a complete innovation environment for African health innovators.",
    pills: ["Health Startups", "Clinicians", "Health Researchers", "Hospitals & Clinics"],
    bullets: [
      "Health startup directory and collaboration network",
      "Digital health challenge programs and funding pathways",
      "Integration with OmicsBoard for research-to-product pipelines",
      "Regulatory navigation resources for African health markets",
      "Partner network of hospitals, clinics, and health institutions"
    ],
    ctaText: "Join Healthmania",
    imageBg: "bg-[#FF6a33]", 
    imageTitle: "Healthmania",
    imageSub: "DIGITAL HEALTH PLATFORM"
  }
];

const Platform = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="font-['Inter'] overflow-hidden bg-[#F6F5EF] min-h-screen pt-16 pb-24">
      <div className="px-4 md:px-10 lg:px-32">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-16" data-aos="slide-up">
          <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-1.5">
            // Platform overview //
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold text-[#0D1D2C] font-['Fraunces'] leading-tight">
            Four platforms. One vision.
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mb-16 md:mb-32">
          
          {/* StartupVerse */}
          <div 
            className="md:col-span-3 bg-[#FF4103] rounded-xl p-8 md:p-12 lg:p-10 flex flex-col justify-center min-h-35 md:min-h-45"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex flex-col justify-center h-full">
              <div className="text-3xl lg:text-4xl mb-2 md:mb-6">🚀</div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white font-['Fraunces'] mb-2">StartupVerse</h2>
              <p className="text-white text-[1rem] md:text-base leading-6">Execution Engine For Founders</p>
            </div>
          </div>

          {/* OmicsBoard */}
          <div 
            className="md:col-span-2 bg-[#05151C] rounded-xl p-8 md:p-12 lg:p-10 flex flex-col justify-center min-h-35 md:min-h-45"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col justify-center h-full">
              <div className="text-3xl lg:text-4xl mb-2 md:mb-6">🔬</div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white font-['Fraunces'] mb-2">OmicsBoard</h2>
              <p className="text-white text-[1rem] md:text-base">Research & Genomics Platform</p>
            </div>
          </div>

          {/* Certifyer */}
          <div 
            className="md:col-span-2 bg-[#14325a] rounded-xl p-8 md:p-12 lg:p-8 flex flex-col justify-center min-h-35 md:min-h-45"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex flex-col justify-center h-full">
              <div className="text-3xl lg:text-4xl mb-2 md:mb-6">🥇</div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white font-['Fraunces'] mb-2">Certifyer</h2>
              <p className="text-white text-[1rem] md:text-base">Digital Credential Infrastructure</p>
            </div>
          </div>

          {/* Healthmania */}
          <div 
            className="md:col-span-3 bg-[#FF6a33] rounded-xl p-8 md:p-12 lg:p-8 flex flex-col justify-center min-h-35 md:min-h-45"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex flex-col justify-center h-full">
              <div className="text-3xl lg:text-4xl mb-2 md:mb-6">❤️</div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white font-['Fraunces'] mb-2">Healthmania</h2>
              <p className="text-white text-[1rem] md:text-base">Digital Health Innovation</p>
            </div>
          </div>

        </div>

        {/* Detailed Platform Stack */}
        <div className="flex flex-col gap-24 lg:gap-40">
          {platformsData.map((platform, idx) => (
            <div 
              key={platform.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-starter`}
            >
              {/* Visual Placeholder Side */}
              <div 
                className="w-full lg:w-1/2"
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className={`w-full aspect-4/3 rounded-2xl ${platform.imageBg} shadow-sm overflow-hidden flex flex-col items-center justify-center text-center p-8`}>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-['Fraunces'] leading-tight whitespace-pre-line mb-6">
                    {platform.imageTitle}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                    {platform.imageSub}
                  </p>
                </div>
              </div>

              {/* Text Side */}
              <div 
                className="w-full lg:w-1/2"
                data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className="inline-block border border-[#FF4103]/20 bg-[#FF4103]/5 text-[#FF4103] text-xs font-medium px-4 py-1.5 rounded-full mb-5">
                  {platform.tag}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D1D2C] font-['Fraunces'] mb-6">
                  {platform.title}
                </h2>
                
                <p className="text-gray-600 text-[0.95rem] md:text-base leading-relaxed mb-4">
                  {platform.desc1}
                </p>
                <p className="text-gray-600 text-[0.95rem] md:text-base leading-relaxed mb-4">
                  {platform.desc2}
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                  {platform.pills.map(pill => (
                    <span key={pill} className="bg-[#FF4103]/10 text-[#0D1D2C] text-xs font-medium px-3.5 py-1.5 rounded-full">
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-4 mb-6">
                  {platform.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-[0.95rem] md:text-[1rem]">
                      <div className="mt-1.5 min-w-2 h-2 rounded-full bg-[#0D1D2C]"></div>
                      <span className="leading-relaxed text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="bg-[#FF4103] cursor-pointer  hover:bg-[#E53900] text-white px-6 py-3.5 rounded-full font-medium inline-flex items-center gap-3 transition-colors shadow-sm">
                  {platform.ctaText}
                  <span className="bg-white text-[#FF4103] rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>

              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Platform;
