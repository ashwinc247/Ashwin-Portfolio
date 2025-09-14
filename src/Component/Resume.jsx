
import DownloadImg from "../assets/Resume.png"

export const Resume = () => {

    return (
        <>

            <div className="text-center">
                <h1 className="mt-20 text-4xl font-bold text-blue-500">
                    Resume
                </h1>
                <p className="text-2xl mt-10 md:mx-0 mx-10 text-center">
                    Download my complete resume or view highlights below
                </p>
                <a href={DownloadImg} download={DownloadImg} target="black" className="py-3 px-10 inline-flex justify-center items-center gap-3 text-xl bg-blue-400 rounded-2xl text-white mx-auto my-5   ">
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>
                   
                    Download Resume PDF
                </a>
            </div>
            <div className="text-center bg-gray-300 mx-8 md:mx-[20%] rounded-2xl mt-20 p-10 md:py-10">
                <h1 className="pt-2 text-3xl font-bold"> Ashwin Chithravel</h1>
                <p className="text-xl text-gray-600 mt-2">Web Developer</p>
                <div className="text-ms flex flex-col md:flex-row gap-3  md:justify-start items-start mt-5">
                    <p className="flex gap-3 justify-center items-center flex-1">
                         <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
        
                        ashiwnc247@gmail.com
                    </p>
                    <p className="flex gap-3 justify-center items-center flex-1">
                        <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                               
                        +91 63690 72025</p>
                    <p className="flex gap-3 justify-center items-center flex-1">
                         <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                              
                        India</p>
                </div>
            </div>
            <div className=" bg-gray-300  mx-8 md:mx-[20%] rounded-2xl p-10 mt-10">
                <h1 className="text-3xl font-bold">
                    Experience
                </h1>
                <div className="mt-4 border-s-4 border-blue-500 ps-3 rounded">
                    <p className="text-xl text-gray-700">Web Developer</p>
                    <p className="text-[1rem] text-blue-400">Self-Employed</p>
                    <p className="text-[.8rem] text-gray-500">2020-Present</p>
                    <p className="mt-3 text-ms text-gray-500">
                        developing modern web application using React.js,creating responsive designs , and implementing BrowserRouter
                        practices for performance optimization
                    </p>
                </div>
            </div>
            <div className=" bg-gray-300  mx-8 md:mx-[20%] rounded-2xl p-10 mt-10">
                <h1 className="text-3xl font-bold">
                    Education
                </h1>
                <div className="mt-4 border-s-4 border-blue-500 ps-3 rounded">
                    <p className="text-xl text-gray-700">Bachelor's Degree in Computer Science</p>
                    <p className="text-[1rem] text-blue-400">Bharathidhasan University</p>
                    <p className="text-[.8rem] text-gray-500">2020-2024</p>
                    <p className="mt-3 text-ms text-gray-500">
                        Relevant coursework in web development, software engineering and computer programming
                    </p>
                </div>

            </div>
            <div className=" bg-gray-300 mx-8 md:mx-[20%] rounded-2xl p-10 mt-10">
                <h1 className="text-3xl font-bold">
                    Education
                </h1>
                <div className="mt-4 border-s-4 border-blue-500 ps-3 rounded">
                    <p className="text-xl text-gray-700">Master's Degree in Computer Application</p>
                    <p className="text-[1rem] text-blue-400">Anna University</p>
                    <p className="text-[.8rem] text-gray-500">2024-2026</p>
                    <p className="mt-3 text-ms text-gray-500">
                        Relevant coursework in web development, software engineering and computer programming
                    </p>
                </div>


            </div>
            <div className=" bg-gray-300 mx-8 md:mx-[20%] rounded-2xl p-10 mt-10 mb-[10vh]">
                <h1 className="text-3xl font-bold">
                    Technical Skills
                </h1>
                <div className="flex flex-col md:flex-row justify-around gap-5 ">
                    <div className="mt-5 md:w-[40%] ">
                        <p className="text-2xl font-medium mb-5">Frontend</p>
                        <div className="flex  flex-wrap ">
                            <ul className="bg-blue-100 text-xs px-4 text-blue-500 py-1 inline-flex me-2 mt-2 rounded outline outline-blue-50 ">HTML</ul>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block  me-2 mt-2 rounded outline outline-blue-50">CSS</p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block  me-2 mt-2 rounded outline outline-blue-50">Javascript</p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50">React.js</p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50">Next.js</p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block  me-2 mt-2 rounded outline outline-blue-50">Responsive Design</p>
                        
                        </div>
                    </div>
                    <div className="mt-5 md:w-[40%]">
                        <p className="text-2xl font-medium mb-5">Backend</p>
                       <div className="flex  flex-wrap ">
                         <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50 ">MangoDB</p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50"></p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50"></p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50"></p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50"></p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50"></p>
                        
                       </div>
                    </div>
                    <div className="mt-5 md:w-[40%]">
                        <p className="text-2xl font-medium mb-5">Tools & Others</p>
                       <div className="flex  flex-wrap ">
                         <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50 ">Git & Github</p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50">Node.js</p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50">Basic Photoshop</p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50">Video Editing</p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50"></p>
                        <p className="bg-blue-100 text-xs px-4 text-blue-500 py-1 block me-2 mt-2 rounded outline outline-blue-50"></p>
                        
                       </div>
                    </div>
                </div>
            </div>

        </>
    )
}