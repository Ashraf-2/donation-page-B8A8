import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect } from "react";
import swal from 'sweetalert';

const DonationDetails = () => {
    const [donation, setDonation] = useState([]);
    const { title, category, category_bg, text_color, card_bg, description, image, price } = donation || {};


    const donationsL = useLoaderData();
    console.log("donations:in details ,", donationsL);
    // console.log("donation id",donationsL[0].id);

    const params = useParams();
    const { id } = params;
    console.log("id: ", id);
    useEffect(() => {
        const findDonation = donationsL?.find(d => d.id == id);
        console.log("findDonation: ", findDonation);
        setDonation(findDonation);


    }, [id, donationsL])

    
    const handleToDonate = ()=>{
        console.log("handlephn : ",donation);
        const addToDonate = [];

        const donatedItems = JSON.parse(localStorage.getItem('donation_catg'));
        //when there is no fav items.
        if (!donatedItems) {
            addToDonate.push(donation);
            localStorage.setItem('donation_catg', JSON.stringify(addToDonate));
            swal("Good job!", "You clicked the button!", "success");
        }
        else {
            //when there is values in fav items.
            const isExist = donatedItems.find(d => d.id == id);
            console.log("isExist: ",isExist);
            if (!isExist) {
                addToDonate.push(...donatedItems, donation);
                localStorage.setItem('donation_catg', JSON.stringify(addToDonate));
                swal("Good job!", "Added as Favourite Phone!", "success");

                // alert();
            }
            else{
                console.log('already ache');
                swal("Sorry!", "Already Added.", "error");
            }
        }
        // localStorage.setItem('donation_catg',JSON.stringify(id));
        // console.log("donatedItems: ",donatedItems);
    }



//}
    return (
        <div className="mx-10 my-10">
            <div className="relative rounded-lg">

                <img className="w-full h-[80vh] rounded-lg object-cover " src={image} alt="" />
                <div className="absolute rounded-lg  w-full h-[20vh] flex -mt-28  items-center bg-[#0b0b0b80] opacity-80">
                    <button onClick={() => handleToDonate(donation)}  style={{ backgroundColor: `${text_color}` }} className="btn   mx-8 text-white">Donate $290</button>
                </div>
            </div>
            <div className="my-10">

                <h1 className="text-4xl font-bold mb-5 ">{title}</h1>
                <p className="text-base font-normal text-[#0b0b0bb3]">{description}</p>
            </div>
        </div>

    );
};

export default DonationDetails;