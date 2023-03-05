import Link from "next/link";
import React from "react";

function Protected() {
  return (
    <h1 className="text-lg md:text-2xl text-center translate-y-32">
      Access Denied. Please{" "}
      <Link href="/signin" className="underline font-semibold">
        sign in.
      </Link>
    </h1>
  );
}

export default Protected;
