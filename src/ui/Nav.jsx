import { useEffect, useState } from "react";
import { FiAlignLeft, FiAlignRight, FiMenu } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";


function Nav() {
  const [isOpen,setIsOpen] = useState(false)
  const [one,setOne] = useState("");

    
  useEffect(function(){
    const about = document.querySelector('.about');
    const skill = document.querySelector('.skill');
    const Project = document.querySelector('.project');
    const home = document.querySelector('body');
    const contact = document.querySelector('.contact');

    if (one===0) return home.scrollIntoView({ behavior: 'smooth' });
    if (one===1) return about.scrollIntoView({ behavior: 'smooth' });
    if (one===2) return skill.scrollIntoView({ behavior: 'smooth' });
    if (one===3) return Project.scrollIntoView({ behavior: 'smooth' });
    if (one===4) return contact.scrollIntoView({ behavior: 'smooth' });


  },[one])

    return (<>
    {/* large nav */}
        <div className='text-gray-500 top-5 z-50 fixed bg-blue-400 w-[90%] px-2 py-1 rounded-md text-base hidden sm:flex items-center justify-between space-x-5 capitalize font-[500]'>
        <img src="/logo.png" className="h-[35px]" alt="" />

          <div className="flex nav space-x-5">
            <div onClick={()=>setOne(0)}>Home</div>
            <div onClick={()=>setOne(1)}>About Me</div>
            <div onClick={()=>setOne(2)}>Skills</div>
            <div onClick={()=>setOne(3)}>Project</div>
            <div onClick={()=>setOne(4)}>Contact</div>
          </div>

          <button className="bg-blue-500 text-[#f1f1f1] px-3 py-1 rounded-full"><a href="mailto:ajaniadam9@gmail.com">Say Hi</a></button>
        </div>


        {/* small nav */}
        <div className="flex capitalize z-40 fixed w-[92.5%] rounded-sm  bg-blue-400s p-1 px-2 sm:hidden items-center text-black justify-between">
          <img src="/logo.png" className="h-[35px]" alt="" />
          <IoMenu onClick={()=>setIsOpen(true)} className="text-2xl z-50 menu text-white shadow cursor-pointer shadow-black" />
        </div>
        
          {
            <div className={`${isOpen?"w-full":'w-0'} sm:hidden top-0 fixed overflow-hidden transition-all duration-300 z-40 right-0 h-full backdrop-blur-sm `}>

               <div className="absolute right-0 w-1/2 h-screen nav-small">

                  <div onClick={()=>setIsOpen(false)} className="flex cursor-pointer mt-5 items-center justify-end mr-5 text-3xl">x</div>

                  <div onClick={()=>setIsOpen(false)} className="flex flex-col font-[600] font-garamond mt-12 items-center overflow-hidden justify-center nav space-y-5">
                    <div onClick={()=>setOne(0)}>Home</div>
                    <div onClick={()=>setOne(1)}>About Me</div>
                    <div onClick={()=>setOne(2)}>Skills</div>
                    <div onClick={()=>setOne(3)}>Project</div>
                    <div onClick={()=>setOne(4)}>Contact</div>
                  </div>

               </div>

            </div>
          }

        
        </>
    )
};

export default Nav