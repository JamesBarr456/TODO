import { useEffect } from "react";
import cross from "../src/assets/images/icon-cross.svg";
import sol from "../src/assets/images/icon-sun.svg";
import check from "../src/assets/images/icon-check.svg";
import { InputTask } from "./componentes/InputTask";
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
          <div className="bg-Very-Dark-Grayish-Blue rounded-md">
            <ul>
              <li className="flex items-center justify-evenly h-12 border-b border-Dark-Grayish-Blue">
                <span
                  type="checkbox"
                  className="flex  items-center justify-center w-5 h-5 border rounded-full border-Dark-Grayish-Blue "
                >
                  <img src={check} alt="check" className="hidden" />
                </span>
                <p className="text-white w-[70%] text-xs">
                  Complete online JavaScript course
                </p>
                <button type="button">
                  <img src={cross} alt="cross" />
                </button>
              </li>
            </ul>
            <div className="flex justify-around h-12 items-center">
              <p className=" text-white text-xs">5 items left</p>
              <button className=" text-white text-xs" type="button">
                Clear Completed
              </button>
            </div>
          </div>
          <div className="flex justify-center h-12 items-center bg-Very-Dark-Grayish-Blue rounded-md mt-4">
            <button
              type="button"
              className="text-Dark-Grayish-Blue text-xs p-2 font-bold hover:text-white focus:text-Bright-Blue"
            >
              All
            </button>
            <button
              type="button"
              className="text-Dark-Grayish-Blue text-xs p-2 font-bold hover:text-white focus:text-Bright-Blue"
            >
              Active
            </button>
            <button
              type="button"
              className="text-Dark-Grayish-Blue text-xs p-2 font-bold hover:text-white focus:text-Bright-Blue"
            >
              Completed
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
