import {AiFillLinkedin} from "react-icons/ai";
import TeamMembers from "./TeamMembers";
import {TEAM_MEMBERS} from "../constants/index";

function Team() {
  return (
      
    <div className="bg-[url(bg/bgTeam.jpg)] bg-cover flex-col">  
        <div className="flex justify-start"> 
            <h1 className="text-gray-50 text-7xl px-5">Time</h1>
        </div>
        {TEAM_MEMBERS.map(e => (
            <TeamMembers name = {e.name} image = {e.image} role = {e.role} description1 = {e.description1} description2 = {e.description2} linkedin = {e.linkedin} />
        ))}
    </div>
  )
}

export default Team