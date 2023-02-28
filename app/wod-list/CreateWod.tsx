"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddIcon from "../components/heroIcons/AddIcon";
import Cancel from "../components/heroIcons/Cancel";
import Check from "../components/heroIcons/Check";

function CreateWod() {
  const [isEditing, setIsEditing] = useState(false);
  const [wodName, setWodName] = useState("");

  const router = useRouter();

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await fetch("/api/wods/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: wodName }),
    });

    const data = await result.json();

    console.log(data);

    setIsEditing(false);
    router.refresh();
  };

  return (
    <div className="bg-white border border-gray-300 p-2 rounded-lg flex items-center w-full min-w-[260px] md:w-[65%] xl:w-[45%] mx-auto hover:text-slate-600 cursor-pointer">
      <div onClick={() => setIsEditing((prev) => !prev)}>
        <AddIcon />
      </div>

      {isEditing ? (
        <form className="flex space-x-4" onSubmit={handleCreate}>
          <input
            className="border border-gray-300 rounded outline-none px-2 ml-2"
            value={wodName}
            onChange={(e) => setWodName(e.target.value)}
          />
          <button>
            <Check />
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            <Cancel />
          </button>
        </form>
      ) : (
        <h1 className="font-bold ml-1">Create WOD</h1>
      )}
    </div>
  );
}

export default CreateWod;
