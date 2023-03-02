import { getPrsByUser } from "@/lib/prismaHelpers";

import React from "react";
import Star from "../components/heroIcons/Star";

import CreatePr from "./CreatePr";
import PrCard from "./prCard";

async function PrPage() {
  const prs = await getPrsByUser();

  return (
    <section className="h-full relative">
      <div className="h-full bg-prPage bg-cover bg-center">
        <div className="w-[90%] md:w-[65%] max-w-2xl mx-auto pt-10 flex flex-col gap-1">
          <h1 className="text-white text-xl md:text-3xl font-bold mb-3 flex items-center justify-center">
            <span className="mr-2">Personal Records</span> <Star />
          </h1>

          {prs.length ? (
            <div className="grid lg:grid-cols-2 gap-3">
              {prs.map((pr) => (
                <PrCard key={pr.id} {...pr} />
              ))}
            </div>
          ) : (
            <h2 className="text-white text-sm lg:text-lg text-center">
              -- None listed. Add your PRs here. --
            </h2>
          )}

          <hr className="my-1" />
          <CreatePr />
        </div>
      </div>
    </section>
  );
}

export default PrPage;
