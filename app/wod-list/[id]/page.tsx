"use client";

import React, { useCallback, useEffect, useState } from "react";
import ExerciseComponent from "./ExerciseComponent";
import CreateExercise from "./CreateExercise";
import { Exercise, Wod } from "@prisma/client";
import { useSession } from "next-auth/react";
import Protected from "@/app/components/Protected";

function WodPage({ params }: { params: { id: string } }) {
  const { data, status } = useSession();

  const [wod, setWod] = useState<any>(null);

  const fetchWods = useCallback(async () => {
    const result = await fetch(`/api/wods/${params?.id}`);
    const { data } = await result.json();

    setWod(data);
  }, [params?.id]);

  useEffect(() => {
    fetchWods();
  }, [fetchWods, params.id]);

  if (status === "loading") {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (status === "unauthenticated") {
    return <Protected />;
  }

  return (
    <section className="h-full relative">
      <div className="h-full bg-wodPage bg-cover bg-center">
        <div className="w-[90%] md:w-[65%] max-w-2xl mx-auto pt-10 flex flex-col gap-1">
          <h1 className="text-white text-xl md:text-3xl font-bold mb-3">{wod?.name}</h1>

          {wod?.exercises?.length ? (
            wod?.exercises.map((exercise: Exercise) => (
              <ExerciseComponent key={exercise.id} exercise={exercise} fetchWods={fetchWods} />
            ))
          ) : (
            <h2 className="text-white text-sm lg:text-lg">
              -- None listed. Add Exercises to this WOD. --
            </h2>
          )}

          <hr className="mt-1" />
          <CreateExercise wodId={wod?.id} fetchWods={fetchWods} />
        </div>
      </div>
    </section>
  );
}

export default WodPage;
