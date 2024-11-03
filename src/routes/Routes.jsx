import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            // Add your routes here
        ]
    }
])

export default routes;