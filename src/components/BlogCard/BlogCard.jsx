import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    console.log(blog);
    const {title,social_image,description,readable_publish_date}=blog;
    return (
        <Link
            to='/'
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={social_image}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title.slice(0,40)}...
              </h3>
              <span className="text-xs dark:text-gray-600">
               {readable_publish_date}
              </span>
              <p>
                {description.slice(0,60)}...
              </p>
            </div>
          </Link>
    );
};

export default BlogCard;