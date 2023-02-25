import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="h-full bg-black">
      <div className="h-full bg-deadlift-man bg-center bg-contain bg-no-repeat">
        {/* <h1 className={`text-red-300`}>HELLO</h1> */}
      </div>
    </section>
  );
}
