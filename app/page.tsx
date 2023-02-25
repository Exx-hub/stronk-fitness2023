import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return <h1 className={`text-red-300`}>HELLO</h1>;
}
