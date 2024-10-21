import { Link, useNavigate } from "react-router-dom";


const NoBookmarkFound = () => {
    const navigate=useNavigate();
    const handleGoToBookmark=()=>{
        navigate(-1);
    }
    return (
        <div className="flex items-center justify-center h-96 text-center">
           <div>
           <h1 className="text-4xl font-semibold mb-5">No Bookmark Found</h1>
            <button
              onClick={handleGoToBookmark}
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white">
                Home
              </span>
            </button>
           </div>
        </div>
    );
};

export default NoBookmarkFound;