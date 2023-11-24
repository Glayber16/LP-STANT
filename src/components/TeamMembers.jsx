import {AiFillLinkedin} from "react-icons/ai";

function TeamMembers({name, image, role, description1, description2, linkedin, dsc}) {
  return (
    <div className="lg:flex px-10 lg:px-5 py-5">
            <div className=""> 
                <img src={image} alt = {dsc} className="w-60 h-[17rem] mr-8 clip-circle "/>
            </div>
            <div className="flex-row"> 
            
                <div>
                    <h1 className="text-gray-100 text-4xl font-black"> {name}</h1>
                    <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-gray-100">{role}</h2> 
                    
                    <a href= {linkedin} >
                        <AiFillLinkedin className="text-gray-100" />
                    </a> 
                </div>

                <div className="lg:flex lg:gap-14 "> 
                    <div className="lg:w-[21rem]"> 
                        <p className="text-gray-100 leading-7 font-light text-base tracking-wider">{description1}</p>
                    </div>
                    
                
                    
                    <div className="lg:w-[21rem]"> 
                        <p className="text-gray-100 leading-7 font-light text-base tracking-wider"> {description2} </p>
                    </div>
                 </div> 
                 </div>
            </div>
        </div>
  )
}

export default TeamMembers