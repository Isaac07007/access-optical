import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Logo/>
      <Navigation/>
      <Image 
        src={"/dior.jpg"} 
        alt="Display of Dior brand frames"
        width={1067}
        height={800}
        loading="eager"
      />
      <hr/>
      <p id="store-hours">
        <strong>
          Office Hours<br/>
          Monday - Friday 10am - 6pm<br/>
          Saturdays 9:30am - 5pm<br/>
          <br/>
          Eye Examinations<br/>
          Monday - Saturday<br/>
          By appointment / walk-ins when available<br/>
        </strong>
      </p>
    </div>
  );
}
