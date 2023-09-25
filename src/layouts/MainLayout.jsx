import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
    return (
        <div className="max-w-7xl m-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;