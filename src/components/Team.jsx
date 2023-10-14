import {AiFillLinkedin} from "react-icons/ai";
  
function Team() {
  return (
    <div className="bg-[url(bg/bgTeam.jpg)] bg-cover py-96 flex-col">  
        <div> 
            <h1 className="text-gray-50 text-7xl px-5">Time</h1>
        </div>
        <div className="flex">
            <img src="./teampic/teamRogerio.jpg" alt="Rógerio Lima" className="w-56 px-5"/>
            <div className="flex"> 
            <div> 
                <h1 className="text-gray-100 text-4xl"> <strong>Rogério Lima </strong></h1>
                <h2 className="text-gray-100">founder</h2> 
                <a href="" className="flex-row">
                    <AiFillLinkedin className="text-gray-100" />
                </a>
                <p className="text-gray-100">Engenheiro Mecânico, <br /> graduado pela Universidade <br /> Federal de Santa Catarina, e <br />Administrador de Empresas <br />
                    graduado pela Universidade<br /> do Estado de Santa Catarina– <br />UDESC/ESAG, com MBA em <br /> Gestão Empresarial na FGV.</p>
            </div>
                
                <div className="flex align-middle justify-center items-end"> 
                    <p className="text-gray-100"> Possui carreira executiva em <br /> empresa multinacional <br />assumindo diversas posições,<br />
                    tais como: CFO (Chief Finance <br /> Officer) na SCGAS, Gerente <br />Geral e Diretor Regional SP <br />pela Mitsui Gás. </p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Team