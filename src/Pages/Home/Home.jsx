import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import HomeDonations from "./HomeDonations";

const Home = () => {
    const donations = useLoaderData();
    console.log("donations in home page: ", donations);
    return (
        <div>
            <Banner></Banner>
            <div className="mx-10">

                <HomeDonations donations={donations}></HomeDonations>
            </div>

        </div>
    );
};

export default Home;