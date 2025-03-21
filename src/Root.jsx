import Footer from "./components/Navbar/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;