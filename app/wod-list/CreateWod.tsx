"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddIcon from "../components/heroIcons/AddIcon";
import Cancel from "../components/heroIcons/Cancel";
import Check from "../components/heroIcons/Check";
import WodAddEditForm from "../components/WodAddEditForm";

function CreateWod() {
  const [isAdding, setIsAdding] = useState(false);
  const [wodName, setWodName] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await fetch("/api/wods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: wodName }),
    });

    const data = await result.json();

    console.log(data);

    setWodName("");
    setIsAdding(false);
    router.refresh();
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <div className="bg-transparent border border-gray-300 p-2 rounded-lg flex items-center w-full mx-auto text-white">
      <div onClick={() => setIsAdding((prev) => !prev)} className="cursor-pointer">
        <AddIcon />
      </div>
      {isAdding ? (
        <WodAddEditForm
          handleSubmit={handleSubmit}
          value={wodName}
          onChange={setWodName}
          onCancel={handleCancel}
        />
      ) : (
        <h1 className="font-bold ml-1 text-xl">Create WOD</h1>
      )}
    </div>
  );
}

export default CreateWod;
