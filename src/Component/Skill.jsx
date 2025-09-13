


export const Skill = () => {

    return (

        <>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-20">
                    My Skills
                </h1>
                <p className="text-xl mt-10 mb-20 text-center mx-10">
                    Technologies and tools I use to bring ideas to life
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-around mx-10 gap-15 md:gap-0 items-center md:mx-40 mb-[10vh] md:mb-0">
                <div className="h-100 w-100 bg-gray-300 rounded-2xl p-5">
                    <svg className="w-20 h-20 bg-blue-400 p-3 rounded-2xl mx-auto mb-8 mt-2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
                    <h1 className="text-2xl font-bold mb-10">
                        Frond Technologies
                    </h1>
                    <div className="flex flex-wrap  ">
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">HTML</ul>
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">CSS</ul>
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">Javascript</ul>
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">ReactJs</ul>
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">Responsive Design</ul>
                       
                    </div>
                </div>
                <div className="h-100 w-100 bg-gray-300 rounded-2xl p-5">
                    <svg className="w-20 h-20 bg-blue-400 p-3 rounded-2xl mx-auto mb-8 mt-2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z"/></svg>
                    <h1 className="text-2xl font-bold mb-10">
                        Backend & Tools
                    </h1>
                    <div className="flex flex-wrap ">
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">Bacis Node.js</ul>
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">Git&Github</ul>
                        
                    </div>
                </div>
                <div className="h-100 w-100 bg-gray-300 rounded-2xl p-5">
                    <svg className="w-20 h-20 bg-blue-400 p-3 rounded-2xl mx-auto mb-8 mt-2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
                    <h1 className="text-2xl font-bold mb-10">
                        Frond Technologies
                    </h1>
                    <div className="flex flex-wrap ">
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">Modern With Standarts</ul>
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">Cross browser Compatibility</ul>
                        <ul className="bg-white p-1 my-1 px-3 rounded-4xl mx-2">Performance Optimzation</ul>
                        
                       
                    </div>
                </div>
                
            </div>

        </>
    )
}