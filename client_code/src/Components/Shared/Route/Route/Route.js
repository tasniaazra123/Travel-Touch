import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../Layout/DashboardLayout";
import Main from "../../../Layout/Main";
import About from "../../../Others/About/About";
import Contact from "../../../Others/Contact/Contact";
import Error from "../../../Others/Error/Error";
import Login from "../../../Others/Login/Login";
import Signup from "../../../Others/Register/SignUp";
import AllBuyers from "../../../Pages/DashBoard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../../Pages/DashBoard/Admin/AllSellers/AllSellers";
import Reports from "../../../Pages/DashBoard/Admin/Report/Report";
import MyOrders from "../../../Pages/DashBoard/Buyer/MyOrders";
import Payment from "../../../Pages/DashBoard/Buyer/Payment/Payment";
import Dashboard from "../../../Pages/DashBoard/DashBoard";
import AddProduct from "../../../Pages/DashBoard/Seller/AddProducts";
import MyProducts from "../../../Pages/DashBoard/Seller/MyProducts";
import Home from "../../../Pages/Home/Home";
import Items from "../../../Products/CategoryItems/Items";
import EachItem from "../../../Products/EachCategory/EachItem";
import AdminRoute from "../AdminRouter/AdminRouter/AdminRouter";
import BuyerRoute from "../BuyerRouter/BuyerRouter";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import SellerRoute from "../SellerRouter/SellerRouter";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/SignUp',
                element: <Signup></Signup>
            },
            {
                path: '/About',
                element: <About></About>
            },
            {
                path: '/Contact',
                element: <Contact></Contact>
            },
            {
                path: '/AllProducts',
                element: <PrivateRoute><Items></Items></PrivateRoute>
            },
            {
                path: '/EachItem',
                element: <EachItem></EachItem>
            },

            {
                path: "/categories/:category",
                element: (
                    <PrivateRoute>
                        <Items></Items>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/categories/${params.id}`
                    ),
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                ),
            },
            {
                path: "/dashboard/orders",
                element: (
                    <BuyerRoute>
                        <MyOrders></MyOrders>
                    </BuyerRoute>
                ),
            },
            {
                path: "/dashboard/payment/:id",
                element: (
                    <BuyerRoute>
                        <Payment></Payment>
                    </BuyerRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/bookings/${params.id}`
                    ),
            },
            {
                path: "/dashboard/addproduct",
                element: (
                    <SellerRoute>
                        <AddProduct></AddProduct>
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/myproducts",
                element: (
                    <SellerRoute>
                        <MyProducts></MyProducts>
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/allsellers",
                
                element: (
                    <AdminRoute>
                        <AllSellers></AllSellers>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/allbuyers",
                element: (
                    <AdminRoute>
                        <AllBuyers></AllBuyers>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/reports",
                element: (
                    <AdminRoute>
                        <Reports></Reports>
                    </AdminRoute>
                ),
            },

        ],
    },
]);

export default router;