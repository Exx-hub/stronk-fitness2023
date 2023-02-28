import React from "react";
import { getUserWods } from "@/lib/prismaHelpers";
import CreateWod from "./CreateWod";
import Wod from "./Wod";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function WodList() {
  const wods = await getUserWods();

  // console.log("wods", wods);

  return (
    <section className="h-full relative">
      <div className="h-full bg-wodList bg-cover bg-center">
        <div className="w-[90%] container mx-auto pt-10 flex flex-col gap-1">
          <CreateWod />
          {wods && wods.map((wod) => <Wod {...wod} key={wod.id} />)}
        </div>
      </div>
    </section>
  );
}

export default WodList;
