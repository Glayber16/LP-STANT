function Contacts() {
    return(
        <div className="bg-[url(bg/bgBall.jpg)] z-20">
        <div className="bg-[url(bg/bgContacts.jpg)] flex align-middle justify-around items-center bg-cover py-96 z-10 font-michroma" >
             
            <div className=""> 
                <h1 className="text-gray-100 text-5xl"> <strong> Venha construir <br /> o futuro conosco!</strong></h1>
            </div>
            <div className="bg-gray-50 flex-col align-middle justify-center items-center rounded-md border px-9 py-11 text-violeta">
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
                <input type="checkbox" name="checkbox" className=""/>
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