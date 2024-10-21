import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({blog,deletable, handleDelete}) => {
    const {id,title,social_image,description,readable_publish_date}=blog;
    return (
       <div className='flex relative'>
        <Link
            to={`/blogs/${id}`}
            className="w-full mx-auto group transition hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-50
             border-4 p-4 border-cyan-500 hover:border-secondary"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded  dark:bg-gray-500"
              src={social_image}
            />
            <div className="space-y-6 my-6">

              <h3 className="text-4xl font-semibold group-hover:underline group-focus:underline">
                {title}...
              </h3>
              <p className="text-xl dark:text-gray-600">
               {readable_publish_date}
              </p>
              <p className='text-xl font-normal'>
                {description.slice(0,100)}...
              </p>
            </div>
            
        </Link>
           {
              deletable && <div onClick={()=>handleDelete(id)} className='absolute p-3 -top-5 -right-5 hover:text-primary hover:bg-secondary hover:scale-105 
              text-2xl text-secondary bg-primary rounded-full'><MdDeleteForever /></div>
           }
       </div>
    );
};

export default BlogCard;