import { useNavigate } from "react-router-dom";

const NoFound = () => {
    const navigate = useNavigate();
    const goHome = () => navigate("/");

    return (
        <div className="w-full flex flex-col justify-center items-center h-[480px] text-center">
            <div className="flex items-center">
                <p className="text-4xl text-center font-medium text-black mr-5 pr-5 border-r-2 py-2 border-gray-200">
                    404
                </p>
                <span className="text-base font-regular">Not Found</span>
            </div>
            <button
                className="text-lg font-thin flex justify-center items-center mt-4 gap-2 py-2 px-6 rounded-2xl bg-gray-900 
                    border border-transparent text-white hover:bg-white hover:text-gray-900 transition hover:border-gray-900 group"
                onClick={goHome}
            >
                Back to Home
            </button>
        </div>
    );
};

export default NoFound;
