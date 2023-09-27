/* eslint-disable react/prop-types */
import DontaionCardHome from "./DontaionCardHome";

const HomeDonations = ({donations}) => {
    console.log("donation in HomeDonations ",donations);

    return (
        <div>
            <h1 className="text-xl font-bold text-center">All the donations categories</h1>
            <div>
                {
                    donations.map((donation) => <DontaionCardHome key={donation.id} donation={donation}></DontaionCardHome>)
                }
               
            </div>
        </div>
    );
};

export default HomeDonations;