import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "../Others/Loading/Loading";
import { AuthContext } from "../Pages/Context/AuthProvider";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/NavBar";
import useAdmin from "../Pages/Hooks/UseAdmin";


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [userInfo, isAdminLoading] = useAdmin(user?.email);
    if (isAdminLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">
                        
                        {userInfo[0].role === "admin" &&  (
                            <>
                                <li className="bg-green-600 text-white">
                                    <Link to="/dashboard/allsellers">All Travel Agents</Link>
                                </li>
                                <li className="bg-gray-300 my-8">
                                    <Link to="/dashboard/allbuyers">All Tourists</Link>
                                </li>
                                <li className="bg-green-600 text-white">
                                    <Link to="/dashboard/reports">Reported Places</Link>
                                </li>
                            </>
                        )}
                        {userInfo[0].role === "buyer" && (
                            <>
                                <li>
                                    <Link className="bg-green-600 text-white" to="/dashboard/orders">My Orders</Link>
                                </li>
                            </>
                        )}
                        {userInfo[0].role === "seller" && (
                            <>
                                <li>
                                    <Link className="bg-green-600 text-white" to="/dashboard/addproduct">Add a Place</Link>
                                </li>
                                <li>
                                    <Link className="bg-gray-300 my-8" to="/dashboard/myproducts">My Place</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;