import { useEffect } from "react";
function About() {

    useEffect(()=>{
        document.title="About";
    },[]);

    return (
        <div className="flex justify-between py-64 bg-[#1abc9c]">
        <div className="container mx-auto w-3/4">
        <div className="text-white text-center">
            <h1 className="text-4xl font-bold uppercase mt-5">ABOUT COMPONENT</h1>
            <div className="flex justify-center items-center py-4">
            <p className="w-20 h-1 bg-white"></p>
            <i className="fa-solid fa-star px-3"></i> 
            <p className="w-20 h-1 bg-white"></p>
            </div>
            <div className="flex space-x-6 text-left">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
     
            </div>
        </div>
       
       

       
        
    </div>
    )
}

export default About
