import {AiFillLinkedin} from "react-icons/ai";

function TeamMembers({name, image, role, description1, description2, linkedin, dsc}) {
  return (
    <div className="xl:flex px-10 py-5">
            <div className=""> 
                <img src={image} alt= {dsc} className="w-44 h-52 mr-8"/>
            </div>
            <div className="flex"> 
            
                <div>
                    <h1 className="text-gray-100 text-4xl"> <strong>{name}</strong></h1>
                    <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-gray-100">{role}</h2> 
                    
                    <a href= {linkedin} >
                        <AiFillLinkedin className="text-gray-100" />
                    </a> 
                </div>

                
                <div className="w-72"> 
                    <p className="text-gray-100 text-sm">{description1}</p>
                </div>
                
                </div>
                
                <div className="flex items-center w-72"> 
                    <p className="text-gray-100 text-sm"> {description2} </p>
                 </div>
            </div>
        </div>
  )
}

export default TeamMembers