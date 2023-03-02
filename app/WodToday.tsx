import Image from "next/image";
import React from "react";
import Star from "./components/heroIcons/Star";

function WodToday() {
  return (
    <section className="h-full relative">
      <div className="h-full bg-prPage bg-cover bg-center">
        <div className="w-[90%] md:w-[65%] max-w-2xl mx-auto pt-10 flex flex-col gap-1  border border-red-500">
          <h1 className="text-white text-xl md:text-3xl font-bold mb-3 flex items-center justify-center">
            <span className="mr-2">Personal Records</span> <Star />
          </h1>
          <Image src="/whiteboard.png" alt="" width={700} height={400} />
        </div>
      </div>
    </section>
  );
}

export default WodToday;
