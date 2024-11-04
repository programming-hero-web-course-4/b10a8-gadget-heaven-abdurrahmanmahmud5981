import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import GadgetCard from "../components/GadgetsCard/GadgetCard";
import CardDetails from "../pages/CardDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            // Add your routes here
            {
                path: "",
                element:<Home/>,
                loader: ()=> fetch("/categories.json"),
                children:[
                    {
                        path: "/",
                        element:<GadgetCard/>,
                        loader: ()=> fetch("/products.json")
                    },
                    {
                        path:"/:category",
                        element:<GadgetCard/>,
                        loader: ()=> fetch("/products.json")
                    },
                    {
                        path:"/:category",
                        element:<GadgetCard/>,
                        loader: ()=> fetch("/products.json")
                    },
                    {
                        path:"/:category",
                        element:<GadgetCard/>,
                        loader: ()=> fetch("/products.json")
                    },
                    {
                        path: "/:smart_Watches",
                        element:<GadgetCard/>,
                        loader: ()=> fetch("/products.json")
                    },
                    {
                        path: "/:category",
                        element:<GadgetCard/>,
                        loader: ()=> fetch("/products.json")
                    },
                    {
                        path: "/:category",
                        element:<GadgetCard/>,
                        loader: ()=> fetch("/products.json")
                    }
                ]
            },
            {
                path: "/statistics",
                element:<Statistics/>
            },
            {
                path: "/dashboard",
                element:<Dashboard/>
            },
            {
                path: "/product/:details",
                element:<CardDetails/>,
                loader: ()=> fetch("/products.json")
            }

        ]
    }
])

export default routes;