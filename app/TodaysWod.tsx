import Link from "next/link";
import React from "react";
import DownOutlined from "./components/heroIcons/DownOutlined";

function TodaysWod() {
  return (
    <Link
      href="#today"
      className="flex flex-col items-center text-white text-sm md:text-xl font-semibold absolute-bottom-center"
    >
      <div>TODAY&apos;S WOD</div>
      <DownOutlined />
    </Link>
  );
}

export default TodaysWod;
