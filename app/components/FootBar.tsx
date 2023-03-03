import Image from "next/image";
import Link from "next/link";
import React from "react";

function FootBar() {
  return (
    <footer className="bg-[#333]">
      <div className="flex justify-between items-center  px-2 md:px-10 py-3 md:py-5">
        <Link href="/" className="flex items-center">
          <Image src="/stronklogo.png" alt="" height={50} width={50} className="md:w-full h-auto" />
          <h1 className="text-lg sm:text-2xl md:text-4xl ml-1 md:ml-2">STRONK</h1>
        </Link>
      </div>

      {/* socials */}
      {/* backtoTop */}
    </footer>
  );
}

export default FootBar;
