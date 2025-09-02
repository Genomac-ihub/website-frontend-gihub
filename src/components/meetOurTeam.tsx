import React from 'react';
import seyi from "../assets/image/Mr Olawale (53)_edited_edited_edited_edi 2.svg"
import director from "../assets/image/director.png"
import ayotide from "../assets/image/ayotide.png"
import ayomide from "../assets/image/ayomide.png"
import bella from "../assets/image/bella.png"
import farouke from "../assets/image/farouke.png"
import aremu from "../assets/image/aremu.png"
import george from "../assets/image/george.png"
import vector from "../assets/image/VectorPic.png"
const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Oluwaseyi Olawale",
      image: seyi,
      job: "CEO G-ihub",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Aderinto Abraham",
      image: director,
      job: "Director Gi-Hub",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Gloria Adegbola",
      image: bella,
      job: "Head of Operation",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Sule-odu Ayotide",
      image: ayotide,
      job: "Software Team-Lead",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Oladele Ayomide",
      image: ayomide,
      job: "Applied Computational Biologist",
      twitter: "#",
      linkedin: "#"
    },

    {
      name: "Faruq Adeyemi Yusuff",
      image: farouke,
      job: "Bio-coding Biologist",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Aremu Olakunle",
      image: aremu,
      job: "Head of Hardware Unit",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "George Babalola",
      image: george,
      job: "Product Designer",
      twitter: "#",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-6 px-6 mb-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className='text-center text-[1.8rem] sm:w-[70%] md:w-[50%] md:leading-12 font-bold mx-auto lg:text-4xl'>
            Meet our team
          </h2>
          <p className='mx-auto md:w-[45%] mt-2 text-center sm:text-[1rem] text-[1rem] text-gray-500'>
            The enthusiastic individuals who are dedicated to making an impact and building the future with us.
          </p>
        </div>

        {/* Team Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              {/* Profile Image */}
              <div className="relative mb-4  overflow-hidden rounded-lg">
                <img src={vector} className='absolute bottom-48 -left-30 z-1' />
                <img src={vector} className='absolute bottom-8 -left-30 z-1' />
                <img src={vector} className='absolute -top-10 left-0 z-1 w-[300px]' />
                <img src={vector} className='absolute -bottom-2 right-0 z-1 w-[300px]' />

                <div className="w-full mdh-64 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                  {/* Placeholder for actual image */}
                  <img src={member.image} className='z-2' />
                </div>


                {/* Social Media Icons Overlay */}
                <div className="absolute z-3 cursor-pointer inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={member.twitter}
                    className="py-2 px-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Twitter"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a
                    href={member.linkedin}
                    className="py-2 px-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              {/* Name */}
              <div className='text-left'>
                <h3 className="text-md font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className='text-gray-500 text-[.7rem]'>{member.job}</p>
                <div className='flex gap-2 mt-2'>
                  <i className="bi bi-twitter-x"></i>
                  <i className="bi bi-linkedin text-blue-400"></i>
                </div>
              </div>

              {/* Social Media Icons (visible on mobile) */}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;