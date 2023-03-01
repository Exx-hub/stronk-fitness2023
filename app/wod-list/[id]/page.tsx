import ExerciseItem from "@/app/components/ExerciseItem";
import { getWodById, getWods } from "@/lib/prismaHelpers";
import React from "react";
import CreateExercise from "./CreateExercise";

export async function generateStaticParams() {
  const wods = await getWods();

  return wods.map((wod) => {
    return {
      id: wod.id,
    };
  });
}

async function WodPage({ params }: { params: { id: string } }) {
  const wod = await getWodById(params.id);

  return (
    <section className="h-full relative">
      <div className="h-full bg-wodPage bg-cover bg-center">
        <div className="w-[90%] md:w-[65%] max-w-2xl mx-auto pt-10 flex flex-col gap-1">
          <h1 className="text-white text-xl md:text-3xl font-bold mb-3">{wod?.name}</h1>

          {wod?.exercises.length ? (
            wod?.exercises.map((exercise) => (
              <ExerciseItem key={exercise.id} exercise={exercise} withBox />
            ))
          ) : (
            <h2 className="text-white text-sm lg:text-lg">
              -- None listed. Add Exercises to this WOD. --
            </h2>
          )}

          <hr className="mt-1" />
          <CreateExercise wodId={wod?.id} />
        </div>
      </div>
    </section>
  );
}

export default WodPage;
