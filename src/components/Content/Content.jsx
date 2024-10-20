import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import Markdown from 'react-markdown';

const Content = () => {
    const blog=useLoaderData();
    const {tags,title,social_image,description,readable_publish_date, body_html}=blog;
    console.log(blog )
  return (
    <div
      
      className="w-full mx-auto group  hover:no-underline focus:no-underline dark:bg-gray-50
             border-2 p-4 border-gray-300 "
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-60 dark:bg-gray-500"
        src={social_image}
      />

     <div className="flex flex-wrap text-xl py-6 gap-2 border-t border-dashed dark:border-gray-600">
            {
                tags.map((tag, idx)=><a key={idx}
                    className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
                  >
                    # {tag}
                  </a>)
            }
             
            
        </div>

      <div className="space-y-6 my-6">
        <h3 className="text-4xl font-semibold group-hover:underline group-focus:underline">
          {title}...
        </h3>
        <p className="text-xl dark:text-gray-600">{readable_publish_date}</p>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
