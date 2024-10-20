
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import BookMarks from "../pages/BookMarks/BookMarks";
import Blog from "../components/Blog/Blog";
import Content from "../components/Content/Content";
import Author from "../components/Author/Author";


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
            },
            {
                path:'/blogs/:id',
                element:<Blog></Blog>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
                children:[
                    {
                    index:true,
                    element:<Content></Content>,
                    loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
                   },
                   {
                    path:'author',
                    element:<Author></Author>
                   }

            ]
            }

        ]
    }
])
    
export default Route;