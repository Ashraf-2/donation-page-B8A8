import { useEffect } from "react";
import { useState } from "react";
import DonatedCard from "./DonatedCard";
const Donatin = () => {
    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [totalDonation, setTotalDonation] = useState(0);
    console.log('length: ',donations.length);
    


    useEffect(() => {
        // const donatedItems = JSON.parse(localStorage.getItem('fovourites_phone'));
        const donatedItems = JSON.parse(localStorage.getItem('donation_catg'));

        if (donatedItems) {

            setDonations(donatedItems);
            const total = donatedItems.reduce((preValue, currentItem) => preValue + parseFloat(currentItem.price), 0);
            setTotalDonation(total);
        }
        else {
            // console.log("no data found");
            setNoFound("No data found");
        }

    }, [])


    console.log("totalDonation: ", totalDonation);
    return (
        <div>
            {
                noFound ? <h1>{noFound}</h1> :
                    <div>
                        <div className="text-center">
                            {/* {donations.length > 0 ? <button onClick={handleLocalClear} className="btn btn-error text-base mx-auto mb-5 text-white ">Delete All</button> : ""} */}
                            <h1 className="text-xl font-bold mb-5">Total donation: {totalDonation}</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                            {
                                isShow ? donations.map(donation => <DonatedCard key={donation.id} donation={donation}> </DonatedCard> )
                                    : donations.slice(0, 4).map(donation => <DonatedCard key={donation.id} donation={donation}> </DonatedCard>)


                            }

                        </div>
                        <div className="mt-5 text-center flex items-center">
                            {donations.length > 4 ? <button onClick={() => setIsShow(!isShow)} className={`btn btn-accent  mx-auto {
                                isShow ? "": "hidden"}
                            } `}>{isShow ?"Show Less":"See All"}</button>:""}
                        </div>
                    </div>
            }

        </div>
    );
};

export default Donatin;