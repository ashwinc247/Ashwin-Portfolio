import { Link } from "react-router"


import { AnimatedGroup } from "../../components/motion-primitives/animated-group"





export const Home = () => {
    return (
        <>
        




         <AnimatedGroup
      variants={{
        container: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              duration: 1.2,
              type: 'spring',
              bounce: 0.3,
            },
          },
        },
      }}
    >

             
            <div className="flex flex-col items-center my-30 ">
                <div className="flex flex-col items-center  ">
                    <h1 className="  bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] bg-clip-text text-transparent 
                       text-7xl drop-shadow-2xl md:text-8xl mx-30 font-bold font text-center select-none">
                        Ashwin Chithravel
                        </h1>
                    <p className=" text-3xl md:text-4xl my-10 font-bold select-none text-black dark:text-white font-code "><code className="tracking-[.3rem] md:tracking-[.5rem]">Web Developer</code></p>
                </div>
                
                <div className=" select-none md:px-60 mx-15 md:mx-40 my-20 text-xl   text-center">
                    Passionate about creating beautiful, functional, and user-friendly websites using modern technologies like React.js, JavaScript, and responsive design.

                </div>
                <div className="flex flex-col md:flex-row gap-5">
                    <Link to="/project" className="w-60 h-15 text-xl bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)]   rounded-2xl  text-white my-5 flex justify-center items-center">View My Work
                        <svg className=" h-6 w-6 my-1 ms-4 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#fff" />
                        </svg>
                    </Link>
                    <Link to="/contact" className="w-60 h-15 text-xl  bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-2xl text-white  my-5 flex justify-center items-center">Get In Touch
                        <svg className=" h-6 w-6 my-1 ms-4 " xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                    </Link>
                </div>
            </div>


            <div className="flex flex-col items-center mb-[20vh]">
                <div>
                    <h1 className="text-3xl font-bold mb-30">Explore My Portfolio</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-20">
                    <div className="h-80 w-80 bg-PureWhite dark:bg-[#41455adc] shadow-xl rounded-2xl flex flex-col justify-center mx-5 ">
                        <svg className="h-20 w-20 mx-auto mb-7 p-5  bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                        <h1 className="text-2xl font-bold mb-10">About</h1>
                        <p className="text-xl mb-5">Learn about my journey as a web developer and my passion for creating digital experiences</p>
                    </div>
                    <div className="h-80 w-80 bg-PureWhite dark:bg-[#41455adc] shadow-xl rounded-2xl flex flex-col justify-center mx-5">
                        <svg className="h-20 w-20 mx-auto mb-7 p-5  bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-xl" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" /></svg>
                        <h1 className="text-2xl font-bold mb-10">Skill</h1>
                        <p className="text-xl mb-5 mx-2">Discover the technologiesand tools i use to bring ideas to life</p>
                    </div>
                    <div className="h-80 w-80 bg-PureWhite dark:bg-[#41455adc] shadow-xl rounded-2xl flex flex-col justify-center mx-5">
                        <svg className="h-20 w-20 mx-auto mb-7 p-5  bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-xl" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" /></svg>
                        <h1 className="text-2xl font-bold mb-10">Project</h1>
                        <p className="text-xl mb-5">Explore my protfolio of web application and development projects</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center text-center mb-30  ">
                <div className="mb-10 md:px-40"> 
                    <h1 className="text-3xl font-bold mb-20">Let's Build Something Amazing Together</h1>
                    <p className="text-xl mb-20 mx-15 md:px-60">I'm always  inrested in new opportunities and exciting. Whether you have a project in mind org
                        just want to connect, i'd love to hear from you
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10"> 
                    <Link to="/contact" className="  w-60 h-15 text-xl  bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-2xl text-white flex justify-center items-center">Start a Conversation</Link>
                    <Link to="/resume"  className="  w-60 h-15   text-xl  bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-2xl text-white flex justify-center items-center">Download Resume</Link>
                </div>
            </div>
            </AnimatedGroup>
        </>
    )
}