import { getRandomWod } from "@/lib/prismaHelpers";
import Image from "next/image";

import FootBar from "./components/FootBar";
import DownOutlined from "./components/heroIcons/DownOutlined";
import GetStarted from "./GetStarted";
import TodaysWod from "./TodaysWod";

export default async function Home() {
  const { user, randomWod } = await getRandomWod();

  console.log({ user, randomWod });

  return (
    <section className="h-full relative bg-black">
      <div className="h-full bg-home bg-cover bg-center bg-no-repeat">
        <div className="pt-20 ml-10 w-[100px] md:pt-16 md:w-1/2 md:ml-0 xl:pt-28 flex flex-col items-center">
          <Image
            src="/whitelogo.png"
            alt="white version of logo"
            width={200}
            height={200}
            className="h-auto w-auto"
          />
          <GetStarted />
        </div>

        <a
          href="#today"
          className="flex flex-col items-center text-white text-sm md:text-xl font-semibold absolute-bottom-center z-50"
        >
          <div>TODAY&apos;S WOD</div>
          <DownOutlined />
        </a>
      </div>

      <TodaysWod createdBy={user} name={randomWod.name} exercises={randomWod.exercises} />
      <FootBar />
    </section>
  );
}
