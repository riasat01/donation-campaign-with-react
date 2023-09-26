import { useEffect, useState } from "react";
import DonatedCard from "../../components/donated-card/DonatedCard";

const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [length, setLength] = useState(4);
    const [less, setLess] = useState(true)

    useEffect(() => {
        const _ = JSON.parse(localStorage.getItem(`donations`));
        setDonations(_);
        console.log(donations);
    }, []);

    useEffect(() => {
        if (less === false) {
            setLength(donations.length);
        } else {
            setLength(4);
        }
    }, [less])
    return (
        <>
            {
                donations ?
                    <section>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
                            {
                                donations.slice(0, length).map(donation => <DonatedCard key={donation.id} donation={donation}></DonatedCard>)
                            }
                        </div>
                        {
                            donations.length > 4 &&
                            <section className="flex justify-center my-10">
                                <button onClick={() => setLess(!less)} className="bg-[#009444] rounded-lg text-white font-semibold px-4 py-2">{less ? `Show More` : `Show Less`}</button>
                            </section>
                        }

                    </section>
                    :
                    <section className="h-screen flex justify-center items-center">
                        <p>No Donations Available</p>
                    </section>
            }
        </>
    );
};

export default Donation;