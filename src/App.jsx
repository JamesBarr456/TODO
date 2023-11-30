import { useEffect } from "react";
import sol from "../src/assets/images/icon-sun.svg";
import { InputTask } from "./componentes/InputTask.jsx";
const checkBackground =
  "bg-gradient-to-b from-Check-Background1 to-Check-Background2";
export const App = () => {
  return (
    <div className="bg-mobile-dark bg-contain font-Josefin-Sans  h-screen bg-no-repeat md:bg-desktop-dark bg-Very-Dark-Blue">
      <div className="container flex w-[88%] lg:w-[50%]  mx-auto flex-col items-center ">
        <header className="flex items-center justify-between w-full py-8 lg:pt-16 lg:pb-8">
          <p className="text-4xl text-white font-bold">T O D O</p>
          <button type="button">
            <img src={sol} alt="light" />
          </button>
        </header>
        <main className="w-full">
          <InputTask></InputTask>
   
        </main>
      </div>
    </div>
  );
};
