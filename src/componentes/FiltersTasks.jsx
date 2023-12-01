import { useState } from "react"
import { buttonsFilter } from "../hooks/dataList"
export const FiltersTasks = () => {
    const [filters, setFilters] = useState(buttonsFilter)
    return (
        <div className="flex justify-center h-12 items-center bg-Very-Dark-Grayish-Blue rounded-md mt-4">
            {filters.map(filter => (
            <button 
                key={filter.id}
                type="button"
                className="text-Dark-Grayish-Blue text-xs p-2 font-bold hover:text-white focus:text-Bright-Blue"
            >
                {filter.name}
            </button>))}

        </div>
    )
}