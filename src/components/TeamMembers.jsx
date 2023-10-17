import {AiFillLinkedin} from "react-icons/ai";

function TeamMembers({name, image, role, description1, description2, linkedin}) {
  return (
    <div className="flex ">
            <div className="w-60 px-5"> 
                <img src={image} alt="Rógerio Lima" className=""/>
            </div>
            <div className="flex"> 
            <div > 
                <h1 className="text-gray-100 text-4xl"> <strong>{name}</strong></h1>
                <div className="flex justify-around">
                <h2 className="text-gray-100">{role}</h2> 
                <a href= {linkedin} >
                    <AiFillLinkedin className="text-gray-100" />
                </a> 
                </div>
                <p className="text-gray-100 text-sm">{description1}</p>
            </div>
                
                <div className="flex align-middle justify-center items-end"> 
                    <p className="text-gray-100 text-sm"> {description2} </p>
                 </div>
            </div>
        </div>
  )
}

export default TeamMembers