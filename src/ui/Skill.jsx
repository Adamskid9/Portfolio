import { BsGit } from "react-icons/bs";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoSass } from "react-icons/io5";
import Svg from "./Svg";


const styleLogo = "text-8xl border-[2px] border p-1 border-prime-0";
const container = `p-5 flex flex-col justify-center items-center`;

const SkillsList = [
<div className={container}><IoLogoCss3 className={`${styleLogo}`} /> <span>CSS</span></div>
,<div className={container}><IoLogoSass className={`${styleLogo}`}/> <span>Sass</span></div>
,<div className={container}><IoLogoJavascript className={`${styleLogo}`}/> <span>Javascript</span></div>
,<div className={container}><BsGit className={`${styleLogo}`}/> <span>Git</span></div>
,<div className={container}><IoLogoHtml5 className={`${styleLogo}`}/> <span>Html</span></div>
,<div className={container}><IoLogoReact className={`${styleLogo}`}/> <span>React</span></div>
,<div className={container}><Svg  num={1} sty={'h-[6rem] w-[6rem] border-[2px] border p-2 border-prime-0'}/><span>Styled component</span></div>
,<div className={container}><Svg  num={2} sty={'h-[6rem] w-[6rem] border-[2px] border p-2 border-prime-0'}/><span>Supabase</span></div>
,<div className={container}><Svg  num={13} sty={'h-[6rem] font- w-[6rem] border-[2px] border p-2 border-prime-0'}/><span>Tailwind</span></div>
];

function Skill() {
    return (
        <section className="bg-yellow-500d transition-all duration-1000 skill my-5 mt-28 flex flex-col space-y-3">

            <div className="capitalize flex items-center text-black justify-center text-4xl font-[600] font-garamond ">
                my <span className="font-transparent ml-2">Skills</span>
            </div>
              
            <div className=" text-black flex flex-wrap">
                {
                    SkillsList.map((value,i)=><div key={i+1} className="h-[150px] bg-red-500s basis-1/2 sm:basis-1/5">
                        <div className="bg-green-500s  m-1 w-full flex justify-center items-center h-full">{value}</div>
                    </div>)
                }
            </div>
            
        </section>
    )
}

export default Skill
