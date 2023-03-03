import React from "react";
import { getUserWods } from "@/lib/prismaHelpers";
import CreateWod from "./CreateWod";
import Wod from "./Wod";

async function WodList() {
  const wods = await getUserWods();

  // console.log("wods", wods);

  return (
    <section className="h-full">
      <div className="h-full bg-wodList bg-cover bg-center">
        <div className="w-[90%] md:w-[65%] max-w-2xl mx-auto pt-10 flex flex-col gap-1">
          {wods?.length ? (
            wods?.map((wod) => <Wod {...wod} key={wod.id} />)
          ) : (
            <h2 className="text-white text-sm lg:text-lg text-center">
              -- Start Today. Add a Workout. --
            </h2>
          )}
          <hr className="my-1" />
          <CreateWod />
        </div>
      </div>
    </section>
  );
}

export default WodList;
