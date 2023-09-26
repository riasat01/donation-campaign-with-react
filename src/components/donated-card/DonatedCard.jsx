import { Link } from "react-router-dom";

const DonatedCard = ({donation}) => {

    const { id, category_name, category_title, img, donation_amount, text_color, category_bg, card_bg } = donation;
    return (
        <div className="flex">
            <img className="w-36 md:w-64 h-full md:h-48 rounded-l-lg" src={img} alt="category image" />
            <section style={{ backgroundColor: card_bg }} className="p-4 rounded-r-lg flex-grow space-y-3">
                <h2 style={{ color: text_color, backgroundColor: category_bg }} className="rounded-md w-fit px-2 py-1">{category_name}</h2>
                <h1 style={{ color: text_color }}>{category_title}</h1>
                <p style={{color: text_color}}>${donation_amount}</p>
                <Link to={`/details/${id}`}><button style={{backgroundColor: text_color}} className={`text-white font-semibold px-4 py-2 rounded-lg mt-3`}>View Details</button></Link>
            </section>
        </div>
    );
};

export default DonatedCard;