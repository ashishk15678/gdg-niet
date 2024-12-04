import { BsLightningFill } from "react-icons/bs";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "800", style: "normal" });
export default function App() {
  return (
    <>
      <div className="w-full h-full">
        <div className="p-8 absolute z-99">
          <BsLightningFill size={25} className="animate-bolt" />
        </div>
        <div className="w-[100dvh] h-[100dvh] p-0 md:p-12">
          <div className="border-b-4 border-r-4 border-violet-500 shadow-md shadow-violet-500 p-4 rounded-xl">
            <p className={"text-4xl font-sans  text-violet-800 font-extrabold"}>
              Meet the team
            </p>
          </div>
          <div className="w-full h-full grid place-items-center max-w-screen">
            <div>
              <div className=""></div>
              <div className="w-[400px] h-[100px] bg-violet-700 rounded-2xl shadow-2xl shadow-violet-500  "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
