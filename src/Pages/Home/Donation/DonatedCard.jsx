import { Link } from "react-router-dom";

const DonatedCard = ({donation}) => {
    console.log("donation card: ",donation);
    const {id, title, category, category_bg, text_color, card_bg, image, price } = donation || {};

    return (
        <div className="mx-10">
            <div style={{backgroundColor: `${card_bg}`}} className="relative flex flex-row gap-5 rounded-lg bg-clip-bordershadow-md">
                <div className="relative m-0 h-auto flex  w-2/5 shrink-0 overflow-hidden rounded-lg
                 rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt={title}
                        className=" w-full object-cover"
                    />
                </div>
                <div className="py-5 ">
                    <span style={{backgroundColor: `${category_bg}`, color: `${text_color}`}} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal  antialiased">
                        {category}
                    </span>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                   
                    <p style={{color: `${text_color}`}} className="text-xl font-bold">{price}</p>




                    {/* to={`/donations/${id}`} */}


                    <Link to={`/donations/${id}`} className="inline-block" href="#">
                        <button style={{backgroundColor: `${text_color}`}}
                            className="flex select-none items-center my-3 text-white gap-2 rounded-lg py-3 px-6 text-center align-middle font-semibold   transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;