import Link from "next/link";
import React from "react";

function TodaysWod() {
  return (
    <Link
      href="#today"
      className="flex flex-col items-center text-white text-sm md:text-xl font-semibold absolute-bottom-center"
    >
      <div>TODAY&apos;S WOD</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}

export default TodaysWod;
