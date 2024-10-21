import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SpinnerLoader from "../components/Spinner/SpinnerLoader";



const MainLayouts = () => {
    const navigation =useNavigation();
    return (
        <div className="">
            <div className="md:h-20 ">
            <Navbar></Navbar>
            </div>
           <div className="md:min-h-[calc(100vh-123px)] w-full">
                  {
                    navigation.state === 'loading' ?<SpinnerLoader></SpinnerLoader>:
                    <Outlet></Outlet>
                  }
            </div> 
           
           <div className="h-10">
           <Footer></Footer>
           </div>
         
        </div>
    );
};

export default MainLayouts;