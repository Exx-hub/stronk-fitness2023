"use client";

import { Exercise } from "@prisma/client";
import React, { useState } from "react";
import ExerciseComponent from "./Exercise";

interface WodProps {
  name: string | null;
  exercises: Exercise[];
}

function Wod({ name, exercises }: WodProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-300 p-2 rounded-lg flex flex-col w-full min-w-[260px] md:w-[65%] xl:w-[45%] mx-auto">
      <div className="flex justify-between">
        <h1 className="font-bold uppercase">{name}</h1>
        <div onClick={() => setOpen((prev) => !prev)}>
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          )}
        </div>
      </div>

      {open && (
        <>
          <ul className="mb-2">
            {exercises.map((e) => (
              <ExerciseComponent key={e.id} exercise={e} />
            ))}
          </ul>
          <button className="mt-auto bg-slate-900 text-white w-1/6 min-w-[100px] self-center rounded-sm py-1 font-semibold hover:bg-slate-700">
            Set WOD
          </button>
        </>
      )}
    </div>
  );
}

export default Wod;
