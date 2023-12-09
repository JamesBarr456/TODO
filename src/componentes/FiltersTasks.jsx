import { useState } from "react";
import { buttonsFilter } from "../hooks/dataList";
export const FiltersTasks = ({ setFilter, changeTheme }) => {
  const [filters, setFilters] = useState(buttonsFilter);
  return (
    <div
      className={`flex 
                 justify-center 
                 items-center 
                 h-12 
                 my-4
                 md:my-0
                 rounded-md  
                 ${!changeTheme ? 'bg-white shadow-xl'
                                :  'bg-Very-Dark-Desaturated-Blue' }
                 `}
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className="text-xs
                     md:text-lg
                     font-bold 
                     p-2 
                    text-Light-Grayish-Blue 
                    hover:text-Dark-Grayish-Blue
                    focus:text-Bright-Blue"
          onClick={
            () => filter.name ==="Active"
                            ? setFilter("active")
                            : filter.name ==="Completed"
                            ? setFilter("completed")
                            : setFilter("all")
          }
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};
