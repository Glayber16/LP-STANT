
import { POP_UPS } from "../constants/index";
import Pop_ups from "./Pop_ups";

function Sto_Ant() {
  return (
  <div className="bg-[url(bg/bgMission.jpg)] flex-col bg-cover bg-center h-max text-gray-50 font-michroma ">
   
    <div className="  flex justify-center "> 
    <img src="sto.svg" alt="" className="w-screen"/>
        
    </div>
    <div className="lg:px-28 lg:text-8xl text-6xl flex-col py-60">
        <div className="lg:pb-36"> 
            {POP_UPS.map(e => (
                <Pop_ups name = {e.name} text = {e.text} text2 = {e.text2} text3={e.text3} text4={e.text4}   />
            ))}
        </div>
    </div>


</div>
)

}

export default Sto_Ant