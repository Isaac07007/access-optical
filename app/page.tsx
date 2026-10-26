import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Image from "next/image";
import EyeInsights from "./components/EyeInsightsWrapper";

export default function Home() {
  return (
    <main>
      <Logo/>
      <Navigation/>
      <div className="contentWrapper" style={{width: "960px", margin: "auto"}}>
        <Image 
          src={"/dior.jpg"} 
          alt="Display of Dior brand frames"
          width={1067}
          height={800}
          loading="eager"
          style={{
            justifySelf: "center",
            marginBottom: 10
          }}
        />
        <hr/>
        <div className="whiteSpacer" style={{height: 30}}/>
        <p className="storeHours" style={{color: "#ae40a5", fontSize: "x-large", textAlign: "center"}}>
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
        <div className="whiteSpacer" style={{height: 30}}/>
        <hr/>
        <EyeInsights/>
      </div>
    </main>
  );
}
