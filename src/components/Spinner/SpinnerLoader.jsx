import { useDebugValue } from "react";
import { Audio } from "react-loader-spinner";

const SpinnerLoader = () => {
  return (
    <div className="flex items-center justify-center h-96">
        <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
    </div>
  );
};

export default SpinnerLoader;
