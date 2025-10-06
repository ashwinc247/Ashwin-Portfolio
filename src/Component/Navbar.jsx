
// import { p } from "motion/react-client"
import { useState, useEffect } from "react"
import { Link } from "react-router"





export const Navbar = () => {

    const [active, setActive] = useState("hidden")
    const [theme, setTheme] = useState("")

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemMode = prefersDark === true ? "dark" : "light"
    const storeTheme = localStorage.getItem("theme")

    //     function initTheme() {
    //   // localStorage check பண்ணு
    //   const storedTheme = localStorage.getItem('theme');
    //   if (storedTheme) {
    //     setTheme(storedTheme);
    //   } else {
    //     // இல்லைனா system theme follow பண்ணு
    //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //       setTheme('dark');
    //     } else {
    //       setTheme('light');
    //     }
    //   }
    // }

    // initTheme();

    useEffect(() => {


        if (storeTheme == 'light') {
            document.documentElement.classList.remove('dark')
            setTheme("light")
        } else if (prefersDark) {
            document.documentElement.classList.add('dark')
            setTheme("dark")
        }


    }, [])

    const toggle = () => {
        if (theme == "dark") {
            document.documentElement.classList.remove('dark')
            setTheme("light")
            localStorage.setItem('theme', 'light')
        }
        else {
            document.documentElement.classList.add('dark')
            setTheme("dark")
            localStorage.setItem('theme', 'dark')
        }
    }

    return (



        <>
            <div className="navbar  dark:bg-[rgb(26, 27, 35)] bg-[#ffffff9d] dark:bg-[#41455adc] w-3/4 md:w-2/4 m-auto mt-5 sticky rounded-3xl backdrop-blur-[10px] flex  justify-between p-5 items-center  top-0  shadow-xl z-50">
                <div className="text-4xl   bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] bg-clip-text  text-transparent font-bold select-none">
                   As.
                </div>


                <div className="hidden md:block font-medium ">
                    <Link to="/" className="mx-10  text-md">Home</Link>
                    <Link to="/about" className="mx-5 text-md">About</Link>
                    <Link to="/skill" className="mx-5 text-md">Skill</Link>
                    <Link to="/project" className="mx-5 text-md">Project</Link>
                    <Link to="/resume" className="mx-5 text-md" >Resume</Link>
                    <Link to="/contact" className="mx-5 text-md ">Contact</Link>
                </div>
                <div onClick={toggle}
                    className="   hidden md:block rounded-xl cursor-pointer ">
                    {theme == "dark" ?
                        <svg

                            className="h-7 w-7 hidden md:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        :
                        <svg className="h-7 w-7 p-1 hidden md:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" stroke="#1C274C" />
                            <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" stroke="#1C274C" />
                            <path d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z" fill="#1C274C" />
                        </svg>
                    }


                </div>

                {active == "" ?
                    
                    <svg onClick={() => { setActive(active == "" ? "hidden " : "") }} xmlns="http://www.w3.org/2000/svg" className="text-xl mr-4 h-6 w-6 absolute right-2 top-auto md:hidden select-none " viewBox="0 -960 960 960"  fill={theme=="dark"?"#fff":"#000"}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>

                    :
                    <svg onClick={() => { setActive(active == "" ? "hidden " : "") }} className=" mr-4 h-6 w-6 absolute right-2 top-auto md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill={theme=="dark"?"#fff":"#000"}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>

                }


            </div>
           

                <div  className={active +' m-auto sticky  top-25   backdrop-blur-[10px] z-20   mt-5 dark:bg-[#41455adc]  rounded-3xl  bg-[#ffffffc5] w-3/4  md:hidden  font-medium  px-20 py-10  shadow-2xl flex flex-col justify-center items-center'}>

                    <Link to="/" className="my-5 text-xl " onClick={() => { setActive("hidden") }}>Home</Link>
                    <Link to="/about" className="my-5 text-xl" onClick={() => { setActive("hidden") }}>About</Link>
                    <Link to="/skill" className="my-5 text-xl" onClick={() => { setActive("hidden") }}>Skill</Link>
                    <Link to="/project" className="my-5 text-xl" onClick={() => { setActive("hidden") }}>Project</Link>
                    <Link to="/resume" className="my-5 text-xl" onClick={() => { setActive("hidden") }}>Resume</Link>
                    <Link to="/contact" className="my-5 text-xl " onClick={() => { setActive("hidden") }}>Contact</Link>
                    <div onClick={toggle}
                        className=" border-1 p-2  rounded-4xl  mt-3 cursor-pointer">
                        {theme == "dark" ?
                            <div className="flex items-center gap-1"><svg

                                className="h-7 w-7 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                                <p className="text-ms font-normal select-none">Light Mode</p>

                            </div>
                            :
                            <div className="flex items-center gap-1">
                                <svg className="h-7 w-7 p-1 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" stroke="#1C274C" />
                                    <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" stroke="#1C274C" />
                                    <path d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z" fill="#1C274C" />
                                </svg>
                                <p className="text-ms font-normal select-none">Dark Mode</p>
                            </div>
                        }


                    </div>
                </div>


            
        </>
    )
}