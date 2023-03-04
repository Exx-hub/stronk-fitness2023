"use client";

import React from "react";
import { Permanent_Marker } from "@next/font/google";
import { Exercise, Wod } from "@prisma/client";
import WhiteBoardText from "./components/WhiteBoardText";

const permanent = Permanent_Marker({ subsets: ["latin"], weight: "400" });

interface Props {
  createdBy: string | undefined;
  name: string;
  exercises: Exercise[];
}

function TodaysWod({ createdBy, name, exercises }: Props) {
  return (
    <section id="today" className="h-full">
      <div className="h-full bg-todaysWod bg-cover bg-center">
        <div className="w-[95%] max-w-2xl mx-auto">
          <div
            className={`${permanent.className} bg-whiteBoard  bg-contain  bg-no-repeat h-[400px] w-full min-w-[340px] py-7 px-8 md:px-14  translate-y-32 md:bg-center  md:translate-y-56 overflow-hidden`}
          >
            <h1 className="text-black text-2xl">{name}</h1>
            <p> by: {createdBy}</p>
            <ul>
              {exercises.length ? (
                exercises.map((exercise) => (
                  <WhiteBoardText key={exercise.id} name={exercise.name} />
                ))
              ) : (
                <h2>
                  Wod Creator has not updated this WOD yet. Please re-login to get a new WOD :)
                </h2>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodaysWod;
