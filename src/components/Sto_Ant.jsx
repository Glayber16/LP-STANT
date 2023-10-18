import Mission from "./Mission"
import Values from "./Values"
import Vision from "./Vision"


function Sto_Ant() {
  return (
  <div className="bg-[url(bg/bgMission.jpg)] flex-col bg-cover bg-center h-max text-gray-50 font-michroma ">
   
    <div className="  flex justify-center "> 
        <h1 className=" text-9xl lg:text-sto">Sto Ant</h1>
    </div>
    <div className="lg:px-28 lg:text-8xl text-6xl flex-col py-60">
        <div className="lg:pb-72"> 
            <Mission />
            <Vision />
            <Values />
        </div>
    </div>


</div>
)

}

export default Sto_Ant