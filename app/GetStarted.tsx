import Link from "next/link";
import React from "react";

function GetStarted() {
  return (
    <Link
      href="/wod-list"
      className="text-xs md:text-lg bg-white rounded-sm py-1 px-2 font-semibold mt-3 hover:bg-slate-300"
    >
      Get Started
    </Link>
  );
}

export default GetStarted;
