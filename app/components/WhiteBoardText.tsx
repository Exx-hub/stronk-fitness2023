"use client";

import React, { useState } from "react";

function WhiteBoardText({ name }: { name: string }) {
  const [done, setDone] = useState(false);
  return (
    <li
      className={`${done ? "line-through" : ""} cursor-pointer`}
      onClick={() => setDone((prev) => !prev)}
    >
      - {name}
    </li>
  );
}

export default WhiteBoardText;
