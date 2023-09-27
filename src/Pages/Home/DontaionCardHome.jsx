/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const DontaionCardHome = ({ donation }) => {
    const { id, title, category, category_bg, text_color, card_bg, description, image, price } = donation || {};
    const color = text_color;
    console.log(color);
    return (
        <div>
            <Link to={`/donations/${id}`}>


                <div style={{ backgroundColor: `${card_bg}` }} className="relative flex max-w-[24rem] flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img className="object-cover w-full h-[180px] "
                            src={image}
                            alt={title}
                        />
                    </div>
                    <div className="px-6 py-5">
                        <span style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }} className="px-2 py-1 font-medium rounded-md">{category}</span>
                        <h4 style={{ color: `${text_color}` }} className="mt-3 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                        {/* <h1 style={{backgroundColor : `${card_bg}`}}>{title}</h1> */}

                    </div>

                </div>
            </Link>
        </div>
    );
};

export default DontaionCardHome;