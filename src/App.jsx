import iconSun from "../src/assets/images/icon-sun.svg";
import iconMoon from "../src/assets/images/icon-moon.svg"
import { InputTask } from "./componentes/InputTask.jsx";
import { useState } from "react";

export const App = () => {
  const [changeTheme,setChangeTheme] = useState(false)
  return (
    <div 
      className={`${changeTheme ? "bg-mobile-dark  md:bg-desktop-dark bg-Very-Dark-Blue " 
                                : "bg-mobile-light  md:bg-desktop-light bg-white"}
                 bg-contain 
                 font-Josefin-Sans  
                 h-full 
                 bg-no-repeat`}>
      <div 
        className="container 
                   flex w-[88%] 
                   lg:w-[50%]  
                   mx-auto 
                   flex-col 
                   items-center ">
        <header 
          className="flex 
                     items-center 
                     justify-between 
                     w-full 
                     py-8 
                     lg:pt-16 
                     lg:pb-8">
          <p 
            className="text-4xl
                     text-white 
                       font-bold">
                        T O D O
          </p>
          <button 
            type="button"
            onClick={()=> setChangeTheme(!changeTheme) }>
            <img 
              src={changeTheme ? iconSun
                               : iconMoon } 
              alt="light" />
          </button>
        </header>
        <main 
          className="w-full">
          <InputTask></InputTask>
        </main>
      </div>
    </div>
  );
};
