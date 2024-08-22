import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
function Navbar() {

    const [open,setOpen]=useState(false)

    function toggleBar(){
        setOpen(!open)
    }
    return (
       <nav className="flex justify-between items-center py-8 px-5 md:px-28 fixed top-0 bg-[#2c3e50] w-screen text-white z-10">
        <div className="text-2xl md:text-3xl font-bold uppercase ">
            <Link to="/">start framework</Link>
        </div>
        <button className="md:hidden text-4xl border-2 border-[#18212b] rounded-md p-2 " onClick={toggleBar}> ☰</button>
            <ul className={`md:flex flex-col md:flex-row  gap-x-9 font-bold items-center ${open ? 'flex' : 'hidden'} absolute md:static top-24 left-0 w-full md:w-auto bg-[#2c3e50] p-5 md:p-0 `}>
                <li className="my-3 md:my-0"><NavLink to="/about" className="uppercase font-bold text-1xl hover:activ ">about</NavLink></li>
                <li className="my-3 md:my-0"><NavLink to="/portfolio" className="uppercase font-bold text-1xl">portfolio</NavLink></li>
                <li className="my-3 md:my-0"><NavLink to="/contact"className="uppercase font-bold text-1xl">Contact</NavLink></li>
            </ul>
       </nav>
    )
}

export default Navbar
