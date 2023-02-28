import Image from "next/image";
import GetStarted from "./GetStarted";
import TodaysWod from "./TodaysWod";

export default function Home() {
  return (
    <section className="h-full relative bg-black">
      <div className="h-full bg-home bg-cover bg-center bg-no-repeat">
        <div className="pt-20 ml-10 w-[100px] md:pt-16 md:w-1/2 md:ml-0 xl:pt-28 flex flex-col items-center">
          <Image src="/whitelogo.png" alt="white version of logo" width={200} height={200} />
          <GetStarted />
        </div>

        <TodaysWod />
      </div>
    </section>
  );
}
