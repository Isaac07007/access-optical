import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import NavHeader from "./components/NavHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavHeader/>
      <Image 
        src={"/dior.jpg"} 
        alt="Display of Dior brand frames"
        width={1067}
        height={800}
        loading="eager"
      />
    </div>
  );
}
