import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('data.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/products',
                element:<Products></Products>,
                loader: ()=>fetch('/data.json')
            },
            {
                path:'/product/:id',
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses/${params.id}`)
            }
        ]
    }
])

