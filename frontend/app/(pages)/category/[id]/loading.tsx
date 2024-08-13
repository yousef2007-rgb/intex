import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[70vh] animate-pulse flex items-center justify-center">
      <div className="text-center">
        {/* Product Rows (Placeholder) */}
        <div className="h-6 my-8 max-w-[300px] mx-auto bg-gray-300"></div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 !w-[90vw]">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md">
              {/* Product Image (Placeholder) */}
              <div className="bg-gray-400 h-32 mb-2"></div>
              {/* Product Title (Placeholder) */}
              <div className="h-6 bg-gray-300"></div>
              {/* Product Price (Placeholder) */}
              <div className="h-4 bg-gray-300 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
