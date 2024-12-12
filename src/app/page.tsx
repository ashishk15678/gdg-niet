import { BsLightningFill } from "react-icons/bs";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: "800", style: "normal" });
export default function App() {
  return (
    <>
      <div className="w-[100dvh] h-[100dvh] flex items-center justify-center">
        <p className="text-xl">
          Please have patience , still building
          <br />
          Till then visit -{" "}
          <Link href="https://ashish.services">ashish.services</Link>
        </p>
        <p>Else have a chat with builders</p>
        <p>
          <Link href={"https://instagram.com/s.dwiz"}>Dwiz Vrat Sharma</Link>
        </p>
        <p>
          <Link href={"https://instagram.com/ashishkumar15678"}>
            Ashish Kumar
          </Link>
        </p>
        <p>
          <Link href={"https://instagram.com/vikrant_maurya14"}>
            Vikrant Maurya
          </Link>
        </p>
        <p>
          <Link href={"https://github.com/pragati-30"}>Pragati</Link>
        </p>
      </div>

      <div>Raise issues at help.gdg@ashish.services</div>
    </>
  );
}
