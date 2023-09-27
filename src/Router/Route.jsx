import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Donatin from "../Pages/Home/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/donation",
                element: <Donatin></Donatin>
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>
            }
        ]
        
    }
])

export default myCreatedRoute;