import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/error-page/ErrorPage";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/statistics/Statistics";
import Donations from "../components/donations/Donations";
import Details from "../pages/details/Details";

const Router = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: `/`,
                element: <Home></Home>,
                children: [
                    {
                        path: `/`,
                        element: <Donations></Donations>,
                        loader: () => fetch(`../donation.json`)
                    }
                ]
            },
            {
                path: `/donation`,
                element: <Donation></Donation>
            },
            {
                path: `/statistics`,
                element: <Statistics></Statistics>
            },
            {
                path: `/details/:id`,
                element: <Details></Details>,
                loader: () => fetch(`../donation.json`)
            }
        ]
    }
]) 

export default Router;