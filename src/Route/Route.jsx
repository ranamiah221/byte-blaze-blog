
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
                element:<Blogs></Blogs>,
                loader:()=>fetch('https://dev.to/api/articles?per_page=10&?top=5')

            },
            {
                path:'/bookmarks',
                element:<BookMarks></BookMarks>
            }
        ]
    }
])
    
export default Route;