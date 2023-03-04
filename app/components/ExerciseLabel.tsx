import { Exercise } from "@prisma/client";
import React from "react";

interface Props {
  exercise: Exercise;
  textSize: "lg" | "xl" | "2xl";
}

function ExerciseLabel({ exercise, textSize }: Props) {
  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center text-${textSize}`}>
      <h2 className="font-semibold mx-1">{exercise.name}</h2>
      <p>
        || {exercise.sets}x{exercise.reps} || {exercise.weight}
      </p>
    </div>
  );
}

export default ExerciseLabel;
