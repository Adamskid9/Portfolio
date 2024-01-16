import { IoMailOutline } from "react-icons/io5"
import Social from "./Social"

function ContactMe() {
    return (
        <div className="h-[100vh] contact relative text-black ring-2s mt-5 ring-blue-300 rounded-md">
            <div className="absolute items-center space-y-10 flex-col flex top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-500 font-transparent">Get in touch</h1>
                <p className="text-base font-changa text-center font-[400]">Excited to connect and discuss how my skills can contribute to
                 your team. Your message is valued and I look forward to the opportunity!
                 </p>

                <div className="flex-col flex justify-center items-center">
                  <div className="flex space-x-3">
                     <Social num={4}/>
                     <Social num={2}/>
                     <Social num={3}/>
                   </div>

                 <div className="sm:text-xl mt-2 text-lg flex items-center space-x-2 font-garamond tracking-[2px] cursor-pointer "><IoMailOutline/><a href="mailto:ajaniadam9@gmail.com">ajaniadam9@gmail.com</a></div>
                </div>

                <button className="bg-blue-500 text-[#f1f1f1] px-10 py-1 rounded-xl"><a href="mailto:ajaniadam9@gmail.com">Say Hi</a></button>
                 
            </div>
        </div>
    )
}

export default ContactMe
