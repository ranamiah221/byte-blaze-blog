
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import BookMarks from "../pages/BookMarks/BookMarks";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/bookmarks',
                element:<BookMarks></BookMarks>
            }
        ]
    }
])
    
export default Route;