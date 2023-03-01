import { Exercise } from "@prisma/client";
import React from "react";

interface Props {
  exercise: Exercise;
  checkBox?: boolean;
  textSize: "lg" | "xl" | "2xl";
}

function ExerciseLabel({ exercise, checkBox, textSize }: Props) {
  return (
    <div className={`flex items-center text-${textSize}`}>
      {/* {withBox && <input type="checkbox" defaultChecked={exercise.completed} ref={checkboxref} />} */}
      <h2 className="font-semibold mx-1">{exercise.name}</h2>
      <p>
        || {exercise.sets}x{exercise.reps} || {exercise.weight}
      </p>
    </div>
  );
}

export default ExerciseLabel;
