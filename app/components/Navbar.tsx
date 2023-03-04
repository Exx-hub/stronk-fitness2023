"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Burger from "./heroIcons/Burger";
import ArrowUp from "./heroIcons/ArrowUp";
import CloseMenu from "./heroIcons/CloseMenu";

function Navbar() {
  const [open, setOpen] = useState(false);

  const session = useSession();

  const pathName = usePathname();

  const conditionalNavLinks =
    session && session.status === "authenticated" ? (
      <>
        <li className={pathName === "/wod-list" ? "text-black" : "text-[#7f7f7f]"}>
          <Link href="/wod-list">WOD LIST</Link>
        </li>
        <li className={pathName === "/prs" ? "text-black" : "text-[#7f7f7f]"}>
          <Link href="/prs">PRS</Link>
        </li>
        <li className="text-[#7f7f7f]">
          <button onClick={() => signOut({ callbackUrl: "/" })}>SIGNOUT</button>
        </li>
      </>
    ) : (
      <>
        <li className={pathName === "/signup" ? "text-black" : "text-[#7f7f7f]"}>
          <Link href="/signup">SIGNUP</Link>
        </li>
        <li className={pathName === "/signout" ? "text-black" : "text-[#7f7f7f]"}>
          <button onClick={() => signIn()}>SIGNIN</button>
        </li>
      </>
    );

  return (
    <header className="bg-white border-b">
      <nav className="flex justify-between items-center  px-2 md:px-10 py-3 md:py-5">
        <Link href="/" className="flex items-center">
          <Image src="/stronklogo.png" alt="" height={50} width={50} className="md:w-auto h-auto" />
          <h1 className="text-lg sm:text-2xl md:text-4xl ml-1 md:ml-2">STRONK</h1>
        </Link>
        <ul className="hidden md:flex font-semibold space-x-3">
          <li className={pathName === "/" ? "text-black" : "text-[#7f7f7f]"}>
            <Link href="/">HOME</Link>
          </li>

          {conditionalNavLinks}
        </ul>

        <div className="md:hidden cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
          {open ? <CloseMenu /> : <Burger />}
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex justify-center items-center space-x-2">
          <li className={pathName === "/" ? "text-black" : "text-[#7f7f7f]"}>
            <Link href="/">HOME</Link>
          </li>

          {conditionalNavLinks}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
