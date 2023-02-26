import Image from "next/image";
import GetStarted from "./components/GetStarted";
import TodaysWod from "./components/TodaysWod";

export default function Home() {
  return (
    <section className="h-full bg-black relative">
      <div className="h-full bg-deadlift-man bg-contain bg-center bg-no-repeat">
        <div className="pt-20 ml-10 w-[100px] md:pt-28 md:w-1/2 md:ml-0 flex flex-col items-center">
          <Image src="/whitelogo.png" alt="white version of logo" width={200} height={200} />
          <GetStarted />
        </div>

        <TodaysWod />
      </div>
    </section>
  );
}
