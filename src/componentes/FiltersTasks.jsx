import { useState } from "react";
import { buttonsFilter } from "../hooks/dataList";
export const FiltersTasks = ({ activeTasks, allTasks, completedTasks }) => {
  const [filters, setFilters] = useState(buttonsFilter);
  return (
    <div
      className="flex 
                 justify-center 
                 items-center 
                 h-12 
                 my-4
                 md:my-0
                 rounded-md  
                 bg-Very-Dark-Desaturated-Blue"
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className="text-xs 
                     font-bold 
                     p-2 
                    text-Dark-Grayish-Blue 
                    hover:text-white 
                    focus:text-Bright-Blue"
          onClick={
            filter.name === "Active"
              ? activeTasks
              : filter.name === "Completed"
              ? completedTasks
              : allTasks
          }
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};
