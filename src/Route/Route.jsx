import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Components/Layout/Main";
import ChefDetails from "../Components/ChefDetails/ChefDetails";

const router =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("http://localhost:5000/chef")
            },
            {
                path:"/chefdetails/:id",
                element:<ChefDetails></ChefDetails>,
                loader:({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
])


export default router