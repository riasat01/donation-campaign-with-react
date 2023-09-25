import './Banner.css'


const Banner = () => {

    
    return (
        <div className="bannerBg h-[80vh] flex flex-col justify-center items-center mb-24">
            <h1 className='text-[#0B0B0B] text-2xl md:text-3xl lg:text-5xl font-bold'>I Grow By Helping People In Need</h1>
            <section className="flex mt-10">
                <input className='px-4 py-2 rounded-l-lg lg:w-96' type="search" name="search" id="search" placeholder="Search here...."/>
                <input className='bg-red-500 rounded-r-lg text-white font-semibold px-4 py-2' type="submit" value="Search" />
            </section>
        </div>
    );
};

export default Banner;