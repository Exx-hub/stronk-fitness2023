"use client";

import { Exercise } from "@prisma/client";
import Link from "next/link";
import React, { useState } from "react";
import ArrowDown from "../components/heroIcons/ArrowDown";
import ArrowUp from "../components/heroIcons/ArrowUp";
import ExerciseItem from "../components/ExerciseItem";

interface WodProps {
  id: string;
  name: string;
  exercises: Exercise[];
}

function Wod({ id, name, exercises }: WodProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-300 p-2 rounded-lg flex flex-col w-full mx-auto">
      <div className="flex justify-between">
        <Link
          href={`/wod-list/${id}`}
          className="font-bold uppercase hover:text-slate-600 px-2 text-xl"
        >
          {name}
        </Link>
        <div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer">
          {!open ? <ArrowDown /> : <ArrowUp />}
        </div>
      </div>

      {open && (
        <>
          {exercises.length ? (
            <ul className="mb-3">
              {exercises.map((exercise) => (
                <ExerciseItem key={exercise.id} exercise={exercise} />
              ))}
            </ul>
          ) : (
            <h2 className="mb-3 px-2">
              No exercises listed.{" "}
              <Link href={`/wod-list/${id}`} className="underline font-semibold">
                Add now!
              </Link>
            </h2>
          )}

          <Link href={`/wod-list/${id}`} className="ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Link>
        </>
      )}
    </div>
  );
}

export default Wod;
