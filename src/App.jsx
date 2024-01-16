import Nav from "./ui/Nav"
import About from "./ui/About"
import "./App.css"
import Skill from "./ui/Skill";
import Project from "./ui/Project";
import ContactMe from "./ui/ContactMe";
import Home from "./ui/Home";
import { useEffect } from "react";


function App() {

  useEffect(function(){
    const about = document.querySelector(".about");
    const skill = document.querySelector(".skill");
    const project = document.querySelector(".project");

    const revealSection = function (entries, observer) {
    const [entry] = entries;
    const {target} = entry;

    console.log(target)
   
    target.classList.add("test1");
    target.classList.remove("test2");

    if (!entry.isIntersecting) return;
    
    target.classList.remove("test1");
    target.classList.add("test2");
  };
  
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.3,
  });

   [skill,about].map(val=>sectionObserver.observe(val));

  },[]);

  return (
    <div className="px-5 flex-col flex py-5 sm:px-5 lg:px-16 sm:py-10 bg-green-50s bg">
       <Nav/>
       <Home/>
       <About/>
       <Skill/>
       <Project/>
       <ContactMe/>
    </div>
  )
};

export default App;