function Contacts() {
    return(

        <div className=" relative w-full h-full "> 
        <div className="bg-[url(bg/bgContacts.jpg)] absolute inset-0 bg-cover bg-center -z-20" ></div>
        <div className="bg-[url(bg/bgBall.png)] absolute inset-0 bg-[length:950px_1000px] -top-[4rem] left-[4rem] opacity-50 bg-no-repeat  3xl:bg-center 3xl: -z-20 "> </div>
            
            <div className="sm:flex align-middle justify-around items-center xl:py-72  font-michroma py-20 px-5" id="contact"> 
            <div className="px-10 sm:px-0 py-5 sm:py-0 xl:w-[33.2rem]"> 
                <h1 className="text-gray-100 sm:text-[48px] sm:leading-[3.45rem] text-4xl"> <strong> Venha construir o futuro conosco!</strong></h1>
            </div>
            <div className="bg-gray-50 flex-col align-middle justify-center items-center rounded-md border px-4 sm:px-9 sm:py-11 xl:w-[35rem] xl:h-[26.65rem] text-violeta">
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
                <input type="checkbox" name="checkbox" className="checked:bg-violeta border-[#4F29E4]"/>
                <label htmlFor="">
                    <span className=" flex-row justify-center align-middle ">Estou ciente e de acordo em compartilhar meus dados pessoais com esse site.</span>
                </label>
                </div>
                <div className="flex align-middle items-center justify-center pt-10 "> 
                <button className="bg-violeta border rounded-lg flex align-middle items-center w-[18.7rem] h-[4.8rem] text-center justify-center text-gray-50">ENVIAR</button>
                </div>
            </div>
            </div>
        
        </div>
    );
}

export default Contacts;