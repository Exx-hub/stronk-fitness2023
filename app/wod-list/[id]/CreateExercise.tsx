"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddIcon from "../../components/heroIcons/AddIcon";
import Cancel from "../../components/heroIcons/Cancel";
import Check from "../../components/heroIcons/Check";

function CreateExercise({ wodId }: { wodId: string | undefined }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [weight, setWeight] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await fetch("/api/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, reps, sets, weight, wodId }),
    });

    const data = await result.json();

    console.log(data);
    setName("");
    setReps("");
    setSets("");
    setWeight("");
    setIsEditing(false);
    router.refresh();
  };

  return (
    <div className="bg-transparent text-white border border-gray-300 p-2 rounded-lg flex items-center w-full mx-auto mt-1">
      {isEditing ? (
        <form className="flex w-full" onSubmit={handleSubmit}>
          <div className="text-black">
            <input
              className="border border-gray-300 rounded outline-none px-2 ml-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Exercise Name"
            />
            <div className="flex mt-2">
              <input
                className="border border-gray-300 rounded outline-none px-2 ml-1 w-16"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="Reps"
              />
              <input
                className="border border-gray-300 rounded outline-none px-2 ml-1 w-16"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                placeholder="Sets"
              />
              <input
                className="border border-gray-300 rounded outline-none px-2 ml-1 w-[6.2rem]"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight"
              />
            </div>
          </div>
          <div className="flex items-center ml-auto space-x-1 md:space-x-2">
            <button>
              <Check />
            </button>
            <button type="button" onClick={() => setIsEditing(false)}>
              <Cancel />
            </button>
          </div>
        </form>
      ) : (
        <>
          <div onClick={() => setIsEditing((prev) => !prev)} className="cursor-pointer">
            <AddIcon />
          </div>
          <h1 className="font-bold ml-1 text-xl">add exercise</h1>
        </>
      )}
    </div>
  );
}

export default CreateExercise;
