import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { useEffect, useState } from "react";

const Statistics = () => {
    const [donations, setDonations] = useState([]);
    const len = (donations.length);


    useEffect(() => {
        // const donatedItems = JSON.parse(localStorage.getItem('fovourites_phone'));
        const donatedItems = JSON.parse(localStorage.getItem('donation_catg'));

        if (donatedItems) {

            setDonations(donatedItems);
        }


    }, [])
    const donatPort = (100 * len) / 12;
    const remainPort = 100 - donatPort;
    console.log("dont - rema ", donatPort, remainPort);


    console.log("donations-len", donations.length);


    const data = [
        { name: "Your Donation", value: donatPort, color: "#00C49F" },
        { name: "Total Donation", value: remainPort, color: "#FF444A" }
    ];
    return (
        <div className="h-screen w-full ">

            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="value" data={data} label>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                {data.map((item) => (
                    <p>
                        {" "}
                        <span
                            style={{ padding: "1px 10px ", backgroundColor: item.color }}
                        ></span>{" "}
                        {item.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Statistics;

