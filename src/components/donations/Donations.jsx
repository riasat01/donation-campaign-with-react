import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonationCard from "../donation/DonationCard";

const Donations = () => {

    // const [donations, setDonations] = useState([]);
    // useEffect(() => {
    //     fetch(`/public/donation.json`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])

    const donations = useLoaderData();
    // console.log(donations);
    return (
        <div className="max-w-7xl grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 md:mx-8 lg:mx-auto">
            {
                donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Donations;