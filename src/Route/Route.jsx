import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Components/Layout/Main";
import ChefDetails from "../Components/ChefDetails/ChefDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import NotFound from "../Components/NotFound/NotFound";
import Blog from "../Components/Blog/Blog";

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
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/chefdetails/:id",
                element:<ChefDetails></ChefDetails>,
                loader:({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"*",
                element:<NotFound></NotFound>
            }
        ]
    }
])


export default router