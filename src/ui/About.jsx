import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";

import TopAbout from "./TopAbout"
import { useEffect } from "react";

import { skil } from "../service";


function About() {

  useEffect(function(){

  async function api(){
   const s = await skil()
   console.log(s)
   } 
   api()

  },[])

    return (
        <section className="text-black test transition-all duration-1000   about mt-40 border-yellow-500 sm:flex-row flex-col sm:flex space-x-3">
            <img src="dd" alt="profile" className="basis-2/4"/>

            <div className="capitalize flex flex-col flex-1 bordser-2 border-green-500 space-y-5">

             <div className="self-center text-4xl font-transparent">about me</div>
                
             <div className="flexl flex-co space-y-10 font-garamond text-base px-5">  
                
                  <div>
                   i'm passionate, self-proclaimed designer who specializes in frontend development (React.js)
                  i am very enthauslastic about bringing the technical and visual aspects of digital products to life,
                 user experience, and writing clear, readable, highly performant code matter to me.
                  </div>

                  <div>
                  I began my journey as a web developer in 2021, and since then, I've continued to grow and evolve as a developer,
                  taking on new challenges and learning the latest technologies along the way. Now
                  </div>

                  <div>
                  Beyond coding, I explore diverse hobbies—reading tech blogs and experimenting with design trends—fueling 
                  creativity and enhancing my skills.

                  </div>

             </div>
              



              <div className="px-7 flex flex-col">
                <div className="sm:flex justify-between space-y-5 sm:space-y-0 mt-16s">
                  <TopAbout icon={<IoPersonOutline className="mr-2" />}  header={"Name"} text={"Adam"}/>
                  <TopAbout icon={<IoLocationOutline className="mr-2"/>}   header={"Location"} text={"Lagos, Nigeria"}/>
                </div>

                <div className="sm:flex justify-between mt-5 space-y-5 sm:space-y-0">
                    <TopAbout icon={<IoMailOutline className="mr-2"/>} header={"email"} text={<a href="mailto:contact.ajaniadam9@gmail.com">ajaniadam9@gmail.com</a>}/>
                    <TopAbout icon={<IoBriefcaseOutline className="mr-2"/>} header={"Employment"} text={"Available"}/>
                </div>                
              </div>




            </div>
        </section>
    )
}
                      
export default About
