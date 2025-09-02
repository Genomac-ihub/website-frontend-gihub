import { Link } from "react-router-dom";
import { RiShareForwardFill } from "react-icons/ri";
const CardFour = () => {
  return (
    <>
        <div className="text-white hover:text-darkOrange bg-darkOrange hover:bg-white p-5 rounded-2xl " >
            <p className="text-3xl font-semibold " >Exploratory Data Analysis</p>
            
            <div className="mt-10 " >
                <Link to={'/courses'} className="flex flex-row" >
                    <p>View Course</p>
                    <RiShareForwardFill className="mt-1 ml-3 " />
                </Link>
            </div>
        </div>
    
    
    
    </>
  )
}

export default CardFour