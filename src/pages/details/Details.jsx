import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const donationDetails = useLoaderData();
    // console.log(donationDetails);
    const { id } = useParams();
    const idInt = parseInt(id);

    // console.log(id);
    const [details, setDetails] = useState({});
    useEffect(() => {
        const _ = donationDetails.find(donation => donation.id === idInt);
        setDetails(_);
        // console.log(details);
    }, [])

    const { category_title, img, category_description, donation_amount, text_color } = details;

    const handleDonation = details => {
        const temp  = [];
        const donations = JSON.parse(localStorage.getItem(`donations`));
        console.log(donations);
        if(donations){
            const exists = donations?.find(donation => {
                console.log(donation.id, details.id, donation.id === details.id);
                return donation.id === details.id});
            if(exists){
                alert(`duplicates not allowed`);
            }else{
                donations.push(details);
                localStorage.setItem('donations', JSON.stringify(donations));
                alert(`added successfully`);
            }
        }else{
            temp.push(details)
            localStorage.setItem('donations', JSON.stringify(temp));
            alert('added successfully');
        }

    }
    return (
        <div className="relative my-24 md:my-12 space-y-12">
            <img className="w-full h-[500px] rounded-lg" src={img} alt={`${category_title} image`} />
            <h1 className="text-5xl font-bold text-[#0B0B0B]">{category_title}</h1>
            <p className="text-[#0B0B0B] opacity-70 leading-8 text-justify">{category_description}</p>
            <section style={{backgroundColor: 'rgba(11, 11, 11, 11,0.9)'}} className="rounded-lg py-14 pl-16 absolute w-full top-[294px]">
                <input onClick={() => handleDonation(details)} style={{backgroundColor: text_color}} className="opacity-100 py-2 px-5 text-white rounded text-xl font-semibold" type="button" value={`Donate $${donation_amount}`} />
            </section>
        </div>
    );
};

export default Details;