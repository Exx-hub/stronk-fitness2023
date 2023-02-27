"use client";

import { Exercise } from "@prisma/client";
import React, { useRef } from "react";

interface ExerciseProps {
  exercise: Exercise;
}

function ExerciseComponent({ exercise }: ExerciseProps) {
  const checkboxref = useRef<HTMLInputElement>(null);
  //   console.log(checkboxref.current?.checked);

  return (
    <li className="flex space-x-2">
      <input type="checkbox" defaultChecked={exercise.completed} ref={checkboxref} />
      <h2 className="font-semibold">{exercise.name}</h2>
      <p>
        || {exercise.sets}x{exercise.reps} ||
      </p>
      <p>{exercise.weight}</p>
    </li>
  );
}

export default ExerciseComponent;
