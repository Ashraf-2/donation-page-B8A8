/* eslint-disable react/prop-types */
import DontaionCardHome from "./DontaionCardHome";

const HomeDonations = ({donations}) => {
    console.log("donation in HomeDonations ",donations);

    return (
        <div>
            {/* <h1 className="text-xl font-bold text-center">All the donations categories</h1> */}
            <div className="grid grid-cols1 md:grid-cols2 lg:grid-cols-4 gap-5 my-20">
                {
                    donations.map((donation) => <DontaionCardHome key={donation.id} donation={donation}></DontaionCardHome>)
                }
               
            </div>
        </div>
    );
};

export default HomeDonations;