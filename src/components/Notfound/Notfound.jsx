import { useEffect } from "react";


function NotFound() {
    useEffect(()=>{
        document.title="Not Found";
    },[]);
        
        return (
        <div className="flex items-center justify-center py-36" >
            <div className="container mx-auto md:w-2/4 w-3/4 mt-16  text-center">
                <div>
                    <h1 className="text-4xl font-bold text-[#2c3e50]">Page Is Not Found!!! , Make sure you Write page name correctly</h1>
                </div>
            </div>
        </div>
    
       
    )
}

export default NotFound
