import { IoLogoGithub } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoOctocat } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoSass } from "react-icons/io5";

function Social({num,style}) {
    return (<>
        {num===1&&<li className="border-[1px] border-black p-1 cursor-pointer hover:bg-gray-500">
           <a href="discordapp.com/users/1025085120719356024"><img src={"public/social/discord.png"} className="h-[30px] w-[30px]" alt=""/></a>
        </li>}
        {num===2&&<li className="border-[1px] border-black p-1 cursor-pointer hover:bg-gray-500">
           <a href="https://x.com/Ajaniadam1?t=I0Ze6Ll-B-rfEPIqgTQgpg&s=09"><img src={"public/social/x.png"} className="h-[30px] w-[30px]" alt=""/></a>
        </li>}
        {num===3&&<li className="border-[1px] border-black p-1 cursor-pointer hover:bg-gray-500">
           <a href="https://github.com/Adamskid9"><img src={"public/social/github.png"} className="h-[30px] w-[30px]" alt=""/></a> 
        </li>}
        {num===4&&<li className="border-[1px] border-black p-1 cursor-pointer hover:bg-gray-500">
           <a href="https://www.facebook.com/adam.ajani.54"> <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" 
           viewBox="-204.79995 -341.33325 1774.9329 2047.9995"><path d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69
            0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373" fill="#100f0d"/><path d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448
                   900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853
                   94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667
                   8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4" fill="#fff"/>
              </svg>
           </a>
        </li>}
        {num===5&&<li className="border-[1px] border-black p-1 cursor-pointer hover:bg-gray-500">
            <IoLogoFacebook className={`${style}`}/>
        </li>}
        {num===6&&<li className="border-[1px] border-black p-1 cursor-pointer hover:bg-gray-500">
            <IoLogoHtml5 className={`${style}`}/>
        </li>}
        {num===7&&<li className="border-[1px] border-black p-1 cursor-pointer hover:bg-gray-500">
            <IoLogoJavascript className={`${style}`}/>
        </li>}
        {num===8&&<li className="border-[1px] border-black p-1 cursor-pointer hover:bg-gray-500">
            <IoLogoReact className={`${style}`}/>
        </li>}
        {num===9&&<li className="border-[1px] border-black p-1 cursor-pointer hover:bg-gray-500">
            <IoLogoOctocat className={`${style}`}/>
        </li>}
    </>
    )
}

export default Social
