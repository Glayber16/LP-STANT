function Contacts() {
    return(
        <div className="bg-[url(bg/bgContacts.jpg)] flex align-middle justify-around items-center bg-cover py-96" >
            <div className="w-max"> 
                <h1 className="text-gray-100 text-5xl ">Venha construir <br /> o futuro conosco!</h1>
            </div>
            <div className="bg-gray-50 flex-col align-middle justify-center items-center rounded-md border px-9 py-8">
                    <label>
                        <span className="text-deep-purple-700 text-xl">nome</span>
                    </label>
                <input type="text" name="name" className=" mt-0 block w-full bg-gray-50 border-b border-b-purple-700 "/>
                <label htmlFor="">
                    <span className="text-deep-purple-700 text-xl">e-mail</span>
                </label>
                <input type="email" name="email" className=" mt-0 block w-full bg-gray-50 border-b border-b-purple-700 "/>
                <input type="checkbox" name="checkbox" className=""/>
                <label htmlFor="">
                    <span className="text-deep-purple-700 text-lg flex-row ml-3">Estou ciente e de acordo em compartilhar <br /> meus dados pessoais com esse site.</span>
                </label>
                <div className="flex align-middle items-center justify-center py-3"> 
                <button className="bg-deep-purple-700 border rounded-lg flex align-middle items-center w-48 h-16 text-center justify-center text-gray-50">ENVIAR</button>
                </div>
           </div>
        </div>
    );
}

export default Contacts;