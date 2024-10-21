import React, { useEffect, useState } from 'react';
import { getBlogs, removeBlog } from '../../utilities';
import BlogCard from '../../components/BlogCard/BlogCard';
import NoBookmarkFound from '../../components/NoBookmarkFound/NoBookmarkFound';

const BookMarks = () => {
    const [bookmarks, setBookmarks]=useState([]);

    useEffect(()=>{
        const storedBookmark=getBlogs();
        setBookmarks(storedBookmark)
    },[])
    const handleDelete=(id)=>{
        removeBlog(id);
        const storedBookmark=getBlogs();
        setBookmarks(storedBookmark)
    
    }
    console.log(bookmarks);
    return (
        <>{
           bookmarks.length===0 ? <div><NoBookmarkFound></NoBookmarkFound></div>:
         <div className="px-8 my-10 grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            bookmarks?.map(blog=><BlogCard key={blog.id} blog={blog} deletable={true} handleDelete={handleDelete}></BlogCard>)
          }
        </div>
        }  
        </>
    );
};

export default BookMarks;