import { IoLogoGithub } from "react-icons/io5";


function ProjectTem({img,text,head,list,code,live}) {
    return (
        <div className={`flex md:mb-16 flex-col basis-2/4 space-y-5 justify-center items-center `}>
          <img className="h-[250px] cursor-pointer hover:scale-[1.05] 
          transition-all duration-500 rounded-md md:w-[300px] lg:w-[400px] w-[400px]" src={`${img}`} alt="" />

          <div className={`flex-col ml-10 flex  space-y-5`}>
            <h1 className="text-2xl font-mono">{head}</h1>
            <p className="w-[80%] text-base sm:text-lg font-garamond ">{text}</p>
             <ul className="flex items-center space-x-1  sm:space-x-3 flex-wrap">
                {
                    list.map(((value,i)=><li key={i+1} className="text-[#f1f1f1] font-serif  md:mt-1 lg:mt-0  bg-blue-800 px-2 py-[2px] rounded-full">{value}</li>))
                }
             </ul>
           <div className="w-[80%] flex items-center justify-between">
             <div className="border-[1px] px-3 py-1 cursor-pointer rounded-lg
              flex items-center"><a href={`${code}`} className="flex"><IoLogoGithub className="mr-2 text-2xl"/>Code</a></div>
             <div className="bg-blue-400 py-1 font-[500] capitalize text-black px-2
              cursor-pointer rounded-lg"><a href={`${live}`}>Live Demo</a></div>
          </div>
        
        </div>

        </div>
    )
}

export default ProjectTem
