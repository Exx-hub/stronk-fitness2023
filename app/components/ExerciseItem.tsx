"use client";

import { Exercise } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import Edit from "./heroIcons/Edit";
import Trash from "./heroIcons/Trash";

interface ExerciseProps {
  exercise: Exercise;
  withBox?: boolean;
}

function ExerciseItem({ exercise, withBox }: ExerciseProps) {
  const checkboxref = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleEdit = () => {};

  const handleDelete = async () => {
    const result = await fetch(`/api/exercises/${exercise.id}`, {
      method: "DELETE",
    });

    const data = await result.json();

    console.log(data);

    router.refresh();
  };

  return (
    <li
      className={`flex items-center justify-between space-x-2 text-xl bg-white rounded px-2 
      ${withBox && "py-3 cursor-pointer min-w-[344px]"}`}
    >
      <div className="flex items-center">
        {/* {withBox && <input type="checkbox" defaultChecked={exercise.completed} ref={checkboxref} />} */}
        <h2 className="font-semibold mx-1">{exercise.name}</h2>
        <p>
          || {exercise.sets}x{exercise.reps} || {exercise.weight}
        </p>
      </div>

      {withBox && (
        <div className="flex item-center space-x-1" onClick={handleEdit}>
          <button className="cursor-pointer">
            <Edit />
          </button>

          <button className="cursor-pointer" onClick={handleDelete}>
            <Trash />
          </button>
        </div>
      )}
    </li>
  );
}

export default ExerciseItem;
