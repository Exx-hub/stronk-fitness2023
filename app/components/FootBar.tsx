import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socials from "./Socials";

function FootBar() {
  return (
    <footer className="bg-black grid grid-cols-3 px-4 py-5">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center ">
          <Image src="/stronkgrey.png" alt="" height={50} width={50} className="md:w-full h-auto" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Socials />

        <a href="#" className=" text-xs text-[#808080] hover:text-white underline">
          back to top
        </a>
      </div>
    </footer>
  );
}

export default FootBar;
