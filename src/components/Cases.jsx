import {motion} from "framer-motion"
import { SLIDER } from "../constants/index";
import Slider from "./Slider";
import { useState, useRef, useEffect } from "react";

function Cases() {
const carousel = useRef();
const [width, setWidth] = useState(0)

useEffect(() => {
  console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
  setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
}, [])


  return (
    <div className="bg-gradient-to-r from-cases to-casos flex flex-col lg:flex-row font-michroma text-gray-100">
        <img src="case.svg" alt="" className="px-14 py-10 h-[60rem]" />
    
        <motion.div ref={carousel} className="overflow-hidden cursor-grab" whileTap={{cursor: "grabbing"}}>
        <motion.div drag = 'x' className="flex flex-row px-20 py-16" dragConstraints={{ right: 0, left: -width}} > 
        {SLIDER.map(e => (
        <motion.div className="px-20 py-16"> 
         <img src={e.image} alt={e.alt} className="lg:w-[27rem] lg:h-[25rem] rounded-lg pointer-events-none" /> 
         <div className="flex flex-col justify-center text-lg text-start w-72 lg:w-[28rem] py-5"> 
                <h1 className="font-black py-3 text-2xl">{e.title}</h1>
                <p>{e.description}</p>
            </div>
        </motion.div>
      ))}

        </motion.div>
     </motion.div>

    </div>
  )
}

export default Cases