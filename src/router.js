import { Navbar } from "react-bootstrap";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/Product-details";
import Mynavbar from "./Components/Navbar";
import Register from "./Pages/Register";




function Layout(){
   return( <>
        <Mynavbar/>
        <Outlet/>
        <Footer/>
    </>
   )
}
const router = createBrowserRouter(
    [
        {
            element:<Layout/>,
            children:[
                {
                    element:<Home/>,
                    path:'/',
                },
                {
                    element:<Home/>,
                    path:"/home"
                }
                ,
                {
                    element:<ProductDetails/>,
                    path:'/product-details/:id',
                }
            ]
        },
        {
            children:[
                {
                element:<Register/>,
                path:'/register'
                }
                    
            ]
        }
    ]
)


export default router;