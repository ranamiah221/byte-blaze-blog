import { useNavigate, useRouteError } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

const ErrorPage = () => {
    const error=useRouteError();
    const navigate= useNavigate();
    const handleGoHome=()=>{
        navigate(-1);
    }
  return (
    <div className="flex justify-center items-center h-screen" id="error-page">
      <div className="text-center">
      <FaExclamationCircle className="w-10 h-10 bg-pink-200 text-secondary mx-auto text-base p-2 rounded-full" />
      <h1 className="text-2xl font-semibold my-3">Something Went Wrong!</h1>
      <p className="text-xl font-medium text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <p className="my-3">Here are some helpful links</p>
      <button onClick={handleGoHome} className="border rounded-md py-1 px-5 border-gray-200 hover:bg-slate-200"><IoIosArrowRoundBack className="inline-block items-center mr-3 text-2xl"/><span>Go Home</span></button>
      </div>
     
    </div>
  );
};

export default ErrorPage;
