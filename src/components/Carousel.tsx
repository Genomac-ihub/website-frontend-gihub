import { useState } from 'react';
import img1 from "../assets/carouselImage1.jpg";
import img2 from "../assets/carouselImage2.jpg";
import img3 from "../assets/carouselImage3.jpg";
import img4 from "../assets/carouselImage4.jpg";
import img5 from "../assets/carouselImage5.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index
  const slides = 5; // Total number of slides

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides) % slides);
  };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 10000); // Auto-slide every 3 seconds
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10">
      {/* Slides */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className="flex-shrink-0 w-full ">
            <img src={img1} alt="Slide 1" className="w-[400px] h-[500px] object-cover" />
          </div>

          {/* Slide 2 */}
          <div className="flex-shrink-0 w-full">
            <img src={img2} alt="Slide 2" className="w-[400px] h-[600px] object-cover" />
          </div>

          {/* Slide 3 */}
          <div className="flex-shrink-0 w-full">
            <img src={img3} alt="Slide 3" className="w-[400px] h-[500px] object-cover" />
          </div>

          {/* Slide 4 */}
          <div className="flex-shrink-0 w-full">
            <img src={img4} alt="Slide 4" className="w-[400px] h-[500px] object-cover" />
          </div>

          {/* Slide 5 */}
          <div className="flex-shrink-0 w-full">
            <img src={img5} alt="Slide 5" className="w-[400px] h-[500px] object-cover" />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#8594;
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(slides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;