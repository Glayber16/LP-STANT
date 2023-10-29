import {motion} from "framer-motion"
import { SLIDER } from "../constants/index";
import {BsEye} from "react-icons/bs"
import { useState, useRef, useEffect } from "react";

function Cases() {
const carousel = useRef();
const [width, setWidth] = useState(0)

useEffect(() => {
  console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
  setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
}, [])


  return (
    <div className="bg-[url(bg/bgCases.jpg)] bg-bottom flex flex-col font-michroma text-gray-100">
      <div className="lg:flex lg:flex-row ">
        <div className="flex justify-center"> 
          <img src="case.svg" alt="" className=" px-14 py-10 lg:h-[59rem] h-80 rotate-90 lg:rotate-0" />
        </div> 
        <motion.div ref={carousel} className="overflow-hidden cursor-grab w-max" whileTap={{cursor: "grabbing"}}>
        <motion.div drag = 'x' className="flex flex-row lg:px-20 py-16 w-screen" dragConstraints={{ right: 0, left: -width}} > 
        {SLIDER.map(e => (
        <motion.div className="md:px-20 pl-5 py-16"> 
         <img src={e.image} alt={e.alt} className="lg:w-[27rem] lg:h-[25rem] rounded-lg pointer-events-none" /> 
         <div className="flex flex-col justify-center text-lg text-start w-72 lg:w-[28rem] py-5"> 
                <h1 className="font-black py-3 text-2xl"> <strong>{e.title} </strong></h1>
                <p>{e.description}</p>
            </div>
        </motion.div>
      ))}

        </motion.div>
     </motion.div>
     </div>
    <div className="flex justify-end pb-5" >
      <div className="flex justify-center items-center px-8"> 
        <h1 className="text-2xl pr-5">12.873</h1>
        <BsEye className="w-16 h-16"/>
      </div>
    </div>
    </div>
    
  )
}

export default Cases