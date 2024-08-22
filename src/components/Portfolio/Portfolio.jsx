import { useState,useEffect } from "react"

function Portfolio() {

    const [imgCurr,setImg]=useState(null);
    const [hide,setHide]=useState(true);

    useEffect(()=>{
        document.title="Portfolio";
    },[]);

    function display(e){
        const imgSrc=e.currentTarget.querySelector('img');
        if(imgSrc){
            setImg(imgSrc.src);
            setHide(false)
        }
    }

    function handleHidden(){
        setHide(true)
    }
    return (
        <>
        <div className="flex justify-between py-10 mt-36 container mx-auto" >
        <div className="container mx-auto">
            <div>
            <h1 className="text-4xl font-bold text-[#2c3e50] uppercase text-center">portfolio component</h1>
            <div className="flex justify-center items-center py-4">
                <p className="w-20 h-1 bg-[#2c3e50]"></p>
                <i className="fa-solid fa-star px-3"></i> 
                <p className="w-20 h-1 bg-[#2c3e50]"></p>
            </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3 p-5 cursor-pointer relative">
                <div className="relative" onClick={display}>
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt=""  className="rounded-md w-full"/>
                <div className="absolute bg-[#1abc9c] inset-0 rounded-md after:content-['+']  transition-all duration-700 opacity-0 hover:opacity-100 flex justify-center items-center text-white text-9xl"></div>
                </div>                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5 cursor-pointer relative">
                <div className="relative" onClick={display}>
                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt=""  className="rounded-md w-full"/>
                <div className="absolute bg-[#1abc9c] inset-0 rounded-md after:content-['+']  transition-all duration-700 opacity-0 hover:opacity-100 flex justify-center items-center text-white text-9xl"></div>
                </div>                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5 cursor-pointer relative">
                <div className="relative" onClick={display}>
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt=""  className="rounded-md w-full"/>
                <div className="absolute bg-[#1abc9c] inset-0 rounded-md after:content-['+']  transition-all duration-700 opacity-0 hover:opacity-100 flex justify-center items-center text-white text-9xl"></div>
                </div>                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5 cursor-pointer relative">
                <div className="relative" onClick={display}>
                <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt=""  className="rounded-md w-full"/>
                <div className="absolute bg-[#1abc9c] inset-0 rounded-md after:content-['+']  transition-all duration-700 opacity-0 hover:opacity-100 flex justify-center items-center text-white text-9xl"></div>
                </div>                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5 cursor-pointer ">
                <div className="relative" onClick={display}>
                <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt=""  className="rounded-md w-full"/>
                <div className="absolute bg-[#1abc9c] inset-0 rounded-md after:content-['+']  transition-all duration-700 opacity-0 hover:opacity-100 flex justify-center items-center text-white text-9xl"></div>
                </div>
               
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-5 cursor-pointer relative">
                <div className="relative" onClick={display}>
                <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt=""  className="rounded-md w-full "/>
                <div className="absolute bg-[#1abc9c] inset-0 rounded-md after:content-['+']  transition-all duration-700 opacity-0 hover:opacity-100 flex justify-center items-center text-white text-9xl"></div>
                </div>                
                </div>
                </div>
        </div>

        <div className={hide ? 'hidden' : 'fixed inset-0 flex justify-center items-center bg-[#1abc9c] bg-opacity-20  z-50'} onClick={handleHidden}>
                <img src={imgCurr} alt="" className="z-50 opacity-100 sm:w-2/5" />
        </div>
            </div>
        </>
    )
}

export default Portfolio
