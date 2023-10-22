import {motion} from "framer-motion"
import { SLIDER } from "../constants/index";

function Slider({image, title, description, alt}) {
  return (
    <motion.div className="overflow-hidden cursor-grab" whileTap={{cursor: "grabbing"}}>
        <motion.div drag = 'x' className="flex px-20 py-16"> 
        {SLIDER.map(e => (
        <motion.div> 
         <img src={image} alt={alt} className="w-96 h-96 rounded-lg pointer-events-none" /> 
         <div className="flex flex-col justify-center text-start w-96"> 
                <h1 className="font-black">{title}</h1>
                <p>{description}</p>
            </div>
        </motion.div>
      ))}

        </motion.div>
     </motion.div>
  )
}

export default Slider