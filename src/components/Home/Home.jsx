import { useEffect } from "react"

function Home() {

    useEffect(()=>{
        document.title="Home";
    },[]);

    return (
        <div className="flex flex-col items-center py-16 bg-[#1abc9c]">
            <div className="w-80 mt-20"><img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="" /></div>
            <div className="text-white text-center">
                <h1 className="text-4xl font-bold uppercase mt-5">start Framework</h1>
                <div className="flex justify-center items-center py-4">
                <p className="w-20 h-1 bg-white"></p>
                <i className="fa-solid fa-star px-3"></i> 
                <p className="w-20 h-1 bg-white"></p>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
        </div>
    )
}

export default Home
