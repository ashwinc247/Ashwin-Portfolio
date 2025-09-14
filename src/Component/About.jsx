


export const About = () => {
    return (
        <>
            <div className="container  flex flex-col items-center mx-auto">
                <h1 className="abt-txt text-4xl font-bold mt-20">About Me</h1>
                <div className="text-xl py-10 text-center">Get to know more about my journey as a web developer</div>
            </div>
            <div className="grid md:grid-cols-2 md:p-25 p-8  bg-gray-200 w-[70%] mx-auto rounded-2xl mb-20">
                <div className="md:row-span-2">
                    <h1 className="md:text-3xl text-2xl mb-5 font-medium">Hello, I'm Ashwin Chithravel</h1>
                    <p className="text-ms md:text-xl mb-10 md:mb-0">
                        I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly websites. My journey in web development started with curiosity about how websites work, and it has evolved into a career dedicated to crafting digital experiences that make a difference.

                        I specialize in front-end development with React.js, but I also enjoy working with backend technologies like Node.js. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.

                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with fellow developers in the community.
                    </p>
                </div>
                <div className="md:ms-20 bg-blue-400  rounded-2xl p-5 text-white h-auto  my-5">
                    <h1 className="text-2xl font-medium">
                       My Approach 
                    </h1>
                    <p className=" text-ms md:text-xl ">
                        I focus on creating responsive, accessible, and performance-optimized web applications that provide exceptional user experiences across all devices.
                    </p>
                </div>
                <div className="md:ms-20 bg-blue-400 rounded-2xl p-5 text-white h-auto  my-5">
                    <h1 className="text-2xl font-medium ">
                        Always Learning
                    </h1>
                    <p className="text-ms md:text-xl ">
                        Technology evolves rapidly, and I'm committed to continuous learning and improving my skills to deliver cutting-edge solutions.


                    </p>
                </div>

            </div>
        </>
    )

}