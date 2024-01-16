// import { useEffect } from "react";
import ProjectTem from "./ProjectTem"

function Project() {


    return (
    <section className="flex project transition-all duration-1000 flex-col mt-28">

        <div className="text-black flex font-[600] text-4xl capitalize font-transparent items-center mb-6 justify-center">my <span className="ml-2 font-garamond">project</span></div>

        <div className="bg-black flex-col md:flex-row lg:w-full xl:w-[80%] self-center rounded-lg py-8  flex justify-center items-start flex-wrap space-y-10 md:space-y-0 ">

         <ProjectTem 
           head={"Fast React Pizza"}
           img={"/pizza.png"}
           code={"https://github.com/Adamskid9/Fast-React-Pizza"}
           text={" Users can search for pizzas, Order more than one pizzas from the app and, You can also add to cart and delete from cart, and even increase selected items "}
           list={["React","Redux","Tailwind CSS"]}
           live={"https://fast-react-pizza-adam.netlify.app/"}
           />

          <ProjectTem
           head={"Space tourism"}
           text={"Website where you can explore destination,crews and technologies multi page app."}///*
           img={"space.png"}
           code={"https://github.com/Adamskid9/space"}
           list={["React","Tailwind CSS","React router","Redux"]}
           live={"https://space-tourism-adam.netlify.app/"}
           />

          <ProjectTem
           head={"Rest Countries"}
           text={"Make a research about countries detail and users can convert currency to any currency of choice"}
           img={"countries.png"}
           code={"https://github.com/Adamskid9/Rest-Country"}
           list={["React","Styled component","React router"]}
           live={"https://countries-currency.netlify.app/"}
           />
           
          <ProjectTem
           head={"Bright Future"}
           text={"News statics app of web 3.0, user can view only site, responsive to all the device"}
           img={"bright.png"}
           code={"https://github.com/Adamskid9/News-homePage"}
           list={["React","Tailwind CSS"]}
           live={"https://adam-static-news.netlify.app"}
           />
       </div>

    </section>
    )
}
export default Project
