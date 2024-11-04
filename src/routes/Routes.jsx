import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

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
                        path:"/laptops",
                        element:<h1>Laptops</h1>
                    },
                    {
                        path:"/phones",
                        element:<h1>phones</h1>
                    },
                    {
                        path:"/accessories",
                        element:<h1>accessories</h1>
                    },
                    {
                        path: "/smart_Watches",
                        element:<h1>smartWatches</h1>
                    },
                    {
                        path: "/macBook",
                        element:<h1>macBook</h1>
                    },
                    {
                        path: "/iphone",
                        element:<h1>iphone</h1>
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
            }

        ]
    }
])

export default routes;