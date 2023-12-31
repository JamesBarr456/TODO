import iconSun from "../src/assets/images/icon-sun.svg";
import iconMoon from "../src/assets/images/icon-moon.svg";
import { MainTask } from "./componentes/MainTask.jsx";
import { useState } from "react";
import { ThemeContext } from "./hooks/themeContext";

export const App = () => {
  const [changeTheme, setChangeTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ changeTheme, setChangeTheme }}>
      <div
        className={`${
          changeTheme
            ? "bg-mobile-dark  md:bg-desktop-dark bg-Very-Dark-Blue "
            : "bg-mobile-light  md:bg-desktop-light bg-white"
        }
                 bg-contain 
                 font-Josefin-Sans  
                 min-h-screen
                 bg-no-repeat`}
      >
        <div
          className="container 
                   flex 
                   flex-col 
                   items-center
                   h-full  
                   w-[88%] 
                   lg:w-[50%]
                   mx-auto"
        >
          <header
            className="flex 
                     items-center 
                     justify-between 
                     w-full 
                     py-8 
                     lg:pt-16 
                     lg:pb-8"
          >
            <p
              className="text-4xl
                     text-white 
                       font-bold"
            >
              T O D O
            </p>
            <button type="button" onClick={() => setChangeTheme(!changeTheme)}>
              <img src={changeTheme ? iconSun : iconMoon} alt="light" />
            </button>
          </header>
          <main className="w-full h-full">
            <MainTask></MainTask>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
