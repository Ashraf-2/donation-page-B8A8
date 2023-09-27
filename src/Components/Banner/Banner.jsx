
const Banner = () => {
    return (
        <div className="flex items-center my-5 justify-center bg-teal-400">
            {/* bg opacity */}
            <div className="w-full h-[50vh] md:h-[80vh] overflow-hidden relative">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://i.ibb.co/s60cwHp/hybrid-fundraising-event-volunteers.jpg" alt="" />
                <div className="absolute inset-0 bg-white  bg-opacity-80"></div>
                <div className="flex flex-col h-full items-center justify-center relative">
                    <h1 className="text-5xl font-bold text-black tracking-wider">I Grow By Helping People In Need</h1>
                    <div>

                        <form>
                            <div className="flex">
                                <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                                
                                
                                <div className="relative w-full">   
                                    
                                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." />
                                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                                        
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;