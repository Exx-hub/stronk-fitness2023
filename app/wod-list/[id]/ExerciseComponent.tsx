"use client";

import Cancel from "@/app/components/heroIcons/Cancel";
import Check from "@/app/components/heroIcons/Check";
import { Exercise } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import ExerciseLabel from "../../components/ExerciseLabel";
import Edit from "../../components/heroIcons/Edit";
import Trash from "../../components/heroIcons/Trash";

interface ExerciseProps {
  exercise: Exercise;
}

function ExerciseItem({ exercise }: ExerciseProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [editedName, setEditedName] = useState("");
  const [editedReps, setEditedReps] = useState(0);
  const [editedSets, setEditedSets] = useState(0);
  const [editedWeight, setEditedWeight] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name: editedName, reps: editedReps, sets: editedSets, weight: editedWeight });

    const result = await fetch(`/api/exercises/${exercise.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editedName,
        reps: editedReps,
        sets: editedSets,
        weight: editedWeight,
      }),
    });

    const data = await result.json();

    console.log(data);

    router.refresh();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditedName(exercise.name);
    setEditedReps(exercise.reps);
    setEditedSets(exercise.sets);
    setEditedWeight(exercise.weight);
    setIsEditing(true);
  };

  const handleDelete = async () => {
    const result = await fetch(`/api/exercises/${exercise.id}`, {
      method: "DELETE",
    });

    const data = await result.json();

    console.log(data);

    router.refresh();
  };

  return (
    <li className="flex items-center justify-between space-x-2  bg-white rounded px-2 py-3 cursor-pointer min-w-[344px]">
      {isEditing ? (
        <form className="flex w-full" onSubmit={handleSubmit}>
          <div className="text-black">
            <input
              className="border border-gray-300 rounded outline-none px-2 ml-1"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              placeholder="Exercise Name"
            />
            <div className="flex mt-2">
              <input
                className="border border-gray-300 rounded outline-none px-2 ml-1 w-16"
                value={editedReps}
                onChange={(e) => setEditedReps + e.target.value}
                placeholder="Reps"
              />
              <input
                className="border border-gray-300 rounded outline-none px-2 ml-1 w-16"
                value={editedSets}
                onChange={(e) => setEditedSets(+e.target.value)}
                placeholder="Sets"
              />
              <input
                className="border border-gray-300 rounded outline-none px-2 ml-1 w-[6.2rem]"
                value={editedWeight}
                onChange={(e) => setEditedWeight(e.target.value)}
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
          <ExerciseLabel exercise={exercise} textSize="xl" />

          <div className="flex item-center space-x-1" onClick={handleEdit}>
            <button className="cursor-pointer">
              <Edit />
            </button>

            <button className="cursor-pointer" onClick={handleDelete}>
              <Trash />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ExerciseItem;
