import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

const pathways = [
  {
    icon: "🚀",
    title: "Join a Program",
    desc: "Apply to the Founders Challenge, Founders Program or Incubation. Start your journey in the G-iHub ecosystem and build on StartupVerse.",
    cta: "View Programs",
    link: "/program"
  },
  {
    icon: "🤝",
    title: "Become a Partner",
    desc: "Universities, governments, corporates, and NGOs can partner with G-iHub to embed programs, platforms and innovation infrastructure at scale.",
    cta: "Partner With Us",
    link: "mailto:partnerships@genomac.com"
  },
  {
    icon: "🔬",
    title: "Research Collaboration",
    desc: "Institutions and scientists can join the G-iHub research network, access OmicsBoard, and collaborate on Pan-African research programs.",
    cta: "Explore Research",
    link: "/research"
  },
  {
    icon: "💼",
    title: "Invest or Fund",
    desc: "Investors and philanthropic organizations can support G-iHub's programs, platforms, or portfolio startups. Reach our partnership team to explore opportunities.",
    cta: "Contact Us",
    link: "mailto:invest@genomac.com"
  }
];

const institutions = [
  {
    icon: "🎓",
    title: "Universities",
    desc: "Embed G-iHub programs on campus, issue credentials via Certifyer, and give students access to StartupVerse and the innovation ecosystem."
  },
  {
    icon: "🏛️",
    title: "Governments",
    desc: "Co-design national innovation programs, deploy G-iHub infrastructure at scale, and access ecosystem data to inform science and technology policy."
  },
  {
    icon: "🏢",
    title: "Corporates",
    desc: "Access Africa's best early-stage startups, co-run innovation challenges, sponsor programs, and leverage G-iHub's founder network for corporate innovation."
  },
  {
    icon: "🌎",
    title: "NGOs & Foundations",
    desc: "Fund and co-design programs targeting specific sectors, geographies, or communities within the G-iHub ecosystem."
  },
  {
    icon: "🏥",
    title: "Health Institutions",
    desc: "Partner with Healthmania and OmicsBoard to advance health research, connect with health startups, and co-develop digital health solutions."
  },
  {
    icon: "💰",
    title: "Investors",
    desc: "Access deal flow from G-iHub's programs, participate in demo days, and co-invest in Africa's most promising innovation-driven startups."
  }
];

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="font-sans overflow-hidden bg-[#F6F5EF] min-h-screen pt-36 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="slide-up">
          <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
            // HOW TO GET INVOLVED //
          </p>
          <h1 className="text-4xl md:text-[3rem] font-bold text-[#0D1D2C] font-['Libre_Baskerville'] leading-tight mb-4">
            Choose your pathway
          </h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pathways.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={(idx % 2) * 100}
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0D1D2C] font-['Libre_Baskerville'] mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[0.95rem] md:text-[1rem] leading-relaxed mb-8">
                {item.desc}
              </p>
              
              <div className="mt-auto">
                <a 
                  href={item.link}
                  className="inline-block bg-[#FF4103] hover:bg-[#E53900] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm"
                >
                  {item.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Institution Models Section */}
      <div className="bg-[#F6F5EF] pt-24 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
          
          <div className="text-center mb-16" data-aos="slide-up">
            <p className="text-[#FF4103] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">
              // Partnership Models //
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#0D1D2C] font-['Libre_Baskerville'] leading-tight mb-4">
              How institutions work with G-iHub
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {institutions.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-[1.25rem] md:text-[1.5rem] font-bold text-[#0D1D2C] font-['Libre_Baskerville'] mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[0.95rem] md:text-[1rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Contact Support Form Section */}
      <div className="bg-white min-h-[600px] flex flex-col lg:flex-row border-t border-gray-100">
        {/* Left Side - Contact Info */}
        <div className="bg-[#FF4103] text-white p-12 lg:p-20 lg:w-1/3 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold font-['Libre_Baskerville'] mb-8">
            Contact Support
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-12 max-w-md">
            Whether you're interested in our referral program or a custom solution, we're here to help you find the right plan to support your need. Tell us about you and we'll be in touch.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="mt-1"><Mail className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-[1.1rem] mb-1">Chat with us</h4>
                <p className="text-white/80">Reach out to us at hello@gihub.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1"><MapPin className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-[1.1rem] mb-1">Our office</h4>
                <p className="text-white/80">Lagos, Nigeria - Pan-African Operations</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1"><Phone className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-[1.1rem] mb-1">Call us</h4>
                <p className="text-white/80">Ring us on +1 (201) 555-0123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 bg-white p-12 lg:p-20">
          <form className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">First Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. John" 
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#FF4103] transition-colors placeholder:text-gray-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Dowry" 
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#FF4103] transition-colors placeholder:text-gray-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Email address</label>
              <input 
                type="email" 
                placeholder="e.g. john.dowry@example.com" 
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#FF4103] transition-colors placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Organization (if any)</label>
              <input 
                type="text" 
                placeholder="e.g. Company XYZ" 
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#FF4103] transition-colors placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2 relative">
              <label className="text-sm font-semibold text-gray-700">I am interested in...</label>
              <div className="relative">
                <select 
                  className="w-full border-b border-gray-200 py-3 appearance-none bg-transparent focus:outline-none focus:border-[#FF4103] transition-colors text-gray-400"
                >
                  <option value="" disabled selected>Select an option</option>
                  <option value="programs">Founder Programs</option>
                  <option value="partnership">Institutional Partnership</option>
                  <option value="research">Research Collaboration</option>
                  <option value="investment">Investment Opportunities</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2 relative">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">Additional Message</label>
                <span className="text-xs text-gray-400">0/300</span>
              </div>
              <textarea 
                placeholder="Type a message here..." 
                rows={4}
                className="w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-[#FF4103] transition-colors placeholder:text-gray-300 resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pt-4">
              <button 
                type="submit"
                className="bg-[#FF4103] hover:bg-[#E53900] text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all"
              >
                Primary Action
              </button>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                Whether you're a founder ready to apply, an institution exploring partnership, or a researcher interested in collaboration — reach out and our team will get back to you within 48 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
