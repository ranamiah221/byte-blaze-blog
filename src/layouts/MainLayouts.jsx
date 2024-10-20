import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayouts = () => {
    return (
        <div>
            <div className="h-20">
            <Navbar></Navbar>
            </div>
           <div className="min-h-[calc(100vh-123px)] w-full">
                  <Outlet></Outlet>
            </div> 
           
           <div className="h-10">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default MainLayouts;