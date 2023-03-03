"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddIcon from "../components/heroIcons/AddIcon";
import Cancel from "../components/heroIcons/Cancel";
import Check from "../components/heroIcons/Check";

function CreatePr() {
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await fetch("/api/prs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, weight }),
    });

    const data = await result.json();

    console.log(data);

    setName("");
    setWeight("");
    setIsAdding(false);

    router.refresh();
  };

  const handleCancel = () => {
    setName("");
    setWeight("");
    setIsAdding(false);
  };

  let buttonDisabled;
  if (!name || !weight) {
    buttonDisabled = true;
  } else {
    buttonDisabled = false;
  }

  return (
    <div className="bg-transparent border border-gray-300 p-2 rounded-lg flex items-center w-full mx-auto text-white min-w-[324px]">
      <div onClick={() => setIsAdding((prev) => !prev)} className="cursor-pointer">
        <AddIcon />
      </div>
      {isAdding ? (
        <form onSubmit={handleSubmit} className="flex">
          <input
            className="border border-gray-300 rounded outline-none px-2 ml-2 text-black max-w-[120px] sm:max-w-none"
            placeholder="PR Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded outline-none px-2 ml-2 text-black max-w-[75px] sm:max-w-none w-[120px]"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <div className="flex items-center space-x-1 ml-3">
            <button
              type="submit"
              disabled={buttonDisabled}
              className={!buttonDisabled ? "cursor-pointer" : "cursor-not-allowed"}
            >
              <Check />
            </button>
            <button type="button" onClick={handleCancel}>
              <Cancel />
            </button>
          </div>
        </form>
      ) : (
        <h1 className="font-bold ml-1 text-xl">Enter a PR</h1>
      )}
    </div>
  );
}

export default CreatePr;
