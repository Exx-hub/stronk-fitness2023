"use client";

import { Exercise } from "@prisma/client";
import Link from "next/link";
import React, { useState } from "react";
import ArrowDown from "../components/heroIcons/ArrowDown";
import ArrowUp from "../components/heroIcons/ArrowUp";
import ExerciseItem from "../components/ExerciseItem";
import OpenFile from "../components/heroIcons/OpenFile";
import Trash from "../components/heroIcons/Trash";
import Edit from "../components/heroIcons/Edit";
import { useRouter } from "next/navigation";

interface WodProps {
  id: string;
  name: string;
  exercises: Exercise[];
}

function Wod({ id, name, exercises }: WodProps) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    const result = await fetch(`/api/wods/${id}`, {
      method: "DELETE",
    });

    const data = await result.json();

    console.log(data);

    router.refresh();
  };

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

          <div className="flex items-center justify-between">
            <Link href={`/wod-list/${id}`}>
              <OpenFile />
            </Link>
            <div className="flex item-center space-x-1">
              <button className="cursor-pointer">
                <Edit />
              </button>

              <button className="cursor-pointer" onClick={handleDelete}>
                <Trash />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Wod;
