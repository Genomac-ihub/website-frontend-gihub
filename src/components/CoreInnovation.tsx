
import dna from "../assets/image/dna.svg"
import dna2 from "../assets/image/dna2.svg"
import bio from "../assets/image/bio.svg"
import atom from "../assets/image/Atom.svg"
import avocardo from "../assets/image/Avocado.svg"
const CoreInnovativeAreas = () => {
  const areas = [
    {
      title: "Digital Health",
      description: "Exploring how technology is transforming healthcare delivery, improving patient outcomes, and shaping the future of well-being.",
      icon: dna
    },
    {
      title: "Computational Biology",
      description: "Using data, algorithms, and models to understand biological systems, solve complex problems, and advance life sciences.",
      icon:dna2
    },
    {
      title: "Biotechnology",
      description: "Advanced science and society by applying biology and technology to develop innovative solutions in healthcare, agriculture, and industry.",
      icon: bio
    },
    {
      title: "Tech Entrepreneurship",
      description: "Turning innovative ideas into impactful ventures by building, scaling, and leading technology-driven ventures in a fast-changing world.",
      icon: atom
    },
    {
      title: "Tech Commercialization",
      description: "Bridging the gap between innovation and market by transforming research and technology into real-world products, services, and business value.",
      icon: avocardo
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="mx-10">
        {/* Header */}

        {/* Grid of areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="mb-12">
          <h2 className="text-2xl text-orange-500 font-bold mb-2">
            Our Core Innovative Areas
          </h2>
          <p className="text-2xl text-gray-600">
            Principle that power our progress
          </p>
        </div>
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-2xl mb-4">
                <img src={area.icon}/>
          
              </div>
              
              {/* Title */}
              <h3 className="text-md font-semibold text-gray-900 mb-3">
                {area.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreInnovativeAreas;