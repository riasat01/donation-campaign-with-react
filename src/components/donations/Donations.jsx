import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonationCard from "../donation/DonationCard";
import { Search } from "../../pages/home/Home";

const Donations = () => {

    const { searchText, setSearchtext } = useContext(Search);
    // console.log(searchText)
    const [showData, setShowData] = useState([]);

    const donations = useLoaderData();
    // console.log(donations);
    useEffect(() => {
        const _ = donations.filter(donation => donation.category_name.toLowerCase() === searchText.toLowerCase());
        console.log(_);
        setShowData(_);
    }, [searchText])
    return (
        <div className="max-w-7xl grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 md:mx-8 lg:mx-auto">
            {
                showData.length ? 
                showData.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>) 
                :
                donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Donations;