import { getWodByUser } from "@/lib/prismaHelpers";
import React from "react";
import EmptyWod from "./EmptyWod";
import NoWodsFetched from "./NoWodsFetched";
import Wod from "./Wod";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function WodList() {
  const wods = await getWodByUser();

  console.log("wods", wods);

  return (
    <section className="h-full relative">
      <div className="h-full bg-deadlift2 bg-cover bg-center">
        <div className="w-[90%] container mx-auto pt-10 flex flex-col gap-1">
          {wods &&
            wods.map((wod) => <Wod name={wod.name} exercises={wod.exercises} key={wod.id} />)}
          <EmptyWod />
        </div>
      </div>
    </section>
  );
}

export default WodList;

// pt-20 ml-10 w-[100px] md:pt-28 md:w-1/2 md:ml-0 flex flex-col items-center
