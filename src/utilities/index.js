
import { filter } from './../../node_modules/stylis/src/Utility';
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
      return  alert('already bookmarked')
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    alert ('bookmark successfully')
}

// delete items

export const removeBlog=id=>{
    let blogs= getBlogs();
    const remaining = blogs.filter(b=> b.id !== id)
    localStorage.setItem('blogs',JSON.stringify(remaining))
    alert('remove successfully')
}