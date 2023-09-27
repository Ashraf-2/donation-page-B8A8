/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const DontaionCardHome = ({ donation }) => {
    const { id, title, category, category_bg, text_color, card_bg, description, image, price } = donation || {};
    return (
        <div>
            <div className="relative flex max-w-[24rem] flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img className="object-cover w-full h-[180px] "
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="p-6 ">
                    <p>{category}</p>
                    <h4 className="block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    
                </div>
                
            </div>
        </div>
    );
};

export default DontaionCardHome;