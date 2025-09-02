
import image from '../assets/CardImage3.png';

const FirstCard = () => {
  return (
    <>
         <div className='bg-white rounded-3xl w-full p-5  flex flex-col justify-center ' >
          <img src={image} alt="Image" className='' />
          <p className='font-bold py-5 text-base ' >Tech Entreprenuership</p>
          <p className="text-xs md:text-sm text-gray-800" >Our comprehensive programs are designed to turn innovative ideas into successful startups, providing the training, resources, and support needed to navigate the journey from concept to market-ready products.</p>
        </div>
    
    </>
  )
}

export default FirstCard