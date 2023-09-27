/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const DontaionCardHome = ({donation}) => {
    const {id, title,category,category_bg,text_color,card_bg,description,image,price} = donation || {};
    return (
        <div>
            <h1>{title} </h1>
        </div>
    );
};

export default DontaionCardHome;