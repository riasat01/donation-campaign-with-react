import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
    const loc = useLocation();
    return (
        <div className={`${loc.pathname === `/` || 'max-w-7xl my-auto mx-4 md:mx-8 lg:mx-auto'}`}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;