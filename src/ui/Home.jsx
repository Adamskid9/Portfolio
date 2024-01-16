import { GoArrowDownRight } from "react-icons/go";
import Social from "./Social"

import { useEffect, useState } from "react";

function Home({test}) {
    const [goTo,setGoTo] = useState("");

    useEffect(function(){
       const begin = document.querySelector('.about');

      
       

      if(goTo)begin.scrollIntoView({behavior:"smooth"});

   
 
    },[goTo]);

// type writer

    useEffect(function(){
       const me = document.querySelector('.me');
       const frontend = document.querySelector('.frontend');
       const create = document.querySelector('.create');
       
       const name = "ajani adam".split("");
       const content = "Frontend".split("");
       const content2 = "Let's create something exceptional together".split("");

       let u = 0;
       const timer = setInterval(function(){

        if(u<content2.length) { 

            if(u<content.length){
                frontend.textContent+=content[u];
            }

            if(u<name.length){
                 me.textContent+=name[u];
            }
             
            create.textContent+=content2[u];
           
            u++
        }
        else{
            clearInterval(timer);
            create.classList.remove("type")
        } 
            
        
          
      },200);
    },[])

    return (
        <section className={` text-black home view text-sm mt-24 flex flex-col sm:flex-row ${test}  space-x-2 ring-2s ring-red-500 transition-all duration-1000`}>

           <div className="risng-1 ring-blue-500 basis-2/4 self-center justify-self-center">
              <div className="text-5xl  font-changa font-[500] ">I'm <span className="font-transparent capitalize me"></span> </div>
              <div className="text-3xl mt-3 font-mono"><span className="font-transparent frontend"></span> Developer</div>
              <div className="text-xl mt-5 font-garamond">Creating clean, engaging web experiences with efficiency and precision.<br/>
               <span className="create type relative"></span></div>

              <ul className="flex space-x-3 text-base items-center justify-start mt-10">
                  <Social num={1}/>
                  <Social num={2}/>
                  <Social num={3}/>
                  <Social num={4}/>
              </ul>

              <div className="text-base mt-10 font-garamond tracking-[2px] cursor-pointer  font-[600]"><a href="mailto:ajaniadam9@gmail.com">ajaniadam9@gmail.com</a></div>

              <button onClick={()=>setGoTo(cur=>cur+1)} className="capitalize begin font-bold text-[#f1f1f1] mt-7 flex items-center bg-blue-500 px-3 py-2 rounded-full">let's begin <GoArrowDownRight className="ml-1 text-base"/></button>

           </div>

           <div className="rings-1 capitalize text-gray-500 ring-black -order-1 sm:order-1 sm:mb-0 mb-16 flex-1 flex items-center justify-center ">
               <div className="bg-black h-[80%] w-[80%] sm:h-[70%] sm:w-[70%] rounded-[100%]  flex items-center justify-center overflow-hidden">
                <img className="h-[50%]  w-[50%] sm:h-[70%] sm:w-[60%] rounded-[100%] smiles sm:rounded-full" src="/profile.jpg" alt=""/>
               </div>
           </div>

        </section>
    )
};


export default Home