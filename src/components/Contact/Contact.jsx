import { useEffect } from "react";

function Contact() {

    
    useEffect(()=>{
        document.title="Contact";
    },[]);
    return (
        <div className="flex items-center justify-center py-36" >
        <div className="container mx-auto md:w-2/4 w-3/4 mt-16  text-center">
        <div>
            <h1 className="text-4xl font-bold text-[#2c3e50] uppercase">contact section</h1>
            <div className="flex justify-center items-center py-4">
                <p className="w-20 h-1 bg-[#2c3e50]"></p>
                <i className="fa-solid fa-star px-3"></i> 
                <p className="w-20 h-1 bg-[#2c3e50]"></p>
            </div>
        </div>

        <div className="flex flex-col">
            <input type="text" placeholder="userName" className="w-full border-2 border-transparent border-b-gray-200 bg-red p-2 my-5 focus:outline-none rounded-md placeholder:text-[#2c3e50]"/>
            <input type="text" placeholder="userAge"  className="w-full border-2 border-transparent border-b-gray-200 bg-red p-2 my-5 focus:outline-none rounded-md placeholder:text-[#2c3e50]" />
            <input type="text" placeholder="userEmail"  className="w-full border-2 border-transparent border-b-gray-200 bg-red p-2 my-5 focus:outline-none rounded-md placeholder:text-[#2c3e50]" />
            <input type="text" placeholder="userPassword"  className="w-full border-2 border-transparent border-b-gray-200 bg-red p-2 my-5 focus:outline-none rounded-md placeholder:text-[#2c3e50]"/>
        </div>
        <button className="bg-[#1abc9c] text-white py-2 px-4 capitalize  rounded-md">send message</button>

            </div>
        
        
    </div>

   
    )
}

export default Contact
