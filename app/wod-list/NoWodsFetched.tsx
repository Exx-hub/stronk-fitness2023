import Link from "next/link";
import React from "react";

function NoWodsFetched() {
  return (
    <div className="text-center pt-20 text-white font-bold text-xl">
      <h2 className="mb-2">No Wods saved.</h2>
      <Link href="/create" className="underline">
        Create one
      </Link>{" "}
      or{" "}
      <Link href="/signin" className="underline">
        Login now!
      </Link>
    </div>
  );
}

export default NoWodsFetched;
