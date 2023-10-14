function Contacts() {
    return(
        <div className="bg-[url(bg/bgContacts.jpg)] flex align-middle justify-around items-center bg-cover py-96" >
            <h1 className="text-gray-100 text-5xl ">Venha construir o futuro conosco!</h1>
            <form action="" method="get" className="bg-gray-50 flex-col align-middle justify-center items-center py-12" >
                 
                <label>
                    <span className="text-deep-purple-700 text-xl">nome</span>
                </label>
                
            <input type="text" className=" border-b-2 border-b-purple-700 flex columns-1  bg-gray-50"/>
            <label htmlFor="">
                <span className="text-deep-purple-700 text-xl">e-mail</span>
            </label>
            <input type="email" name="email" className=" border-b-2 border-b-purple-700 flex columns-1 w-max bg-gray-50"/>
            <input type="checkbox" name="checkbox" />
            <label htmlFor="">
                <span className="text-deep-purple-700 text-lg ">Estou ciente e de acordo em compartilhar meus dados pessoais com esse site.</span>
            </label>
            <button className="bg-deep-purple-700 border rounded-lg flex align-middle items-center w-40 h-16 text-center justify-center text-gray-50">ENVIAR</button>
           </form>
        </div>
    );
}

export default Contacts;