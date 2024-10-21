
import { filter } from './../../node_modules/stylis/src/Utility';
import toast  from 'react-hot-toast';
// gets items
export const getBlogs=()=>{
    let blogs=[];
    const storedBlog=localStorage.getItem('blogs')
    if(storedBlog){
      blogs=JSON.parse(storedBlog)
    }
    return blogs;
}
// save items...
export const saveBlogs=blog=>{
    let blogs=getBlogs();
    const isExist=blogs.find(b=> b.id === blog.id)
    if(isExist){
      return  toast.error('Already Bookmarked')
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast.success('Bookmark Successfully')
}

// delete items

export const removeBlog=id=>{
    let blogs= getBlogs();
    const remaining = blogs.filter(b=> b.id !== id)
    localStorage.setItem('blogs',JSON.stringify(remaining))
    toast.success('Delete Successfully')
}