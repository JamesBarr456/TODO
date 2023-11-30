export const FooterMobile = () => {
    return (
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
    )
}