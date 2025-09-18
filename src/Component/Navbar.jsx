import { useState } from "react"
import { Link } from "react-router"




export const Navbar = () => {

    const [active, setActive] = useState("hidden")

    return (
        <>
            <div className="navbar relative bg-gray-300 flex justify-between p-5 items-center ">
                <div className="text-4xl text-blue-500 font-bold select-none">
                    As.
                </div>
                      
                
                    <div className="hidden md:block font-medium">
                        <Link to="/" className="mx-10 text-xl">Home</Link>
                        <Link to="/about" className="mx-10 text-xl">About</Link>
                        <Link to="/skill" className="mx-10 text-xl">Skill</Link>
                        <Link to="/project" className="mx-10 text-xl">Project</Link>
                        <Link to="/resume" className="mx-10 text-xl" >Resume</Link>
                        <Link to="/contact" className="mx-10 text-xl ">Contact</Link>
                    </div>
               
                <svg onClick={() => { setActive(active == "" ? "hidden" : "") }} className="  h-6 w-6 absolute right-2 top-auto md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>


            </div>
            <div className={active} >
                
            <div onClick={()=>{setActive("hidden")}} className=" absolute md:hidden z-10 font-medium bg-gray-300  px-20 py-10   rounded-2xl flex flex-col justify-center items-center text-2xl  top-1 right-2 ">
                
                        <Link to="/" className="my-5 text-4xl ">Home</Link>
                        <Link to="/about" className="my-5 text-4xl">About</Link>
                        <Link to="/skill" className="my-5 text-4xl">Skill</Link>
                        <Link to="/project" className="my-5 text-4xl">Project</Link>
                        <Link to="/resume" className="my-5 text-4xl" >Resume</Link>
                        <Link to="/contact" className="my-5 text-4xl ">Contact</Link>
                    
                       </div>  
            </div>
        </>
    )
}