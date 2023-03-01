"use client";

import { Exercise } from "@prisma/client";
import React, { useRef } from "react";

interface ExerciseProps {
  exercise: Exercise;
  withBox?: boolean;
}

function ExerciseItem({ exercise, withBox }: ExerciseProps) {
  const checkboxref = useRef<HTMLInputElement>(null);

  return (
    <li
      className={`flex space-x-2 text-lg bg-white rounded px-2 ${withBox && "py-3 cursor-pointer"}`}
    >
      {withBox && <input type="checkbox" defaultChecked={exercise.completed} ref={checkboxref} />}
      <h2 className="font-semibold">{exercise.name}</h2>
      <p>
        || {exercise.sets}x{exercise.reps} || {exercise.weight}
      </p>
    </li>
  );
}

export default ExerciseItem;
