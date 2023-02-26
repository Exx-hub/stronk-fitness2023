"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const session = useSession();
  console.log(session);

  const navLinks =
    session && session.status === "authenticated" ? (
      <>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/create">CREATE</Link>
        </li>
        <li>
          <Link href="/history">WOD HX</Link>
        </li>
        <li>
          <Link href="/wod-list">WOD LIST</Link>
        </li>
        <li>
          <Link href="/random-picker">RANDOM</Link>
        </li>
        <li>
          <button onClick={() => signOut()}>SIGNOUT</button>
        </li>
      </>
    ) : (
      <>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/wod-list">WOD LIST</Link>
        </li>
        <li>
          <Link href="/random-picker">RANDOM</Link>
        </li>
        <li>
          <Link href="/signup">SIGNUP</Link>
        </li>
        <li>
          <Link href="/signin">SIGNIN</Link>
          {/* <button onClick={() => signIn()}>Signin</button> */}
        </li>
      </>
    );

  return (
    <header className="border-b">
      <nav className="flex justify-between items-center  px-2 md:px-10 py-3 md:py-5">
        <Link href="/" className="flex items-center">
          <Image src="/stronklogo.png" alt="" height={50} width={50} className="md:w-full" />
          <h1 className="text-lg sm:text-2xl md:text-4xl ml-1 md:ml-2">STRONK</h1>
        </Link>
        <ul className="hidden md:flex font-semibold space-x-3">{navLinks}</ul>
      </nav>
    </header>
  );
}

export default Navbar;
