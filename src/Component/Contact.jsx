import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router";
import { AnimatedGroup } from "../../components/motion-primitives/animated-group";





export const Contact = (sueccess, failed) => {

    const googleMapUrl = "https://maps.app.goo.gl/H54uKLSeCroMUAAo6";

    const public_key = "466WlVcxs7r4-4vRL";
    const service_id = "service_ec4wu0w";
    const template_id = "template_qok2rcp";


    const form = useRef();
    const [status, setStatus] = useState("");

     const  sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .sendForm(service_id,   // from EmailJS dashboard
                template_id,  // from EmailJS dashboard
                form.current,
                public_key    // EmailJS Public key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus("Message Sent Successfully ✅");
                    form.current.reset();
                    console.log(status);

                    alert(status, "Message Sent Successfully ✅")
                },
                (error) => {
                    console.error(error.text);
                    setStatus("Failed to send ❌");
                    console.log(status);

                    alert(status, "Failed to send ❌")
                }
            );
    };



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


            <div className="text-center select-none">
                <h1 className="text-4xl font-bold mt-20  bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] bg-clip-text text-transparent">Get In Touch</h1>
                <p className="text-xl my-[5vh]">Have a Project in mind or want to collaborate? i'd love to hear from you!</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 mb-20   sm:mx-10 md:mx-20 mx-[25px] lg:mx-40 xl:mx-50 my-5 ">
                <div className="flex flex-col md:col-span-1">
                    <div className="p-7 bg-PureWhite dark:bg-[#41455adc]  shadow-xl rounded-2xl mb-5">
                        <h1 className="text-2xl font-bold mt-3">Contact Information</h1>
                        <div className="mt-5">
                            <div className="m-2 flex cursor-pointer select-none" onClick={()=>{ window.location.href = "mailto:ashwinc247@gmail.com?subject=Portfolio Inquiry&body=Hello Ashwin,"}}>
                                <svg className="h-12 w-12 m-2 p-3 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                                <div className="flex  flex-col justify-center">
                                    <p className="text-xs">Email</p>
                                    <p>ashwinc247@gmail.com</p>
                                </div>
                            </div>
                            <div className="m-2 flex cursor-pointer select-none" onClick={()=>( window.location.href = "tel:+916369072025")}>
                                <svg className="h-12 w-12 m-2 p-3 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)]  rounded-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                                <div className="flex  flex-col justify-center">
                                    <p className="text-xs">Phone</p>
                                    <p>+91 6369072025</p>
                                </div>
                            </div>
                            <div className="m-2 flex cursor-pointer select-none" onClick={()=>( window.open(googleMapUrl, "_blank"))} >
                                <svg className="h-12 w-12 m-2 p-3 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)]  rounded-xl " xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#FFFFFF"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                                <div className="flex  flex-col justify-center">
                                    <p className="text-xs">Location</p>
                                    <p>Thanjavur , Tamil Nadu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 bg-PureWhite dark:bg-[#41455adc]  shadow-xl rounded-2xl">
                        <h1 className="text-2xl font-bold">Follow Me</h1>
                        <div className="flex mt-5 flex-wrap  select-none ">
                            <a href="https://github.com/ashwinc247/chitravel-codes-portfolio" target="blank" rel="noopener noreferrer"><svg className="h-12 w-12 m-2 p-3 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-xl cursor-pointer" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                                <title>github [#142]</title>
                                <desc>Created with Sketch.</desc>
                                <defs>

                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="#fff" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#fff">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            </a>
                            <a href="https://www.instagram.com/kratos_x.x/" target="blank" >
                                <svg className=" cursor-pointer h-12 w-12 m-2 p-3 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-xl" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#fff"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#fff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#fff"></path> </g></svg>
                            </a>
                            <div>
                                <svg className=" cursor-pointer h-12 w-12 m-2 p-3 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-xl" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" filrRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                            </div>
                            <a href="https://wa.me/916369072025?text=Hi..." target="blank+">
                                <svg className=" cursor-pointer h-12 w-12 m-2 p-3 bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] rounded-xl" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="#ffffff"></path> </g></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="p-10 bg-PureWhite dark:bg-[#41455adc]  shadow-xl rounded-2xl md:col-span-2 mt-20 md:mt-0 ms-0 md:ms-5">
                    <h1 className="text-2xl font-bold mb-10">Send Me a Message</h1>
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <p className="text-xs mb-2">Name *</p>
                            <input name="user_name" required className=" border-2 w-full rounded-2xl border-gray-300 mb-10 p-2" type="text" />

                        </div>
                        <div className="flex-1">
                            <p className="text-xs mb-2">Email *</p>
                            <input name="user_email" required className="border-2 w-full rounded-2xl border-gray-300 mb-10 p-2 " type="text" />

                        </div>

                    </div>
                    <p className="text-xs mb-2">Subject</p>
                    <input name="subject" required className="border-2  w-full rounded-2xl border-gray-300 mb-10 p-2" type="text" />
                    <p className="text-xs mb-2">Message</p>
                    <textarea name="message" required className="border-2 w-full rounded-2xl border-gray-300 mb-10 p-2"></textarea>
                    
                    <button type="submit" className="bg-[linear-gradient(135deg,#3b82f6,#9333ea)] dark:bg-[linear-gradient(135deg,#4FC3F7,#B085F5)] w-[50%] text-center p-3 rounded-2xl text-white block  mx-auto ">Send Message</button>

                    
                </form>
            </div>

            </AnimatedGroup>
        </>
    )
}