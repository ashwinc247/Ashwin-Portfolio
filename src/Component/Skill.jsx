
import { AnimatedGroup } from "../../components/motion-primitives/animated-group"


export const Skill = () => {

    const skillPageFront = ["HTML","CSS","Javascript","React.js","Responsive Design"];
    const skillPageBack =  ["Basic Node.js","Git & Github","Mango DB"];
    const  skillPageWeb =  ["Modern With Standard","Cross Browser Compatibility","Performance Optimzation"]

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


            <div className="flex flex-col items-center ">
                <h1 className="text-4xl font-bold mt-20  bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] bg-clip-text text-transparent">
                    My Skills
                </h1>
                <p className="text-xl mt-10 mb-20 text-center mx-10">
                    Technologies and tools I use to bring ideas to life
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-around  gap-15 md:gap-0 items-center mx-8 md:mx-40 mb-[30vh] ">
                <div
                data-aos="fade-right" data-aos-delay="200"
                className="h-80 w-80 bg-PureWhite dark:bg-[#41455adc] shadow-xl rounded-2xl flex flex-col justify-center mx-5 ">
                    <svg className="w-20 h-20 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] p-3 rounded-2xl mx-auto mb-8 mt-2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
                    <h1 className="text-2xl font-bold mb-10 text-center">
                        Frontend Technologies
                    </h1>
                    <div className="flex flex-wrap  justify-center">
                        {
                            skillPageFront.map((i)=>(
                                <ul className="bg-[#f3f3f3]  dark:bg-[#41455adc] p-1 my-1 px-3 rounded-4xl mx-2">{i}</ul>
                            ))
                        }
                        
                       
                    </div>
                </div>
                <div
                data-aos="fade-up" data-aos-delay="200"
                className="h-80 w-80 bg-PureWhite dark:bg-[#41455adc] shadow-xl rounded-2xl flex flex-col justify-center mx-5 ">
                    <svg className="w-20 h-20 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] p-3 rounded-2xl mx-auto mb-8 mt-2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z"/></svg>
                    <h1 className="text-2xl font-bold mb-10 text-center">
                        Backend & Tools
                    </h1>
                    <div className="flex flex-wrap justify-center ">
                         {
                            skillPageBack.map((i)=>(
                                <ul className="bg-[#f3f3f3]  dark:bg-[#41455adc] p-1 my-1 px-3 rounded-4xl mx-2">{i}</ul>
                            ))
                        }
                        
                    </div>
                </div>
                <div
                data-aos="fade-left" data-aos-delay="200"
                className="h-80 w-80 bg-PureWhite dark:bg-[#41455adc] shadow-xl rounded-2xl flex flex-col justify-center mx-5 ">
                    <svg className="w-20 h-20 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] p-3 rounded-2xl mx-auto mb-8 mt-2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
                    <h1 className="text-2xl font-bold mb-10 text-center">
                        Web Development
                    </h1>
                    <div className="flex flex-wrap justify-center">
                        {
                            skillPageWeb.map((i)=>(
                                <ul className="bg-[#f3f3f3]  dark:bg-[#41455adc] p-1 my-1 px-3 rounded-4xl mx-2">{i}</ul>
                            ))
                        }
                        
                    </div>
                </div>
                
            </div>
            </AnimatedGroup>
        </>
    )
}