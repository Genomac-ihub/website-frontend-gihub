import { ArrowRight, Verify } from "iconsax-reactjs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useHandleModal from "../zustard/useHandleModal";
const GlowButton = () => {

    return (
        <Link to="/event" className="z-0 relative inline-block cursor-pointer">

            <div className="absolute inset-[-4px] rounded-[2rem] overflow-hidden">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: `linear-gradient(90deg, transparent, transparent, #FF7700, transparent, transparent)`,
                        backgroundSize: "300% 100%",
                    }}
                    animate={{
                        backgroundPosition: ["100% center", "-200% center"], // Adjusted for seamless loop
                    }}
                    transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        repeatType: "loop", // Ensures smooth looping
                    }}
                />
            </div>

            <div className="relative gap-2 border-[1px] text-black border-[#FF7700] text-sm sm:text-[.7rem] md:text-[0.813rem] bg-gray-100  px-3 py-2 flex items-center font-medium capitalize rounded-[2rem] ">
                <Verify size="17" className="" />
                International Bio-coding 2.0
                <ArrowRight size={20} className="text-[#ff7700]" />
            </div>

            {/* Permanent glow around the entire button */}
            <div
                className="absolute inset-[-2px] rounded-[2rem] opacity-70 blur-[1px]"
                style={{
                    boxShadow: "0 0 8px 2px ##71bcd4",
                    border: "1px solid ##71bcd4",
                }}
            />


        </Link>
    )
}

export default GlowButton