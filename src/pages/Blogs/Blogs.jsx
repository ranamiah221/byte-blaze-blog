import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blogs = () => {
  const [isShow, setIsShow]=useState(false)
  console.log(isShow);
  const blogs=useLoaderData();
  console.log(blogs)
    
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={blogs[0].cover_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-6 lg:col-span-5">
            <h3 className="text-4xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {blogs[0].title}....
            </h3>
            <p className="text-xl dark:text-gray-600">
              {new Date(blogs[0].published_timestamp).toLocaleDateString()}
            </p>
            <p className="text-2xl font-normal">
              {blogs[0].description.slice(0,200)}....
            </p>
          </div>
        </a>

        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            isShow ? 
            blogs.slice(1,9).map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
            :
            blogs.slice(1,4).map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
          }
        </div>

        <div className="flex justify-center">
        <button 
              onClick={()=>setIsShow(!isShow)}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white">
                {
                  isShow ? 'Show Less': 'Show More'
                }
              </span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
