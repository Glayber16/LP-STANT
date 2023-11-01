import TeamMembers from "./TeamMembers";
import {TEAM_MEMBERS} from "../constants/index";

function Team() {
  return (
    <div className="relative w-full h-full " >
    <div className="bg-gradient-to-b from-area to-[#1127b3] absolute inset-0 bg-cover bg-center -z-20">  </div>
    <div className="xl:bg-[url(bg/bgBallsteam.png)] absolute inset-0 bg-contain bg-no-repeat bg-right -z-20"></div>
    <div className="flex-col font-michroma pb-5 " id="time"> 
        <div className=" mb-8"> 
            <h1 className="text-gray-50 text-7xl px-5">Time</h1>
        </div>
        <div className="xl:px-[4.5rem]"> 
        {TEAM_MEMBERS.map(e => (
            <TeamMembers name = {e.name} image = {e.image} role = {e.role} description1 = {e.description1} description2 = {e.description2} linkedin = {e.linkedin} />
        ))}
        </div>
        </div>
     
    
    </div>
  )
}

export default Team