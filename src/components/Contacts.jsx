function Contacts() {
    return(

        <div className=" relative w-full h-full"> 
        <div className="bg-[url(bg/bgContacts.jpg)] absolute inset-0 bg-cover bg-center -z-20" ></div>
            <div className="bg-[url(bg/bgBall.png)] absolute inset-0 bg-contain bg-repeat bg-top -z-10 opacity-30"> </div>
            
            <div className="sm:flex align-middle justify-around items-center xl:py-72 xl:px-56 font-michroma py-20 px-5 "> 
            <div className="px-14 sm:px-0 py-5 sm:py-0"> 
                <h1 className="text-gray-100 sm:text-5xl text-4xl"> <strong> Venha construir <br /> o futuro conosco!</strong></h1>
            </div>
            <div className="bg-gray-50 flex-col align-middle justify-center items-center rounded-md border px-4 sm:px-9 sm:py-11  text-violeta">
                    <label>
                        <span className=" text-xl gap-3">nome</span>
                    </label>
                <input type="text" name="name" className=" mt-0 block w-full bg-gray-50 border-b border-b-violeta "/>
                <div className="flex-row py-4"> 
                <label htmlFor="" className="">
                    <span className=" text-xl ">e-mail</span>
                </label>
                <input type="email" name="email" className=" mt-0 block w-full bg-gray-50 border-b border-b-violeta "/>
                </div>
                <div className="flex gap-x-3 py-4"> 
                <input type="checkbox" name="checkbox" className="checked:bg-violeta"/>
                <label htmlFor="">
                    <span className="text-lg flex-row justify-center align-middle ">Estou ciente e de acordo em compartilhar</span>
                    <span className="text-lg flex align-middle gap-y-3">meus dados pessoais com esse site.</span>
                </label>
                </div>
                <div className="flex align-middle items-center justify-center py-3 "> 
                <button className="bg-violeta border rounded-lg flex align-middle items-center w-48 h-16 text-center justify-center text-gray-50">ENVIAR</button>
                </div>
            </div>
            </div>
        
        </div>
    );
}

export default Contacts;