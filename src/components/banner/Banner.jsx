import { useContext } from 'react';
import './Banner.css'
import { Search } from '../../pages/home/Home';


const Banner = () => {

    const { searchText, setSearchtext } = useContext(Search);
    const handleSearch = e => {
        e.preventDefault();
        // console.log(e.target.search.value);
        setSearchtext(e.target.search.value);
        // console.log(searchText)
        e.target.search.value = '';
    }
    return (
        <div className="bannerBg h-[80vh] flex flex-col justify-center items-center mb-24">
            <h1 className='text-[#0B0B0B] text-2xl md:text-3xl lg:text-5xl font-bold'>I Grow By Helping People In Need</h1>
            <form onSubmit={handleSearch} className="flex mt-10">
                <input className='px-4 py-2 rounded-l-lg lg:w-96' type="search" name="search" id="search" placeholder="Search here...."/>
                <input className='bg-red-500 rounded-r-lg text-white font-semibold px-4 py-2' type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Banner;