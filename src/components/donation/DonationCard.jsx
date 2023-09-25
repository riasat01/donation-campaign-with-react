const DonationCard = ({donation}) => {

      const {id, category_name, category_title, img, text_color, category_bg, card_bg } = donation;
    return (
        <div>
            <img className="w-full h-52 rounded-t-lg" src={img} alt="category image" />
            <section style={{backgroundColor: card_bg}} className="p-4 rounded-b-lg">
                <h2 style={{color: text_color, backgroundColor: category_bg}} className="rounded-md w-fit px-2 py-1">{category_name}</h2>
                <h1 style={{color: text_color}}>{category_title}</h1>
            </section>
        </div>
    );
};

export default DonationCard;