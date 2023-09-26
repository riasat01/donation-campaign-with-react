import { Outlet } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import { createContext, useState } from "react";
export const Search = createContext('');

const Home = () => {

    const [searchText, setSearchtext] = useState('');
    // console.log(searchText);
    return (
        <div>
            <Search.Provider value={{ searchText, setSearchtext }}>
                <Banner></Banner>
                <Outlet></Outlet>
            </Search.Provider>
        </div>
    );
};

export default Home;