/* eslint-disable react/no-unknown-property */

const Banner = () => {
    return (
        <div className="flex items-center my-5 justify-center bg-teal-400">
            {/* bg opacity */}
            <div className="w-full h-screen md:h-[80vh] overflow-hidden relative">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://i.ibb.co/s60cwHp/hybrid-fundraising-event-volunteers.jpg" alt="" />
                <div className="absolute inset-0 bg-white  bg-opacity-80"></div>
                <div className="flex flex-col h-full items-center justify-center relative">
                    <h1 className="text-xl md:text-5xl font-bold text-black ">I Grow By Helping People In Need</h1>
                    <div>

                        <form>
                            <div className="flex">
                                {/* <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label> */}
                                
                                
                                
                                <div className="mt-5 flex items-center">
                                    <input className="py-2.5 border-2" type="text" name="" id="" placeholder="Search here" />
                                    <button className="btn btn-primary border-none rounded-none bg-red-600 text-white">Search</button>
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