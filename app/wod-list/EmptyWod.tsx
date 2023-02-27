import React from "react";

function EmptyWod() {
  return (
    <div className="bg-white border border-gray-300 p-2 rounded-lg flex items-center w-full min-w-[260px] md:w-[65%] xl:w-[45%] mx-auto">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h1 className="font-bold ml-1">Create WOD</h1>
    </div>
  );
}

export default EmptyWod;
